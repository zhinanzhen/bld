var files1 = [];
window.onload = function() {
    var result1 = document.getElementById("txt");
    var input1 = document.getElementById("file1");
    var f_tab1 = document.getElementById("f_tab1");
    f_tab1.onclick = function() {
        this.style.color = "#aaa";
    };

    if (typeof FileReader === 'undefined') {
        result1.innerHTML = "抱歉，你的浏览器不支持图片预览";
    } else {
        input1.addEventListener('change', readFile1, false);
    }

    function readFile1() {
        f_tab1.style.color = "#919191";
        for (var i = 0; i < this.files.length; i++) {
            var file = this.files[i];

            if (!/image\/\w+/.test(file.type)) {
                alert("请确保文件为图片类型");
                return false;
            }

            files1.push(file);
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function(e) {
                result1.innerHTML += '<div class="pic"><img src="' +
                    this.result +
                    '" alt="" width="80px" height="80px"/><div class="close" onclick="deletePic1(this);"><img src="../images/icon_del.png" width="33" height="33" alt=""></div></div>';

            };
        }
        var imgs = result1.getElementsByTagName("img");
        if (imgs.length > 6) {
            input1.setAttribute('disabled', 'disabled');
            alert("最多可上传6张图片！");
        }
        input1.value = '';
    }
}

function deletePic1(obj) {
        files1.splice($(obj).parent().index(), 1);
        $(obj).parent().remove();
    }