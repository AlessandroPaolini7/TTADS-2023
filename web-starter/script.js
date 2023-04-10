console.log('Hola Mundo');
//  En la sección Contacto: 
//  - Cuando se cargan correctamente todos los datos, mostrar el mensaje: ***"Mensaje enviado correctamente!"*** en color verde.
//  - Agregar un campo para que el usuario pueda ingresar un teléfono de contacto. Si el mensaje se envía correctamente, mostrar el teléfono junto con el resto de los datos.
window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        const phone = document.querySelector('#phone').value;
        if (name !== '' && email !== '' && message !== '') {
            // ok
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-message').innerHTML = message;
            document.querySelector('#user-phone').innerHTML = phone;
            document.querySelector('#success').classList.add('show-success');
        } else {
            // error
            document.querySelector('#error').classList.add('show-error');
        }
    });

    document.querySelector('#get-user')?.addEventListener('click', getUser);
});

function getUser() {
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const userData = response.results[0].name;
            document.querySelector('#user-name').innerHTML = `${userData.title}. ${userData.first} ${userData.last}`;
        })
        .catch((error) => console.log('aja', error));
}