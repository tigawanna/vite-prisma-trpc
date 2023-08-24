import { prisma } from '@/index';
import { Router } from 'express';

export const profileRoutes = Router();

profileRoutes.get('/', async(req, res) => {
    try {
        const user  = await prisma.userProfile.findMany();
        res.json(user).status(200);
        
    } catch (error:any) {
        console.log("error getting profiles  == ",error)
        res.json(error.message).status(400);
        
    }
});

profileRoutes.post('/', async(req, res) => {
    console.log("req.body == ",req.body) 
    try {
        const user = await prisma.userProfile.create({
            data:req.body
        });
        res.json(user).status(200);  
    } catch (error:any) {
    res.json(error.message).status(400);
    }

})

profileRoutes.put('/:id', async(req, res) => {
    try {
        const user  = await prisma.userProfile.update({
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

profileRoutes.get('/:id', async(req, res) => {
    try {
        const user  = await prisma.userProfile.findUnique({
            where: {
                id: req.params.id
            }
        });
        res.json(user).status(200);
        
    } catch (error) {
        res.json(error).status(400);
    }
})
