function array(x) {

    // this will print all the arguments passed to x parameter
    console.log(x);

    // destructuring is to print some sekt of the array from the index

    // first method

    // console.log(x[0], x[1], x[2]);
    // console.log(x[4], x[5]);
    
    // second method

    let [a, b, c, d, e] = x;

    // console.log([a, b, c, d, e]);

    console.log([d, e]);

    // another method

    var one = x[5];
    let two = x[4];

    console.log(one, two);


};

array([10, 20, 30, 40, 50, 60,]);