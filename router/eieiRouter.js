import express from "express";
import { listObject, listBucket, inspectObject } from "../controllers/listController.js";

const router = express.Router()

router.get("/",async (req, res) => {
    res.status(200).json(await listBucket())
}).get("/:bucket", (req, res) => {
    const bucket = req.params.bucket.toString()
    res.status(200).json(listObject(bucket))
}).get("/:bucket/:object", (req, res) => {
    res.status(200).json(inspectObject(req.params.bucket, req.params.object))
})

export default router;