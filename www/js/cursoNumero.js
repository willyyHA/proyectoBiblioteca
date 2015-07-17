
var CURSO = (function () {
    var my = {};
    ///////    
    
    my.crearEnlaces=function(){
        //Enlaces Page Alumno
     $("body").append('<a id="idGoAlumno" href="#idAdministrador"  class="style-31"></a>');  
         /* listitem  #listaPrueba */
     $(document).on("click", "#idListaNumeros", function(evt)
        {
            DEPU=evt;
            var idAlumno=$(evt.target).attr('idalumno');
            CURSO.cargarDatos(idAlumno);
        }); 
    };
    
    ///////
    my.cargarCursoNumero=function(idAlumno){    
        var param={};       
        param.idAlumno=idAlumno;        
        $.ajax({
            type:"POST",  
            url:"http://192.168.56.1:9095/getCursoNumeros",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){          
                var data=JSON.parse(data);            
                console.log(data.estado);       
                if(data.estado===1){   
                    $("#idListaNumeros").empty();        
                    for(var i=0;i<data.data.length;i++){
                        
           $("#idListaNumeros").append("<li><a href='#idLibNumReserva' idalumno = "+data.data[i].id+">"+data.data[i].curso+"</a></li>");                
                        
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