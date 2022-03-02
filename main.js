function Classification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KTOlNU3Y-/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, result)
{
    console.log("got results");
}