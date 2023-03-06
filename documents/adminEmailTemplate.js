function formatMyFecha(fecha) {
    let date = new Date(fecha);
    const day = ('0' + date.getDate()).slice(-2); // add leading zero to day and slice last 2 characters
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // add leading zero to month and slice last 2 characters
    const year = date.getFullYear(); // get full year
    const finalFecha = `${day}/${month}/${year}`;
    return finalFecha
}

function adminEmailTemplate(client, reciboPagoCrmPath) {
    const {
        nombre, apellido, serviciosContratados, nombreDeVivienda, numeroDeVivienda,
        fechaDeInstalacion, montoInstalacion, totalRecaudado, metodoDePago
    } = client;

    const finalFechaInstalacion = formatMyFecha(fechaDeInstalacion)
    let fullAddress = `Av. Francisco Solano, Sans Souci, Edif. ${nombreDeVivienda}, apto #${numeroDeVivienda} , Chacao, Edo. Miranda`;

    return `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="utf-8"> <!-- utf-8 works for most cases -->
        <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title>¡Bienvenida a Fresh Techs!</title> <!-- The title tag shows in email notifications, like Android 4.4. -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
        <!-- Custom styles. -->
        <style>
            html,
            body {
                margin: 0 auto !important;
                padding: 0 !important;
                height: 100% !important;
                width: 100% !important;
                background: #f1f1f1;
            }
    
            /* What it does: Stops email clients resizing small text. */
            * {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
    
            /* What it does: Centers email on Android 4.4 */
            div[style*="margin: 16px 0"] {
                margin: 0 !important;
            }
    
            /* What it does: Stops Outlook from adding extra spacing to tables. */
            table,
            td {
                mso-table-lspace: 0pt !important;
                mso-table-rspace: 0pt !important;
            }
    
            /* What it does: Fixes webkit padding issue. */
            table {
                border-spacing: 0 !important;
                border-collapse: collapse !important;
                table-layout: fixed !important;
                margin: 0 auto !important;
            }
    
            /* What it does: Uses a better rendering method when resizing images in IE. */
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
            a {
                text-decoration: none;
            }
    
            /* What it does: A work-around for email clients meddling in triggered links. */
            *[x-apple-data-detectors],
            /* iOS */
            .unstyle-auto-detected-links *,
            .aBn {
                border-bottom: 0 !important;
                cursor: default !important;
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
            .a6S {
                display: none !important;
                opacity: 0.01 !important;
            }
    
            /* What it does: Prevents Gmail from changing the text color in conversation threads. */
            .im {
                color: inherit !important;
            }
    
            /* If the above doesn't work, add a .g-img class to any image in question. */
            img.g-img+div {
                display: none !important;
            }
    
            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
            /* Create one of these media queries for each additional viewport size you'd like to fix */
    
            /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                u~div .email-container {
                    min-width: 320px !important;
                }
            }
    
            /* iPhone 6, 6S, 7, 8, and X */
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                u~div .email-container {
                    min-width: 375px !important;
                }
            }
    
            /* iPhone 6+, 7+, and 8+ */
            @media only screen and (min-device-width: 414px) {
                u~div .email-container {
                    min-width: 414px !important;
                }
            }
    
            .primary {
                background: #62ce38;
            }
    
            .bg_white {
                background: #ffffff;
            }
    
            .bg_light {
                background: #fafafa;
            }
    
            .bg_black {
                background: #000000;
            }
    
            .bg_dark {
                background: rgba(0, 0, 0, .8);
            }
    
            .email-section {
                padding: 2.5em;
            }
    
            /*BUTTON*/
            .btn {
                padding: 5px 15px;
                display: inline-block;
            }
    
            .btn.btn-primary {
                border-radius: 5px;
                background: #62ce38;
                ;
                color: #ffffff;
            }
    
            .btn.btn-white {
                border-radius: 5px;
                background: #ffffff;
                color: #000000;
            }
    
            .btn.btn-white-outline {
                border-radius: 5px;
                background: transparent;
                border: 1px solid #fff;
                color: #fff;
            }
    
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'Poppins', sans-serif;
                color: #000000;
                margin-top: 0;
            }
    
            body {
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 15px;
                line-height: 1.8;
                color: rgba(0, 0, 0, .4);
            }
    
            a {
                color: #0d0cb5;
            }
    
            table {}
    
            /*LOGO*/
    
            .logo h1 {
                margin: 0;
            }
    
            .logo h1 a {
                color: #000000;
                font-size: 20px;
                font-weight: 700;
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;
            }
    
            .navigation {
                padding: 0;
            }
    
            .navigation li {
                list-style: none;
                display: inline-block;
                ;
                margin-left: 5px;
                font-size: 13px;
                font-weight: 500;
            }
    
            .navigation li a {
                color: rgba(0, 0, 0, .4);
            }
    
            /*HERO*/
            .hero {
                position: relative;
                z-index: 0;
            }
    
            .hero .overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                content: '';
                width: 100%;
                background: #000000;
                z-index: -1;
                opacity: .3;
            }
    
            .hero .icon {}
    
            .hero .icon a {
                display: block;
                width: 60px;
                margin: 0 auto;
            }
    
            .hero .text {
                color: rgba(255, 255, 255, .8);
            }
    
            .hero .text h2 {
                color: #ffffff;
                font-size: 30px;
                margin-bottom: 0;
            }
    
    
            /*HEADING SECTION*/
            .heading-section {}
    
            .heading-section h2 {
                color: #000000;
                font-size: 20px;
                margin-top: 0;
                line-height: 1.4;
                font-weight: 700;
                text-transform: uppercase;
            }
    
            .heading-section .subheading {
                margin-bottom: 20px !important;
                display: inline-block;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: rgba(0, 0, 0, .4);
                position: relative;
            }
    
            .heading-section .subheading::after {
                position: absolute;
                left: 0;
                right: 0;
                bottom: -10px;
                content: '';
                width: 100%;
                height: 2px;
                background: #0d0cb5;
                margin: 0 auto;
            }
    
            .heading-section-white {
                color: rgba(255, 255, 255, .8);
            }
    
            .heading-section-white h2 {
                font-family: 'Poppins', sans-serif;
                line-height: 1;
                padding-bottom: 0;
            }
    
            .heading-section-white h2 {
                color: #ffffff;
            }
    
            .heading-section-white .subheading {
                margin-bottom: 0;
                display: inline-block;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: rgba(255, 255, 255, .4);
            }
    
    
            .icon {
                text-align: center;
            }
    
            .icon img {}
    
    
            /*SERVICES*/
            .services {
                background: rgba(0, 0, 0, .03);
            }
    
            .text-services {
                padding: 10px 10px 0;
                text-align: center;
            }
    
            .text-services h3 {
                font-size: 16px;
                font-weight: 600;
            }
    
            .services-list {
                padding: 0;
                margin: 0 0 20px 0;
                width: 100%;
                float: left;
            }
    
            .services-list img {
                float: left;
            }
    
            .services-list .text {
                width: calc(100% - 60px);
                float: right;
            }
    
            .services-list h3 {
                margin-top: 0;
                margin-bottom: 0;
            }
    
            .services-list p {
                margin: 0;
            }
    
            /*BLOG*/
            .text-services .meta {
                text-transform: uppercase;
                font-size: 14px;
            }
    
            /*TESTIMONY*/
            .text-testimony .name {
                margin: 0;
            }
    
            .text-testimony .position {
                color: rgba(0, 0, 0, .3);
    
            }
    
    
            /*VIDEO*/
            .img {
                width: 100%;
                height: auto;
                position: relative;
            }
    
            .img .icon {
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                bottom: 0;
                margin-top: -25px;
            }
    
            .img .icon a {
                display: block;
                width: 60px;
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -25px;
            }
    
    
    
            /*COUNTER*/
            .counter {
                width: 100%;
                position: relative;
                z-index: 0;
            }
    
            .counter .overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                content: '';
                width: 100%;
                background: #000000;
                z-index: -1;
                opacity: .3;
            }
    
            .counter-text {
                text-align: center;
            }
    
            .counter-text .num {
                display: block;
                color: #ffffff;
                font-size: 34px;
                font-weight: 700;
            }
    
            .counter-text .name {
                display: block;
                color: rgba(255, 255, 255, .9);
                font-size: 13px;
            }
    
    
            /*FOOTER*/
    
            .footer {
                color: rgba(255, 255, 255, .5);
    
            }
    
            .footer .heading {
                color: #ffffff;
                font-size: 20px;
            }
    
            .footer ul {
                margin: 0;
                padding: 0;
            }
    
            .footer ul li {
                list-style: none;
                margin-bottom: 10px;
            }
    
            .footer ul li a {
                color: rgba(255, 255, 255, 1);
            }
    
    
            @media screen and (max-width: 500px) {
    
                .icon {
                    text-align: left;
                }
    
                .text-services {
                    padding-left: 0;
                    padding-right: 20px;
                    text-align: left;
                }
    
            }
        </style>
    
    </head>
    
    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
        <center style="width: 100%; background-color: #f1f1f1;">
            <div
                style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
                &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                <!-- BEGIN BODY -->
                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: auto;">
                    <tr>
                        <td valign="top" class="bg_white" style="padding: 1em 2.5em;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="100%" class="logo">
                                        <a href="https://freshtechs.com.ve">
                                            <img src='https://drive.google.com/uc?export=download&id=1LD1IKhjM19VbYEQYp-UWDALrsxY6oCkb'
                                                alt=""
                                                style="width: 40vw; max-width: 100%; height: auto; margin: auto; display: block;">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr><!-- end tr -->
                    <tr>
                        <td valign="middle" class="hero bg_white">
                            <div class="overlay"></div>
                            <table>
                                <tr>
                                    <td>
                                        <div class="text" style="padding: 0 3em; text-align: center;">
                                            <h2 style="color: black;">Nuevo contrato de cliente:<br> ${nombre} ${apellido} <br>
                                                Plan: ${serviciosContratados}
                                            </h2>
                                            
                                            <h3 style="color: gray">Lugar de instalacion: </h3><h3 style="color: black;">${fullAddress}</h3>
                                            <h3 style="color: gray">Fecha de instalacion: </h3><h3 style="color: black;">${finalFechaInstalacion}</h3>
                                            <h3 style="color: gray">El monto de la instalación fue de </h3><h3 style="color: black;">${montoInstalacion}$</h3>
                                            <h3 style="color: gray">El total recaudado fue de </h3><h3 style="color: black;">${totalRecaudado}$</h3>
                                            <h3 style="color: gray">El método de pago fue </h3><h3 style="color: black;">${metodoDePago}</h3>
    
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr><!-- end tr -->
                    <tr>
                        <td class="bg_white">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td class="bg_white email-section">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
    
                                                <td valign="top" width="100%"
                                                    style="padding-top: 20px; background: rgba(0,0,0,.08);"
                                                    class="services">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                                        width="100%">
                                                        <tr>
                                                            <td class="icon">
                                                                <img src='https://drive.google.com/uc?export=download&id=1c3i8oK9uBhhkeYM70tbiUD-wG7LnKlI2'
                                                                    alt=""
                                                                    style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block;">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-services">
                                                                <h3>Recibo de Pago</h3>
                                                                <p><a href="${reciboPagoCrmPath}"
                                                                        class="btn btn-primary">Ver
                                                                        Recibo</a></p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr><!-- end: tr -->
                            </table>
    
                        </td>
                    </tr><!-- end:tr -->
                    <!-- 1 Column Text + Button : END -->
                </table>
                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: auto;">
                    <tr>
                        <td valign="middle" class="bg_black footer email-section">
                            <table>
                                <tr>
                                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
                                                    <h3 class="heading">Dirección Maracaibo</h3>
                                                    <ul>
                                                        <li><span class="text">Av.4 Bella c/calle 59. C.C. La Suiza
                                                                #58A-127, Maracaibo, Edo. Zulia</span></li>
                                                        <li><span class="text">+58 424 664 6255</span></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
                                                    <h3 class="heading">Dirección Caracas</h3>
                                                    <ul>
                                                        <li><span class="text">Av. Principal del Bosque, Edif. Pichincha.
                                                                Piso 1 Local 1
                                                                Chacaíto,
                                                                Caracas</span></li>
                                                        <li><span class="text">+58 424 686 5826</span></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: left; padding-left: 10px;">
                                                    <h3 class="heading">Redes Sociales</h3>
                                                    <table class="es-table-not-adapt es-social" cellspacing="0"
                                                        cellpadding="0" role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr style="border-collapse:collapse">
                                                            <td valign="top" align="center"
                                                                style="padding:0;Margin:0;padding-right:10px"><a
                                                                    href="https://twitter.com/freshtechsve"
                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#A5A29B;font-size:14px"><img
                                                                        title="Twitter"
                                                                        src="https://zpscbt.stripocdn.email/content/assets/img/social-icons/circle-white/twitter-circle-white.png"
                                                                        alt="Tw" width="32" height="32"
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                            </td>
                                                            <td valign="top" align="center"
                                                                style="padding:0;Margin:0;padding-right:10px"><a
                                                                    href="https://facebook.com/freshtechsve"
                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#A5A29B;font-size:14px"><img
                                                                        title="Facebook"
                                                                        src="https://zpscbt.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png"
                                                                        alt="Fb" width="32" height="32"
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                            </td>
                                                            <td valign="top" align="center" style="padding:0;Margin:0"><a
                                                                    href="https://instagram.com/freshtechsve"
                                                                    target="_blank"
                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#A5A29B;font-size:14px"><img
                                                                        title="Instagram"
                                                                        src="https://zpscbt.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png"
                                                                        alt="Ig" width="32" height="32"
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                            </td>
    
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="text-align: center; padding-top: 20px;">
                                                    <h3 class="heading">Página web</h3>
                                                    <a style="color: rgba(255, 255, 255, .5);"
                                                        href="https://freshtechs.com.ve">
                                                        freshtechs.com.ve</a>
    
    
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr><!-- end: tr -->
                    <tr>
                        <td valign="middle" class="bg_black footer email-section" style="padding-top: 1vw;">
                            <table>
                                <tr>
                                    <td valign="top" width="70%">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: left; padding-right: 10px;">
    
                                                    <ul>
                                                        <li><span class="text">
                                                                2023 Fresh Techs C.A. <br>
                                                                RIF: J-40669457-6.<br>
                                                                Habilitación CONATEL # HGTS-00561
                                                            </span></li>
                                                    </ul>
                                                </td>
    
                                            </tr>
                                        </table>
                                    </td>
                                    <td valign="top" width="30%">
                                        <img src='https://drive.google.com/uc?export=download&id=1-GUkDH-x6Am6s1MXLtrqCp9c6-onbGzr'
                                            alt=""
                                            style="width: 12vw; max-width: 100%; height: auto; margin: auto; display: block;">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
    
            </div>
        </center>
    </body>
    
    </html>`
}

module.exports = adminEmailTemplate