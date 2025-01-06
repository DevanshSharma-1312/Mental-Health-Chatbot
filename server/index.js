const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./router/auth_router')
const {connectDb} = require('./database/db');
const contact_router = require('./router/contact_route');
const PORT = 5000



const corsoption={
    origin: "http://localhost:3000",
    Credential:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200
}
app.use(cors(corsoption));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));



app.use("/api/auth",router);

app.use('/api/auth2',contact_router);
// **********old method now we are using route and controller
// app.get("/",(req,res)=>{
    //     res.status(200).send("hello from my first server");
    // })
    
    
    // app.get("/register",(req,res)=>{
        //     res.status(200).send("you are on register page");
        // })
        
        connectDb().then(()=>{

            
            app.listen(PORT , ()=>{
                console.log(`server is started ${PORT}`);
            })
        })

