const fs = require('fs')

async function deleteFile(file) {
    try {
        await fs.unlink(file, function (err) {
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

module.exports = deleteFile