const searchBtn = () => {
    const error = document.getElementById('error');
    const searchFild = document.getElementById('search-input');
    const searchText = searchFild.value;
    // clear data
    searchFild.value = "";
    /* error handing */
    if(searchText=== ""){
        error.innerHTML = `
            <h3 class="text-danger mt-5"> Search filed cannot be empty!</h3>
        `
    }
    else{
        error.innerHTML="";
        const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.docs))
    }

};

const searchResult = book => {

    const error = document.getElementById('error');
    const searchResult = document.getElementById("display-result");
    searchResult.textContent="";
     /* error handing */
    if(book.length === 0){
        error.innerHTML=  `
        <h3 class="text-danger mt-5">Show no result found!!! </h3>
        `
    }
    else{
        error.innerHTML= "";
    }
    // total book found result
    const foundTotal = document.getElementById("found-total");
    foundTotal.innerText= `${book.length}`
    // forEach
    book.forEach(book =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="col">
            <div class="card h-100">
                 <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..." height="400px" width="100px">
                <div class="card-body">
                    <h5 class="card-title">${book.title.slice(0, 25)}</h5>
                    <p>Author Name: ${book.author_name} <br>  <span>First Publish Year: ${book.first_publish_year}</span>
                
                    </p>
                
                </div>
            </div>
        </div>
        `
        searchResult.appendChild(div);

      
    })
};
