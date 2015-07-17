
(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     $("body").append('<a id="idGoAlumno" href="#idPageAlumnos" class="style-31"></a>');     
     $("body").append('<a id="idGoAdministrador" href="#IdPageDatosAdmi"  class="style-31"></a>');    
     $("body").append('<a id="idListarUsuario" href="#idPageAdministrador"  class="style-31"></a>');
     //1$("body").append('<a id="idGoAdministrador" href="#idPageAdministrador"  class="style-31"></a>');
     $("body").append('<a id="idGoAlumno_LibNumero" href="#idPageLibroNumeros"  class="style-31"></a>');    
     $("body").append('<a id="idGoAlumno_LibLetras" href="#idPageLibroLetras"  class="style-31"></a>');
     $("body").append('<a id="idGoAlumno_LibSocial" href="#idPageLibroSocia"  class="style-31"></a>');
     
     
     //ALUMNO.crearEnlaces();
     //HOLASSASASAS
     
    $(document).on("click", "#idLogin", function(evt)
    {
        //console.log("TODO OK");
        var user=$("#idUsuario").val();
        var password=$("#idContrasenia").val();
        var tipo=$("#idSelectTipo").val();
        
        var param={};
        var a="";
        
        param.user=user;
        param.password=password;
        param.tipo=tipo;
           
        $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9095/getLogin",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){   
                var data=JSON.parse(data);              
                console.log(data.estado);         
                if(data.estado===1){                   
                    
                    if(tipo=="ALUMNO"){
                        
                            $("#idGoAlumno").click();
                        }
                        else if(tipo=="ADMINISTRADOR"){
                            
                            $("#idGoAdministrador").click();
                            
                            ALUMNO.cargarAlumnos(); 
                        }                  
                            //("#idGoAdministrador").click();
                            //activate_page("#idPageAlumno"); 
                            //ALUMNO.cargarAlumnos();   
                }
                if(data.estado===0){                    
                     navigator.notification.alert(
                        'ACCESO DENEGADO',  
                         function(){},         
                        'Mensaje',         
                        'Aceptar'                 
                    );
                    
                }
            },
            error:function(data){
            
                console.log("ERROR:"+data);
            }
        });     
    });
     /* button  #idEscogerAlumno   */
     
    $(document).on("click", "#idSeleccionar", function(evt)
    {
        var opciones=$("#idGrupoLibros :checked")[0].id;
        
        if(opciones=="idRadNumeros")
        {        
            $("#idGoAlumno_LibNumero").click();
            CURSO.cargarCursoNumero();
        }
        else if(opciones=="idRadLetras"){
            $("#idGoAlumno_LibLetras").click();
            CURSO01.cargarCursoLetra();
        }
        
        else if(opciones=="idRadSocial"){
            $("#idGoAlumno_LibSocial").click();
            CURSO02.cargarCursoSocial();
        }
        
    });
    /*$(document).on("click", "#idLisCalculo", function(evt)
    {
        $("#idGoAlumno_Curso").click() }); */    
        /* button  #idConsultarNum */
    $(document).on("click", "#idConsultarNum", function(evt)
    {
        
        navigator.notification.alert(
                        'LIBRO DISPONOBLE',  
                         function(){},         
                        'Mensaje',         
                        'Aceptar'                 
                    );  
    });
    
        /* button  #idReservarNum */
    $(document).on("click", "#idReservarNum", function(evt)
    {
         navigator.notification.alert(
                        'BEDE RECOGER EL LIBRO DENTRO DE 30 MINUTOS',  
                         function(){},         
                        'Mensaje',         
                        'Aceptar'                 
                    ); 
    });
    
        /* button  #idConsultaLet */
    $(document).on("click", "#idConsultaLet", function(evt)
    {
        navigator.notification.alert(
                        'LIBRO DISPONOBLE',  
                         function(){},         
                        'Mensaje',         
                        'Aceptar'                 
                    );
    });
    
        /* button  #idReservarLet */
    $(document).on("click", "#idReservarLet", function(evt)
    {
        navigator.notification.alert(
                        'BEDE RECOGER EL LIBRO DENTRO DE 30 MINUTOS',  
                         function(){},         
                        'Mensaje',         
                        'Aceptar'                 
                    );
    
    });
    
        /* button  #idSocConsultar */
    $(document).on("click", "#idSocConsultar", function(evt)
    {
         navigator.notification.alert(
                        'LIBRO DISPONOBLE',  
                         function(){},         
                        'Mensaje',         
                        'Aceptar'                 
                    );
    });
    
        /* button  #idSocReservar */
    $(document).on("click", "#idSocReservar", function(evt)
    {
        navigator.notification.alert(
                        'BEDE RECOGER EL LIBRO DENTRO DE 30 MINUTOS',  
                         function(){},         
                        'Mensaje',         
                        'Aceptar'                 
                    );
    });
        /* button  #idListarUser */
    $(document).on("click", "#idListarUser", function(evt)
    {  
         $("#idListarUsuario").click();
        ALUMNO.cargarAlumnos();        
    });
    
    } 
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
