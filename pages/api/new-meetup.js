import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_URI  );
    const db = client.db();
    const meetsupCollection = db.collection("meetsup");
    const result = await meetsupCollection.insertOne(data);
    client.close()
    console.log(result);
    res.status(201).json({ message: "Meetup inserted" });
  }
}
