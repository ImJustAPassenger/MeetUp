import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://yourcredential@cluster0.2acy3aq.mongodb.net/meetsup?retryWrites=true&w=majority&appName=Cluster0`
    );
    const db = client.db();
    const meetsupCollection = db.collection("meetsup");
    const result = await meetsupCollection.insertOne(data);
    console.log(result)
    res.status(201).json({message:'Meetup inserted'})
    
}
}
