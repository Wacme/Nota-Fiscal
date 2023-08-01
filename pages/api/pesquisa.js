import clientPromise from "../../lib/mongodb"


export default async function handler(req, res) {

    var response  = {}
    try{
        var termo = req.body.termo.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().split(" ")
        console.log(termo)
        const client = await clientPromise;
        const db = client.db("Tiny");
        let result =  await db.collection("Notas").find({tags:{$all:termo}}).toArray()
        console.log(result)
        response['status'] = 'ok'
        response['result'] = result


    }catch(e){

        response['status'] = 'error'

    }

    
    res.json(response)
}
