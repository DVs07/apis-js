const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'es-ES'; // Espanol. Puede ser 'es-ES' o 'en-US'

    recognition.start();

    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = 'Te estoy eschuchando gordito...';
    };

    recognition.onspeechend = function(){
        salida.textContent = 'Por fin dejaste de hablar loro...';
        recognition.stop();
    }

    recognition.onresult = function(e){
        console.log(e.results[0][0]);
        
        const {transcript, confidence} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Dijiste: ${transcript}`;
        salida.appendChild(speech);

        const coincidencia = document.createElement('p');
        coincidencia.innerHTML = `Coincidencia: ${confidence}`;
        salida.appendChild(coincidencia);
    }
};