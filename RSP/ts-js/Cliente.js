var SP;
(function (SP) {
    var Cliente = /** @class */ (function () {
        function Cliente(id, nombre, apellido, edad, sexo) {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.sexo = sexo;
        }
        return Cliente;
    }());
    SP.Cliente = Cliente;
})(SP || (SP = {}));
