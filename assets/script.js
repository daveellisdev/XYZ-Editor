// Setup
let inputText = getEl("#input-text");
let outputText = getEl("#ouput-text");
let xMod = getEl("#x-modifier");
let zMod = getEl("#z-modifier");
let yMod = getEl("#y-modifier");

// Event Listeners 
getEl("#magic").addEventListener("click", magic);
getEl("#test").addEventListener("click", test);
getEl("#copy").addEventListener("click", copyText);

function magic(){

    // variable setup
    let x, y ,z, posString;
    let buildPosString = '';
    let buildOutputString = '';

    // array setup
    let inputArray = [];
    let posArray = [];
    let outputArray = [];

    // capture x, z, y
    inputArray = inputText.value.split('\n');
    x = parseFloat(xMod.value);
    z = parseFloat(zMod.value);
    y = parseFloat(yMod.value);
    console.log(`Modifying X, Z, Y by ${x}, ${z}, ${y}`);

    // do magic (split into array)
    for(let i=0; i<inputArray.length; i++){

        // if line begins with Pos= then take it apart
        if(inputArray[i].includes(`Pos=`)){
            posString = inputArray[i].slice(7);
            posString = posString.slice(0, -1);
            posArray = posString.split(',');

            // modify the array using the captured parameters
            // rounds to 6 DP
            posArray[0] = (parseFloat(posArray[0]) + x).toFixed(6);
            posArray[1] = (parseFloat(posArray[1]) + z).toFixed(6);
            posArray[2] = (parseFloat(posArray[2]) + y).toFixed(6);

            // rebuild the array
            buildPosString = `  Pos=(${posArray[0]},${posArray[1]},${posArray[2]})`
            inputArray[i] = buildPosString;
        }
    }

    // rebuild string
    for(let i=0; i<inputArray.length; i++){

        buildOutputString = `${buildOutputString}${inputArray[i]}`;

        // don't add an additional line break at the end
        if(i<(inputArray.length-1)){
            buildOutputString = buildOutputString + "\n";
        }
    }

    outputText.value = buildOutputString;

    // reset arrays and strings when complete
    inputArray = [];
    magicArray = [];
    buildPosString = "";
}

// copy text to clipboard
function copyText(){
    let copyText = outputText = getEl("#ouput-text");
    copyText.select();
    document.execCommand("copy");
}

// function to replace document.querySelector
function getEl(str){
    return document.querySelector(str);
}

// insert test content 
function test(){
    console.log(`Inserting Test Data`);
    inputText.value = `ReflectionProbe=IrradProbe_0
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(166.728271,118.276535,712.682617)
}

ReflectionProbe=IrradProbe_2
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(76.602989,41.106003,307.891052)
}

ReflectionProbe=IrradProbe_3
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(277.683014,31.195002,60.680016)
}

ReflectionProbe=IrradProbe_4
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(664.789978,11.888999,684.612915)
}

ReflectionProbe=IrradProbe_5
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(276.761017,14.844002,515.578003)
}

ReflectionProbe=IrradProbe_6
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(128.823059,26.276009,652.715088)
}

ReflectionProbe=IrradProbe_7
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(125.994019,28.798008,891.934082)
}

ReflectionProbe=IrradProbe_8
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(411.637024,10.437997,900.157837)
}

ReflectionProbe=IrradProbe_9
{
  Type=DiffuseProbe
  TextureSize=(1024)
  UpdateRate=(0.500)
  StaticSwitch=(1000.000)
  Pos=(37.424007,41.163002,756.957031)
}`
}

// jQuery Smooth Scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 0
      }, 800, function(){

      });
    } // End if
  });
});

$(window).scroll(function() { // when the page is scrolled run this
  if($(this).scrollTop() > 500) { // if you're NOT at the top
      $('.to-top').fadeIn("fast"); // fade in
  } else { // else
      $('.to-top').fadeOut("fast"); // fade out
  }
});