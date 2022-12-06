
//API : https://fakestoreapi.com/products/category/electronics
//MEthod Type : get


// function getUsers() {
//     // alert("Working");
//     var data;
//     var httpObj = new XMLHttpRequest();
//     //create or prepare the request
//     httpObj.open("get", "https://randomuser.me/api/?results=10");
  
//     //send the request to server
//     httpObj.send();
  
//     // handle the response
  
//     httpObj.onload = function () {
//       data = httpObj.responseText; // "{results:[{},{},{}]}"   --- String
  
//       data = JSON.parse(data); //  {results:[{},{},{}]}   ----  obejct
  
//       console.log(data.results);
//     //   createRows(data.results);
//     };
//   };
//   getUsers();

function getElectronicData() {

    var electronicsData;

    var httpElectronics = new XMLHttpRequest ();

    httpElectronics.open ('get', 'https://fakestoreapi.com/products/category/electronics');

    httpElectronics.send();

    httpElectronics.onload = function () {

        electronicsData = httpElectronics.responseText;

        electronicsObject = JSON.parse(electronicsData);

        console.log (electronicsObject.results);


    };
};
getElectronicData();