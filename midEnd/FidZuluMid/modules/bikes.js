const fs = require('fs');
let read_json_file = () => {
    let file = './data/Bikejson.json';
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
};

exports.query_by_arg = (arg, value) => {

};