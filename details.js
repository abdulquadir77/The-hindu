let news = JSON.parse(localStorage.getItem("newsdata"));
console.log(news);

let image = document.createElement("img");
image.setAttribute("src", news.urlToImage);

let title = document.createElement("p");
title.innerText = news.title;

let content = document.createElement("p");
content.innerText = news.content;

let desc = document.createElement("p");
desc.innerText = news.description;

let publish = document.createElement("p");
publish.innerText = news.publishedAt;

document
  .querySelector(".container1")
  .append(image, title, content, desc, publish);

async function myFunction() {
  let url = `https://newsdata.io/api/1/news?apikey=pub_84091586a77b5fb99d81bd1d64b5eee32e81&q=in&country=gb&language=en&category=top`;
  let res = await fetch(url);

  let data = await res.json();
  // console.log(data.results);

  appendData(data.results);
}
myFunction();

function appendData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let div1 = document.createElement("div");
    div1.setAttribute("class", `news${count}`);
    count++;
    let image = document.createElement("img");
    image.setAttribute("src", el.image_url);

    let p = document.createElement("p");
    p.innerText = el.title;

    div1.append(image, p);
    document.querySelector(".container").append(div1);
  });
}

//Footer Functionality (Santosh)
let search = async () => {
  try {
    let query = document.getElementById("query").value;

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=100&q=${query}&apiKey=1ba529b81c6f42d0aa7ee7a4cd853158`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    localStorage.setItem("news", JSON.stringify(data));
    window.location.href = "searchFdetails.html";
  } catch (error) {
    console.log(error);
  }
};

let movie = document.getElementById("containt");
async function getData() {
  let url =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=1ba529b81c6f42d0aa7ee7a4cd853158";
  try {
    let response = await fetch(url);
    let users = await response.json();
    append(users.articles);
    console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
getData();

function append(data) {
  movie.innerHTML = null;
  data.forEach(function (el) {
    var card = document.createElement("div");
    card.setAttribute("id", "bhu");
    var span = document.createElement("span");

    var ul = document.createElement("ul");
    ul.setAttribute("id", "abc");

    var newsHeading = document.createElement("p"); //NEWSHEADING
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.setAttribute("id", "hide");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    movie.append(card);
  });
}

let movie2 = document.getElementById("containt2");
async function getData2() {
  let url2 =
    "https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=5&apiKey=1ba529b81c6f42d0aa7ee7a4cd853158";
  try {
    let response = await fetch(url2);
    let users = await response.json();
    append2(users.articles);
    console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
getData2();

function append2(data3) {
  movie2.innerHTML = null;
  data3.forEach(function (el) {
    var card = document.createElement("div");
    card.setAttribute("id", "bhu");
    var span = document.createElement("span");

    var ul = document.createElement("ul");
    ul.setAttribute("id", "abc");

    var newsHeading = document.createElement("p"); //NEWSHEADING
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.setAttribute("id", "hide");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    movie2.append(card);
  });
}

let movie3 = document.getElementById("containt3");
async function getData3() {
  let url3 =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=5&apiKey=1ba529b81c6f42d0aa7ee7a4cd853158";
  try {
    let response = await fetch(url3);
    let users = await response.json();
    append3(users.articles);
    console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
getData3();

function append3(data3) {
  movie3.innerHTML = null;
  data3.forEach(function (el) {
    var card = document.createElement("div");
    card.setAttribute("id", "bhu");
    var span = document.createElement("span");

    var ul = document.createElement("ul");
    ul.setAttribute("id", "abc");

    var newsHeading = document.createElement("p"); //NEWSHEADING
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.setAttribute("id", "hide");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    movie3.append(card);
  });
}
