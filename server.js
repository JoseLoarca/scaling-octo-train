//Librerias
var express=require('express');
var path=require('path');

//Instanciar express
var app=express();

//Puerto
var puerto=3000;

//Definimos los recursos estaticos a trabajar en el proyecto
app.use(express.static(path.join(__dirname,'public')));

//Rutas
app.get('/', function(peticion, respuesta){
	respuesta.sendFile(__dirname+'/public/index.html');
});

//Iniciar puerto
app.listen(puerto, function(){
	console.log('El servidor ha sido iniciado');
});