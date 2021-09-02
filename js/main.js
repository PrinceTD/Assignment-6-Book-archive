const searchBtn = () => {
    const searchFild = document.getElementById('search-input');
    const searchText = searchFild.value;
    searchFild.value = "";
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))

};
const displaySearchResult = book => {
    const searchResult = document.getElementById("display-result");
    book.forEach(book => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
        </div>
       `
        searchResult.appendChild(div)
    });
}


