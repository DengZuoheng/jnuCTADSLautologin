

function submitlogin1() {
	var userName = document.getElementById("userName1");
	var password = document.getElementById("password1");
	if (userName.value == "") {
		alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01");
		return false;
	}
	if (password.value == "") {
		alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!");
		return false;
	}
    if(!checkRand()){
    	return false;
	}
	document.getElementById("login1").submit();
}
function changepw() {
	var userName1 = document.getElementById("userName1");
	var password1 = document.getElementById("password1");
	var password2 = document.getElementById("password2");
	var password3 = document.getElementById("password3");
	if (userName1.value == "") {
		alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01");
		return false;
	}
	if (password1.value == "") {
		alert("\u65e7\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!");
		return false;
	}
	if (password2.value == "") {
		alert("\u65b0\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!");
		return false;
	}
	if (password3.value != password2.value || password3.value == "") {
		alert("\u65b0\u5bc6\u7801\u524d\u540e\u4e0d\u4e00\u81f4!");
		return false;
	}
	document.getElementById("pwchange").submit();
}
function showRand() {
	var num = random();
	document.getElementById("confirmrand").value = num;
	document.getElementById("random").src = "/common/image.jsp?rand=" + num;
}
function getPassword() {
	var userName = document.getElementById("userName2");
	if (userName.value == "") {
		JSMessage.getMessage("16001001", function (data) {
			alert(data);
		});
	} else {
		Password.getPassword(userName.value, function (data) {
			alert(data);
		});
	}
}
function random() {
	var num = "";
	for (i = 0; i < 4; i++) {
		num = num + Math.floor(Math.random() * 10);
	}
	return num;
}
function checkRand() {
	if (document.getElementById("rand").value != null && document.getElementById("rand").value != "") {
		if (document.getElementById("confirmrand").value != document.getElementById("rand").value) {
			alert("\u9a8c\u8bc1\u7801\u9519\u8bef");
			return false;
		} else {
			return true;
		}
	} else {
		alert("\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a");
		return false;
	}
}

