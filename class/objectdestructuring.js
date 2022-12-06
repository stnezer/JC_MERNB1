function object() {

    let obj = {
        name: "dele",
        sch: "offa poly",
        age: 37,
        position: "firstborn"
    };

    let {name, age, position} = obj;
    console.log({name, age, position});
};

object();