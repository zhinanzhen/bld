function ajaxs(url,type,data,suFn,erFn){
	$.ajax({
		url:"http://39.104.181.50:8080/bld/"+url,
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
	})};