//var baseUrl="http://39.104.181.50:8080/bld/";
var baseUrl="http://127.0.0.1:8080/bld/";


function login() {
	localStorage.setItem('userId','654321');
}

function isLogin() {
	login();//之后去掉
	var userId=localStorage.getItem('userId');
    if(userId){
        userId.replace(/\"/g,"");
		return userId;
    }else{
        window.location.href="./login.html";
    }
}

function isEmptyString(obj) {
	if(typeof obj == "undefined" || obj == null || obj == ""){
		return true;
	}else{
		return false;
	}
}
var go =  function() {
	window.history.go(-1);
}
