const fs = require('fs');
const file = './data/data.json';

let read_json_file = () => {
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
};

exports.add_book = (book) => {
    let books = JSON.parse(read_json_file());
    books[books.length] = book;
    fs.writeFile(file, JSON.stringify(books), err => {
        if(err) console.log(err.message);
        else console.log("Wrote to file successfully");
    });
};

exports.reset_json = (json) => {
    fs.writeFile(file, JSON.stringify(json), err => {
        if (err) console.log(err.message);
        else console.log("Wrote to file successfully");
    });
};