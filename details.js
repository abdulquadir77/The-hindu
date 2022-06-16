let news = JSON.parse(localStorage.getItem("newsdata"));
console.log(news);

let image = document.createElement("img");
image.setAttribute("src", news.urlToImage);

let desc = document.createElement("p");
desc.innerText = news.title;

//document.getElementsByClassName("newsappend").append(image, desc);
document.querySelector(".newsappend").append(image, desc);

//API append

async function myFunction() {
  let url = `https://newsdata.io/api/1/news?apikey=pub_83590558caebf401d2eaf0309dfde5188ff7&q=in&country=in&language=en&category=top`;
  let res = await fetch(url);

  let data = await res.json();
  console.log(data.results);

  appendData(data.results);
}
myFunction();

function appendData(data) {
  let count = 1;
  data.forEach((el) => {
    console.log(el);
    let div1 = document.createElement("div");
    div1.setAttribute("class", `news${count}`);

    count++;
    let image = document.createElement("img");
    image.setAttribute("src", el.image_url);

    let p = document.createElement("p");
    p.innerText = el.title;

    div1.append(image, p);
    document.querySelector("#news").append(div1);
    //console.log(div1);
  });
}
