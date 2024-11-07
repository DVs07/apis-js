document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Gracias por volver.');
    }else{
        console.log('No te vayas te voy a extrañar.');
    }
});