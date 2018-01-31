function CreatePerson (nombre, apellido, edad, sexo, intereses) {
    var intereses = intereses.split("\n")
    var persona = new Person(nombre, apellido, edad, sexo, intereses);
    return persona;
}


function CreateBio (persona) {

    var html = `
    <article class="bio-section">
        <p><strong>Nombre:</strong> <span id="nombre"></span></p>
        <p><strong>Edad:</strong> <span id="edad"></span></p>
        <p><strong>Sexo:</strong> <span id="sexo"></span></p>
        <p><strong>Intereses:</strong> <span id="intereses"></span></p>
    </article><br>
    `

    $(html).appendTo("#bio-display");
    var intereses = persona.bio()
    $('span#nombre').last().html(persona.nombre.nombre + " " + persona.nombre.apellido);
    $('span#nombre').last().click(function () {persona.greeting()})
    $('span#edad').last().html(persona.edad);
    $('span#sexo').last().html(persona.sexo);
    $('span#intereses').last().html(intereses);
}

function main () {
    $('#submit').click( function () {
        var nombre = $('#guest-first-name').val();
        var apellido = $('#guest-last-name').val();
        var edad = $('#guest-age').val();
        var sexo = $('#guest-gender').val()
        var intereses = $('#guest-interests').val();
        if (nombre && apellido && edad && intereses) {
            var persona = CreatePerson(nombre, apellido, edad, sexo, intereses);
            CreateBio(persona);
            $('#guest-form')[0].reset();
        } else {
            alert("Favor de llenar los campos!");
        }
    });
}
