const express=require('express');
const app = express();
const cors= require('cors');
const connect= require('./app/config/db');
const userRouter= require('./app/routes/user.routes');
const twitterRouter= require('./app/routes/twitter.route');

const PORT = 5001;
app.set("view engine", "ejs")
app.use(express.static("uploads"))

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    // res.status(200).json({message  : "Hello"});
    res.render("index", {title : "Jaswant"});
})

app.use("/users", userRouter);
app.use("/tweets", twitterRouter);

const start = async () => {
    await connect();
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}
module.exports = start;