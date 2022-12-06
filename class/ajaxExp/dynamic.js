
function getUsers() {
  // alert("Working");
  var data;
  var httpObj = new XMLHttpRequest();
  //create or prepare the request
  httpObj.open("get", "https://randomuser.me/api/?results=10");

  //send the request to server
  httpObj.send();

  // handle the response

  httpObj.onload = function () {
    data = httpObj.responseText; // "{results:[{},{},{}]}"   --- String

    data = JSON.parse(data); //  {results:[{},{},{}]}   ----  obejct

    console.log(data.results);
    createRows(data.results);
  };
};

function createRows(users) {
  var table = document.getElementById("table");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var img = document.createElement("img");

  img.src = users[0].picture.medium;
  img.width = "50";
  img.height = "50";
  img.style.borderRadius = "50%";

  td2.innerText = users[0].name.first;
  td3.innerText = users[0].gender;
  td4.innerText = users[0].email;
  td5.innerText = users[0].phone;

  td1.appendChild(img);
  tr.align = "center";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  table.appendChild(tr);
}