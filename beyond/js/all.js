//实现按手机返回键时返回上一页，当返回到首页，再按手机返回键即可退出APP
document.addEventListener('plusready', function() {
	var webview = plus.webview.currentWebview();
	plus.key.addEventListener('backbutton', function() {
		webview.canBack(function(e) {
			if(e.canBack) {
				webview.back();
			} else {
				webview.close(); //hide,quit按手机返回键直接退出APP
				//plus.runtime.quit();
			}
		})
	});
});



//var backButtonPress = 0;
//$.back = function(event) {
//	backButtonPress++;
//	if(backButtonPress > 1) {
//		plus.runtime.quit();
//	} else {
//		plus.nativeUI.toast('再按一次退出应用');
//	}
//	setTimeout(function() {
//		backButtonPress = 0;
//	}, 1000);
//	return false;
//};
//
//
//$.back();




//点击手机返回键两次提示退出程序
//mui.plusReady(function() {
//              //首页返回键处理
//              //处理逻辑：1秒内，连续两次按返回键，则退出应用；
//              var first = null;
//              plus.key.addEventListener('backbutton', function() {
//                  //首次按键，提示‘再按一次退出应用’
//                  if (!first) {
//                      first = new Date().getTime();
//                      mui.toast('再按一次退出应用');
//                      setTimeout(function() {
//                          first = null;
//                      }, 1000);
//                  } else {
//                      if (new Date().getTime() - first < 1000) {
//                          plus.runtime.quit();
//                      }
//                  }
//              }, false);
//          });

 


document.addEventListener('plusready', function() {
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
            webview.canBack(function(e) {
                if(e.canBack) {
                    webview.back();             
                } else {
                    webview.close(); //hide,quit
                    plus.runtime.quit();
                    //首页返回键处理
                    //处理逻辑：1秒内，连续两次按返回键，则退出应用；
                    var first = null;
                    plus.key.addEventListener('backbutton', function() {
                        //首次按键，提示‘再按一次退出应用’
                        if (!first) {
                            first = new Date().getTime();
                            console.log('再按一次退出应用');
                            document.write("再按一次退出");
                            setTimeout(function() {
                                first = null;
                            }, 1000);
                        } else {
                            if (new Date().getTime() - first < 1500) {
                                plus.runtime.quit();
                            }
                        }
                    }, false);
                }
            })
        });
    });

 