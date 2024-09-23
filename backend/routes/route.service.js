import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data/heroDetails.json", "utf8"));

// *list all heroes helper
export const getHeroList = (req, res) => {
    // send response
    return res.status(200).send({ message: "The Hero list is ...", data });
};

// *hero detail by name helper
export const getHeroByName = (req, res) => {
    // extract hero name from req.params
    const heroName = req.params.name;

    // find hero using the name
    const heroDetails = data.find((item) => item.name === heroName);

    if (!heroDetails) {
        return res.status(404).send({ message: "Hero name doesnt exist" });
    }

    // send response
    return res
        .status(200)
        .send({ message: `${heroName} Details ...`, heroDetails });
};

// *hero list by lane
export const getHeroByLane = (req, res) => {
    // extract hero name from req.params
    const heroLane = req.params.lane;

    // find hero using the name
    const heroDetails = data.filter((item) => item.lane === heroLane);

    if (!heroDetails) {
        return res.status(404).send({ message: "Lane doesnt exist" });
    }

    // send response
    return res
        .status(200)
        .send({ message: `${heroLane} lane heroes details ...`, heroDetails });
};

// *hero list by role
export const getHeroByRole = (req, res) => {
    // extract hero name from req.params
    const heroRole = req.params.role;

    // find hero using the name
    const heroDetails = data.filter((item) => item.role === heroRole);

    if (!heroDetails) {
        return res.status(404).send({ message: "Role doesnt exist" });
    }

    // send response
    return res
        .status(200)
        .send({ message: `${heroRole} heroes details ...`, heroDetails });
};
