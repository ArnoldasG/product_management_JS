// ivedimo laukai
const enterID = document.getElementById('enterID');
const enterName = document.getElementById('enterName');
const enterQuantity = document.getElementById('enterQuantity')
// ivedimo laukas, prekes ieskojimui
const findId = document.getElementById('findID');
// vieta rezultatu spausdinimui
const placeForResult = document.getElementById('findData');

// Gaunu mygtuku
const insertButton = document.getElementById('insert')
const removeButton = document.getElementById('remove')
const findButton = document.getElementById('find');


// duomenu irasymo funkcijos

function insertData (event) {
    event.preventDefault(); // google it what is it man.
    
}

// funkcijos iskvietimas
insertButton.addEventListener('click', insertData);

