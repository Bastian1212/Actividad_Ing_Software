const Cliente = require("../ClasesNegocio/Cliente");

class ClienteBuilder{

    constructor(IdUsuario){
        this.IdUsuario = IdUsuario;
        return this;
    }

    makeDatosbancarios(Datosbancarios){

        this.Datosbancarios = Datosbancarios;
        return this;
    }

    makeDireccion(Direccion){
        this.Direccion = Direccion;
        return this;
    }

    makeTelefono(Telefono){
        this.Telefono = Telefono;
        return this;
    
    }

    makeReservacion(ModeloDeauto, Marca, Color , Matricula, Disponibilidad){
        this.Reservacion = new Reservacion(ModeloDeauto, Marca, Color, Matricula, Disponibilidad);
        return this;

    }



    build(){
        let c =  new Cliente(this);
        console.log(c.getIdUsuario());
        return c; 

    }

    



}



module.exports = ClienteBuilder;