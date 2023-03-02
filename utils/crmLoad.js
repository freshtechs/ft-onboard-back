// #1 cargar cliente como potencial en CRM

const CRM_API_KEY = "+ujWcF2QOV/RY9L8G0L/9Cupwwi3OsVt6pBRi/pCWC6LkPdT1YaIPV9FRmZBgUVS"
const CRM_URL = "https://ccs.freshtechs.com.ve"
const fetch = require('node-fetch');

const singleCrearClientePotencial = async (user) => {
  const { nombre, apellido, email, telefono, latitud, longitud,
    nombreDeVivienda, numeroDeVivienda, cedula
  } = user;
  const [latitudFormat, longitudFormat] = [Number(latitud), Number(longitud)];
  let fullAddress = `${nombreDeVivienda}, ${numeroDeVivienda}`;
  let body = {
    "isLead": false,
    "clientType": 1,
    "firstName": nombre,
    "lastName": apellido,
    "street1": fullAddress,
    "city": "Caracas",
    "countryId": 254,
    "zipCode": "1060",
    "fullAddress": fullAddress,
    "invoiceAddressSameAsContact": true,
    "organizationId": 1,
    "username": email,
    "addressGpsLat": latitudFormat ?? 0,
    "addressGpsLon": longitudFormat ?? 0,
    "contacts": [{
      "email": email,
      "phone": "+58" + telefono.substring(1),
      "name": `${nombre} ${apellido}`,
      "isBilling": true,
      "isContact": true,
    }],
    "attributes": [{
      "customAttributeId": 5,
      "value": "1"
    },
    {
      "customAttributeId": 6, "value": cedula
    }
    ],
    "addressData": {
      "type": "GoogleMaps",
      "formattedAddress": fullAddress,
      "latitude": latitudFormat,
      "longitude": longitudFormat,
      "addressComponents": []
    }
  }

  let headers = {
    "Accept": "application/json",
    "X-Auth-App-Key": CRM_API_KEY,
    "Content-Type": "application/json"
  }
  let options = {
    "headers": headers,
    "method": "post",
    "body": JSON.stringify(body),
  }
  let responseText = await fetch(CRM_URL + "/crm/api/v1.0/clients", options);
  let responseJson = await responseText.json();
  console.log(responseJson);
  if (responseJson.id) {
    return responseJson.id
  } else {
    return null;
  }
}

module.exports = singleCrearClientePotencial