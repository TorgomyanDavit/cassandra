import express from "express"
import session from "express-session"
import bcrypt from  "bcrypt"
import cassandra from "cassandra-driver"

const client = new cassandra.Client({
    contactPoints:["localhost"],
    localDataCenter:"datacenter1"
})

const query = "SELECT name, email FROM example.users WHERE age=:age"
client.execute(query,{age:30},{prepare:true})
.then((result) => console.log(JSON.stringify(result.rows)))




const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:process.env.SECRET,
    saveUninitialized:false,
    // cookie:{maxAge:6000},
    resave:false
}))

app.use(express.static("./client/build"))




app.listen(process.env.PORT,() => {
    console.log("this server woring in  : " + process.env.PORT)
})