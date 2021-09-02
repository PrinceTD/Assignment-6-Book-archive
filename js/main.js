const searchBtn = () => {
    const searchFild = document.getElementById('search-input');
    const searchText = searchFild.value;
    searchFild.value = "";
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.docs))

};
const searchResult = book => {
    const searchResult = document.getElementById("display-result")
    book.forEach(book =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${book.title.slice(0, 25)}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
        `
        searchResult.appendChild(div)
    })
}

