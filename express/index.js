const express = require("express");
const app = express();



let port =8080;

app.listen(port, () =>{
    console.log('app is listening on port ${ports}');
});
app.use((req, res) =>{
    // console.log(req);
    console.log("request  received");
    res.send({
        name : "AD",
        color:"red",
    });
});
