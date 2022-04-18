constfs= require('fs');
let read_json_file= () =>
{let file= './data/data.json';
return fs.readFileSync(file);}