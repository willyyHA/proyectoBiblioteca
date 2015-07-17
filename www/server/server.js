var IPADDRESS="192.168.56.1";
var PORT=9095;
var express = require('express');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token');
   
    next();
}

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);

var server = app.listen(PORT,IPADDRESS);
console.log('Escuchando en '+IPADDRESS+':'+PORT);

app.post('/getLogin', function(req, res){	

    var datos=req.param('data');
    datos=JSON.parse(datos);
    //console.log(data);	
    if(datos.user!=="joel" || datos.password!=="joel"){

		var msn={};
		msn.estado=0;
		msn.data=null;	
		msn.mensaje="NO AUTENTICADO";
    }
    else{

		var user={}
    	user.id=1;
    	user.usuario='joel';
    	user.nombres='joel';
    	user.apellidos='moreno mayhuire';
    	user.ciclo='II';

		var msn={};
		msn.estado=1;
		msn.data=user;	
		msn.mensaje=null;
	
   }				
	        
   res.json(msn);
	
});

app.post('/getUsuarios', function(req, res){	

    var datos=req.param('data');
	datos=JSON.parse(datos);    	

	//console.log(data);
	var ciclo=null;	
	
	if(datos.ciclo=="II" && datos.id===1 && datos.usuario=="joel"){
	  ciclo="II";
	}
	else {

	  	var msn={};
		msn.estado=0;	
		msn.data=null;	
		msn.mensaje="NO HAY INFORMACION EN LA BASE DE DATOS";
		res.json(msn);
		return;
	}	
	

	var alumnos=[];

	for(var i=1;i<10;i++){
		var alumno={}
    	alumno.id=i+1;
    	alumno.alumno='ALUMNO '+i;
		alumno.ciclo=ciclo;
		alumnos[i-1]=alumno;
	}

	var msn={};
	msn.estado=1;	
	msn.data=alumnos;	
	msn.mensaje=null;
	
	res.json(msn);
	
});
app.post('/getCursoNumeros', function(req, res){	

    var datos=req.param('data');
	datos=JSON.parse(datos);
	
     //console.log(data);

	var idAlumno=datos.idAlumno;
	
	var cursos=[];
	var ciclo="II";
	
	for(var i=1;i<10;i++){
		var curso={}
    	curso.id=i;
    	curso.curso='MATEMATICA '+i;
		curso.ciclo=ciclo;
		cursos[i-1]=curso;
	}

	var msn={};
	msn.estado=1;	
	msn.data=cursos;	
	msn.mensaje=null;
	
	res.json(msn);
	
});
//
app.post('/getCursoLetras', function(req, res){	

    var datos=req.param('data');
	datos=JSON.parse(datos);
	
     //console.log(data);

	var idAlumno=datos.idAlumno;
	
	var cursos=[];
	var ciclo="II";
	
	for(var i=1;i<10;i++){
		var curso={}
    	curso.id=i;
    	curso.curso='BASE DE DATOS '+i;
		curso.ciclo=ciclo;
		cursos[i-1]=curso;
	}

	var msn={};
	msn.estado=1;	
	msn.data=cursos;	
	msn.mensaje=null;
	
	res.json(msn);
	});
//
//
app.post('/getCursoSociales', function(req, res){	

    var datos=req.param('data');
	datos=JSON.parse(datos);
	
     //console.log(data);

	var idAlumno=datos.idAlumno;
	
	var cursos=[];
	var ciclo="II";
	
	for(var i=1;i<10;i++){
		var curso={}
    	curso.id=i;
    	curso.curso='ETICA '+i;
		curso.ciclo=ciclo;
		cursos[i-1]=curso;
	}

	var msn={};
	msn.estado=1;	
	msn.data=cursos;	
	msn.mensaje=null;
	
	res.json(msn);
	});
//
