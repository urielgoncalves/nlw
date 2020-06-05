import { Request, Response} from 'express';
import knex from '../database/connection'

class PointsController{
    async show(request: Request, response: Response) {
        //const id = request.params.id;
        const { id } = request.params;

        const point = await knex('points').where('id',id).first();

        if (!point){
            return response.status(400).json({message: 'Point not found.'})
        }

        return response.json(point);
    }

    async create(request:Request,response:Response){
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
        const point = {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            image:'image-fake'
        };

        const insertedIds = await trx('points').insert(point);
        const pointId = insertedIds[0];
        const pointItems = items.map((itemId: number)=>{
            return{
                itemId,
                pointId:pointId
            };
        });
    
        await trx('point_items').insert(pointItems);
    
        return response.json({
            id: pointId,
            ...point
        });
}}

export default PointsController;