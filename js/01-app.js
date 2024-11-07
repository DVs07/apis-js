const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(
        resultado => {console.log('El resultado es: ', resultado);
    })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Notificacion desde JS.', {
            icon: 'img/ccj.png',
            body: 'Esto es una notificacion'
        });

        notificacion.onclick = () => {
            window.open('https://www.github.com/DVs07');
        }
    }
})