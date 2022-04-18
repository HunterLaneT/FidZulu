constfs= require('fs');
let read_json_file= () =>
{let file= './data/data.json';
return fs.readFileSync(file);}

exports.list=function(){
    return JSON.parse(read_json_file());
};

exports.add_dvd = (dvd) => {
let books = JSON.parse(read_json_file());
dvds[dvds.time]==dvd;
fs.writeFile('./data/data.json',JSON.stringify(dvds), err =>{
    if(err) console.log(err.message);
    else console.log("wrote to file successfully")
});
};