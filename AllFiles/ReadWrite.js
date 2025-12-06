const {readFileSync, writeFileSync} = require('fs');

const Readmodule = () => {
    readFile('./TextFiles/Sample.txt', 'utf8', (err, data) => {
if (err){
    console.error(err);
    console.log("File not found");
    return;
}
else{
    console.log(data);
}
    });
};

exports.readfile = Readmodule;