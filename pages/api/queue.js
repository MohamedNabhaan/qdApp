import dbConnect from '../../lib/dbConnect'
import Queue from '../../models/queue'



export default async function handler(req, res) {
   console.log("connecting to Mongo")
   await dbConnect();
   console.log("connected to Mongo")
   const {ticketNumbers}= req.body;


   const filter ={no : 1};
   console.log("editing")
   const queue = await Queue.updateOne(filter,req.body);
   console.log("edited")


   res.json({queue});

 }