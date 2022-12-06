//API : https://fakestoreapi.com/products/category/electronics
//MEthod Type : get

var productId;
function getElectronicData() {
  // Ajax  or fetch()
  // getting data from the server by fetch method using promise structure
  //what you will first do is to create a function
  

  // here you get the data with keyword fetch and store in promise variable
  var promise = fetch("https://fakestoreapi.com/products/category/electronics");

  // here you access the promise structure with keyword .then and return the data in the sucess storage
  promise
  .then(
      function (data) {
        //binary format //001010101010101  //json to convert the data from the server which are binary to array
        return data.json();
      },
      function (errordata) {}
    )
    .then(function (actualData) {
      //   var result = actualData; here you create another .then with one function and input the result of the data in the first .then via parameter and then print
      console.log(actualData);

      // also in this .then function you input the cards function created to display the data fetch and pass the data result to card function via the parameter
      createCard(actualData);
    });
};

// creation of card to display the data fetch from server
function createCard(data) {
  // get the div element created in your html to create card dynamically
  var cardRef = document.getElementById("card");

  // style the div element you get from your html to grid so that the data fetch from server will display in grid format
  cardRef.style.display = "grid";
  cardRef.style.gridTemplateColumns = "1fr 1fr 1fr";
  cardRef.style.gridGap = "10px";
  
  // use forEach to create cards and insert the data as well so that you will not need to repeat the code for each data fetch.
  data.forEach(function (ele) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var h4 = document.createElement("h4");
    var p = document.createElement("p");
    var p1 = document.createElement("p");
    var btn = document.createElement("button");
    var a = document.createElement("a");
    a.href = "ProductDetails.html";

    img.src = ele.image;
    img.style.width = "100%";
    img.style.height = "200px";
    h4.innerText = ele.title;
    p.innerText = "$ " + ele.price;
    p1.innerText = ele.description;
    btn.innerText = "More Details";

    btn.style.textAlign = "center";
    btn.onclick = function () {
      sessionStorage.setItem("id", ele.id);
    };
    a.appendChild(btn);
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(a);

    div.style.width = "300px";

    //   div.style.border = "4px solid black";
    div.style.boxShadow = "0 0 10px black";
    div.style.padding = "30px";
    div.style.backgroundColor = "lightgrey";
    cardRef.appendChild(div);
  });
}
