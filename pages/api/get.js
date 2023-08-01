import clientPromise from "../../lib/mongodb"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {

    var response =  {}
    try{
        const _id = req.query.id
        console.log(_id)
        const client = await clientPromise;
        const db = client.db("Tiny");
        let result =  await db.collection("Notas").findOne({"_id":ObjectId(_id)})
        response['result'] = result
        response['status'] = 'ok'


    }catch(e){
        console.log(e)
        response['status'] = 'error'

    }


    
    res.json(response)
}
