const fs = require('fs')

function deleteThis(file) {
    try {
        fs.unlink(file, function (err) {
            if (err) {
                console.error(err.toString());
            } else {
                console.warn(file + ' deleted');
            }
        });
    } catch (e) {
        console.log(e.toString())
    }

}

const deleteFile = (file, res) => {
    var stream = fs.createReadStream(file);
    stream.pipe(res).once("close", function () {
        stream.destroy(); // makesure stream closed, not close if download aborted.
        deleteThis(file);
    });
}

module.exports = deleteFile