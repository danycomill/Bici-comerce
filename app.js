
let databici = require('./objetos');

let appBicis = {
    bicis: databici,

    // Crear una funcion que cuando llames por id, te aparezca la bici correspondiente.

    buscarPorId: function(id){
        let buscar = this.bicis.filter(function(bici){
            return bici.id == id;
        });

        return buscar || null;
    },

    // Se crea la siguiente funcion para filtrar bicis por el precio que se quiera.

    filtrarPorPrecio: function(precioMaximo){
        let bicisFiltradas = this.bicis.filter(function(bici){
            return bici.precio <= precioMaximo;
        });

        return bicisFiltradas;
    },

    // Se crea una funcion para filtrar bicis segun su color.

    filtrarColor: function(color){
        let buscar = this.bicis.filter(function(bici){
            return bici.color == color;
        });
        
        return buscar || null;

    },

    // Se crea una funcion para filtrar las bicis con un año de fabricacion menor al que se le diga.

    filtrarPorAnioMenor: function(anioMaximo){
        let bicisFiltradas = this.bicis.filter(function(bici){
            return bici.anio <= anioMaximo;
        });

        return bicisFiltradas;
    },

    // Se crea una funcion para filtrar las bicis con un año de fabricacion mayor al que se le pase

    filtrarPorAnioMañor: function(anioMinimo){
        let bicisFiltradas = this.bicis.filter(function(bici){
            return bici.anio >= anioMinimo;
        });

        return bicisFiltradas;
    },



};

console.log(appBicis.filtrarPorAnioMañor(2020));

