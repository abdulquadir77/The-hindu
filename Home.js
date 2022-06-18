//API append From "NEWS API" ("Abdul Quadir")
async function myFunction() {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=280cfd40a460489e99d7b0bf899d28c3`;
  let res = await fetch(url);
  let data = await res.json();
  appendData(data.articles);
}
myFunction();
function appendData(data) {
  let count = 1;
  data.forEach((el) => {
    let div1 = document.createElement("div");
    div1.setAttribute("class", `news${count}`);
    div1.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;
    let image = document.createElement("img");
    image.setAttribute("src", el.urlToImage);

    let p = document.createElement("p");
    p.innerText = el.title;
    p.setAttribute("id", "title");

    div1.append(image, p);
    document.getElementById("container").append(div1);
  });
}

//If you click on any news its go to LocalStorage(Abdul Quadir)
function dataDisplay(data) {
  window.location.href = "details.html";
  let news = localStorage.setItem("newsdata", JSON.stringify(data));
  console.log(news);
}
// -------------------------------------------------------------------------------------------------------------------------
// Footer Functionality (Santosh)

const apiikeys ="7663403954f442fab1f03856fa1b40ae";

let search = async () => {
  try {
    let query = document.getElementById("query").value;

    // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${api_key}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=100&q=${query}&apiKey=${apiikeys}`;
    // let url = `https://newsdata.io/api/1/news?apikey=pub_${api_key}&q=${query}&language=en&category=top`;

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
  let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=${apiikeys}`;
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
  let url2 =`https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=5&apiKey=${apiikeys}`;
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
    `https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=5&apiKey=${apiikeys}`;
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