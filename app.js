var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var cities=["Eskisehir","Ankara","Istanbul","Izmir"];

app.get("/",function(req,res){
    res.render("home");
});

app.get("/cities",function(req,res){
    res.render("cities",{cities:cities});
});

app.post("/addCity",function(req,res){
    var newCity=req.body.newCity;
    cities.push(newCity);

    res.redirect("/cities");
})

var server=app.listen(3000,function(){
    console.log("Server Port : %d",server.address().port);
});