const requestButton = document.getElementById("answer1");
const requestButton2 = document.getElementById("answer2");


function OnClick(){

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
console.log("STEP 1. REQUESTING FROM", url);
fetch(url).then(
    function(response) {
        console.log("STEP 2. RECIEVED", response);
        return response.json()
        }
    ).then(
        function(myJSON) {
            console.log("STEP 3. JSON", myJSON);
            console.log(myJSON);
            
            let newPElement = document.createElement('h1');
            const resDiv = document.getElementById("result");
            newPElement.innerHTML = myJSON.forms[0].name;
            resDiv.appendChild(newPElement);
        }
    );

    const url2 = "https://api.funtranslations.com/translate/pirate.json?text=Hello%20sir%21%20my%20mother%20goes%20with%20me%20to%20the%20ocean.";
    console.log("STEP 1. REQUESTING FROM", url2);
    fetch(url2).then(
        function(response) {
            console.log("STEP 2. RECIEVED", response);
            return response.json()
            }
        ).then(
            function(myJSON) {
                console.log("STEP 3. JSON", myJSON);
                console.log(myJSON);
                
                let newPElement = document.createElement('h1');
                const resDiv = document.getElementById("result");
                newPElement.innerHTML = myJSON.contents.translated;
                resDiv.appendChild(newPElement);
            }
        );
  
}

function OnClick2(){
                let newPElement = document.createElement('h1');
                const resDiv = document.getElementById("result");
                newPElement.innerHTML = "Then why are you here?";
                resDiv.appendChild(newPElement);
}

requestButton.addEventListener('click', OnClick);
requestButton2.addEventListener('click', OnClick2);
