const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nx8zq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    const userCollection = client.db("careernest").collection("user");

    app.get('/users', async(req, res)=>{
      const cursor =  userCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get('/users/:email', async(req, res)=>{
      const email = req.params.email 
      const query = {email: email}
      const result = await userCollection.findOne(query)
      res.send(result)
    })

    app.post("/users", async (req, res) => {
      const user = req.body;
      const email = user.email
      const query = {email: email} 
      const existinguser = await userCollection.findOne(query)
      if(existinguser){
        return res.send({message: "User already exists", insertedId: null})
      }
      const result = await userCollection.insertOne(user)
      res.send(result)
    });
    

    app.get("/users/admin/:email", async(req, res)=>{
      const email = req.params.email  
      const query = {email: email}
      const user = await userCollection.findOne(query)
      console.log(user)
      let isAdmin = false 
      if(user){
        isAdmin = user?.role === "admin"
      }
      res.send({isAdmin})
    })

    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Routes
app.get("/", (req, res) => {
  res.send("CareerNest server is running!");
});

app.listen(port, () => {
  console.log(`CareerNest Server is running on port ${port}`);
});
