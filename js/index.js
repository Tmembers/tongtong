/**
 * Created by lipc on 2016/7/21.
 */

/*屏幕两边自动延伸*/
var body = document.body;
if(body.clientWidth < 1200){
    body.style.width = 1200+'px';
}

/*获得register高度*/
var auto_body = document.getElementById('auto_body');
var header = document.getElementsByClassName('header-out')[0];
var footer = document.getElementsByClassName('footer')[0];
if(auto_body)
    auto_body.setAttribute('style', 'height:'+(document.body.clientHeight - header.offsetHeight - footer.offsetHeight)+ 'px');


/*点击登陆按钮，跳转到登陆页面——管理员登陆*/
var load = document.getElementById('load');
var form = document.getElementById('form');
var black_back = document.getElementById('black_back');
if(load) {
    load.onclick = function () {
        form.style.display = 'none';
        var div = document.createElement('div');
        var p1 = document.createElement('p');
        p1.innerHTML = '欢迎回来，XXX！';
        var span = document.createElement('span');
        span.innerHTML = '（已认证）';
        span.setAttribute('style', 'color:red');
        p1.appendChild(span);
        var p2 = document.createElement('p');
        p2.innerHTML = '已发行通：XX！';
        div.appendChild(p1);
        div.appendChild(p2);
        div.setAttribute('class', 'login_form');
        black_back.appendChild(div);

        /*消息栏*/
        var header_manager = document.getElementById('header_manager');
        var header = document.getElementById('header');
        header.style.display = 'none';
        header_manager.style.display = 'block';

        /*nav_manager*/
        var nav_manager = document.getElementById('nav_manager');
        nav_manager.style.display = 'block';
        var nav = document.getElementById('nav');
        nav.style.display = 'none';
    }
}


///验证码:实现四位不重复的随机验证码(介于数字和字母(大小写字母)之间的)
var code = document.getElementById("code");
var rangeStr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function getCode() {
    var str = "";
    while (str.length < 4) {
        var ran = Math.round(Math.random() * 61);
        var temp = rangeStr[ran];
        if (str.toLowerCase().indexOf(temp.toLowerCase()) === -1) {//不管哪边是大写还是小写我们都转换为小写,然后在判断
            str += temp;
        }
    }
    return str;
}
if(code){
    code.innerHTML = getCode();
    code.onclick = function () {
        //this->code
        this.innerHTML = getCode();
    };
}



/*密码重置切换*/
var steps = document.getElementById('steps');
if(steps){
    var lis = steps .getElementsByTagName('li');
    for(var i = 0;i<lis.length;i++){
        lis[i].i = i;
    }
    var next = document.getElementById('next');
    if(next){
        var num = 0;
        next.onclick = function(){
            num++;
            if(num>3)
                num=0;
            var tables =  document.getElementById('change').getElementsByTagName('table');
            for(var i = 0;i<=3;i++){
                lis[i].removeAttribute('class');
                lis[i].getElementsByTagName('div')[0].removeAttribute('class');
            }
            lis[num].setAttribute('class','selected');
            lis[num].getElementsByTagName('div')[0].setAttribute('class','selected');
            document.getElementById('change').getElementsByTagName('table')[(num+3)%4].style.display = 'none';
            document.getElementById('change').getElementsByTagName('table')[num].style.display = 'block';
            if(num===2){
                next.setAttribute('value','提交');
                next.setAttribute('style','margin-left:-86px')
            }else if(num===3){
                next.setAttribute('style','display:none');
            }
            else{
                next.setAttribute('value','下一步');
            }
        }
    }
}


