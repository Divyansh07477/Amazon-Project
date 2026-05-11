const express = require("express");
const app = express();



let port =8080;

app.listen(port, () =>{
    console.log('app is listening on port ${ports}');

    
});

app.get("/",(req,res)=>{
    res.send("this is first page");
});

// app.get("/:username",(req,res)=>{
//     let htmlStr = '<h1> Welcome to the page of @${username}</h1>'
//     // console.log(req.params);
//     res.send(htmlStr);
// });


app.get("/search",(req,res)=>{

    let { q} = req.query;
    res.send('this result:${q}');
});







// app.use((req, res) =>{
//     // console.log(req);
//     console.log("request  received");
//     res.send({
//         name : "AD",
//         color:"red",
//     });
// });


