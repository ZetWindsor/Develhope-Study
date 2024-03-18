import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3001;
app.use(morgan('dev'));
app.use(express.json());
let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];
app.get('/', (req, res) => {
    res.status(200).json({ planets });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
