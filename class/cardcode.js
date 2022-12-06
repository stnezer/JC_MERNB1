// function createCard(data) {
//   var cardRef = document.getElementById("card");
//   var div = document.createElement("div");
//   var img = document.createElement("img");
//   var h4 = document.createElement("h4");
//   var p = document.createElement("p");
//   var p1 = document.createElement("p");
//   var btn = document.createElement("button");

//   img.src = data[0].image;
//   img.style.width = "100%";
//   img.style.height = "200px";
//   h4.innerText = data[0].title;
//   p.innerText = "$ " + data[0].price;
//   p1.innerText = data[0].description;
//   btn.innerText = "More Details";
//   div.appendChild(img);
//   div.appendChild(h4);
//   div.appendChild(p);
//   div.appendChild(p1);
//   div.appendChild(btn);

//   div.style.width = "300px";

//   //   div.style.border = "4px solid black";
//   div.style.boxShadow = "0 0 10px black";
//   div.style.padding = "30px";
//   div.style.backgroundColor = "lightgrey";
//   cardRef.appendChild(div);
// }

// card code



function createCard(data) {
    var cardRef = document.getElementById("card");
    cardRef.style.display = "grid";
    cardRef.style.gridTemplateColumns = "1fr 1fr 1fr";
    cardRef.style.gridGap = "10px";
    data.forEach(function (ele) {
      var div = document.createElement("div");
      var img = document.createElement("img");
      var h4 = document.createElement("h4");
      var p = document.createElement("p");
      var p1 = document.createElement("p");
      var btn = document.createElement("button");
  
      img.src = ele.image;
      img.style.width = "100%";
      img.style.height = "200px";
      h4.innerText = ele.title;
      p.innerText = "$ " + ele.price;
      p1.innerText = ele.description;
      btn.innerText = "More Details";
      div.appendChild(img);
      div.appendChild(h4);
      div.appendChild(p);
      div.appendChild(p1);
      div.appendChild(btn);
  
      div.style.width = "300px";
  
      //   div.style.border = "4px solid black";
      div.style.boxShadow = "0 0 10px black";
      div.style.padding = "30px";
      div.style.backgroundColor = "lightgrey";
      cardRef.appendChild(div);
    });
  }
  
  
  
  Product.html
  =============
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document</title>
      <link href="ProductDetails.css" rel="stylesheet" />
    </head>
    <body>
      <div class="nav">
        <a href="Home.html">Home</a>
        <a href="Electronic.html">Electronics</a>
        <a href="Ajax.html">Users</a>
        <a href="Contact.html">ContactUs</a>
      </div>
  
      <div style="text-align: center; margin-top: 50px; color: green">
        <h1>Product Details</h1>
      </div>
    </body>
  </html>
  
  
  Product.css
  ===========
  body {
      margin: 0;
  }
  
  .nav {
      background-color: black;
      text-align: right;
      padding: 20px;
  }
  
  a {
      color: white;
      text-decoration: none;
      margin-right: 50px;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  