const CRM_API_KEY = "+ujWcF2QOV/RY9L8G0L/9Cupwwi3OsVt6pBRi/pCWC6LkPdT1YaIPV9FRmZBgUVS"
const CRM_URL = "https://ccs.freshtechs.com.ve"
const fetch = require('node-fetch');

// #5 Actualizar Servicio
const actualizarServicio = async (client) => {
    const { serviceIdCRM } = client;

    let body = {
        "sendEmailsAutomatically": true,
    }
    let headers = {
        "Accept": "application/json",
        "X-Auth-App-Key": CRM_API_KEY,
        "Content-Type": "application/json",
    }
    let options = {
        "headers": headers,
        "method": "patch",
        "body": JSON.stringify(body)
    }

    let url = CRM_URL + "/crm/api/v1.0/clients/" + "services/" + serviceIdCRM
    let responseText = await fetch(url, options);
    let responseJson = await responseText.json();
    if (responseJson.id) {
        return true
    } else {
        return false;
    }
}

module.exports = actualizarServicio