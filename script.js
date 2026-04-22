const apiKey = "2e1a0bb9e3e8661701ea292d24bd11ce";

async function getNews() {
  let url = `https://gnews.io/api/v4/search?q=odisha&lang=en&max=10&token=2e1a0bb9e3e8661701ea292d24bd11ce`;
  try {
    let res = await fetch(url);
    let data = await res.json();

    let container = document.getElementById("news");

    if (!data.articles || data.articles.length === 0) {
      container.innerHTML = "<h2>No news found</h2>";
      return;
    }

    container.innerHTML = data.articles.map(n => `
      <div class="card">
        <img src="${n.image || 'https://via.placeholder.com/300'}">
        <h3>${n.title}</h3>
        <p>${n.description || ''}</p>
        <a href="${n.url}" target="_blank">Read More</a>
      </div>
    `).join('');

  } catch (error) {
    document.getElementById("news").innerHTML = "<h2>Error loading news</h2>";
  }
}

getNews();
