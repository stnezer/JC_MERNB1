// ways to great BigInt data type

// one by using the BigInt function

var Big = BigInt(131341111);
console.log(Big);

// two by the use of 'n' to end the number

var bb = 12457451541n;
console.log(bb);

// Parameter in decimal format
var bigNum = BigInt(
    "123422222222222222222222222222222222222");
    console.log(bigNum);
    
    // 1. Static Methods

// JavaScript BigInt Static Methods

// Descriptions

// JavaScript BigInt.asIntN() Method	The BigInt.asIntN() method is an inbuilt method in JavaScript that is used to wrap a BigInt value to a signed integer between -2width-1 and 2width-1-1.
// JavaScript BigInt.asUintN() Method	The BigInt.asUintN() method is an inbuilt method in JavaScript that is used to wrap a BigInt value to an unsigned integer between 0 and 2width-1.
// 2. Instance Methods

// JavaScript BigInt Instance Methods

// Descriptions

// JavaScript BigInt.prototype.toLocaleString() Method	The BigInt.prototype.toLocaleString() method is an inbuilt method in JavaScript which is used to return a string with a language-sensitive representation of this BigInt.
// JavaScript BigInt.prototype.toString() Method	The BigInt.prototype.toString() method is an inbuilt method in JavaScript that is used to return a string representing the specified BigInt object.
// JavaScript BigInt.prototype.valueOf() Method	The BigInt.prototype.toString() method is an inbuilt method in JavaScript that is used to return the wrapped primitive value of a BigInt object.


    
    // Parameter in hexadecimal format
    // In mathematics and computing, the hexadecimal (also base-16 or simply hex) numeral system is a positional numeral system that represents numbers using a radix (base) of 16. Unlike the decimal system representing numbers using 10 symbols, hexadecimal uses 16 distinct symbols, most often the symbols "0"–"9" to represent values 0 to 9, and "A"–"F" (or alternatively "a"–"f") to represent values from 1...
    var bigHex = BigInt("0x1ffffffeeeeeeeeef");
    console.log(bigHex);
    
    // Parameter in binary format
    //  binary number is a number expressed in the base-2 numeral system or binary numeral system, a method of mathematical expression which uses only two symbols: typically "0" (zero) and "1" (one). The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit, or binary digit.
    
    var bigBin = BigInt(
    "0b1010101001010101001111111111111111");
    console.log(bigBin);
    
    //     // 1. Binary Number System
    // Binary system uses only two digits ‘0’ and ‘1’ hence base is 2. So it is also known as the base 2 number system.
    // In this system, there are two types of electronic pulses. If there is no electronic pulse then the digit is represented by ‘0’ and If there is an electronic pulse present then it’s 1′. Single binary digit is a bit. A sequence of four bits (1001) is a nibble and a sequence of eight bits(11001010) is called a byte. Binary represents a specific power of the base (2) of the number system. Example, 20. The last position in a binary number represents an x power of the base (2). Example, 2x where x represents the last position -1.

    // Example

    // Here we will see an example of how to calculate the Decimal Equivalent of a binary number
    // Binary Number: 110012

    // 110012 can be written as 11001
    // Step 1: ((1 x 24) + (1 x 23) + (0 x 22) + (0 x 21) + (1 x 20)) 10
    // Step 2: (16 + 8 + 0 + 0 + 2) 10
    // Step 3: 2610

    // 2. Octal Number System
    // Octal system uses eight digits 0, 1, 2, 3, 4, 5, 6, 7 hence base is 8. Each position in an octal number indicates a 0 power of the base (8). So it is also known as base 8 number system. Eg. 80. The last position in an octal number represents an x power of the base (8). Eg.8x where x represents the last position -1.

    // Example

    // Here we will see example of how to calculate Decimal Equivalent of Octal number
    // Octal Number: 120718

    // 120718 can be written as 12071

    // Step 1: ((1 x 84) + (2 x 83) + (0 x 82) + (7 x 81) + (1 x 80)) 10

    // Step 2: (4096 + 1024 + 0 + 56 + 1) 10

    // Step 3: 5177

    // 3. Decimal Number System
    // The decimal system uses eight digits 0, 1, 2, 3, 4, 5, 6, 7, 8,9 hence base is 10. In this number system, 9 is the highest digit value Whereas 0 is the lowest digit value. The position of each digit in a decimal number indicates a specific power of the base (10) of the system. We use the Decimal number system in our daily life. Decimal number system is able to indicate any numeric value.

    // Example

    // Here we will see an example of how to calculate Decimal Equivalent of a Decimal number
    // Decimal Number: 123710

    // 123710 can be written as 1237

    // Step 1: (1 x 103)+ (2 x 102)+ (3 x 101)+ (7 x l00) 10

    // Step 2: (1 x 1000)+ (2 x 100)+ (3 x 10)+ (7 x 1) 10

    // Step 3: (1000 + 200 + 30 + 7) 10

    // Step 4: 1237

    // 4. Hexadecimal Number System
    // Hexadecimal number system uses 10 digits and 6 letters, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. hence its base is 16. Each position in an octal number indicates a 0 power of the base (8). So it is also known as the base 16 number system as well as the alphanumeric number system Because it uses both numeric digits as well as alphabets.
    // Letters represent the numbers starting from 10. A = 10. B = 11, C = 12, D = 13, E = 14, F = 15. Each position in a hexadecimal number indicates a 0 power of the base (16). The last position in a hexadecimal number represents an x power of the base (16). Example 16x where x represents the last position -1.

    // Example

    // Here we will see example of how to calculate Decimal Equivalent of Hexadecimal number
    // Hexadecimal Number: 19FDA16

    // 19FDE16 can be written as 19FDA

    // Step 1: ((1 x 164) + (9 x 163) + (F x 162) + (D x 161) + (A x 160)) 10

    // Step 2: ((1 x 164) + (9 x 163) + (15 x 162) + (13 x 161) + (10 x 160)) 10

    // Step 3: (65536+ 36864 + 3840 + 208 + 10) 10

    // Step 4: 106458

    // Conclusion
    // In this article, we have seen a Number system that is used to communicate with a computer along with decimal conversion.  I hope you will find this article helpful.