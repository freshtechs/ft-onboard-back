const fetch = require('node-fetch');


const activarEnTV = async (client) => {
    const { nombre, apellido, email, cedula } = client;
    let responseText;
    let responseJson;

    let body = {
        "auth": {
            "log": process.env.vivoUsername,
            "tkn": process.env.vivoToken
        },
        "name": nombre,
        "lastName": apellido,
        "email": email,
        "userName": `ftV${cedula}`,
        "password": "ftiptv2023"
    }

    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
    let options = {
        "headers": headers,
        "method": "post",
        "body": JSON.stringify(body)
    }

    let url = process.env.API_VIVO_URL
    console.log(url, options)
    try {
        responseText = await fetch(url, options)
        console.log(responseText)
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = activarEnTV