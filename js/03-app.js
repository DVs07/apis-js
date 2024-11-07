window.addEventListener('online', conexionInternet);
window.addEventListener('offline', conexionInternet);

function conexionInternet(){
    if(navigator.onLine){
        console.log('Estas conectaado a internet.');
    }else{
        console.log('Parece que alguien tiro del cable de internet.');
        
    }
}