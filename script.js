const apiKey = "5f64eee6ed264c6f9e8b502de100d783";

async function getNews() {
  let url = `https://newsapi.org/v2/everything?q=odisha&sortBy=publishedAt&apiKey=${apiKey}`;
  
  let res = await fetch(url);
  let data = await res.json();

  let container = document.getElementById("news");

  if (!data.articles) {
    container.innerHTML = "<h2>No news found</h2>";
    return;
  }

  container.innerHTML = data.articles.slice(0,10).map(n => `
    <div class="card">
      <img src="${n.urlToImage || 'https://via.placeholder.com/300'}">
      <h3>${n.title}</h3>
      <p>${n.description || ''}</p>
      <a href="${n.url}" target="_blank">Read More</a>
    </div>
  `).join('');
}

getNews();
