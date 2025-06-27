
const form = document.getElementById('jsonForm');
const output = document.getElementById('jsonOutput');
let data = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.split(',').map(name => name.trim());
  const url = document.getElementById('url').value.trim();
  const kategori = document.getElementById('kategori').value.trim();
  const image = document.getElementById('image').value.trim();
  const content = document.getElementById('content').value.trim();

  const entry = {
    title: title,
    penulis: author,
    url: url,
    kategori: kategori,
    image: image,
    content: content
  };

  data.push(entry);
  output.textContent = JSON.stringify(data, null, 2);
  form.reset();
});
