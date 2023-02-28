// # 3 Crear un servicio y asociarlo al cliente existente

const CRM_API_KEY = "+ujWcF2QOV/RY9L8G0L/9Cupwwi3OsVt6pBRi/pCWC6LkPdT1YaIPV9FRmZBgUVS"
const CRM_URL = "https://ccs.freshtechs.com.ve"
const fetch = require('node-fetch');

const crearServicio = async (client) => {
    const { fechaDeInstalacion, idCRM, serviciosContratados } = client;

    console.log("Fecha de instalacion is:", fechaDeInstalacion)
    // let desiredDate = Utilities.formatDate(fechaDeInstalacion, "UTC", "yyyy-MM-dd'T'HH:mm:ss'+0000'");
    // Logger.log(desiredDate)
    servicioContratadoId = getCrmServiceId(serviciosContratados)
    let body = {
        "servicePlanPeriodId": servicioContratadoId,
        "sendEmailsAutomatically": false,
        "useCreditAutomatically": true,
        // "invoicingStart": desiredDate,
        "isQuoted": false
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
    let url = CRM_URL + "/crm/api/v1.0/clients/" + idCRM + "/services"
    let responseText = await fetch(url, options);
    let responseJson = await responseText.json();

    if (responseJson.id) {
        return responseJson.id
    } else {
        return null;
    }
}

function getCrmServiceId(serviciosContratados) {
    let servicioContratadoId;
    if (serviciosContratados.includes("TV")) {
        let servicioInternet = ''
        servicioInternet = serviciosContratados.split(',')[0]

        if (servicioInternet.includes("60 Mbps")) {
            servicioContratadoId = servicePlan60MbpsTvId
        } else if (servicioInternet.includes("100 Mbps")) {
            servicioContratadoId = servicePlan100MbpsTvId
        } else {
            servicioContratadoId = servicePlan200MbpsTvId
        }

    } else {

        if (serviciosContratados.includes("60 Mbps")) {
            servicioContratadoId = servicePlan60MbpsId
        } else if (serviciosContratados.includes("100 Mbps")) {
            servicioContratadoId = servicePlan100MbpsId
        } else {
            servicioContratadoId = servicePlan200MbpsId
        }
    }
    console.log(`Servicio contratado es: ${servicioContratadoId}`)
    return servicioContratadoId
}

module.exports = crearServicio
