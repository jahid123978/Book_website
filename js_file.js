
// result not found defualt display none
document.getElementById('defualt').style.display = 'none';
// data accessing from the server by using that link 
const searchBook = () =>{
    const searchText = document.getElementById('search-field');
    const searchField = searchText.value;

    searchText.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchField}`;
    fetch(url)
    .then(res=>res.json())
    .then(bookData=>displayBooks(bookData.docs));

}
// searchBook();
// Display books result which searched by input feilsd 
const displayBooks = books =>{
    console.log(books);
    const bookSection = document.getElementById('book-section');
    bookSection.textContent = '';
    if(books.length === 0){
        document.getElementById('defualt').style.display = 'block';
       const defualeResult = document.getElementById('defualt');
       defualeResult.innerText =`No result found search again with in valid information`;
       document.getElementById('count').style.display = 'none';
            }
    else{
        let count = 0;
        books.forEach(book =>{
          document.getElementById('count').style.display = 'block';
            const searchNumber = document.getElementById('count');
            searchNumber.innerText = `Total Search Results are: ${count++}`;
            document.getElementById('defualt').style.display = 'none';
            console.log(book);
                     const div = document.createElement('div');
                    //  div.classList.add(col);
                     div.innerHTML = `
                <div class="card h-100">
                     <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h5 class="card-title">Author name: ${book.author_name[0]? book.author_name[0] : ''}</h5>
                    <h5 class="card-title">Publisher: ${book.publisher[0]? book.publisher[0] : ''}</h5>
                    <h5 class="card-title">Publish year: ${book.publish_year[0]? book.publish_year[0]: ''}</h5>
                  </div>
               </div> 
                     `;
          bookSection.appendChild(div);
        });    

       }
   
}