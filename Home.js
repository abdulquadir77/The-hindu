async function myFunction() {
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=280cfd40a460489e99d7b0bf899d28c3`;
  let res = await fetch(url);

  let data = await res.json();
  // console.log()

  appendData(data.articles);
}
myFunction();
function appendData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
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

    div1.append(image, p);
    document.getElementById("container").append(div1);
    //console.log(div1);
  });
}

function dataDisplay(data) {
  window.location.href = "details.html";
  let news = localStorage.setItem("newsdata", JSON.stringify(data));
  console.log(news);
}

// let a = `https://newsdata.io/api/1/news?apikey=pub_83590558caebf401d2eaf0309dfde5188ff7&q=in&country=in&language=en&category=top `;

// let image = document.createElement("img");
// image.setAttribute("src", data.urlToImage);

// let desc = document.createElement("p");
// desc.innerText = data.description;

// document.getElementById("container").append(image, desc);
