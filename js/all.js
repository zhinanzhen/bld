var baseUrl="http://39.104.181.50:8080/bld/";
//var baseUrl="http://127.0.0.1:8080/bld/";

//获取地址栏后面的信息
function getUrlString(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
//ajax调用同步
function ajaxs(url,type,data,suFn,erFn,params){
	$.ajax(Object.assign({
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
	},params || {}));
}

function go(){
	history.back(-1);
}
//获取用户信息,如果有参数则获取参数指定id用户,如果没有则返回当前登录用户
function getUserInfo(userId){
	if(isEmptyString(userId)){
		userId=isLogin();
	}
	ajaxs("api/user/userInfo",'post',{userId:userId},function(data){
			console("信息"+data.user);
			return data.user;
	},function(err){
		console.log(err);
	});
}

//获取localstage值
function lsget(key){
	return JSON.parse(localStorage.getItem(key));
}
//设置localstage值
function lsset(key,value) {
	return localStorage.setItem(key, JSON.stringify(value));
}
function isLogin() {
	var userId=JSON.parse(localStorage.getItem('userId'));
    if(userId){
        userId.replace(/\"/g,"");
		return userId;
    }else{
        window.location.href="/bld/html/login/login/login.html";
    }
}

function toLogin() {
	window.location.href="/bld/html/login/login/login.html";
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