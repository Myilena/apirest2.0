import { Router } from "express";

const home = Router();
//RUTAS CREADAS
home.get("/",(req ,res)=>{
    res.render("home",{"title":"Principal"});
});
home.get("/servicio",(req ,res)=>{
    res.render("SERVICIO",{"title":"Servisio"});
});
home.get("/contacto",(req ,res)=>{
    res.render("CONTACTO",{"title":"Contacto"});
});
home.get("/blog",(req ,res)=>{
    res.render("BLOG",{"title":"Blog"});
});
home.get("/galeria",(req ,res)=>{
    res.render("GALERIA",{"title":"Galeria"});
});
home.get("/login",(req ,res)=>{
    res.render("LOGIN",{"title":"Login"});
});

export default home;