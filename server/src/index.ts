import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'
import { indexRoute } from './routes';
import { profileRoutes } from './routes/profile/profile';


dotenv.config();

const app: Express = express();
const port = process.env.PORT||4400;

export const prisma = new PrismaClient()

// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server');
// });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',indexRoute)
app.use('/profile',profileRoutes)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
