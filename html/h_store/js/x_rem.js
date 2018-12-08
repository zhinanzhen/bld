/**
   * Created by asus on 2017/9/29.
   */

/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
var html = document.getElementsByTagName('html')[0];
//console.log(html);
/*取到屏幕的宽度*/
var width = window.innerWidth;
//console.log(width);
/* 640 100  320 50 */
var fontSize = 100/750*width;
//console.log(fontSize);
/*设置fontsize*/

html.style.fontSize = fontSize +'px';
window.onresize = function(){
        var html = document.getElementsByTagName('html')[0];
        //console.log(html);
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        //console.log(width);
        /* 640 100  320 50 */
        var fontSize = 100/750 * width;
        //console.log(fontSize);
        /*设置fontsize*/
        html.style.fontSize = fontSize +'px';

    }
function back(){
       history.go(-1);
}



//(function(win,doc){
//	    //浏览器缩放大小时
//	    win.onresize=function(){
//	        change();
//	    };
//	    change();
//	    function change(){
//	        var Fs=doc.documentElement.clientWidth;
//	        var nFs=Fs/(375/100);
//	        //字体大小为100px;
//	        doc.documentElement.style.fontSize=nFs+'px';
//	    }
//	})(window,document);