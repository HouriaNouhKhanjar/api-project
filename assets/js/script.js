const API_KEY =  "XvcQHMcAt60-OMn7blqMaKCy6No";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const RESULT_MODAL = new bootstrap.Modal(document.getElementById("resultsModal"));


document.getElementById("status").addEventListener('click', e => getSatus(e) );

// function getSatus(e){

//     fetch(API_URL).then(response => response.json()).then(data => console.log(data));
// }

async function getSatus(e) {

    const query = `${API_URL}?api_key=${API_KEY}`;
    const response = await fetch(query);
    const data = await response.json();

    if(response.ok){
        displayStatus(data);
    }else {
        throw Error(data.error);
    }
}

function displayStatus(data) {
    const headerText = "API Key Status";
    let result = `<div>your api key is valid until<div>
                  <div class="key-status"> ${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText= headerText;
    document.getElementById("results-content").innerHTML = result;

    RESULT_MODAL.show();
}