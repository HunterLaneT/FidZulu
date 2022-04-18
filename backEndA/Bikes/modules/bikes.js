const fs = require('fs');

let read_json_file = () => {
    let file = '../Resources/Bikejson.json';
    return fs.readFileSync(file);
}

exports.list = () => {
    return JSON.parse(read_json_file());
};

exports.query_by_arg = (value) => {
    if (value !== "Raleigh" && value !== "Durham"){
        throw new Error("Unknow parameter " + arg);
    }
    let results = JSON.parse(read_json_file());
    console.log("query by location: " + value);
    for (let i = 0; i < results.length; i++) {
        let product = results[i];
        if (value === "Raleigh") {
            product.price *= 1.075;
        } else if (value === "Durham") {
            product.price *= 1.08;
        }
        product.price = product.price.toFixed(2);
    }
    return results;
};
