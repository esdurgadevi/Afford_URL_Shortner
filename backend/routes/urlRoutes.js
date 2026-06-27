import express from "express";

import { createTinyUrl } from "../controllers/urlController.js"

const router = express.Router();

router.post("/create",createTinyUrl);

export default router;