import express, { Request, Response } from "express";

const app = express();

const port: number = 5200;

app.listen(port, () => console.log(`server running on port ${port}...`));
