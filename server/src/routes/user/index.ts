import { prisma } from '@/index';
import { Router } from 'express';

export const userRoutes = Router();

userRoutes.get('/', async(req, res) => {
    try {
        const user  = await prisma.user.findMany();
        res.json(user).status(200);
        
    } catch (error) {
        res.json(error).status(400);
        
    }
});

userRoutes.post('/', async(req, res) => {
    try {
        const user = await prisma.user.create({
            data:req.body
        });
        res.json(user).status(200);  
    } catch (error:any) {
    res.json(error.message).status(400);
    }

})

userRoutes.put('/:id', async(req, res) => {
    try {
        const user  = await prisma.user.update({
            where: {
                id: req.body.id
            },
            data: req.body
        });
        res.json(user).status(200);
        
    } catch (error) {
        res.json(error).status(400);
    }
})

userRoutes.get('/:id', async(req, res) => {
    try {
        const user  = await prisma.user.findUnique({
            where: {
                id: req.params.id
            }
        });
        res.json(user).status(200);
        
    } catch (error) {
        res.json(error).status(400);
    }
})
