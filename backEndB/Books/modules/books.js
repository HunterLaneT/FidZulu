const fs = require('fs');

let read_json_file = () => {
    let file = './data/data.json';
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
};

exports.add_book = (book) => {
    let books = JSON.parse(read_json_file());
    books[books.length] = book;
    fs.writeFile('./data/data.json',JSON.stringify(books), err => {
        if(err) console.log(err.message);
        else console.log("Wrote to file successfully");
    });
};