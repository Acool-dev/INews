document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = '9c7dea03fa2b48158f90a0b9dd21fa55';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const articles = data.articles;

        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = '';

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'article';

            const titleElement = document.createElement('h2');
            titleElement.textContent = article.title;
            articleElement.appendChild(titleElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = article.description;
            articleElement.appendChild(descriptionElement);

            const linkElement = document.createElement('a');
            linkElement.href = article.url;
            linkElement.textContent = 'Read more';
            linkElement.target = '_blank';
            articleElement.appendChild(linkElement);

            articlesContainer.appendChild(articleElement);
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
});
