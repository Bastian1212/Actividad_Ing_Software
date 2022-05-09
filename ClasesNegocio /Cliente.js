var Reservacion = require('./Reservacion');


class Cliente{

    constructor(IdUsuario,Datosbancarios,Direccion,Telefono, ){

        
        this.IdUsuario = IdUsuario;
        this.Datosbancarios = Datosbancarios;
        this.Direccion = Direccion;
        this.Telefono = Telefono; 
        this.Reservacion = new Reservacion;



    }

    getIdUsuario(){

        return this.idUsuario;
    }

    Reservacion(telefonica, online, presencial ){

        console.log(telefonica);


    }




}


module.exports = Cliente;