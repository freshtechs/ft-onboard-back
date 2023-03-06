const fetch = require('node-fetch');

// #5 Actualizar Servicio
const actualizarServicio = async (client) => {
    const { serviceIdCRM } = client;

    let body = {
        "sendEmailsAutomatically": true,
    }
    let headers = {
        "Accept": "application/json",
        "X-Auth-App-Key": process.env.CRM_API_KEY,
        "Content-Type": "application/json",
    }
    let options = {
        "headers": headers,
        "method": "patch",
        "body": JSON.stringify(body)
    }

    let url = process.env.CRM_URL + "/clients/services/" + serviceIdCRM
    let responseText = await fetch(url, options);
    let responseJson = await responseText.json();
    if (responseJson.id) {
        return true
    } else {
        return false;
    }
}

module.exports = actualizarServicio