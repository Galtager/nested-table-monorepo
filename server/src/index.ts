import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getReservations } from './logic';

// config
require('dotenv').config()
const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(cors())


// api
app.get("/get", (req: Request, res: Response) => {

    const reservations = getReservations();
    res.send(reservations);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


