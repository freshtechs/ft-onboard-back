const fetch = require('node-fetch');
const fs = require('fs')

const downloadFile = (async (u, o, path) => {
    const res = await fetch(u, o);
    const fileStream = fs.createWriteStream(path);
    try {
        await new Promise((resolve, reject) => {
            res.body.pipe(fileStream);
            res.body.on("error", reject);
            fileStream.on("finish", resolve);
        });
        return true
    } catch (e) {
        return false
    }
});

module.exports = downloadFile