//API append From "NEWS API" ("Abdul Quadir")
async function myFunction() {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=072c5a0204aa44c9820f8fe48e737ff7`;

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

function appended9(dated) {
  movie.innerHTML = null;
  let count = 1;
  dated.forEach((el) => {
    console.log(el);
    let card2 = document.createElement("div");
    card2.setAttribute("class", `news${count}`);
    card2.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let para = document.createElement("p");
    para.innerText = el.title;

    // var link = document.createElement("a");
    // link.setAttribute("id", "hide");
    // link.href = el.url;

    // link.append(para);

    card2.append(image, para);
    document.getElementById("UsaNews").append(card2);
  });
}

//Slide bar in home page

var button = document.getElementById("next_home");
// var button = document.querySelector(.next);

button.onclick = function () {
  var container = document.getElementById("UsaNews");
  sideScroll(container, "right", 25, 100, 10);
};

var back = document.getElementById("prev_home");
back.onclick = function () {
  var container = document.getElementById("UsaNews");
  sideScroll(container, "left", 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

// -------------------------------------------------------------------------------------------------------------------------
// Footer Functionality (Santosh)

// const apiikeys ="7663403954f442fab1f03856fa1b40ae";
// const apiikeys ="1c98b8ffa28743e18acacedc5ed185cd";

// const apiikeys ="280cfd40a460489e99d7b0bf899d28c3";

// const apiikeys ="9ba8dfd0cda84d17abfebbb4e4f05b67";
// const apiikeys = "280cfd40a460489e99d7b0bf899d28c3";
const apiikeys = "072c5a0204aa44c9820f8fe48e737ff7";

let searchDetails = async () => {
  try {
    let query = document.getElementById("query").value;

    // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${api_key}`;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=70&q=${query}&apiKey=${apiikeys}`;
    // let url = `https://newsapi.org/v2/everything?q=${query}&from=2022-06-19&sortBy=popularity&apiKey=${apiikeys}`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    localStorage.setItem("news", JSON.stringify(data));
    window.location.href = "searchFdetails.html";
  } catch (error) {
    console.log(error);
  }
};

// let movie = document.getElementById("containt1");
async function getData15() {
  let urls15 = `https://newsapi.org/v2/top-headlines?country=uk&category=business&pageSize=5&apiKey=${apiikeys}`;
  try {
    let response = await fetch(urls15);
    let users = await response.json();
    appened15(users.articles);
    // console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
getData15();

function appened15(data) {
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
    // movie.append(card);
    document.getElementById("dtatApprfirng").append(card)
  });
}

let movie2 = document.getElementById("containt2");
async function getData2() {
  let url2 = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=5&apiKey=${apiikeys}`;
  try {
    let response = await fetch(url2);
    let users = await response.json();
    append2(users.articles);
    // console.log(users.articles);
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
  let url3 = `https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=5&apiKey=${apiikeys}`;
  // `https://newsapi.org/v2/top-headlines?country=us&apiKey=280cfd40a460489e99d7b0bf899d28c3`;
  try {
    let response = await fetch(url3);
    let users = await response.json();
    append3(users.articles);
    // console.log(users.articles);
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

async function getData16()
{
    let urls16= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=16&apiKey=${apiikeys}`;
    // let urls16= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=16&apiKey=28`;
    ;
    try{
        let response=await fetch(urls16)
    let users=await response.json()
    appended16(users.articles)
    // console.log(users.articles)
    }
   catch(err)
   {
       console.log(err)
   }
}
getData16()


function appended16(dated){
    movie.innerHTML=null
    let count = 1;
  dated.forEach((el) => {
    // console.log(el);
    let card2 = document.createElement("div");
    card2.setAttribute("class",`news${count}`);
    card2.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;
    
    let para = document.createElement("p");
    para.innerText = el.title;

    card2.append(image,para);
    document.getElementById("UsaNews").append(card2);
  });

}