let searchButton = document.getElementById('search').addEventListener('click', onSearch);

function onSearch() {
  console.log('click');
  let a = document.querySelector('main'),
    b = document.getElementById('searchBox').value;
  a.innerHTML = `<blockquote>Waiting for API to respond...</blockquote>`,
   fetch(`http://www.recipepuppy.com/api/?q=${b}`).then(function(c) {
    return console.log(c.status), 200 === c.status ? void(a.innerHTML = '',
    c.json().then(function(d) {
      d.results.forEach(function(e) {
        '' === e.thumbnail && (e.thumbnail = 'http://via.placeholder.com/150x115');
        let f = `
          <div class="recipes">
            <a href="${e.href}">
            <img src="${e.thumbnail}">
            <h3>${e.title}</h3>
            </a>
          </div>
          `;
        a.innerHTML += f
      })
    })) : void console.log(c.status)
  })
}
console.log('JS Loaded');
