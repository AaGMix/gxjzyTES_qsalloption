// ==UserScript==
// @name         Gxjzy快速选择所有选项
// @namespace    https://github.com/AaGMix/gxjzyTES_qsalloption
// @version      1.0
// @description  GXJZY Teacher Evaluationfor systeam Quickselect all options
// @author       AaGmix
// @supportURL   https://github.com/AaGMix/gxjzyTES_qsalloption
// @match        *://www.gxjzy.com/wwxx/wwxp/xpjaws1.php
// @require      https://code.jquery.com/jquery-3.3.1.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var menu = $("form[name = 'form1']>table:eq(1)>tbody>tr:eq(-2)");
    var menuhtml = "<tr>" +
        "<td align='center' valign='middle' bgcolor='#FFFFFF'><strong>快速选择</strong></td>" +
        "<td align='left' valign='middle' bgcolor='#FFFFFF'>这个脚本可以让你快速选择上面的选项</td>" +
        "<td align='center' valign='middle' bgcolor='#FFFFFF'>" +
        "全部选:&nbsp;<strong>" +
        "A&nbsp;<input type='radio' name='SAll' id='salla'>" +
        "&nbsp;B&nbsp;<input type='radio' name='SAll' id='sallb'>" +
        "&nbsp;C&nbsp;<input type='radio' name='SAll' id='sallc'>" +
        "&nbsp;&nbsp;<input type='button' value='AB' name='SAB' id='sab'>" +
        "&nbsp;&nbsp;<input type='button' value='BC' name='SAB' id='sbc'>" +
        "</strong>" +
        "</td>" +
        "</tr>";
    menu.after(menuhtml);

    $("#salla").click(function () {
        document.form1.a11[0].checked = true;
        document.form1.a12[0].checked = true;
        document.form1.a13[0].checked = true;
        document.form1.a14[0].checked = true;
        document.form1.a15[0].checked = true;
        document.form1.a21[0].checked = true;
        document.form1.a22[0].checked = true;
        document.form1.a23[0].checked = true;
        document.form1.a24[0].checked = true;
        document.form1.a25[0].checked = true;
        document.form1.a31[0].checked = true;
        document.form1.a32[0].checked = true;
        document.form1.a33[0].checked = true;
        document.form1.a34[0].checked = true;
        document.form1.a35[0].checked = true;
        document.form1.a41[0].checked = true;
        document.form1.a42[0].checked = true;
        document.form1.a43[0].checked = true;
        document.form1.a44[0].checked = true;
        document.form1.a51[0].checked = true;
        document.form1.a52[0].checked = true;
        document.form1.a53[0].checked = true;
        document.form1.a54[0].checked = true;
        document.form1.a55[0].checked = true;
    });
    $("#sallb").click(function () {
        document.form1.a11[1].checked = true;
        document.form1.a12[1].checked = true;
        document.form1.a13[1].checked = true;
        document.form1.a14[1].checked = true;
        document.form1.a15[1].checked = true;
        document.form1.a21[1].checked = true;
        document.form1.a22[1].checked = true;
        document.form1.a23[1].checked = true;
        document.form1.a24[1].checked = true;
        document.form1.a25[1].checked = true;
        document.form1.a31[1].checked = true;
        document.form1.a32[1].checked = true;
        document.form1.a33[1].checked = true;
        document.form1.a34[1].checked = true;
        document.form1.a35[1].checked = true;
        document.form1.a41[1].checked = true;
        document.form1.a42[1].checked = true;
        document.form1.a43[1].checked = true;
        document.form1.a44[1].checked = true;
        document.form1.a51[1].checked = true;
        document.form1.a52[1].checked = true;
        document.form1.a53[1].checked = true;
        document.form1.a54[1].checked = true;
        document.form1.a55[1].checked = true;
    });
    $("#sallc").click(function () {
        document.form1.a11[2].checked = true;
        document.form1.a12[2].checked = true;
        document.form1.a13[2].checked = true;
        document.form1.a14[2].checked = true;
        document.form1.a15[2].checked = true;
        document.form1.a21[2].checked = true;
        document.form1.a22[2].checked = true;
        document.form1.a23[2].checked = true;
        document.form1.a24[2].checked = true;
        document.form1.a25[2].checked = true;
        document.form1.a31[2].checked = true;
        document.form1.a32[2].checked = true;
        document.form1.a33[2].checked = true;
        document.form1.a34[2].checked = true;
        document.form1.a35[2].checked = true;
        document.form1.a41[2].checked = true;
        document.form1.a42[2].checked = true;
        document.form1.a43[2].checked = true;
        document.form1.a44[2].checked = true;
        document.form1.a51[2].checked = true;
        document.form1.a52[2].checked = true;
        document.form1.a53[2].checked = true;
        document.form1.a54[2].checked = true;
        document.form1.a55[2].checked = true;
    });
    $("#sab").click(function () {
        document.form1.a11[0].checked = true;
        document.form1.a12[1].checked = true;
        document.form1.a13[0].checked = true;
        document.form1.a14[1].checked = true;
        document.form1.a15[0].checked = true;
        document.form1.a21[1].checked = true;
        document.form1.a22[0].checked = true;
        document.form1.a23[1].checked = true;
        document.form1.a24[0].checked = true;
        document.form1.a25[1].checked = true;
        document.form1.a31[0].checked = true;
        document.form1.a32[1].checked = true;
        document.form1.a33[0].checked = true;
        document.form1.a34[1].checked = true;
        document.form1.a35[0].checked = true;
        document.form1.a41[1].checked = true;
        document.form1.a42[0].checked = true;
        document.form1.a43[1].checked = true;
        document.form1.a44[0].checked = true;
        document.form1.a51[1].checked = true;
        document.form1.a52[0].checked = true;
        document.form1.a53[1].checked = true;
        document.form1.a54[0].checked = true;
        document.form1.a55[1].checked = true;
    });
    $("#sbc").click(function () {
        document.form1.a11[1].checked = true;
        document.form1.a12[2].checked = true;
        document.form1.a13[1].checked = true;
        document.form1.a14[2].checked = true;
        document.form1.a15[1].checked = true;
        document.form1.a21[2].checked = true;
        document.form1.a22[1].checked = true;
        document.form1.a23[2].checked = true;
        document.form1.a24[1].checked = true;
        document.form1.a25[2].checked = true;
        document.form1.a31[1].checked = true;
        document.form1.a32[2].checked = true;
        document.form1.a33[1].checked = true;
        document.form1.a34[2].checked = true;
        document.form1.a35[1].checked = true;
        document.form1.a41[2].checked = true;
        document.form1.a42[1].checked = true;
        document.form1.a43[2].checked = true;
        document.form1.a44[1].checked = true;
        document.form1.a51[2].checked = true;
        document.form1.a52[1].checked = true;
        document.form1.a53[2].checked = true;
        document.form1.a54[1].checked = true;
        document.form1.a55[2].checked = true;

    });
})();
