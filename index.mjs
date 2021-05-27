import fetch from "node-fetch";
import cheerio from "cheerio";
import notifier from "node-notifier";

const RIVM_ARTICLE_INDEX_PAGE =
  "https://www.rivm.nl/en/covid-19-vaccination/news";
const CHECK_RATE_SECONDS = 30;

let firstLoad = [];

async function check() {
  const response = await fetch(RIVM_ARTICLE_INDEX_PAGE);
  const responseText = await response.text();

  const $ = cheerio.load(responseText);

  const firstPageArticleHeadings = [];
  $("article.news a h3").each((index, heading) => {
    // @ts-ignore
    firstPageArticleHeadings.push(heading.children[0]?.data);
  });

  if (firstLoad.length === 0) {
    firstLoad = firstPageArticleHeadings;
    notifier.notify("RIVM News Notifier started");
    console.log(`The articles at first load were:\n${firstLoad.join("\n")}`);
    console.log(`Now checking every 30s...`);
  } else {
    let newArticles = false;
    firstPageArticleHeadings.forEach((article) => {
      if (!firstLoad.includes(article)) {
        newArticles = true;
        console.log("Found a new article!!");
        console.log(article);
        notifier.notify({ title: "Found a new article!", message: article });
        firstLoad = firstPageArticleHeadings;
      }
    });
    if (!newArticles) {
      console.log("No new articles. Checking again in 30s.");
    }
  }
  setTimeout(check, 1000 * CHECK_RATE_SECONDS);
}

check();
