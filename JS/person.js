function Person(nombre, apellido, edad, sexo, intereses) {
    this.nombre = {nombre, apellido};
    this.edad = edad;
    this.sexo = sexo;
    this.intereses = intereses;
};

Person.prototype.bio = function() {
    var string = '';
    var pronoun;

    if (this.sexo === 'Hombre') {
        pronoun = 'A el le gusta ';
    } else if (this.sexo === 'Mujer') {
        pronoun = 'A ella le gusta ';
    }

    string += pronoun;

    if (this.intereses.length === 1) {
        string += this.intereses[0] + '.';
    } else if (this.intereses.length === 2) {
        string += this.intereses[0] + ' y ' + this.intereses[1] + '.';
    } else {

        for (var i = 0; i < this.intereses.length; i++) {
            if (i === this.intereses.length - 1) {
                string += 'y ' + this.intereses[i] + '.';
            } else {
                string += this.intereses[i] + ', ';
            }
        }
    }

    return(string);
};

Person.prototype.greeting = function() {
    alert('Hola! yo soy ' + this.nombre.nombre + '.');
};
