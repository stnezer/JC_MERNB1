//API : https://fakestoreapi.com/products/category/electronics
//MEthod Type : get

function getElectronicData() {
  // Ajax  or fetch()

  var promise = fetch("https://fakestoreapi.com/products/category/electronics");

  promise
    .then(
      function (data) {
        //binary format //001010101010101  //json
        return data.json();
      },
      function (errordata) {}
    )
    .then(function (actualData) {
      var result = actualData;
      console.log(actualData);
      createCard(result);
    });
<<<<<<< Updated upstream
}

function createCard(data) {
  var card = document.getElementById("card");
  data.forEach(function (ele) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    div.style.width = "300px";
    div.style.height = "300px";
    img.src = ele.image;
    img.style.width = "100%";
    img.height = "300";
    div.append(img);
    div.style.border = "2px solid black";
    card.style.display = "grid";
    card.style.gridGap = "10px";
    card.style.padding = "30px";

    card.style.gridTemplateColumns = "1fr 1fr 1fr";
    card.appendChild(div);
  });
}
=======
};

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
>>>>>>> Stashed changes
