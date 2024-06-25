import express from 'express';
import cors from "cors";
import eieirouter from './router/eieiRouter.js';
import { listBucket } from './controllers/listController.js';

const PORT = 7000;
const app = express();

app.use(cors(), express.urlencoded({ extended: false }))

app.use("/eiei", eieirouter)

app.listen(PORT,async () => {
    console.log("eiei");
})