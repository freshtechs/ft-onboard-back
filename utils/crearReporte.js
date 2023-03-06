const fetch = require('node-fetch');
const fs = require('fs')
const downloadFile = require('./downloadFile')


// Reporte de Instalacion (PDF)
const crearReporte = async (client) => {
    const { nombre, apellido, idCRM } = client;
    let crmPath;
    let expressPath;

    let body = {
        "clientId": idCRM,
        "name": `Reporte Instalación Fresh Techs,C.A - ${nombre.toUpperCase()} ${apellido.toUpperCase()}.pdf`,
        "templateId": 2
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

    let url = process.env.CRM_URL + "/documents"
    let responseText = await fetch(url, options);
    let responseJson = await responseText.json();
    if (responseJson.id) {
        const documentId = responseJson.id
        const documentName = responseJson.name
        crmPath = `https://ccs.freshtechs.com.ve:1443${responseJson.path}`
        let secondUrl = `${process.env.CRM_URL}/documents/${documentId}/file`
        let secondOptions = {
            "headers": {
                "X-Auth-App-Key": process.env.CRM_API_KEY,
                "Content-Type": "application/json",
            },
            "method": "get"
        }
        expressPath = `./documents/generated/${documentName}`
        const contratoFile = await downloadFile(secondUrl, secondOptions, expressPath)
        if (contratoFile) return [expressPath, crmPath]
    } else {
        console.log('Loss')
        return false;
    }
}

module.exports = crearReporte