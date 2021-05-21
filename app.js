let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

// var serverURL = "https://api.funtranslations.com/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server! Please try again after some time")
}

function clickHandler() {
    // outputDiv.innerText = "Tranlated" + txtInput.vialue;
    var inputText = txtInput.value;


    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler);



// document.body.appendChild(btn);