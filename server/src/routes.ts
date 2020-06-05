import express from 'express';
import knex from './database/connection';
const routes = express.Router();

routes.get('/items', async (request, response)=>{
    const items = await knex('items').select('*');
    const serializedItems = items.map(item=>{
        return {
            id: item.id,
            name: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        } 
    });

    response.json(serializedItems);
});

routes.post('/points', async(request,response)=>{
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;
    
    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        image:'image-fake'
    });

    const pointId = insertedIds[0];

    const pointItems = items.map((itemId: number)=>{
        return{
            itemId,
            pointId:pointId
        };
    });

    await trx('point_items').insert(pointItems);

    return response.json({success:true});
});

export default routes;