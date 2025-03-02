import { Router } from "express";
import { getHello, getTest } from "../controllers/ExampleController";

const router = Router();

router.get("/", getHello);
router.get("/test", getTest);

export default router;
