const fetch = require('node-fetch');

// #4 Generar primera factura
const crearFactura = async (client) => {
    const { idCRM, montoInstalacion, serviceIdCRM } = client;
    let responseText;
    let responseJson;

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
        "X-Auth-App-Key": process.env.CRM_API_KEY,
        "Content-Type": "application/json",
    }
    let options = {
        "headers": headers,
        "method": "post",
        "body": JSON.stringify(body)
    }
    let url = process.env.CRM_URL + "/clients/" + idCRM + "/invoices"
    console.log(url, options)
    try {
        responseText = await fetch(url, options);
        responseJson = await responseText.json();
    } catch (err) {
        console.log(err.message)
    }

    if (responseJson.id) {
        approveAndSendFactura(headers, responseJson.id)
        return responseJson.id
    } else {
        return null;
    }

    // envia automaticamente la factura a cliente
    async function approveAndSendFactura(headers, facturaId) {
        let secondOptions = {
            "headers": headers,
            "method": "patch",
        }
        let secondURL = process.env.CRM_URL + "/invoices/" + facturaId + "/send"
        await fetch(secondURL, secondOptions);

    }
}

module.exports = crearFactura