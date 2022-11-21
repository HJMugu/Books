//siin on vajalikud konstandid
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#autor');
const isbnInput = document.querySelector('#isbn');
const nimekiri = document.querySelector('#keha');


//siin on vajalikud sündmused
form.addEventListener('submit', addBook);
nimekiri.addEventListener('click', deleteBook);
document.addEventListener('DOMContentLoaded', getBooksFromLS);

//siin on getBooksFromLS funktsioon

function getBooksFromLS(event){
    let books;
    if(localStorage.getItem('books') === null)  {
        books = [];
    }  else {
        books = JSON.parse(localStorage.getItem('books'));
    }


    books.forEach(function (book){

        const title = book[0];
        const author = book[1];
        const isbn = book[2];
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




    })

}



//siit algab kustutusfunktsioon
function deleteBook(e){
    if(e.target.textContent === "X"){
        e.target.parentElement.parentElement.remove();

        book = e.target.parentElement.parentElement.firstChild.textContent;

        deleteBookFromLocalStorage(book);
    }

}


//siit algab delete book from LS
function deleteBookFromLocalStorage(book){

    let books;
    if(localStorage.getItem('books') === null)  {
        books = [];
    }  else {
        books = JSON.parse(localStorage.getItem('books'));
    }



    books.forEach(function (booksElement, index){
        if(booksElement.firstElementChild === book[0].textContent){
            books.splice(index, 1);
        }
    })
    localStorage.setItem('books', JSON.stringify(books));

}
//
//siit algab raamatulisamisfunktsioon
function addBook(e){
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;
    const link = document.createElement('a');
    const book = [];
    book[0] = title
    book[1] = author
    book[2] = isbn
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
    addBookToLocalStorage(book)



}

///add book to local storage function

function addBookToLocalStorage(book){
    let books;
    if(localStorage.getItem('books') === null)  {
        books = [];
    }  else {
        books = JSON.parse(localStorage.getItem('books'));
    }

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

}




////