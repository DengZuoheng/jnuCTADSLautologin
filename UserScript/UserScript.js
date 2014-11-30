// ==UserScript==
// @name               JNU CT ADSL AUTO LOGIN
// @namespace          dengzuoheng
// @version            0.8
// @description        暨南大学电信宽带自动登录
// @include            http://enet.10000.gd.cn:10001/login.jsp?wlanuserip=113.76.162.171&amp;wlanacip=119.146.247.2
// @include            *://enet.10000.gd.cn:10001/login.jsp?*
// @copyright          DengZuoheng
// @run-at             document-body
// @grant              GM_xmlhttpRequest
// ==/UserScript==

var uid = "你的用户名";
var upw = "你的密码";

(function autologin(){
    try{
        document.getElementById("userName1").value=uid;
        document.getElementById("password1").value=upw;
        document.getElementById("rand").value=document.getElementById("confirmrand").value;
        document.getElementById("login1").submit();
    }catch(e){
        console.log(e);
    }
})();
