module.exports = ({
    day, month, year, nombre, apellido, cedula, metodoDePago, comprobanteURL, totalRecaudado, numeroReferencia,
    titularCuenta, contratista
}) => {
    return `<html>

    <head>
        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <style type="text/css">
            @import url('https://themes.googleusercontent.com/fonts/css?kit=cXxCiXacHPaqkz2Db3A6gOdu8NCjfCLmCp0sVMGUDOs');
    
            ol {
                margin: 0;
                padding: 0
            }
    
            table td,
            table th {
                padding: 0
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
                background-color: #d8d8d8;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 80.2pt;
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
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                background-color: #d8d8d8;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 124.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c5 {
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
                width: 73.5pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c28 {
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
                width: 73.5pt;
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
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 122.2pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c13 {
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
                width: 443.2pt;
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
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 246.8pt;
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
                width: 196.5pt;
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
                width: 122.2pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c16 {
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
                width: 123pt;
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
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 124.5pt;
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
                vertical-align: bottom;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 276.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c8 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 13pt;
                font-family: "Calibri";
                font-style: normal
            }
    
            .c0 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 12pt;
                font-family: "Roboto";
                font-style: normal
            }
    
            .c14 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c6 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Calibri";
                font-style: normal
            }
    
            .c1 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                text-align: left;
                height: 11pt
            }
    
            .c25 {
                margin-left: auto;
                border-spacing: 0;
                border-collapse: collapse;
                margin-right: auto
            }
    
            .c2 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                text-align: center
            }
    
            .c7 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                text-align: left
            }
    
            .c4 {
                font-size: 12pt;
                font-family: "Roboto";
                font-weight: 400
            }
    
            .c27 {
                background-color: #ffffff;
                max-width: 481.5pt;
                padding: 9pt 72pt 72pt 58.5pt
            }
    
            .c12 {
                orphans: 2;
                widows: 2
            }
    
            .c23 {
                height: 26.2pt
            }
    
            .c10 {
                height: 29.2pt
            }
    
            .c20 {
                font-size: 16pt
            }
    
            .c3 {
                height: 369pt
            }
    
            .c22 {
                height: 57.8pt
            }
    
            .c15 {
                height: 49.6pt
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
    
    <body class="c27 doc-content">
        <img alt="" src="https://drive.google.com/uc?export=download&id=1LD1IKhjM19VbYEQYp-UWDALrsxY6oCkb"
            style="overflow: hidden; position:absolute; margin-top: 20px;  margin-left: 20px; border: 0.00px solid #000000; width: 316.50px; height: 61.37px;">
        <table class="c25">
            <tr class="c22">
                <td class="c18" colspan="3" rowspan="1">
                    <p class="c1"><span class="c6"></span></p>
                </td>
                <td class="c24" colspan="2" rowspan="1">
                    <p class="c2 c12"><span class="c20">Recibo de pago</span></p>
                </td>
            </tr>
            <tr class="c23">
                <td class="c17" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">Cliente:</span></p>
                </td>
                <td class="c21" colspan="2" rowspan="1">
                    <p class="c2"><span class="c0">${nombre} ${apellido}</span></p>
                </td>
                <td class="c19" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">C&eacute;dula Identidad / Rif de la empresa</span></p>
                </td>
                <td class="c26" colspan="1" rowspan="1">
                    <p class="c2"><span class="c0">${cedula}</span></p>
                </td>
            </tr>
            <tr class="c10">
                <td class="c17" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">Total Recaudado</span></p>
                </td>
                <td class="c13" colspan="4" rowspan="1">
                    <p class="c2"><span class="c0">${totalRecaudado}</span></p>
                </td>
            </tr>
            <tr class="c10">
                <td class="c17" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">M&eacute;todo de Pago </span></p>
                </td>
                <td class="c13" colspan="4" rowspan="1">
                    <p class="c2"><span class="c0">${metodoDePago}</span></p>
                </td>
            </tr>
            <tr class="c10">
                <td class="c17" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">Fecha de Pago </span></p>
                </td>
                <td class="c13" colspan="4" rowspan="1">
                    <p class="c2"><span class="c4">${day}/${month}/${year}</span></p>
                </td>
            </tr>
            <tr class="c10">
                <td class="c17" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">N&deg; de Referencia</span></p>
                </td>
                <td class="c13" colspan="4" rowspan="1">
                    <p class="c2"><span class="c0">${numeroReferencia}</span></p>
                </td>
            </tr>
            <tr class="c10">
                <td class="c17" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">Titular o Remitente </span></p>
                </td>
                <td class="c13" colspan="4" rowspan="1">
                    <p class="c2"><span class="c0">${titularCuenta}</span></p>
                </td>
            </tr>
            <tr class="c3">
                <td class="c17" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">Comprobante de Pago </span></p>
                </td>
                <td class="c13" colspan="4" rowspan="1">
                    <p class="c2"><span class="c0">${comprobanteURL}</span></p>
                </td>
            </tr>
            <tr class="c15">
                <td class="c17" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0">Entrega conforme</span></p>
                </td>
                <td class="c13" colspan="4" rowspan="1">
                    <p class="c2"><span class="c0">${contratista}</span></p>
                </td>
            </tr>
        </table>
        <p class="c1 c12"><span class="c14"></span></p>
    </body>
    
    </html>`
};