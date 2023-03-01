const fetch = require('node-fetch');
const API_VIVO_URL = "https://API.vivoplay.net/FreshTechs/regusr/"
const vivoUsername = "admFreshTechs"
const vivoToken = "s8Y8H1hA5cj7CBKaWSYV0a5aoQKzwesTDpFv0wzrdZJxVxrkCj"

const activarEnTV = async (client) => {
    const { nombre, apellido, email, cedula } = client;
    let responseText;
    let responseJson;

    let body = {
        "auth": {
            "log": vivoUsername,
            "tkn": vivoToken
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

    let url = API_VIVO_URL
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