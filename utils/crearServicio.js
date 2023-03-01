// # 3 Crear un servicio y asociarlo al cliente existente

const CRM_API_KEY = "+ujWcF2QOV/RY9L8G0L/9Cupwwi3OsVt6pBRi/pCWC6LkPdT1YaIPV9FRmZBgUVS"
const CRM_URL = "https://ccs.freshtechs.com.ve"
const fetch = require('node-fetch');
const servicePlan60MbpsId = 1213
const servicePlan100MbpsId = 1219
const servicePlan200MbpsId = 1225
const servicePlan60MbpsTvId = 1249
const servicePlan100MbpsTvId = 1255
const servicePlan200MbpsTvId = 1261

const crearServicio = async (client) => {
    const { fechaDeInstalacion, idCRM, serviciosContratados } = client;
    let responseText;
    let responseJson;

    const servicioContratadoId = getCrmServiceId(serviciosContratados)
    let body = {
        "servicePlanPeriodId": servicioContratadoId,
        "sendEmailsAutomatically": false,
        "useCreditAutomatically": true,
        "invoicingStart": fechaDeInstalacion,
        "isQuoted": false
    }
    let headers = {
        "Accept": "application/json",
        "X-Auth-App-Key": CRM_API_KEY,
        "Content-Type": "application/json"
    }
    let options = {
        "headers": headers,
        "method": "post",
        "body": JSON.stringify(body)
    }
    let url = CRM_URL + "/crm/api/v1.0/clients/" + idCRM + "/services"
    try {
        responseText = await fetch(url, options);
        responseJson = await responseText.json();
    } catch (err) {
        console.log(err.message)
    }

    if (responseJson.id) {
        return responseJson.id
    } else {
        return null;
    }
}

function getCrmServiceId(serviciosContratados) {
    let servicioContratadoId;
    if (serviciosContratados.includes("TV")) {
        const servicioInternet = serviciosContratados[0];

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
    return servicioContratadoId
}



module.exports = crearServicio
