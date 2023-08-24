import { Router } from 'express';

export const indexRoute = Router();

indexRoute.get('/', (req, res) => {
    res.send("What's up doc ?!");
});
