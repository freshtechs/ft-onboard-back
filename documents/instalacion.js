module.exports = ({
    day,
    month,
    year,
    pdfValPotenciaONU,
    pdfValMetrosDrop,
    pdfValMetrosUTP,
    pdfValConectoresSC,
    pdfValNap,
    pdfValPuertoNap,
    pdfValMarcaRouterCliente,
    pdfValMacRouterCliente,
    serviciosContratados,
    nombreDeVivienda, numeroDeVivienda,
    latitud, longitud,
    serialONU,
    modeloONU,
    macONU,
    nombre, apellido, cedula, telefono, email, firmaURL
}) => {
    return `<html>

    <head>
        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <style type="text/css">
            @import url('https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98');
    
            ol {
                margin: 0;
                padding: 0
            }
    
            table td,
            table th {
                padding: 0
            }
    
            .c22 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                background-color: #d8d8d8;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 106.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c16 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                background-color: #ffffff;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 117.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c1 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                background-color: #d8d8d8;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 79.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c18 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                background-color: #d8d8d8;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 79.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c30 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 117.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c9 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: top;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 79.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c11 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: top;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 99pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c39 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 224.2pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c27 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 197.2pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c45 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 91.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c36 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 303.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c21 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 414.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c15 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: top;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 91.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c29 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 79.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c6 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: top;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 117.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c19 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 190.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c33 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 106.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c38 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 297pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c20 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 414.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c17 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 494.2pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c31 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 91.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c26 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 99pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c24 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 99pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c46 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 190.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c28 {
                border-right-style: solid;
                padding: 0pt 2pt 0pt 2pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 494.2pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c32 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 99pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c3 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: top;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 106.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c2 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c7 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Calibri";
                font-style: normal
            }
    
            .c5 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                text-align: left;
                height: 11pt
            }
    
            .c0 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                text-align: center
            }
    
            .c43 {
                margin-left: auto;
                border-spacing: 0;
                border-collapse: collapse;
                margin-right: auto
            }
    
            .c10 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                text-align: left
            }
    
            .c34 {
                max-width: 481.5pt;
                padding: 72pt 72pt 72pt 58.5pt
            }
    
            .c14 {
                font-weight: 700;
                font-family: "Calibri"
            }
    
            .c37 {
                orphans: 2;
                widows: 2
            }
    
            .c44 {
                font-weight: 400;
                font-family: "Calibri"
            }
    
            .c41 {
                height: 28.5pt
            }
    
            .c13 {
                height: 15pt
            }
    
            .c35 {
                background-color: #d8d8d8
            }
    
            .c40 {
                height: 77.2pt
            }
    
            .c23 {
                background-color: #ffffff
            }
    
            .c42 {
                background-color: #bfbfbf
            }
    
            .c25 {
                height: 29.2pt
            }
    
            .c8 {
                height: 26.2pt
            }
    
            .c4 {
                height: 15.8pt
            }
    
            .c12 {
                height: 0pt
            }
    
            .c47 {
                height: 31.5pt
            }
    
            .title {
                padding-top: 0pt;
                color: #000000;
                font-size: 26pt;
                padding-bottom: 3pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .subtitle {
                padding-top: 0pt;
                color: #666666;
                font-size: 15pt;
                padding-bottom: 16pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            li {
                color: #000000;
                font-size: 11pt;
                font-family: "Arial"
            }
    
            p {
                margin: 0;
                color: #000000;
                font-size: 11pt;
                font-family: "Arial"
            }
    
            h1 {
                padding-top: 20pt;
                color: #000000;
                font-size: 20pt;
                padding-bottom: 6pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h2 {
                padding-top: 18pt;
                color: #000000;
                font-size: 16pt;
                padding-bottom: 6pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h3 {
                padding-top: 16pt;
                color: #434343;
                font-size: 14pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h4 {
                padding-top: 14pt;
                color: #666666;
                font-size: 12pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h5 {
                padding-top: 12pt;
                color: #666666;
                font-size: 11pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h6 {
                padding-top: 12pt;
                color: #666666;
                font-size: 11pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                font-style: italic;
                orphans: 2;
                widows: 2;
                text-align: left
            }
        </style>
    </head>
    
    <body class="c23 c34 doc-content">
        <img alt="" src="https://drive.google.com/uc?export=download&id=1LD1IKhjM19VbYEQYp-UWDALrsxY6oCkb"
            style="overflow: hidden; position:absolute; margin-top: 20px;  margin-left: 20px; border: 0.00px solid #000000; width: 316.50px; height: 61.37px;">
    
        <table class="c43">
            <tr class="c13">
                <td class="c36" colspan="3" rowspan="4">
                    <p class="c5"><span class="c7"></span></p>
                </td>
                <td class="c31" colspan="1" rowspan="1">
                    <p class="c5"><span class="c7"></span></p>
                </td>
                <td class="c24" colspan="1" rowspan="1">
                    <p class="c5"><span class="c7"></span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c19" colspan="2" rowspan="1">
                    <p class="c10"><span class="c14">Fecha de Instalaci&oacute;n: ${day ?? ''}/${month ?? ''}/${year ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c19" colspan="2" rowspan="1">
                    <p class="c10"><span class="c14">Contratista:</span></p>
                </td>
            </tr>
            <tr class="c41">
                <td class="c19" colspan="2" rowspan="1">
                    <p class="c5"><span class="c7"></span></p>
                </td>
            </tr>
            <tr class="c8">
                <td class="c18" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Cliente:</span></p>
                </td>
                <td class="c39" colspan="2" rowspan="1">
                    <p class="c0"><span class="c7">${nombre ?? ''}</span></p>
                </td>
                <td class="c31 c35" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">C&eacute;dula Identidad / Rif de la empresa</span></p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c0"><span class="c7">${cedula ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c1" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Telefonos:</span></p>
                </td>
                <td class="c30" colspan="1" rowspan="1">
                    <p class="c0"><span class="c7">${telefono ?? ''}</span></p>
                </td>
                <td class="c22" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Correo Electronico:</span></p>
                </td>
                <td class="c19" colspan="2" rowspan="1">
                    <p class="c0"><span class="c7">${email ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c25">
                <td class="c1" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Direcci&oacute;n (Av, calle, Edif, Apto, Piso):</span></p>
                </td>
                <td class="c21" colspan="4" rowspan="1">
<!--                    <p class="c0"><span class="c7">Av. Francisco Solano, Sans Souci, {direccion}, Chacao, Caracas.</span>-->
                    <p class="c0"><span class="c7">${nombreDeVivienda ?? ''} ${numeroDeVivienda ?? ''} ${nombreDeVivienda || numeroDeVivienda ? ', Caracas' : ''}.</span>
                    </p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c27 c35" colspan="2" rowspan="1">
                    <p class="c10"><span class="c7">Coordendas del sitio</span></p>
                </td>
                <td class="c38" colspan="3" rowspan="1">
                    <p class="c5"><span class="c7">${latitud ?? '-'}, ${longitud ?? '-'}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c28" colspan="5" rowspan="1">
                    <p class="c5"><span class="c7">}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c28 c35" colspan="5" rowspan="1">
                    <p class="c0"><span class="c14">MATERIALES UTILIZADOS EN LA INSTALACI&Oacute;N SERVICIO FTTH</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c1" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Serial ONU</span></p>
                </td>
                <td class="c30" colspan="1" rowspan="1">
                    <p class="c0"><span class="c7">${serialONU ?? ''}</span></p>
                </td>
                <td class="c22" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">NAP de Instalacion</span></p>
                </td>
                <td class="c19 c23" colspan="2" rowspan="1">
                    <p class="c0"><span class="c7">${pdfValNap ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c1" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">MAC ONU</span></p>
                </td>
                <td class="c16" colspan="1" rowspan="1">
                    <p class="c0"><span class="c7">${macONU ?? ''}</span></p>
                </td>
                <td class="c22" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Puerto de la NAP</span></p>
                </td>
                <td class="c19 c23" colspan="2" rowspan="1">
                    <p class="c0"><span class="c7">${pdfValPuertoNap ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c1" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Modelo ONU</span></p>
                </td>
                <td class="c16" colspan="1" rowspan="1">
                    <p class="c0"><span class="c7">${modeloONU ?? ''}</span></p>
                </td>
                <td class="c22" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Potencia ONU</span></p>
                </td>
                <td class="c19 c23" colspan="2" rowspan="1">
                    <p class="c0"><span class="c7">${pdfValPotenciaONU ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c1" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Cable Drop</span></p>
                </td>
                <td class="c30" colspan="1" rowspan="1">
                    <p class="c0"><span class="c7">${pdfValMetrosDrop ?? ''} m</span></p>
                </td>
                <td class="c22" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Modelo Router</span></p>
                </td>
                <td class="c19" colspan="2" rowspan="1">
                    <p class="c0"><span class="c7">${pdfValMarcaRouterCliente ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c1" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Cable UTP</span></p>
                </td>
                <td class="c30" colspan="1" rowspan="1">
                    <p class="c0"><span class="c7">${pdfValMetrosUTP ?? ''} m</span></p>
                </td>
                <td class="c22" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">MAC Router</span></p>
                </td>
                <td class="c19" colspan="2" rowspan="1">
                    <p class="c0"><span class="c7">${pdfValMacRouterCliente ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c8">
                <td class="c29 c42" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Material Adicional:</span></p>
                </td>
                <td class="c30 c35" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Pachtcord (Mts):</span></p>
                </td>
                <td class="c22" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Conectores SC: ${pdfValConectoresSC ?? ''}</span></p>
                </td>
                <td class="c31 c35" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Canaletas:</span></p>
                </td>
                <td class="c24 c35" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Grapas:</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c28" colspan="5" rowspan="1">
                    <p class="c10"><span class="c14">SERVICIOS CONTRATADOS:</span><span class="c44">&nbsp;</span><span
                            class="c14">${serviciosContratados ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c13">
                <td class="c28 c42" colspan="5" rowspan="1">
                    <p class="c0"><span class="c14">Informe de instalaci&oacute;n</span></p>
                </td>
            </tr>
            <tr class="c40">
                <td class="c17" colspan="5" rowspan="5">
                    <p class="c0"><span class="c7"></span></p>
                </td>
            </tr>
            <tr class="c12"></tr>
            <tr class="c12"></tr>
            <tr class="c12"></tr>
            <tr class="c12"></tr>
            <tr class="c4">
                <td class="c28 c35" colspan="5" rowspan="1">
                    <p class="c0"><span class="c14">SERVICIO DE IPTV VIVO TV</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c29" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Nombre y Apellido:</span></p>
                </td>
                <td class="c20" colspan="4" rowspan="1">
                    <p class="c0"><span class="c7">${nombre ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c4">
                <td class="c29" colspan="1" rowspan="1">
                    <p class="c10"><span class="c7">Correo Electr&oacute;nico:</span></p>
                </td>
                <td class="c20" colspan="4" rowspan="1">
                    <p class="c0"><span class="c7">${email ?? ''}</span></p>
                </td>
            </tr>
            <tr class="c8">
                <td class="c27" colspan="2" rowspan="1">
                    <p class="c10"><span class="c7">Cantidad de dispositivos configurados: </span></p>
                </td>
                <td class="c38" colspan="3" rowspan="1">
                    <p class="c10"><span class="c7">MAC FIRE TV:</span></p>
                </td>
            </tr>
            <tr class="c47">
                <td class="c27" colspan="2" rowspan="2">
                    <p class="c5"><span class="c7"></span></p>
                </td>
                <td class="c33" colspan="1" rowspan="3">
                    <p class="c5"><span class="c7"></span></p>
                </td>
                <td class="c46" colspan="2" rowspan="2">
                    <p class="c0"><img src=${firmaURL ?? ''}></p>
                </td>
            </tr>
            <tr class="c12"></tr>
            <tr class="c4">
                <td class="c27" colspan="2" rowspan="1">
                    <p class="c10"><span class="c7">Firma Contratista</span></p>
                </td>
                <td class="c19" colspan="2" rowspan="1">
                    <p class="c10"><span class="c7">Firma Cliente</span></p>
                </td>
            </tr>
        </table>
        <p class="c5 c37"><span class="c2"></span></p>
    </body>
    
    </html>`
};