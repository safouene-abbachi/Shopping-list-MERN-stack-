const express =require("express")
const mongoose =require("mongoose")
const bodyParser =require("body-parser")

const items = require('./routes/api/item')
const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//DB COnfig
const db = require ("./config/keys").mongoURI;

//Connect to mongo db
mongoose.connect(db,{ useUnifiedTopology: true,useNewUrlParser: true
})
.then(()=> console.log("mongo db connected..."))
.catch(err => console.log(err))

// Use ROUTES 
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`Server started on port ${port}`))