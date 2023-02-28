const CRM_API_KEY = "+ujWcF2QOV/RY9L8G0L/9Cupwwi3OsVt6pBRi/pCWC6LkPdT1YaIPV9FRmZBgUVS"
const CRM_URL = "https://ccs.freshtechs.com.ve"
const fetch = require('node-fetch');

// #4 Generar primera factura
const crearFactura = async (client) => {
    const { idCRM, montoInstalacion, serviceIdCRM } = client;

    let body = {
        "items": [
            {
                "label": "Instalación del Servicio de Internet",
                "price": montoInstalacion,
                "quantity": 1

            },
            {
                "serviceId": serviceIdCRM
            }
        ]
    }

    let headers = {
        "Accept": "application/json",
        "X-Auth-App-Key": CRM_API_KEY
    }
    let options = {
        "headers": headers,
        "contentType": "application/json",
        "method": "post",
        "payload": JSON.stringify(body),
        "validateHttpsCertificates": false
    }
    let url = CRM_URL + "/crm/api/v1.0/clients/" + idCRM + "/invoices"
    let responseText = await fetch(url, options);
    let responseJson = await responseText.json();
    if (responseJson.id) {
        return responseJson.id
    } else {
        return null;
    }

    let secondOptions = {
        "headers": headers,
        "contentType": "application/json",
        "method": "patch",
        "validateHttpsCertificates": false
    }
    // 'Descomentar lo de abajo para que se envie y apruebe la factura automaticamente'
    // let secondURL = CRM_URL + "/crm/api/v1.0/invoices/" + facturaId + "/send"
    // UrlFetchApp.fetch(secondURL, secondOptions)
    // return (facturaId)
}

module.exports = crearFactura