var CURSO01 = (function () {
    var my = {};
    ///////    
    
    my.crearEnlaces=function(){
        //Enlaces Page Alumno
     $("body").append('<a id="idGoAlumno" href="#idAdministrador"  class="style-31"></a>');  
         /* listitem  #listaPrueba */
     $(document).on("click", "#idListaLetras", function(evt)
        {
            DEPU=evt;
            var idAlumno=$(evt.target).attr('idalumno');
            CURSO01.cargarDatos(idAlumno);
        }); 
    };
    
    ///////
    my.cargarCursoLetra=function(idAlumno){    
        var param={};       
        param.idAlumno=idAlumno;        
        $.ajax({
            type:"POST",  
            url:"http://192.168.56.1:9095/getCursoLetras",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){          
                var data=JSON.parse(data);            
                console.log(data.estado);       
                if(data.estado===1){   
                    $("#idListaLetras").empty();        
                    for(var i=0;i<data.data.length;i++){
                        
           $("#idListaLetras").append("<li><a href='#idLibLetReservar' idalumno = "+data.data[i].id+">"+data.data[i].curso+"</a></li>");                
                        
            // $("#idListaNumeros").append("<li ><a>"+data.data[i].curso+"</a></li>");
            //$("#listaUsuarios").append("<li><a href='#idPageConsultaAlum' idalumno= "+data.data[i].id+">"+data.data[i].alumno+"</a></li>");
                    } 
                }
                if(data.estado===0){
                    
                     navigator.notification.alert(
                        'ERROR AL CAPTURAR LISTA',
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
    
    };
    return my;
}());