//var baseUrl="http://39.104.181.50:8080/bld/";
var baseUrl="http://127.0.0.1:8080/bld/";

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

function isLogin() {
	var userId=JSON.parse(localStorage.getItem('userId'));
    if(userId){
        userId.replace(/\"/g,"");
		return userId;
    }else{
        window.location.href="/bld/html/login/login/login.html";
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

//var img = "imgurl";//imgurl 就是你的图片路径
function getBase64Image(img) {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, img.width, img.height);
	var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
	var dataURL = canvas.toDataURL("image/"+ext);
	return dataURL;
}

function getBase64(img){
	function getBase64Image(img,width,height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
		var canvas = document.createElement("canvas");
		canvas.width = width ? width : img.width;
		canvas.height = height ? height : img.height;

		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		var dataURL = canvas.toDataURL();
		return dataURL;
	}
	var image = new Image();
	image.crossOrigin = '';
	image.src = img;
	var deferred=$.Deferred();
	if(img){
		image.onload =function (){
			deferred.resolve(getBase64Image(image));//将base64传给done上传处理
		}
		return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
	}
}