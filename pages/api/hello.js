import clientPromise from "../../lib/mongodb"


export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("Tiny");
    let myPost =  await db.collection("Notas").find({}).toArray()
    console.log(myPost)
    
    res.send(myPost)
}
