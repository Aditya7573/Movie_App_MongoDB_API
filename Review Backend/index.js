import app from "./server.js" 
import ReviewsDAO from "./dao/reviewsDAO.js";  // ✅ correct
import { MongoClient } from "mongodb"


const uri = "mongodb+srv://Adi:7573@cluster0.arkkz8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {

        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`Listening on ${port}`)
        }) 
    })
 