const fs = require('fs');

let read_json_file = () => {
    let file = '../Resources/Foodjson.json';
    return fs.readFileSync(file);
}

exports.list = () => {
    return JSON.parse(read_json_file());
};

exports.query_by_arg = (value) => {
    if (value !== "Raleigh" && value !== "Durham"){
        return null;
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

exports.post_food = (food) => {
    if (food.hasOwnProperty("name") && food.hasOwnProperty("brand") && food.hasOwnProperty("weight") && food.hasOwnProperty("calories") 
    && food.hasOwnProperty("price") && Object.keys(food).length == 5) {
        let results = JSON.parse(read_json_file());
        results[results.length] = food;
        const data = JSON.stringify(results);
        fs.writeFile("../Resources/Foodjson.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
        return food;
    }
    throw new Error("Invalid food object: " + food);
}

exports.reset_json = (content) => {
    const data = JSON.stringify(content);
        fs.writeFile("../Resources/Foodjson.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
}