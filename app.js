var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/public/"));
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'))
});
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'404.html'))

})

var port = 8000;
app.listen(port,() =>{
    console.log("8000 Portu çalışıyor");
})