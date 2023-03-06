const CRM_API_KEY = "+ujWcF2QOV/RY9L8G0L/9Cupwwi3OsVt6pBRi/pCWC6LkPdT1YaIPV9FRmZBgUVS"
const CRM_URL = "https://ccs.freshtechs.com.ve/crm/api/v1.0"
const fetch = require('node-fetch');
const downloadFile = require('./downloadFile')


// #5 Actualizar Servicio
const crearContrato = async (client) => {
    const { nombre, apellido, idCRM } = client;
    let crmPath;
    let expressPath;

    let body = {
        "clientId": idCRM,
        "name": `Contrato Fresh Techs,C.A - ${nombre.toUpperCase()} ${apellido.toUpperCase()}.pdf`,
        "templateId": 1
    }
    let headers = {
        "Accept": "application/json",
        "X-Auth-App-Key": CRM_API_KEY,
        "Content-Type": "application/json",
    }
    let options = {
        "headers": headers,
        "method": "post",
        "body": JSON.stringify(body)
    }

    let url = CRM_URL + "/documents"
    let responseText = await fetch(url, options);
    let responseJson = await responseText.json();
    if (responseJson.id) {
        const documentId = responseJson.id
        const documentName = responseJson.name
        crmPath = `https://ccs.freshtechs.com.ve:1443${responseJson.path}`
        let secondUrl = `${CRM_URL}/documents/${documentId}/file`
        let secondOptions = {
            "headers": {
                "X-Auth-App-Key": CRM_API_KEY,
                "Content-Type": "application/json",
            },
            "method": "get"
        }
        expressPath = `./documents/generated/${documentName}`
        const contratoFile = downloadFile(secondUrl, secondOptions, expressPath)
        if (contratoFile) return [expressPath, crmPath]
    } else {
        console.log('Loss')
        return false;
    }
}

module.exports = crearContrato