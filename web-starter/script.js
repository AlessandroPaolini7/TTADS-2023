// console.log('Hola Mundo');
window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        const phone = document.querySelector('#phone').value;
        if (name !== '' && email !== '' && message !== '' && phone !== '') {
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

// En la sección donde obtenemos un usuario desde una api externa:
//  - En el caso de darse un error (por ej por desconexión de internet),
// manejar el error y mostrar un mensaje al usuario: "No se ha podido recuperar el usuario. Por favor inténtelo más tarde."
//  - En el caso de que la request se ejecute correctamente, además de mostrar el nombre del usuario, agregar una etiqueta img y mostrar la imagen del usuario obtenido como respuesta de la api

function getUser() {
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const userData = response.results[0].name;
            document.querySelector('#user-name').innerHTML = `${userData.title}. ${userData.first} ${userData.last}`;
        })
        .catch((error) => {
            document.querySelector('#error-fetch').classList.add('show-error');
        });
}