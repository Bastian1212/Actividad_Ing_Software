
var Pago = require('./Pago');

class Reservacion {

    constructor(ModeloDeauto, Marca,Color,Matricula,Disponibilidad){

        this.ModeloDeauto = ModeloDeauto;
        this.Marca = Marca;
        this.Color = Color;
        this.Matricula = Matricula;
        this.Disponibilidad = Disponibilidad;
        this.Pago = Pago;

        




    }

    Alquiler(horas, Cliente){

        return null;

    }

}


module.exports = Reservacion;