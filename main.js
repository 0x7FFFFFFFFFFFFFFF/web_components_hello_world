import {news_api_url} from "./newapi.js";
import "./news-article.js";

async function fetch_news() {
    const result = await fetch(news_api_url);
    const json = await result.json();

    const main = document.querySelector("main");

    json.articles.forEach((article) => {
        const el = document.createElement("news-article");
        el.article = article;
        main.appendChild(el);
    });
}

window.addEventListener("load", () => {
    fetch_news();
});


