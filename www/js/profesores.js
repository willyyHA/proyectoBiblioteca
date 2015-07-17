var PROFESOR = (function () {
    var my = {};
    ////////////
    var nom="";
    
    my.getNombre=function(){
        return nom;
    }
    my.setNombre=function(nombres){
        nom=nombres;
    }
    
    //////////
    return my;
}());    





//PROFESOR.getNombre();
//PROFESOR.setNombre("jumanor");