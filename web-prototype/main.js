var mainVideo = document.getElementById("mainVideo");
document.querySelector('button').addEventListener('click', function() {
    mainVideo.play();
    new AudioContext().resume().then(() => {
        var meter = new Tone.Meter();
        var mic = new Tone.UserMedia();
        mic.open();
        mic.connect(meter);
        setInterval(() => {
            var currentDB = meter.getValue();
            document.getElementById('currentDB').innerHTML = currentDB.toFixed(0);
            var currentVL = Math.abs(currentDB)/20;
            mainVideo.volume = currentVL;
            document.getElementById('currentVL').innerHTML = (currentVL * 100).toFixed(0) + "%";
        }, 100);
    });
});