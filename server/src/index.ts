import express, { Express} from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'
import { indexRoute } from './routes';
import { profileRoutes } from './routes/profile/profile';
import { createContext, router } from './trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT||4400;


export const prisma = new PrismaClient()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',indexRoute)
app.use('/profile',profileRoutes)

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
