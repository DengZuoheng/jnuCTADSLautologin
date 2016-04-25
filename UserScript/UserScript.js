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
function decaptcha(imgid){
    var image = document.querySelector("img#"+imgid);//如果要用在greasemonkey脚本里,可以把下面的代码放在image的onload事件里
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    var numbers = [//模板,依次是0-9十个数字对应的明暗值字符串
    "111000111100000001100111001001111100001111100001111100001111100001111100001111100001111100100111001100000001111000111111111111111111111111111111",
    "111000111100000111100000111111100111111100111111100111111100111111100111111100111111100111111100111100000000100000000111111111111111111111111111",
    "100000111000000011011111001111111001111111001111110011111100111111001111110011111100111111001111111000000001000000001111111111111111111111111111",
    "100000111000000001011111001111111001111110011100000111100000011111110001111111001111111001011110001000000011100000111111111111111111111111111111",
    "111110011111100011111100011111000011110010011110010011100110011100110011000000000000000000111110011111110011111110011111111111111111111111111111",
    "000000001000000001001111111001111111001111111000001111000000011111110001111111001111111001011110001000000011100000111111111111111111111111111111",
    "111000011110000001100111101100111111001111111001000011000000001000111000001111100001111100100111000100000001111000011111111111111111111111111111",
    "100000000100000000111111100111111101111111001111110011111110111111100111111101111111001111111001111110011111110011111111111111111111111111111111",
    "110000011100000001100111001100111001100011011110000011110000011100110001001111100001111100000111000100000001110000011111111111111111111111111111",
    "110000111100000001000111001001111100001111100000111000100000000110000100111111100111111001101111001100000011110000111111111111111111111111111111"];
    var captcha = "";//存放识别后的验证码
    canvas.width = image.width;
    canvas.height = image.height;
    document.body.appendChild(canvas);
    ctx.drawImage(image, 0, 0);
    for (var i = 0; i < 4; i++) {
        var pixels = ctx.getImageData(13 * i + 7, 3, 9, 16).data;
        var ldString = "";
        for (var j = 0,length = pixels.length; j < length; j += 4) {
            ldString = ldString + (+(pixels[j] * 0.3 + pixels[j + 1] * 0.59 + pixels[j + 2] * 0.11 >= 140));
        }
        var comms = numbers.map(function (value) {
        //为了100%识别率,这里不能直接判断是否和模板字符串相等,因为可能有个别0被计算成1,或者相反
            return ldString.split("").filter(function (v, index) {
                return value[index] === v;
            }).length;
        });
        captcha += comms.indexOf(Math.max.apply(null, comms));//添加到识别好的验证码中
    }
    return captcha;
}

(function autologin(){
    try{
        document.getElementById("userName1").value=uid;
        document.getElementById("password1").value=upw;
        document.getElementById("rand").value=decaptcha("random");
        document.getElementById("checkbox").checked = true;
        document.getElementById("login1").submit();
    }catch(e){
        console.log(e);
    }
})();