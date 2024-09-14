import scrapy
from ..items import HeroCrawlerItem

class HeroCrawler(scrapy.Spider):
    name = 'antihero'
    start_urls = ["https://mlcounter.com/heroes/"]

    def parse(self, response):
        hero_blocks = response.css("#content a")

        for block in hero_blocks:
            hero_image = block.css("img::attr(src)").get()

            hero_link = block.css("::attr(href)").get()

            yield response.follow(hero_link, callback=self.parse_characters, meta={
                'hero_image': hero_image
            })

    def parse_characters(self, response):
        items = HeroCrawlerItem()

        items['name'] = response.css('.wp-element-caption a::text').extract_first()
        items['image'] = response.meta.get('hero_image')

        # Scraping additional hero details from the hero detail page
        items['role'] = response.css(".wp-block-image+ .has-text-align-center::text").extract_first().split()[1]
        
        
        lane = response.css(".has-text-align-center:nth-child(6)::text").extract_first()
        if lane.split()[0] != 'Lane:':
            lane = response.css(".has-text-align-center:nth-child(7)::text").extract_first()
        items['lane'] = lane.split()[1]
        
        
        items['lore'] = "placeholder"
        items['counterItems'] = "placeholder"

        # Scraping strongAgainst section
        strongAgainstName = response.css(".wp-container-core-columns-is-layout-1 a::text").extract()
        strongAgainstImage = response.css(".wp-container-core-columns-is-layout-1 img::attr(src)").extract()
        items['strongAgainst'] = {
            'name': strongAgainstName,
            'image': strongAgainstImage
        }

        # Scraping weakAgainst section
        weakAgainstName = response.css(".wp-container-core-columns-is-layout-2 a::text").extract()
        weakAgainstImage = response.css(".wp-container-core-columns-is-layout-2 img::attr(src)").extract()
        items['weakAgainst'] = {
            'name': weakAgainstName,
            'image': weakAgainstImage
        }

        # Yield the items for this hero
        yield items
