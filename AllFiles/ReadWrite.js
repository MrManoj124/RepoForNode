const { readFile } = require('fs');

const Readmodule = () => {
    readFile('./TextFiles/Sample.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            console.log("File not found");
        } else {
            console.log(data);
        }
    });
};

module.exports.readfile = Readmodule;
