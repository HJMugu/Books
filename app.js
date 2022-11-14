//siin on vajalikud konstandid
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#autor');
const isbnInput = document.querySelector('#isbn');
const nimekiri = document.querySelector('#keha');

//siin on vajalikud sündmused
form.addEventListener('submit', addBook);
nimekiri.addEventListener('click', deleteBook);

//siit algab kustutusfunktsioon
function deleteBook(e){
    if(e.target.textContent === "X"){
        e.target.parentElement.parentElement.remove();
    }

}
//
//siit algab raamatulisamisfunktsioon
function addBook(e){
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.appendChild(document.createTextNode('X'));


    const table = document.getElementById("keha");
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);


    cell1.innerHTML = title;
    cell2.innerHTML = author;
    cell3.innerHTML = isbn;
    cell4.appendChild(link);


    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';


    e.preventDefault();

}

////