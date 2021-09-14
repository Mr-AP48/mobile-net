Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});

Webcam.attach('#webcam');

function takeSnap() {
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="capturedImg" src="'+data_uri+'">'
    })
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("MobileNet", ModelLoaded);

function ModelLoaded() {
    console.log("Model Loaded Yay!!!!")
}

function identify() {
    img = document.getElementById("capturedImg");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error, "Error In comming!!!!!!! :o")
    }
    else{
        console.log(results);
        document.getElementById("objName").innerHTML = results[0].label;
    }
}