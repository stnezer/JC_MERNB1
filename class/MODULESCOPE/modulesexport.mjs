
// we have three variable scope in javascript
// global scope: these are the variable you declare in a js file for the use of same file only

let fname = "Tolulope";
let lname = "Ebenezer";

function studentdetails() {

    var fullname = {
        fname, lname, 
    };
    console.log(fullname);

};
// studentdetails();

// we also have function scope, this are the variable used inside a function

function scope() {

    [
        wife = {
            name: "Abisola Ebenezer",
            motherMedianName: 'Olorungbogo',
            fathersName: "Amos",
            homeTown: "Republic of Benin",
            placeofBirth: "Nigeria",
            numberofChildren: 3,
        },
        father= {
            name: "Tolulope Ebenezer",
            motherMedianName: 'Olagundoye',
            fathersName: "Akinshola",
            homeTown: "Nigeria",
            placeofBirth: "Nigeria",
            numberofChildren: 3,
        },
        family= {
            nameofChildren: "Seth Ebenezer, Derrick Ebenezer, Phelix Ebenezer",
            placeofBirth: "Lagos Nigeria",
            AgeGroup: ["0-18", "0-5", "0-3"],
            school: "Great Faith Alive (GFA)",
        },
    ];
    console.log([wife, father, family]);
};
    // scope();

// the third variable scope is what we call modules scope, the process of exporting and importing a varibale or function from external js file


export default studentdetails;
export {scope, lname, fname};
