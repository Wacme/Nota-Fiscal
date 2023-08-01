import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://mktwacme:7fmKjvIpoIQLGbRx@cluster0.2ckbror.mongodb.net/?retryWrites=true&w=majority"//process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise



client = new MongoClient(uri, options)
clientPromise = client.connect()


export default clientPromise