const fs = require('fs');
const file = './data/data.json';

let read_json_file = () => {
    let file = './data/data.json';
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
};

exports.add_laptop = (laptop) => {
    let laptops = JSON.parse(read_json_file());
    laptops[laptops.length] = laptop;
    fs.writeFile('./data/data.json',JSON.stringify(laptops), err => {
        if(err) console.log(err.message);
        else console.log("Wrote to file successfully");
    });
};

exports.reset_json = (json) => {
    fs.writeFile(file, JSON.stringify(json), err => {
        if (err) console.log(err.message);
        else console.log("Wrote to file successfully");
    });
}