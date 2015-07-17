
var ALUMNO = (function () {
    var my = {};
    
    my.crearEnlaces=function(){
        //Enlaces Page Alumno
     $("body").append('<a id="idGoAdministrador" href="#idPageAdministrador"  class="style-31"></a>');  
         /* listitem  #listaPrueba */
     $(document).on("click", "#listaUsuarios", function(evt)
        {
            DEPU=evt;
            var idAlumno=$(evt.target).attr('idalumno');
            CURSO.cargarDatos(idAlumno);
        });      
    };
    my.cargarAlumnos=function(){
        
        var param={};
        
        param.ciclo='II';
        param.id=1;
        param.usuario='joel';
        
        $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9095/getUsuarios",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
                var data=JSON.parse(data);         
                console.log(data.estado);
                if(data.estado===1){
                    
                $("#listaUsuarios").empty();
                    
                for(var i=0;i<data.data.length;i++){
                    
                $("#listaUsuarios").append("<li><a href='#idPageConsultaAlum' idalumno= "+data.data[i].id+">"+data.data[i].alumno+"</a>                                                                                                 </li>"); 
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