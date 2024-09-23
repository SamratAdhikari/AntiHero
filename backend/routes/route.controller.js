import express from "express";
import {
    getHeroList,
    getHeroByName,
    getHeroByLane,
    getHeroByRole,
} from "./route.service.js";

const router = express.Router();

// *GET: list all heros
router.get("/list", getHeroList);

// *GET: get hero by name
router.get("/hero/:name", getHeroByName);

// *GET: get hero by lane
router.get("/lane/:lane", getHeroByLane);

// *GET: get hero by role
router.get("/role/:role", getHeroByRole);

export default router;
