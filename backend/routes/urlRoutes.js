import express from "express";
import { urlShortController,getUrls } from "../controllers/urlController.js";

const router = express.Router();

router.get("/:domain/:alias",getUrls);
router.post("/create",urlShortController);

export default router;