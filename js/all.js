//var baseUrl="http://39.104.181.50:8080/bld/";
var baseUrl="http://127.0.0.1:8080/bld/";

//获取地址栏后面的信息
function getUrlString(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
//ajax调用同步
function ajaxs(url,type,data,suFn,erFn){
	$.ajax({
		//url:"http://39.104.181.50:8080/bld/"+url,
		url:baseUrl+url,
		xhrFields:{
			withCredentials:true
		},
		type: type,
		dataType : "json",
		data:data,
		success: function(data) {
			suFn(data);
		},
		error: function(error) {
			erFn(error);
		}
	});
}

function isLogin() {
	var userId=localStorage.getItem('userId');
    if(userId){
        userId.replace(/\"/g,"");
		return userId;
    }else{
        window.location.href="../login/login/login.html";
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
