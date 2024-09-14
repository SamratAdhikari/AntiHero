import scrapy

class HeroCrawlerItem(scrapy.Item):
    # These are the top-level fields for the hero
    name = scrapy.Field()
    image = scrapy.Field()
    role = scrapy.Field()
    lane = scrapy.Field()
    lore = scrapy.Field()
    counterItems = scrapy.Field()
    
    # Nested fields for strongAgainst and weakAgainst
    strongAgainst = scrapy.Field()
    weakAgainst = scrapy.Field()
