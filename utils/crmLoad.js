// #1 cargar cliente como potencial en CRM
const { model } = require('mongoose');
const fetch = require('node-fetch');

function formatMyFecha(fecha) {
  date = new Date(fecha);
  const day = ('0' + date.getDate()).slice(-2); // add leading zero to day and slice last 2 characters
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // add leading zero to month and slice last 2 characters
  const year = date.getFullYear(); // get full year
  const finalFecha = `${day}/${month}/${year}`;
  return finalFecha
}

const singleCrearClientePotencial = async (user) => {
  const {
    nombre, apellido, email, telefono, latitud, longitud,
    nombreDeVivienda, numeroDeVivienda, cedula, serviciosContratados,
    velocidad, montoInstalacion, mensualidad, modeloONU, macONU,
    serialONU, firmaURL, cedulaURL, nap, puertoNap, potenciaONU,
    metrosDrop, metrosUTP, conectoresSC, marcaRouterCliente, macRouterCliente,
    medicionURL, rutaURL, posicionURL, fechaDeInstalacion, notas,
    totalRecaudado, fechaDePago, metodoDePago, comprobanteURL, numeroReferencia, titularCuenta
  } = user;
  const [latitudFormat, longitudFormat] = [Number(latitud), Number(longitud)];
  const [servicioInternet, servicioTV] = serviciosContratados
  const finalFechaInstalacion = formatMyFecha(fechaDeInstalacion)
  const finalFechaDePago = formatMyFecha(fechaDePago)
  let fullAddress = `Av. Francisco Solano, Sans Souci, Edif. ${nombreDeVivienda}, apto #${numeroDeVivienda} , Chacao, Edo. Miranda`;
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
    },
    {
      "customAttributeId": 7, "value": `${servicioInternet} ${servicioTV}`
    },
    {
      "customAttributeId": 8, "value": velocidad || ''
    },
    {
      "customAttributeId": 9, "value": montoInstalacion.toString()
    },
    {
      "customAttributeId": 10, "value": mensualidad || ''
    },
    {
      "customAttributeId": 11, "value": modeloONU
    },
    {
      "customAttributeId": 12, "value": macONU
    },
    {
      "customAttributeId": 13, "value": serialONU
    },
    {
      "customAttributeId": 14, "value": firmaURL
    },
    {
      "customAttributeId": 15, "value": cedulaURL
    },
    {
      "customAttributeId": 16, "value": nap
    },
    {
      "customAttributeId": 17, "value": puertoNap.toString()
    },
    {
      "customAttributeId": 18, "value": potenciaONU.toString()
    },
    {
      "customAttributeId": 19, "value": metrosDrop.toString()
    },
    {
      "customAttributeId": 20, "value": metrosUTP.toString()
    },
    {
      "customAttributeId": 21, "value": conectoresSC.toString()
    },
    {
      "customAttributeId": 22, "value": marcaRouterCliente
    },
    {
      "customAttributeId": 23, "value": macRouterCliente
    },
    {
      "customAttributeId": 24, "value": medicionURL || ''
    },
    {
      "customAttributeId": 25, "value": rutaURL || ''
    },
    {
      "customAttributeId": 26, "value": posicionURL || ''
    },
    {
      "customAttributeId": 27, "value": finalFechaInstalacion
    },
    {
      "customAttributeId": 28, "value": notas || ''
    },
    {
      "customAttributeId": 29, "value": totalRecaudado.toString()
    },
    {
      "customAttributeId": 30, "value": finalFechaDePago
    },
    {
      "customAttributeId": 31, "value": metodoDePago
    },
    {
      "customAttributeId": 32, "value": comprobanteURL
    },
    {
      "customAttributeId": 33, "value": numeroReferencia
    },
    {
      "customAttributeId": 34, "value": titularCuenta
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
    "X-Auth-App-Key": process.env.CRM_API_KEY,
    "Content-Type": "application/json"
  }
  let options = {
    "headers": headers,
    "method": "post",
    "body": JSON.stringify(body),
  }
  let responseText = await fetch(process.env.CRM_URL + "/clients", options);
  let responseJson = await responseText.json();
  if (responseJson.id) {
    return responseJson.id
  } else {
    return null;
  }
}

module.exports = singleCrearClientePotencial