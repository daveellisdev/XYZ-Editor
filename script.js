// Setup

var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#ouput-text");
var xMod = document.querySelector("#x-modifier");
var zMod = document.querySelector("#z-modifier");
var yMod = document.querySelector("#y-modifier");
var inputArray = [];
var posArray = [];
var outputArray = []
var posString;
var buildString = "";
var buildOutputString = "";
var x;
var y;
var z;
var xLength;
var yLength;
var zLength;

// Event Listeners 
document.querySelector("#magic").addEventListener("click", magic)
document.querySelector("#copy").addEventListener("click", copyText)


function magic(){

    // capture
    inputArray = inputText.value.split('\n');
    x = parseFloat(xMod.value);
    z = parseFloat(zMod.value);
    y = parseFloat(yMod.value);
    console.log(inputArray);

    // do magic (split into array)
    for(var i=0; i<inputArray.length; i++){

        // if line begins with Pos= then take it apart
        if(inputArray[i].indexOf('Pos=') >1){
            posString = inputArray[i].slice(7);
            posString = posString.slice(0, -1);
            posArray = posString.split(',');

            // modify the array using the inputted parameters
            // rounds to 6 DP
            posArray[0] = (parseFloat(posArray[0]) + x).toFixed(6);
            posArray[1] = (parseFloat(posArray[1]) + z).toFixed(6);
            posArray[2] = (parseFloat(posArray[2]) + y).toFixed(6);

            // rebuild the array
            buildString = "  Pos=(" + posArray[0] + "," + posArray[1] + "," + posArray[2] + ")"
            inputArray[i] = buildString;
        }
    }

    // rebuild string
    for(var i=0; i<inputArray.length; i++){
        if(i > 0){
            
        }
        buildOutputString = buildOutputString + inputArray[i];

        // don't add an additional line break at the end
        if(i<(inputArray.length-1)){
            buildOutputString = buildOutputString + "\n";
        }
    }

    outputText.value = buildOutputString;

    // reset arrays and strings when complete
    inputArray = [];
    magicArray = [];
    buildString = "";
}

// copy text to clipboard
function copyText(){
    var copyText = outputText = document.querySelector("#ouput-text");
    copyText.select();
    document.execCommand("copy");
}