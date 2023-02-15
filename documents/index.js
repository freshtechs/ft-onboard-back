module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
    return `
<!doctype html>
<html>

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <style type="text/css">
        @import url('https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLcWpXo_CmM6erK5IinBZ-8PVus-cM8ZA-pXCeyO7rfhH96xlbbE5D7Gw2o7jubnkMA');

        ol.lst-kix_list_3-1 {
            list-style-type: none
        }

        ol.lst-kix_list_3-2 {
            list-style-type: none
        }

        .lst-kix_list_3-1>li {
            counter-increment: lst-ctn-kix_list_3-1
        }

        ol.lst-kix_list_3-3 {
            list-style-type: none
        }

        ol.lst-kix_list_3-4.start {
            counter-reset: lst-ctn-kix_list_3-4 0
        }

        ol.lst-kix_list_3-4 {
            list-style-type: none
        }

        .lst-kix_list_2-1>li {
            counter-increment: lst-ctn-kix_list_2-1
        }

        ol.lst-kix_list_3-0 {
            list-style-type: none
        }

        .lst-kix_list_1-1>li {
            counter-increment: lst-ctn-kix_list_1-1
        }

        ol.lst-kix_list_2-6.start {
            counter-reset: lst-ctn-kix_list_2-6 0
        }

        .lst-kix_list_3-0>li:before {
            content: "" counter(lst-ctn-kix_list_3-0, decimal) ". "
        }

        ol.lst-kix_list_3-1.start {
            counter-reset: lst-ctn-kix_list_3-1 0
        }

        .lst-kix_list_3-1>li:before {
            content: "" counter(lst-ctn-kix_list_3-1, lower-latin) ". "
        }

        .lst-kix_list_3-2>li:before {
            content: "" counter(lst-ctn-kix_list_3-2, lower-roman) ". "
        }

        ol.lst-kix_list_1-8.start {
            counter-reset: lst-ctn-kix_list_1-8 0
        }

        ol.lst-kix_list_2-3.start {
            counter-reset: lst-ctn-kix_list_2-3 0
        }

        .lst-kix_list_3-5>li:before {
            content: "" counter(lst-ctn-kix_list_3-5, lower-roman) ". "
        }

        .lst-kix_list_3-4>li:before {
            content: "" counter(lst-ctn-kix_list_3-4, lower-latin) ". "
        }

        ol.lst-kix_list_1-5.start {
            counter-reset: lst-ctn-kix_list_1-5 0
        }

        .lst-kix_list_3-3>li:before {
            content: "" counter(lst-ctn-kix_list_3-3, decimal) ". "
        }

        ol.lst-kix_list_3-5 {
            list-style-type: none
        }

        ol.lst-kix_list_3-6 {
            list-style-type: none
        }

        ol.lst-kix_list_3-7 {
            list-style-type: none
        }

        ol.lst-kix_list_3-8 {
            list-style-type: none
        }

        .lst-kix_list_3-8>li:before {
            content: "" counter(lst-ctn-kix_list_3-8, lower-roman) ". "
        }

        .lst-kix_list_2-0>li {
            counter-increment: lst-ctn-kix_list_2-0
        }

        .lst-kix_list_2-3>li {
            counter-increment: lst-ctn-kix_list_2-3
        }

        .lst-kix_list_3-6>li:before {
            content: "" counter(lst-ctn-kix_list_3-6, decimal) ". "
        }

        .lst-kix_list_3-7>li:before {
            content: "" counter(lst-ctn-kix_list_3-7, lower-latin) ". "
        }

        .lst-kix_list_1-2>li {
            counter-increment: lst-ctn-kix_list_1-2
        }

        ol.lst-kix_list_3-7.start {
            counter-reset: lst-ctn-kix_list_3-7 0
        }

        .lst-kix_list_3-2>li {
            counter-increment: lst-ctn-kix_list_3-2
        }

        ol.lst-kix_list_2-2 {
            list-style-type: none
        }

        ol.lst-kix_list_2-3 {
            list-style-type: none
        }

        ol.lst-kix_list_2-4 {
            list-style-type: none
        }

        ol.lst-kix_list_2-5 {
            list-style-type: none
        }

        .lst-kix_list_1-4>li {
            counter-increment: lst-ctn-kix_list_1-4
        }

        ol.lst-kix_list_2-0 {
            list-style-type: none
        }

        ol.lst-kix_list_1-6.start {
            counter-reset: lst-ctn-kix_list_1-6 0
        }

        ol.lst-kix_list_2-1 {
            list-style-type: none
        }

    

        .lst-kix_list_4-7>li:before {
            content: "o  "
        }

        ul.lst-kix_list_4-8 {
            list-style-type: none
        }

        ul.lst-kix_list_4-6 {
            list-style-type: none
        }

        ul.lst-kix_list_4-7 {
            list-style-type: none
        }

        ul.lst-kix_list_4-0 {
            list-style-type: none
        }

        ul.lst-kix_list_4-1 {
            list-style-type: none
        }

        ol.lst-kix_list_3-3.start {
            counter-reset: lst-ctn-kix_list_3-3 0
        }

        ul.lst-kix_list_4-4 {
            list-style-type: none
        }

        ol.lst-kix_list_2-6 {
            list-style-type: none
        }

        ul.lst-kix_list_4-5 {
            list-style-type: none
        }

        ol.lst-kix_list_2-7 {
            list-style-type: none
        }

        ul.lst-kix_list_4-2 {
            list-style-type: none
        }

        ol.lst-kix_list_2-8 {
            list-style-type: none
        }

        ul.lst-kix_list_4-3 {
            list-style-type: none
        }

        ol.lst-kix_list_1-0.start {
            counter-reset: lst-ctn-kix_list_1-0 0
        }

        .lst-kix_list_3-0>li {
            counter-increment: lst-ctn-kix_list_3-0
        }

        .lst-kix_list_3-3>li {
            counter-increment: lst-ctn-kix_list_3-3
        }

        .lst-kix_list_3-6>li {
            counter-increment: lst-ctn-kix_list_3-6
        }

        .lst-kix_list_2-5>li {
            counter-increment: lst-ctn-kix_list_2-5
        }

        .lst-kix_list_2-8>li {
            counter-increment: lst-ctn-kix_list_2-8
        }

        ol.lst-kix_list_3-2.start {
            counter-reset: lst-ctn-kix_list_3-2 0
        }

        .lst-kix_list_2-2>li {
            counter-increment: lst-ctn-kix_list_2-2
        }

        ol.lst-kix_list_2-4.start {
            counter-reset: lst-ctn-kix_list_2-4 0
        }

        ol.lst-kix_list_1-3 {
            list-style-type: none
        }

        ol.lst-kix_list_1-4 {
            list-style-type: none
        }

        .lst-kix_list_2-6>li:before {
            content: "" counter(lst-ctn-kix_list_2-6, decimal) ". "
        }

        .lst-kix_list_2-7>li:before {
            content: "" counter(lst-ctn-kix_list_2-7, lower-latin) ". "
        }

        .lst-kix_list_2-7>li {
            counter-increment: lst-ctn-kix_list_2-7
        }

        .lst-kix_list_3-7>li {
            counter-increment: lst-ctn-kix_list_3-7
        }

        ol.lst-kix_list_1-5 {
            list-style-type: none
        }

        ol.lst-kix_list_1-6 {
            list-style-type: none
        }

        ol.lst-kix_list_1-0 {
            list-style-type: none
        }

        .lst-kix_list_2-4>li:before {
            content: "" counter(lst-ctn-kix_list_2-4, lower-latin) ". "
        }

        .lst-kix_list_2-5>li:before {
            content: "" counter(lst-ctn-kix_list_2-5, lower-roman) ". "
        }

        .lst-kix_list_2-8>li:before {
            content: "" counter(lst-ctn-kix_list_2-8, lower-roman) ". "
        }

        ol.lst-kix_list_1-1 {
            list-style-type: none
        }

        ol.lst-kix_list_1-2 {
            list-style-type: none
        }

        ol.lst-kix_list_3-0.start {
            counter-reset: lst-ctn-kix_list_3-0 0
        }

        ol.lst-kix_list_1-7 {
            list-style-type: none
        }

        .lst-kix_list_1-7>li {
            counter-increment: lst-ctn-kix_list_1-7
        }

        ol.lst-kix_list_1-8 {
            list-style-type: none
        }

        ol.lst-kix_list_3-8.start {
            counter-reset: lst-ctn-kix_list_3-8 0
        }

        ol.lst-kix_list_2-5.start {
            counter-reset: lst-ctn-kix_list_2-5 0
        }

        

        .lst-kix_list_2-6>li {
            counter-increment: lst-ctn-kix_list_2-6
        }

        .lst-kix_list_3-8>li {
            counter-increment: lst-ctn-kix_list_3-8
        }

        .lst-kix_list_4-1>li:before {
            content: "o  "
        }

        ol.lst-kix_list_1-7.start {
            counter-reset: lst-ctn-kix_list_1-7 0
        }

        .lst-kix_list_4-4>li:before {
            content: "o  "
        }

        ol.lst-kix_list_2-2.start {
            counter-reset: lst-ctn-kix_list_2-2 0
        }

        .lst-kix_list_1-5>li {
            counter-increment: lst-ctn-kix_list_1-5
        }

        .lst-kix_list_1-8>li {
            counter-increment: lst-ctn-kix_list_1-8
        }

        ol.lst-kix_list_1-4.start {
            counter-reset: lst-ctn-kix_list_1-4 0
        }

        .lst-kix_list_3-5>li {
            counter-increment: lst-ctn-kix_list_3-5
        }

        ol.lst-kix_list_1-1.start {
            counter-reset: lst-ctn-kix_list_1-1 0
        }

        .lst-kix_list_3-4>li {
            counter-increment: lst-ctn-kix_list_3-4
        }

        .lst-kix_list_2-4>li {
            counter-increment: lst-ctn-kix_list_2-4
        }

        ol.lst-kix_list_3-6.start {
            counter-reset: lst-ctn-kix_list_3-6 0
        }

        ol.lst-kix_list_1-3.start {
            counter-reset: lst-ctn-kix_list_1-3 0
        }

        ol.lst-kix_list_2-8.start {
            counter-reset: lst-ctn-kix_list_2-8 0
        }

        ol.lst-kix_list_1-2.start {
            counter-reset: lst-ctn-kix_list_1-2 0
        }

        .lst-kix_list_1-0>li:before {
            content: "" counter(lst-ctn-kix_list_1-0, decimal) ". "
        }

        .lst-kix_list_1-1>li:before {
            content: "" counter(lst-ctn-kix_list_1-1, lower-latin) ". "
        }

        .lst-kix_list_1-2>li:before {
            content: "" counter(lst-ctn-kix_list_1-2, lower-roman) ". "
        }

        ol.lst-kix_list_2-0.start {
            counter-reset: lst-ctn-kix_list_2-0 0
        }

        .lst-kix_list_1-3>li:before {
            content: "" counter(lst-ctn-kix_list_1-3, decimal) ". "
        }

        .lst-kix_list_1-4>li:before {
            content: "" counter(lst-ctn-kix_list_1-4, lower-latin) ". "
        }

        ol.lst-kix_list_3-5.start {
            counter-reset: lst-ctn-kix_list_3-5 0
        }

        .lst-kix_list_1-0>li {
            counter-increment: lst-ctn-kix_list_1-0
        }

        .lst-kix_list_1-6>li {
            counter-increment: lst-ctn-kix_list_1-6
        }

        .lst-kix_list_1-7>li:before {
            content: "" counter(lst-ctn-kix_list_1-7, lower-latin) ". "
        }

        ol.lst-kix_list_2-7.start {
            counter-reset: lst-ctn-kix_list_2-7 0
        }

        .lst-kix_list_1-3>li {
            counter-increment: lst-ctn-kix_list_1-3
        }

        .lst-kix_list_1-5>li:before {
            content: "" counter(lst-ctn-kix_list_1-5, lower-roman) ". "
        }

        .lst-kix_list_1-6>li:before {
            content: "" counter(lst-ctn-kix_list_1-6, decimal) ". "
        }

        .lst-kix_list_2-0>li:before {
            content: "" counter(lst-ctn-kix_list_2-0, decimal) ". "
        }

        .lst-kix_list_2-1>li:before {
            content: "" counter(lst-ctn-kix_list_2-1, lower-latin) ". "
        }

        ol.lst-kix_list_2-1.start {
            counter-reset: lst-ctn-kix_list_2-1 0
        }

        .lst-kix_list_1-8>li:before {
            content: "" counter(lst-ctn-kix_list_1-8, lower-roman) ". "
        }

        .lst-kix_list_2-2>li:before {
            content: "" counter(lst-ctn-kix_list_2-2, lower-roman) ". "
        }

        .lst-kix_list_2-3>li:before {
            content: "" counter(lst-ctn-kix_list_2-3, decimal) ". "
        }

        ol {
            margin: 0;
            padding: 0
        }

        table td,
        table th {
            padding: 0
        }

        .c31 {
            border-right-style: solid;
            padding: 0pt 5.8pt 0pt 5.8pt;
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
            width: 149.2pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c23 {
            border-right-style: solid;
            padding: 0pt 5.8pt 0pt 5.8pt;
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
            width: 141.8pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c12 {
            border-right-style: solid;
            padding: 0pt 5.8pt 0pt 5.8pt;
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
            width: 150.8pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c5 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: center;
            height: 11pt
        }

        .c0 {
            color: #7f7f7f;
            font-weight: 700;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 6pt;
            font-family: "Roboto";
            font-style: normal
        }

        .c6 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: justify
        }

        .c15 {
            padding-top: 0pt;
            padding-bottom: 8pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: center
        }

        .c16 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            orphans: 2;
            widows: 2;
            text-align: justify
        }

        .c3 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            text-align: justify;
            height: 11pt
        }

        .c10 {
            color: #7f7f7f;
            font-weight: 700;
            font-size: 9pt;
            font-family: "Roboto"
        }

        .c1 {
            font-size: 7pt;
            font-family: "Roboto";
            color: #7f7f7f;
            font-weight: 400
        }

        .c20 {
            margin-left: auto;
            border-spacing: 0;
            border-collapse: collapse;
            margin-right: auto
        }

        .c32 {
            font-size: 6pt;
            font-family: "Roboto";
            color: #7f7f7f;
            font-weight: 700
        }

        .c25 {
            color: #7f7f7f;
            font-weight: 700;
            font-size: 8pt;
            font-family: "Roboto"
        }

        .c2 {
            font-size: 7pt;
            font-family: "Roboto";
            color: #7f7f7f;
            font-weight: 700
        }

        .c22 {
            color: #7f7f7f;
            font-weight: 400;
            font-size: 6pt;
            font-family: "Roboto"
        }

        .c14 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            text-align: center
        }

        .c18 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0791666666666666;
            text-align: center
        }

        .c8 {
            color: #7f7f7f;
            font-weight: 400;
            font-size: 3pt;
            font-family: "Roboto"
        }

        .c19 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            text-align: left
        }

        .c28 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            text-align: justify
        }

        .c4 {
            -webkit-text-decoration-skip: none;
            text-decoration: underline;
            text-decoration-skip-ink: none
        }

        .c24 {
            background-color: #ffffff;
            max-width: 562.5pt;
            padding: 40.3pt 24.8pt 27pt 24.8pt
        }

        .c7 {
            text-decoration: none;
            vertical-align: baseline;
            font-style: normal
        }

        .c26 {
            margin-left: 108pt;
            text-indent: 36pt
        }

        .c17 {
            orphans: 2;
            widows: 2
        }

        .c13 {
            color: inherit;
            text-decoration: inherit
        }

        .c21 {
            margin-left: 18pt
        }

        .c29 {
            margin-right: -4.5pt
        }

        .c9 {
            height: 11pt
        }

        .c11 {
            height: 12.6pt
        }

        .c27 {
            font-style: italic
        }

        .c30 {
            margin-left: -9pt
        }

        .title {
            padding-top: 24pt;
            color: #000000;
            font-weight: 700;
            font-size: 36pt;
            padding-bottom: 6pt;
            font-family: "Calibri";
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .subtitle {
            padding-top: 18pt;
            color: #666666;
            font-size: 24pt;
            padding-bottom: 4pt;
            font-family: "Georgia";
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        li {
            color: #000000;
            font-size: 11pt;
            font-family: "Calibri"
        }

        p {
            margin: 0;
            color: #000000;
            font-size: 11pt;
            font-family: "Calibri"
        }

        h1 {
            padding-top: 24pt;
            color: #000000;
            font-weight: 700;
            font-size: 24pt;
            padding-bottom: 6pt;
            font-family: "Calibri";
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h2 {
            padding-top: 18pt;
            color: #000000;
            font-weight: 700;
            font-size: 18pt;
            padding-bottom: 4pt;
            font-family: "Calibri";
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h3 {
            padding-top: 14pt;
            color: #000000;
            font-weight: 700;
            font-size: 14pt;
            padding-bottom: 4pt;
            font-family: "Calibri";
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h4 {
            padding-top: 12pt;
            color: #000000;
            font-weight: 700;
            font-size: 12pt;
            padding-bottom: 2pt;
            font-family: "Calibri";
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h5 {
            padding-top: 11pt;
            color: #000000;
            font-weight: 700;
            font-size: 11pt;
            padding-bottom: 2pt;
            font-family: "Calibri";
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h6 {
            padding-top: 10pt;
            color: #000000;
            font-weight: 700;
            font-size: 10pt;
            padding-bottom: 2pt;
            font-family: "Calibri";
            line-height: 1.0791666666666666;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .centered {
            margin: auto;
            padding: 10px;
        }

        .aParent div {
            float: left;
            clear: none;
        }

        .container {
            display: flex;
        }
    </style>
</head>

<body class="c24 doc-content">
    <p class="c14 c17 c30">
        <span
            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 518.90px; height: 71.44px;">
            <img alt="" src="https://drive.google.com/uc?export=download&id=1qck3XGGfrc53INjpnfRhb9WHIR3zEs3j"
                style="width: 518.90px; height: 71.44px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                title="">
        </span>
    </p>
    <p class="c6 c9"><span class="c22 c7"></span></p>
    <p class="c14 c17"><span class="c7 c10">CONTRATO DE SERVICIO DE INTERNET PARA CLIENTES DE FRESH TECHS C.A.</span>
    </p>

    <p class="c6 c9"><span class="c22 c7"></span></p>
    <p class="c6"><span class="c1">Entre el(la) ciudadano(a) </span><span class="c2">${name}</span><span
            class="c2">,</span><span class="c1"> venezolano(a), mayor de edad, titular de c&eacute;dula de
            identidad No. </span><span class="c2">{{cedula}}</span><span class="c2">, </span><span
            class="c1">domiciliado(a) en el municipio Chacao del estado Miranda, precisamente, en Caracas, quien a los
            efectos del presente contrato ser&aacute; denominado &ldquo;</span><span class="c2">EL CLIENTE</span><span
            class="c1">&rdquo; y la sociedad mercantil </span><span class="c2">FRESH TECHS, C.A., </span><span
            class="c1">distinguida con el n&uacute;mero de registro de informaci&oacute;n fiscal (RIF) J-40669457-6
            inscrita por ante el Registro Mercantil de Tercero de la Circunscripci&oacute;n Judicial del estado Zulia,
            en fecha 02 de septiembre de 2015, anotada bajo el No. </span><span class="c2">39</span><span class="c1">,
            tomo </span><span class="c2">157-A-485</span><span class="c1">, siendo su &uacute;ltima acta de asamblea
            general extraordinaria de accionistas protocolizada por ante el Registro Mercantil Tercero de la
            Circunscripci&oacute;n Judicial del Estado Zulia, en fecha 25 de septiembre de 2020, anotada bajo el No.
        </span><span class="c2">27</span><span class="c1">, tomo </span><span class="c2">26-A 485</span><span
            class="c1">, domiciliada en el municipio Maracaibo del estado Zulia, representada en este acto por el
            ciudadano </span><span class="c2">FRANCESCO JOSE TENERELLI QUINTERO</span><span class="c1">, mayor de edad,
            de estado civil soltero, de nacionalidad venezolana, domiciliado en el municipio Maracaibo del estado Zulia,
            titular de la c&eacute;dula de identidad Nro. </span><span class="c2">V.-21.356.288</span><span class="c1">,
            de profesi&oacute;n Ingeniero Electr&oacute;nico menci&oacute;n: Telecomunicaciones, actuando en este acto
            con el car&aacute;cter de </span><span class="c2">PRESIDENTE</span><span class="c1"> de la referida
            compa&ntilde;&iacute;a an&oacute;nima, la cual a los efectos de este instrumento ser&aacute; denominada en
            lo sucesivo &ldquo;</span><span class="c2">FRESH TECHS</span><span class="c1">&rdquo;, han convenido en
            celebrar el presente </span><span class="c2">CONTRATO</span><span class="c1"> </span><span class="c2">DE
            PRESTACI&Oacute;N DE SERVICIO DE INTERNET, </span><span class="c1 c7">el cual se sujeta
            al rigor de las siguientes cl&aacute;usulas:</span></p>
    <p class="c6 c9"><span class="c1 c7"></span></p>
    <p class="c14 c17"><span class="c7 c10">CAP&Iacute;TULO PRIMERO: PRELIMINAR</span></p>
    <p class="c5"><span class="c10 c7"></span></p>
    <p class="c6"><span class="c2 c4">CL&Aacute;USULA PRIMERA, DEL OBJETO</span><span class="c1 c4"> </span><span
            class="c2 c4">DEL</span><span class="c1 c4"> </span><span class="c2 c4">CONTRATO:</span><span class="c2">
        </span><span class="c1">El presente instrumento contiene el establecimiento de los
            t&eacute;rminos y condiciones jur&iacute;dicas, comerciales, administrativas y t&eacute;cnicas para la
            prestaci&oacute;n del servicio de internet. Las partes pueden modificar el presente contrato mediante
            adendas en los t&eacute;rminos que lo permita el presente instrumento y el ordenamiento jur&iacute;dico
            vigente. </span><span class="c2 c4">CL&Aacute;USULA SEGUNDA, DEFINICIONES:</span><span class="c2">
        </span><span class="c1">En virtud de que el contenido del presente contrato y de sus anexos
            sea interpretado correctamente, al igual de producir el correcto entendimiento en la relaci&oacute;n entre
        </span><span class="c2">FRESH TECHS </span><span class="c1">y</span><span class="c2"> EL
            CLIENTE,</span><span class="c1"> se estipulan las siguientes definiciones: </span><span
            class="c2">SERVICIO:</span><span class="c1"> Representa uno o el conjunto de los servicios de
            telecomunicaciones o tecnolog&iacute;a que sean prestados por parte de </span><span class="c2">FRESH TECHS
        </span><span class="c1">a favor de </span><span class="c2">EL CLIENTE</span><span class="c1">. </span><span
            class="c2">CONTRATO:</span><span class="c1"> Se refiere al cuerpo principal, anexos y adendas que se
            hagan en virtud de regular la prestaci&oacute;n de servicios por parte de </span><span class="c2">FRESH
            TECHS </span><span class="c1">a favor de </span><span class="c2">EL CLIENTE. ANEXO:</span><span class="c1">
            Es aquel instrumento complementario al cuerpo principal que contendr&aacute;
            especificaciones y detalles de la prestaci&oacute;n de servicios. Las partes pueden a&ntilde;adir o suprimir
            anexos seg&uacute;n corresponda al caso en concreto. </span><span class="c2">ADENDA:</span><span class="c1">
            Es un instrumento posterior que modifica el contrato o a&ntilde;ade nuevos t&eacute;rminos
            al mismo. Se pueden hacer tantas adendas para administrar debidamente la relaci&oacute;n jur&iacute;dica
            entre las partes. </span><span class="c2">LAS PARTES:</span><span class="c1"> Se refiere a quienes
            suscriben el presente contrato. </span><span class="c2">IMPUESTO:</span><span class="c1"> Ser&aacute;
            cualquier tributo aplicable a ser deducido de otro modo o por v&iacute;a de retenci&oacute;n, de acuerdo con
            lo establecido por las normas tributarias venezolanas. </span><span class="c2">NORMATIVA
            APLICABLE:</span><span class="c1"> Conjunto de normas de car&aacute;cter legal y sub-legal contenido en
            el ordenamiento jur&iacute;dico de la Rep&uacute;blica Bolivariana de Venezuela, en especial la Ley
            Org&aacute;nica de Telecomunicaciones, las disposiciones reglamentarias que la desarrollen y las
            dem&aacute;s disposiciones legales o de rango sub-legal que resulten aplicables a los servicios.
        </span><span class="c2">CONTROL Y MONITOREO:</span><span class="c1"> Revisi&oacute;n constante que cumple
        </span><span class="c2">FRESH TECHS</span><span class="c1"> y que abarca presencia de personal en la sala
            de monitoreo y control, no solo observaci&oacute;n de una falla o evento, sino tambi&eacute;n la
            acci&oacute;n para determinar las causas del mismo y coordinar el diagn&oacute;stico y seguimiento del
            problema y restablecimiento a condici&oacute;n normal de la infraestructura compartida. </span><span
            class="c2 c4">CL&Aacute;USULA TERCERA, DURACI&Oacute;N Y VIGENCIA:</span><span class="c1"> El presente
            contrato entrar&aacute; en vigencia en el momento de ser suscrito por las partes, sin m&aacute;s
            formalidades. Ahora bien, a los fines de la duraci&oacute;n de la prestaci&oacute;n del servicio, se
            computar&aacute; a partir de la fecha en la cual fue activado el mismo, indicado esto por el proceso de
            operaciones de </span><span class="c2">FRESH TECHS, </span><span class="c1">observando las encuestas o
            cualquier documento en el cual repose informaci&oacute;n relacionada, por un lapso de doce (12) meses
            continuos. La duraci&oacute;n del mismo podr&aacute; ser prorrogada autom&aacute;ticamente pasada
            fecha cierta del referido lapso, sin embargo, las partes podr&aacute;n manifestar su voluntad de no
            prorrogar el contrato con quince (15) d&iacute;as de anticipaci&oacute;n a la fecha de terminaci&oacute;n
            del contrato, mediante correo electr&oacute;nico que debe ser enviado a ventasccs@freshtechs.com.ve En caso
            de que el anuncio que se refiere este p&aacute;rrafo se haga con fecha posterior a duraci&oacute;n
            establecida en el presente contrato, se aplicar&aacute; seg&uacute;n dispone la cl&aacute;usula de
            permanencia m&iacute;nima. </span><span class="c2 c4">CL&Aacute;USULA CUARTA, PRECIO Y PAGO:</span><span
            class="c1"> El precio del servicio de internet y la facturaci&oacute;n se ajustar&aacute; a lo
            dispuesto en el presente contrato y seg&uacute;n lo aprobado por </span><span class="c2">EL
            CLIENTE</span><span class="c1"> desde la propuesta econ&oacute;mica, enviada por mensajer&iacute;a
            instant&aacute;nea, por correo electr&oacute;nico, desde </span><span class="c1 c4"><a class="c13"
                href="mailto:ventas@freshtechs.com.ve">ventasccs@freshtechs.com.ve</a></span><span class="c1 c4">
        </span><span class="c1">o cualquier medio de comunicaci&oacute;n del cual se compruebe
            su entrega. Los precios indicados no incluyen el Impuesto del Valor Agregado (IVA). Las tarifas son
            revisadas por </span><span class="c2">FRESH TECHS</span><span class="c1"> considerando los
            l&iacute;mites m&iacute;nimos y m&aacute;ximos de la </span><span class="c2">COMISI&Oacute;N NACIONAL DE
            TELECOMUNICACIONES (CONATEL)</span><span class="c1">, al igual que factores internos y externos que afecten
            el aspecto t&eacute;cnico y comercial de </span><span class="c2">FRESH TECHS</span><span class="c1">. En
            caso que, de esa revisi&oacute;n, resulte necesario efectuar ajustes de precio, </span><span
            class="c2">FRESH TECHS</span><span class="c1"> notificar&aacute; por escrito al cliente por lo menos
            diez (10) d&iacute;as antes de la pr&oacute;xima facturaci&oacute;n. Sin embargo, si </span><span
            class="c2">EL CLIENTE</span><span class="c1"> no estuviese de acuerdo con el aumento fijado por
        </span><span class="c2">FRESH TECHS</span><span class="c1">, deber&aacute; comunicarse al departamento de
            administraci&oacute;n mediante correo electr&oacute;nico adminccs@freshtechs.com.ve, en virtud de expresar
            su desacuerdo de forma motivada, debiendo </span><span class="c2">FRESH TECHS </span><span
            class="c1">responder tal comunicaci&oacute;n en un lapso no mayor a cinco (5) d&iacute;as h&aacute;biles, en
            relaci&oacute;n a su viabilidad y la respectiva forma de proceder. </span><span class="c2">EL
            CLIENTE</span><span class="c1"> pagar&aacute; el servicio por adelantado el primer mes, y por los
            dem&aacute;s meses, tiene los cinco (5) primeros d&iacute;as de cada mes una vez emitida la factura para
            realizar el pago; vencido este plazo se proceder&aacute; con la </span><span class="c2">suspensi&oacute;n
            del servicio de internet</span><span class="c1">. Las partes declaran que la moneda de cuenta a la cual se
            vincula el pago del servicio es el d&oacute;lar estadounidense, pudiendo </span><span class="c2">EL
            CLIENTE</span><span class="c1"> pagar el servicio tanto en moneda extranjera, o en su defecto, en
            moneda nacional, bas&aacute;ndose en la tasa de cambio vigente al momento del pago o abono efectuado por
        </span><span class="c2">EL CLIENTE</span><span class="c1">. Dicho pago se puede realizar, de forma exclusiva, de
            las siguientes formas: Pago de la moneda extranjera en efectivo en la sede de </span><span class="c2">FRESH
            TECHS</span><span class="c1"> o mediante transferencia bancaria a favor de la cuenta que </span><span
            class="c2">FRESH TECHS </span><span class="c1">se&ntilde;ale, o bien, mediante pago en bol&iacute;vares por
            transferencia bancaria a favor de la cuenta designada </span><span class="c2">FRESH TECHS</span><span
            class="c1">. nEn todo caso, la factura se considerar&aacute; aceptada por </span><span
            class="c2">EL</span><span class="c1"> </span><span class="c2">CLIENTE</span><span class="c1">, si
            &eacute;ste no la objeta mediante comunicaci&oacute;n escrita al correo </span><span class="c1 c4"><a
                class="c13" href="mailto:administracion@freshtechs.com.ve">adminccs@freshtechs.com.ve</a></span><span
            class="c1">, antes de la fecha de vencimiento de la factura, comprometi&eacute;ndose </span><span
            class="c2">FRESH TECHS</span><span class="c1 c7"> a responder dicha cuesti&oacute;n en un lapso de
            cinco (5) d&iacute;as h&aacute;biles. Solo se gestionar&aacute; la reclamaci&oacute;n extempor&aacute;nea
            por tard&iacute;a, previo pago de la factura respectiva. </span></p>
    <p class="c6 c9"><span class="c1 c7"></span></p>
    <p class="c14 c17"><span class="c10 c7">CAP&Iacute;TULO SEGUNDO: EL SERVICIO</span></p>
    <p class="c5"><span class="c2 c7"></span></p>
    <p class="c6"><span class="c2 c4">CL&Aacute;USULA QUINTA, SERVICIO:</span><span class="c1"> El servicio
            contratado por </span><span class="c2">EL CLIENTE</span><span class="c1"> es el que se verifica en el
        </span><span class="c2">ANEXO A</span><span class="c1">, conjuntamente con el suministro e instalaci&oacute;n de
            equipos, teniendo la posibilidad de expansi&oacute;n o crecimiento en el tiempo de acuerdo a lo ofertado y
            aceptado en la propuesta de servicios entre las partes. </span><span class="c2">FRESH TECHS, </span><span
            class="c1">ser&aacute; el &uacute;nico prestador del servicio de internet de cara a los </span><span
            class="c2">CLIENTES </span><span class="c1">que bien decida obtener, y, en consecuencia, a este
            corresponder&aacute; exclusivamente el cumplimiento de las obligaciones que, por la prestaci&oacute;n de
            dichos servicios, estipulan las leyes venezolanas. </span><span class="c2">EL CLIENTE</span><span
            class="c1"> se compromete a darle el uso al servicio contratado con apego a las leyes, reglamentos,
            ordenanzas, normativas que regulen las telecomunicaciones, pol&iacute;ticas y normas internas de
        </span><span class="c2">FRESH TECHS,</span><span class="c1"> y para su propio provecho y beneficio en
            raz&oacute;n de su industria, comercio o servicio, siempre que no atente contra terceros y su moral, no
            pudiendo con esto realizar actividades que puedan o est&eacute;n guiadas a interferir, da&ntilde;ar o
            alterar las redes, los equipos y el servicio mismo para procurarse un beneficio en detrimento de los
            derechos de terceros y de </span><span class="c2">FRESH TECHS</span><span class="c1">. En ning&uacute;n caso
        </span><span class="c2">FRESH TECHS</span><span class="c1"> ser&aacute; responsable en casos de
            pirater&iacute;as, violaciones de privacidad, vulneraci&oacute;n de la seguridad, hackeos, entre otros,
            sobre el uso que </span><span class="c2">EL CLIENTE</span><span class="c1"> le d&eacute; al servicio.
        </span><span class="c2">FRESH TECHS</span><span class="c1"> no ser&aacute; responsable por el contenido de
            las informaciones que sean recibidas y/o enviadas por </span><span class="c2">EL CLIENTE</span><span
            class="c1"> a trav&eacute;s del servicio o acceso a internet proporcionado por </span><span class="c2">FRESH
            TECHS</span><span class="c1">, por lo que este responder&aacute; a </span><span class="c2">FRESH
            TECHS,</span><span class="c1"> y de ser el caso, le indemnizar&aacute; por
            da&ntilde;os y perjuicios, por cualquier acci&oacute;n, demanda o recurso que sea intentado con
            ocasi&oacute;n de</span><span class="c22"> </span><span class="c1">la</span><span class="c22"> </span><span
            class="c1">transmisi&oacute;n de la informaci&oacute;n aqu&iacute; prevista.
        </span><span class="c2">FRESH TECHS </span><span class="c1">declara que, a pesar de lo establecido en la
            presente cl&aacute;usula, desconoce s&iacute; al momento de la suscripci&oacute;n del presente contrato y de
            la activaci&oacute;n del servicio </span><span class="c2">EL CLIENTE </span><span class="c1">oculta
            informaci&oacute;n sobre datos personales o comerciales y sobre verdadero uso que el mismo pretende darle al
            servicio que se le otorga. </span><span class="c2 c4">CL&Aacute;USULA SEXTA, EQUIPOS:</span><span
            class="c1"> </span><span class="c2">FRESH TECHS</span><span class="c1"> asignar&aacute;,
            instalar&aacute; y configurar&aacute; para el servicio de Internet los equipos suministrados a </span><span
            class="c2">EL CLIENTE</span><span class="c1">. </span><span class="c2">EL CLIENTE</span><span class="c1">
            conviene y acepta que el personal autorizado de </span><span class="c2">FRESH
            TECHS</span><span class="c1"> es el &uacute;nico facultado, dedicado, calificado y aprobado para
            realizar la instalaci&oacute;n, reparaci&oacute;n, reprogramaci&oacute;n, alteraci&oacute;n,
            modificaci&oacute;n, transformaci&oacute;n, conexi&oacute;n, desconexi&oacute;n, reinstalaci&oacute;n y
            manejo t&eacute;cnico en general de los equipos de </span><span class="c2">FRESH TECHS</span><span
            class="c1"> y de los equipos de </span><span class="c2">EL CLIENTE</span><span class="c1"> para la
            prestaci&oacute;n del servicio. </span><span class="c2">EL CLIENTE</span><span class="c1"> se
            compromete a mantener dentro de sus instalaciones, las adecuaciones necesarias para el &oacute;ptimo
            funcionamiento de los equipos recomendados por </span><span class="c2">FRESH TECHS</span><span class="c1">.
        </span><span class="c2">FRESH TECHS</span><span class="c1"> no se hace responsable por el deterioro o
            da&ntilde;o de los equipos propiedad o en posesi&oacute;n de </span><span class="c2">EL CLIENTE</span><span
            class="c1"> causados por su negligencia, imprudencia, impericia o manejo indebido por otras personas
            ajenas a </span><span class="c2">FRESH TECHS</span><span class="c1">. </span><span
            class="c2 c4">CL&Aacute;USULA S&Eacute;PTIMA, INSPECCI&Oacute;N, INSTALACI&Oacute;N Y ACTIVACI&Oacute;N DEL
            SERVICIO</span><span class="c2">: </span><span class="c1">Una vez aprobadas las Propuesta Econ&oacute;mica
            por parte del </span><span class="c2">CLIENTE,</span><span class="c1"> </span><span class="c2">FRESH
            TECHS</span><span class="c1"> tendr&aacute; tres (03) h&aacute;biles para ejecutar las inspecciones,
            previo plan de Inspecci&oacute;n determinado por el proceso de operaciones. Confirmada la factibilidad
            del servicio en la inspecci&oacute;n ejecutada por los t&eacute;cnicos de </span><span class="c2">FRESH
            TECHS</span><span class="c1">, </span><span class="c2">EL CLIENTE</span><span class="c1"> se compromete
            a llenar el formulario, forma o ficha cualquier otro documento que le sea presentado relacionado con la
            prestaci&oacute;n del servicio, con la finalidad de ubicar los datos m&aacute;s relevantes para registrarlo
            en el sistema y control interno administrativo. </span><span class="c2">FRESH TECHS</span><span class="c1">,
            se compromete con </span><span class="c2">EL CLIENTE</span><span class="c1"> a instalar los equipos
            necesarios y activar el servicio contratado en un lapso no mayor de tres d&iacute;as (3) h&aacute;biles
            contados a partir de la fecha de pago de la instalaci&oacute;n, siendo tal plazo prorrogable por tres (3)
            d&iacute;as h&aacute;biles m&aacute;s en caso especiales, lo cual deber&aacute; ser notificado al
        </span><span class="c2">EL CLIENTE </span><span class="c1">mediante las v&iacute;as t&iacute;picas establecidas
            en este contrato. Ahora bien, en el caso de que al momento de la instalaci&oacute;n de los equipos y la
            activaci&oacute;n del servicio se vea afectada por hechos imputables al caso fortuito o de causa mayor, el
            lapso al que se refiere este p&aacute;rrafo se suspender&aacute; hasta tanto se verifique las condiciones
            aptas para las labores correspondientes. </span><span class="c2">El CLIENTE</span><span class="c1"> se
            compromete a suministrar informaci&oacute;n ver&iacute;dica en los formularios digitales que indique
        </span><span class="c2">FRESH TECHS</span><span class="c1">, una vez ejecutada la instalaci&oacute;n.
        </span><span class="c2 c4">CL&Aacute;USULA OCTAVA, MODIFICACIONES DEL ANCHO DE BANDA:</span><span class="c2">
        </span><span class="c1"> En el caso de que el </span><span class="c2">CLIENTE</span><span class="c1"> desee
            cambiar (incremento o disminuci&oacute;n) su ancho de
            banda contratado, enviar&aacute; una solicitud detallada al correo electr&oacute;nico </span><span
            class="c1 c4"><a class="c13"
                href="mailto:ventas@freshtechs.com.ve">ventasccs@freshtechs.com.ve</a></span><span class="c1">,
        </span><span class="c2">FRESH TECHS</span><span class="c1 c7">, gestionar&aacute; la solicitud en un periodo no
            mayor a cinco (05) d&iacute;as h&aacute;biles, remitiendo al cliente la informaci&oacute;n sobre su
            solicitud, precio y forma de proceder.</span></p>
    <p class="c6 c9"><span class="c1 c7"></span></p>
    <p class="c6 c9"><span class="c7 c8"></span></p>
    <p class="c14 c17"><span class="c10 c7">CAP&Iacute;TULO TERCERO: DE LAS FALLAS, RESPONSABILIDAD E
            INDEMNIZACI&Oacute;N</span></p>
    <p class="c5"><span class="c2 c7"></span></p>
    <p class="c6"><span class="c2 c4">CL&Aacute;USULA NOVENA:</span><span class="c2"> </span><span class="c1">Las
            partes s&oacute;lo ser&aacute;n responsables de los da&ntilde;os que sean consecuencia directa e inmediata
            de su acci&oacute;n u omisi&oacute;n por lo que en ning&uacute;n caso las partes responder&aacute;n por
            da&ntilde;os indirectos o consecuenciales, ni por lucro cesante. </span><span class="c2">FRESH TECHS
        </span><span class="c1">garantiza la disponibilidad continua del servicio de acceso a internet en un noventa y
            ocho por ciento (98%), computado en base a las horas de servicio ciertas anuales. S&iacute; en el caso que
            se verifique interrupci&oacute;n o discontinuidad en el servicio que supere el equivalente al dos por ciento
            (2%) restante del porcentaje anteriormente referido, </span><span class="c2">EL CLIENTE</span><span
            class="c1"> tiene el derecho de solicitar la indemnizaci&oacute;n de tales horas. A tales efectos,
            deber&aacute; enviar un correo electr&oacute;nico a </span><span class="c1 c4"><a class="c13"
                href="mailto:soporte@freshtechs.com.ve">soporte@freshtechs.com.ve</a></span><span class="c1"> dentro de
            los cinco (5) d&iacute;as siguientes de presentada la falla, explicando
            detalladamente las mismas. </span><span class="c2">FRESH TECHS </span><span class="c1">dar&aacute; acuse de
            recibo de tal solicitud, y posterior al an&aacute;lisis y cotejo de las mismas, en base al sistema de
            monitoreo y reportes, dar&aacute; respuesta sobre tal pedimento en los tres (3) d&iacute;as siguientes sobre
            la procedencia o no del mismo. En caso de ser procedente la solicitud, s&oacute;lo podr&aacute; ser
            indemnizada mediante el respectivo descuento equivalente en la pr&oacute;xima facturaci&oacute;n del
            servicio de internet. Cabe resaltar que no ser&aacute; computables ni acumulables las horas de
            interrupci&oacute;n o discontinuidad del servicio que sean producidas por causas extra&ntilde;as a
        </span><span class="c2">FRESH TECHS</span><span class="c1">, como lo es las fallas imputables a </span><span
            class="c2">EL CLIENTE</span><span class="c1">, a terceros, por mantenimiento de los servicios, el caso
            fortuito, eventos de fuerza mayor, hecho del pr&iacute;ncipe, entre otros.</span></p>
    <p class="c6 c9"><span class="c7 c22"></span></p>
    <p class="c19 c17 c9"><span class="c1 c7"></span></p>
    <p class="c14 c17"><span class="c10 c7">CAP&Iacute;TULO CUARTO: DEBERES Y DERECHOS DE LAS PARTES</span></p>
    <p class="c5"><span class="c2 c7"></span></p>
    <p class="c28"><span class="c2 c4">CL&Aacute;USULA D&Eacute;CIMA, POR EL CLIENTE:</span><span class="c2">
        </span><span class="c1">Conjuntamente con los derechos y obligaciones establecidas en
            &eacute;ste contrato, anexos y adendas, los imperados en la Ley Org&aacute;nica de Telecomunicaciones,
        </span><span class="c2">EL CLIENTE</span><span class="c1"> tendr&aacute; los siguientes derechos y deberes:
            Utilizar el servicio en forma exclusiva y de conformidad con lo dispuesto en el presente contrato, anexos y
            adenda. Cualquier modificaci&oacute;n a estos par&aacute;metros deber&aacute; ser consultada con
        </span><span class="c2">FRESH TECHS. </span><span class="c1">Permitir al personal autorizado de o por
        </span><span class="c2">FRESH TECHS</span><span class="c1">, el acceso a lugares y sitios donde se ubiquen los
            equipos suministrados, a los fines de inspeccionarlos, revisarlos o de hacer gestiones de mantenimiento. Sin
            embargo, estas personas deben cumplir con las orientaciones y normas que establezca </span><span
            class="c2">EL CLIENTE</span><span class="c1">. </span><span class="c2">EL CLIENTE</span><span class="c1"> no
            podr&aacute; cambiar los suministrados por </span><span class="c2">FRESH
            TECHS</span><span class="c1"> del lugar donde fueron instalados, as&iacute; como tampoco podr&aacute;
            instalar, reparar, reprogramar, modificar, alterar, conectar y/o desconectar los mismos, sin previa
            autorizaci&oacute;n de </span><span class="c2">FRESH TECHS. </span><span class="c1">En el caso de que los
            equipos sean propiedad de </span><span class="c2">EL CLIENTE</span><span class="c1">, este debe atenderse a
            las orientaciones, normas y directrices de </span><span class="c2">FRESH TECHS. </span><span class="c1">No
            utilizar elementos o dispositivos que puedan interferir con los equipos suministrados. Cancelar las facturas
            debidamente emitidas, en la oportunidad correspondiente y en la forma establecida.</span><span class="c2">
            EL CLIENTE</span><span class="c1"> no podr&aacute; compartir la infraestructura o
            servicios con terceras partes, ni podr&aacute; hacer reventa de los mismos.</span><span class="c2"> EL
            CLIENTE</span><span class="c1"> no podr&aacute; cursar tr&aacute;fico proveniente de o dirigido a una
            red b&aacute;sica de telecomunicaciones, de acuerdo a lo establecido en el Reglamento sobre la
            Operaci&oacute;n de las Redes Privadas de Telecomunicaciones, salvo que en el futuro dicha
            restricci&oacute;n sea eliminada mediante alguna disposici&oacute;n legal posterior a la celebraci&oacute;n
            de este contrato.</span><span class="c2"> EL CLIENTE</span><span class="c1"> se obliga a notificar
            a </span><span class="c2">FRESH TECHS</span><span class="c1"> de toda modificaci&oacute;n de los datos
            suministrados por al momento de la contrataci&oacute;n. </span><span class="c2">EL CLIENTE</span><span
            class="c1"> se obliga a suministrar a </span><span class="c2">FRESH TECHS</span><span class="c1"> un espacio
            f&iacute;sico dentro de sus instalaciones donde los equipos a ser suministrados
            por </span><span class="c2">FRESH TECHS</span><span class="c1"> puedan ser instalados a los efectos de
            prestar el servicio contratado. Todo da&ntilde;o producido sobre los equipos de</span><span class="c2">
            FRESH TECHS</span><span class="c1">, </span><span class="c2">EL CLIENTE</span><span class="c1">
            deber&aacute; reembolsar a </span><span class="c2">FRESH TECHS</span><span class="c1">,
            dentro de los quince (15) primeros d&iacute;as siguientes a la fecha de recibo de la correspondiente
            factura, los gastos en que incurra </span><span class="c2">FRESH TECHS</span><span class="c1"> por
            hacer las reparaciones necesarias de los equipos o su reposici&oacute;n, seg&uacute;n sea el
            caso.</span><span class="c2"> </span><span class="c1">Cuando el servicio prestado por </span><span
            class="c2">FRESH TECHS</span><span class="c1"> deba ser conectado a alg&uacute;n equipo propiedad de
        </span><span class="c2">EL CLIENTE</span><span class="c1">, o arrendado por &eacute;ste a terceros, las
            interrupciones o fallas que resulten de las caracter&iacute;sticas t&eacute;cnicas de dicho equipo
            ser&aacute;n responsabilidad exclusiva de </span><span class="c2">EL CLIENTE</span><span class="c1">. En
            cualquier caso, dichos equipos deber&aacute;n ajustarse a las especificaciones t&eacute;cnicas ya
            preestablecidas por </span><span class="c2">FRESH TECHS</span><span class="c1 c7">.</span></p>
    <p class="c28"><span class="c1">Notificar a </span><span class="c2">FRESH TECHS </span><span
            class="c1">de</span><span class="c2"> </span><span class="c1">cualquier falla, interrupci&oacute;n,
            deficiencia o da&ntilde;o en los equipos de </span><span class="c2">FRESH TECHS </span><span class="c1">a
            los fines de que esta proceda a solucionar el problema existente a la brevedad. En caso de incumplimiento de
        </span><span class="c2">EL CLIENTE</span><span class="c1"> de las obligaciones por &eacute;l asumidas
            conforme al contrato, </span><span class="c2">FRESH TECHS </span><span class="c1">podr&aacute; ejercer las
            acciones pertinentes por los da&ntilde;os y perjuicios que como consecuencia de dicho incumplimiento le haya
            sido o le sean causados, sin perjuicio del ejercicio de su facultad de suspender el o los servicios o de dar
            por terminado el contrato o ejercer la acci&oacute;n de cumplimiento o resoluci&oacute;n contractual.
        </span><span class="c2 c4">CL&Aacute;USULA D&Eacute;CIMA PRIMERA, POR FRESH TECHS:</span><span class="c2"> FRESH
            TECHS</span><span class="c1"> gozar&aacute; de todos los derechos establecidos
            en la Ley Org&aacute;nica de Telecomunicaciones, as&iacute; como tambi&eacute;n las que se detallan a
            continuaci&oacute;n: Mantener en buen estado y reparar los equipos dentro de los tiempos que permitan
            cumplir con los correspondientes niveles de servicio, en el entendido de que </span><span class="c2">EL
            CLIENTE</span><span class="c1"> ser&aacute; responsable por la demora en permitir el acceso a sus
            instalaciones. Realizar la conexi&oacute;n bajo las mejores condiciones y en el tiempo pertinente de los
            equipos de </span><span class="c2">EL CLIENTE</span><span class="c1"> y/o la red de </span><span
            class="c2">FRESH TECHS</span><span class="c1"> a los solos fines de prestar los servicios de calidad.
            Respetar los derechos de los usuarios establecidos en la Constituci&oacute;n y leyes vinculantes, a una
            informaci&oacute;n adecuada y no enga&ntilde;osa sobre el contenido y caracter&iacute;sticas de los equipos
            y servicios, a la libertad de elecci&oacute;n y a un trato equitativo y digno. Informar oportunamente a
        </span><span class="c2">EL CLIENTE</span><span class="c1"> sobre cualquier modificaci&oacute;n, cambio o
            adici&oacute;n en el funcionamiento del servicio y/o aplicaciones del presente contrato.</span></p>
    <p class="c5 c21"><span class="c10 c7"></span></p>
    <p class="c14 c17 c21"><span class="c10 c7">CAP&Iacute;TULO QUINTO: TERMINACI&Oacute;N DEL CONTRATO</span></p>
    <p class="c6 c29"><span class="c2 c4">CL&Aacute;USULA D&Eacute;CIMO SEGUNDA, FORMAS DE TERMINACI&Oacute;N DE
            CONTRATO:</span><span class="c2"> </span><span class="c1">El presente contrato se da por terminado por
            las siguientes razones: Por el cumplimiento de su duraci&oacute;n, sin que proceda la respectiva
            pr&oacute;rroga. Por incumplimiento de las cl&aacute;usulas contenidas en el presente instrumento. Por la
            falsedad en los datos suministrados por las partes. Por el empleo de la red y el servicio para medios
            il&iacute;citos y delictivos. Por el hecho del pr&iacute;ncipe. Por decisi&oacute;n judicial. En todo caso,
            la terminaci&oacute;n del contrato ser&aacute; anunciada por la respectiva parte, debiendo tal asunto
            resolverse en cinco (5) d&iacute;as h&aacute;biles. La terminaci&oacute;n del contrato no suprime las
            obligaciones y deudas tenidas entre las partes, las cuales deben ser saldadas mediante el convenio que las
            partes dise&ntilde;en o en su defecto, mediante las acciones administrativas o legales que ha bien deba
            ejercer </span><span class="c2">FRESH TECHS</span><span class="c1">. </span><span
            class="c2 c4">CL&Aacute;USULA D&Eacute;CIMO TERCERA, TERMINACI&Oacute;N ANTICIPADA:</span><span class="c1">
            La permanencia m&iacute;nima de las partes en relaci&oacute;n al presente contrato es igual
            al tiempo de duraci&oacute;n del mismo. Ambas partes pueden dar por terminado el contrato de forma
            consensual antes de vencida la duraci&oacute;n del mismo y sin invocar ninguna de las causales contenidas en
            cl&aacute;usulas pret&eacute;ritas. Si la terminaci&oacute;n anticipada es solicitada por </span><span
            class="c2">EL CLIENTE</span><span class="c1">, &eacute;ste debe pagar a </span><span class="c2">FRESH TECHS
        </span><span class="c1">por concepto de penalizaci&oacute;n la cantidad equivalente a la &uacute;ltima factura
            emitida. En el caso de </span><span class="c2">FRESH TECHS</span><span class="c1">, este debe pagar al
            cliente la misma cantidad equivalente.</span></p>
    <p class="c14 c17"><span class="c10 c7">CAP&Iacute;TULO SEXTO: DISPOSICIONES FINALES</span></p>
    <p class="c28"><span class="c2 c4">CL&Aacute;USULA D&Eacute;CIMO CUARTA, INTERESES MORATORIOS:</span><span
            class="c1"> El atraso en el pago por parte de </span><span class="c2">EL CLIENTE</span><span class="c2 c27">
        </span><span class="c1">del monto total de la factura emitida por </span><span class="c2">FRESH TECHS
        </span><span class="c1">generar&aacute; intereses de mora calculados desde el
            vencimiento del plazo para el pago hasta la fecha de su pago total, ambas fechas inclusive. </span><span
            class="c2 c4">CL&Aacute;USULA D&Eacute;CIMO QUINTA, EXCLUSIVIDAD:</span><span class="c1"> No son
            exclusivos los derechos y obligaciones que las partes asumen en este contrato, pudiendo cada una de las
            partes celebrar otros contratos de igual o similar naturaleza con terceros a su
            discreci&oacute;n.</span><span class="c2 c4"> CL&Aacute;USULA D&Eacute;CIMO SEXTA,
            CESI&Oacute;N:</span><span class="c1"> El presente Contrato es personal (intuito persona), ninguna de
            las partes ceder&aacute; o transferir&aacute; parte o el total de este Contrato, sin el consentimiento
            escrito de la otra parte. En cualquier caso, si </span><span class="c2">FRESH TECHS </span><span
            class="c1">decide otorgar su autorizaci&oacute;n, podr&aacute; establecer restricciones o limitaciones en
            relaci&oacute;n con cualquier cesi&oacute;n o transferencia. En caso de cualquier incumplimiento de lo
            previsto en la presente cl&aacute;usula </span><span class="c2">FRESH TECHS </span><span
            class="c1">tendr&aacute;</span><span class="c2"> </span><span class="c1">el derecho de dar por
            terminado el Contrato, sin que ello pueda dar lugar a reclamaci&oacute;n alguna por parte de </span><span
            class="c2">EL CLIENTE. </span><span class="c2 c4">CL&Aacute;USULA D&Eacute;CIMO S&Eacute;PTIMA,
            CONFIDENCIALIDAD:</span><span class="c2"> </span><span class="c1">Las partes se comprometen a proteger,
            resguardar y asegurar el secreto e inviolabilidad de sus comunicaciones privadas y de los datos de
            car&aacute;cter personal, salvo en aquellos casos expresamente autorizados por la Constituci&oacute;n de la
            Rep&uacute;blica Bolivariana de Venezuela o que, por su naturaleza tengan car&aacute;cter p&uacute;blico.
            Las partes aceptan y reconocen que entre s&iacute; podr&aacute;n facilitar los datos del otro a terceras
            personas con la finalidad de realizar los mantenimientos y las gestiones de cualquier actividad relacionada
            con el contrato. </span><span class="c2">EL CLIENTE</span><span class="c1"> est&aacute; en pleno
            conocimiento que est&aacute; prohibida la transmisi&oacute;n de informaci&oacute;n que atente contra los
            derechos de terceros, la moral, o la legislaci&oacute;n vigente. </span><span class="c2 c4">CL&Aacute;USULA
            D&Eacute;CIMO OCTAVA, CANALES DE COMUNICACI&Oacute;N</span><span class="c2">. </span><span class="c1">La
            comunicaci&oacute;n entre </span><span class="c2">FRESH TECHS</span><span class="c1"> y el </span><span
            class="c2">CLIENTE</span><span class="c1"> ser&aacute; a trav&eacute;s de las siguientes v&iacute;as:
            Referente a la adquisici&oacute;n del servicio de internet: </span><span class="c1 c4"><a class="c13"
                href="mailto:ventas@freshtechs.com.ve">ventasccs@freshtechs.com.ve</a></span><span class="c1"> /
            04246865826. Referente a soporte o fallas por servicio de internet: </span><span class="c1 c4"><a
                class="c13" href="mailto:soporte@freshtechs.com.ve">soporte@freshtechs.com.ve</a></span><span
            class="c1"> / 04246644604. Referente a temas administrativos, pagos, entre otros: </span><span
            class="c1 c4"><a class="c13"
                href="mailto:adminccs@freshtechs.com.ve">adminccs@freshtechs.com.ve</a></span><span class="c1"> /
            04246646255. </span><span class="c2 c4">CL&Aacute;USULA D&Eacute;CIMO NOVENA,
            NOTIFICACIONES:</span><span class="c2"> </span><span class="c1">A los efectos de recibir notificaciones
            de car&aacute;cter judicial o administrativo, se se&ntilde;ala el domicilio comercial y procesal de
        </span><span class="c2">FRESH TECHS </span><span class="c1">en avenida 4 (Bella Vista) con calle 59, Centro
            Comercial &ldquo;La Suiza&rdquo;, local No. 58A-127, sector Bella Vista, parroquia Olegario Villalobos,
            municipio Maracaibo del estado Zulia, se&ntilde;alando como domicilio especial para la resoluci&oacute;n de
            conflictos el municipio Maracaibo del estado Zulia, a cuyos Tribunales se someten las partes. </span><span
            class="c2 c4">CL&Aacute;USULA VIG&Eacute;SIMA, TRATAMIENTO DE QUEJAS Y RECLAMOS</span><span
            class="c2">:</span><span class="c1"> </span><span class="c2">El CLIENTE</span><span class="c1">
            canalizar&aacute; su reclamo comunic&aacute;ndose a trav&eacute;s del correo
            soporte@freshtechs.com.ve (04246644604), con el fin que </span><span class="c2">FRESH TECHS</span><span
            class="c1"> proceda a evaluar la situaci&oacute;n y tome las acciones pertinentes requeridas.
        </span><span class="c2 c4">CL&Aacute;USULA VIG&Eacute;SIMO PRIMERA, ATENCI&Oacute;N DE FALLAS DE SERVICIOS Y/O
            REQUERIMIENTOS DE INFORMACI&Oacute;N T&Eacute;CNICA</span><span class="c2">: FRESH TECHS</span><span
            class="c1">, ofrecer&aacute; un soporte t&eacute;cnico 24/7 para clientes dedicados o empresariales y en
            horario de 8:00 am a 5:00 pm para clientes residenciales o edificios. En caso de interrupciones en el
            servicio de internet, el </span><span class="c2">CLIENTE</span><span class="c1"> no podr&aacute;
            cambiar los equipos suministrados por </span><span class="c2">FRESH TECHS</span><span class="c1">,
            as&iacute; como tampoco podr&aacute; instalarlos, reprogramarlos, conectarlos o desconectarlos, sin previa
            autorizaci&oacute;n de la </span><span class="c2">FRESH TECHS</span><span class="c1">. En Maracaibo, a los
            VEN_FECHA_CONTRATO_DIA d&iacute;as del mes </span><span class="c1">VEN_FECHA_CONTRATO_MES</span><span
            class="c1 c7"> del a&ntilde;o VEN_FECHA_CONTRATO_ANO. Se expidieron dos ejemplares al mismo efecto y a
            un solo tenor.</span></p>
    <p class="c3"><span class="c1 c7"></span></p>
    <p class="c3"><span class="c8 c7"></span></p>
    <p class="c18 c17"><span class="c7 c25">ANEXO &ldquo;A&rdquo; DESCRIPCI&Oacute;N Y DETALLES SOBRE LA
            INSTALACI&Oacute;N, ACTIVACI&Oacute;N Y PRESTACI&Oacute;N DEL SERVICIO</span></p>
    <p class="c17 c9 c18"><span class="c25 c7"></span></p>
    <p class="c16"><span class="c1">Conforme a la propuesta econ&oacute;mica presentada por </span><span
            class="c2">FRESH TECHS </span><span class="c1">al </span><span class="c2">EL CLIENTE, </span><span
            class="c1">conjuntamente con la explicaci&oacute;n del servicio, peculiaridades, caracter&iacute;sticas y
            circunstancias del mismo, las partes tienen conocimiento, declaran, convienen y aceptan las siguientes
            cuestiones: </span><span class="c2">PLAN CONTRATADO: </span><span class="c1">Luego de explicar
            descriptivamente las bondades de los servicios y planes de </span><span class="c2">FRESH TECHS a EL
            CLIENTE</span><span class="c1">, este &uacute;ltimo ha elegido el PLAN </span><span
            class="c1">_SERVICIO</span><span class="c1">, bajo la modalidad de fibra &oacute;ptica, con una capacidad de
        </span><span class="c1">_VELOCIDAD</span><span class="c1">, debido a que este se adapta y configura a sus
            exigencias y confort. </span><span class="c2">PRECIO: </span><span class="c1">El costo de instalaci&oacute;n
            y activaci&oacute;n es de </span><span class="c1">_INSTALACION</span><span class="c1"> $(USD) , y las
            mensualidades correspondientes se han establecido en la cantidad de </span><span
            class="c1">_MENSUALIDAD</span><span class="c1"> $(USD) , en esta oportunidad. Ambos montos ser&aacute;n
            reflejados en la facturaci&oacute;n correspondiente. </span><span class="c2 c7">EQUIPO INSTALADO:</span></p>
    <p class="c6 c9"><span class="c2 c7"></span></p><a id="t.9476fdb0ae156d57fab8304552ce05ba0f5592d3"></a><a
        id="t.0"></a>
    <table class="c20">
        <tr class="c11">
            <td class="c12" colspan="1" rowspan="1">
                <p class="c15"><span class="c2 c7">EQUIPO</span></p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
                <p class="c15"><span class="c2 c7">DIRECCI&Oacute;N MAC</span></p>
            </td>
            <td class="c23" colspan="1" rowspan="1">
                <p class="c15"><span class="c2 c7">SERIAL</span></p>
            </td>
        </tr>
        <tr class="c11">
            <td class="c12" colspan="1" rowspan="1">
                <p class="c15"><span class="c2">_1_EQUIPO</span></p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
                <p class="c15"><span class="c2">_1_MAC</span></p>
            </td>
            <td class="c23" colspan="1" rowspan="1">
                <p class="c15"><span class="c2 c7">_1_SERIAL</span></p>
            </td>
        </tr>
    </table>
    <p class="c6 c9"><span class="c2 c7"></span></p>
    <p class="c6"><span class="c2">INSTALACI&Oacute;N: </span><span class="c1">Se realizar&aacute; una vez verificado el
            correspondiente pago, y la misma ser&aacute; realizada por el personal t&eacute;cnico designado por
        </span><span class="c2">FRESH TECHS</span><span class="c1">, en el sitio ubicado en Av. Francisco Solano, Sans
            Souci, </span><span class="c1">_DIR_INSTALACION1</span><span class="c1">, Chacao, Caracas. </span><span
            class="c2">CONTACTO: EL CLIENTE </span><span class="c1">se&ntilde;ala que, por su parte, designa como
            responsable de la ejecuci&oacute;n de este contrato, as&iacute; como tambi&eacute;n la atenci&oacute;n al
            personal t&eacute;cnico y de la comunicaci&oacute;n con </span><span class="c2">FRESH TECHS</span><span
            class="c1">, al ciudadano </span><span class="c1">${name}</span><span class="c1">,
            venezolano(a), mayor de edad, titular de c&eacute;dula de identidad No. </span><span
            class="c1">{{cedula}}</span><span class="c1">, correo electr&oacute;nico: </span><span
            class="c1">_CON_CORREO</span><span class="c1"> y n&uacute;mero de tel&eacute;fono: </span><span
            class="c1">_CON_TELEFONO1</span><span class="c1">. Asimismo, para cualquier otro acto o correspondencia,
        </span><span class="c2">EL CLIENTE</span><span class="c1"> se&ntilde;ala para tales el efecto la siguiente
            ubicaci&oacute;n: Av. Francisco Solano, Sans Souci, </span><span class="c1">_DIR_INSTALACION1</span><span
            class="c1 c7">, Chacao, Caracas.</span></p>
    <p class="c3"><span class="c0"></span></p>
    <p class="c3"><span class="c0"></span></p>
    <p class="c3"><span class="c0"></span></p>
    <p class="c3"><span class="c0"></span></p>
    <p class="c3"><span class="c0"></span></p>
    <div>
        <div class="container">
            <div>
                <span
                    style="overflow: hidden; display: inline-block; margin-bottom: -25px; margin-left: -10px; border: 0.00px solid #000000; transform: rotate(0.19rad) translateZ(0px); -webkit-transform: rotate(0.19rad) translateZ(0px); width: 165.73px; height: 77.88px;">
                    <img alt="" src="https://drive.google.com/uc?export=download&id=1_vapHO7cxiBo4pEHQxvnWhAUMf3kBchH"
                        style="width: 165.73px; height: 77.88px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                        title="">
                </span>
                <p class="c3"><span class="c0"></span></p>
                <span
                    style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 97.50px; height: 32.89px;">
                    <img alt="firma"
                        src="https://drive.google.com/uc?export=download&id=1iTtlxCD2y-g2sCxkcLd6GWMW7lSuuon-"
                        style="width: 170.71px; height: 82.00px; margin-left: -26.80px; margin-top: -27.99px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                        title="">
                </span>
            </div>
            <div style="margin-left: 174px;margin-top: 20px;width: 150px;height: 50px;">
                <span class="c0">{firmaCliente}</span>
            </div>
        </div>
        <div class="container">
            <div>
                <p class="c32">POR FRESH TECHS</p>
            </div>
            <div style="margin-left: 300px;">
                <p class="c32">POR EL CLIENTE
                </p>
            </div>
        </div>
    </div>
</body>

</html>
`
};