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
    auto_body.setAttribute('style', 'height:'+(document.body.clientHeight - header.offsetHeight - footer.offsetHeight)+ 'px;'+'min-height:574px');


/*点击登录按钮，跳转到登录页面——管理员登录*/
var load = document.getElementById('load');
//var form = document.getElementById('form');
if(load) {
    load.onclick = function () {
        if(document.getElementById('user').value === 'admin'){
            window.location.href= 'manage.html?user=manage';
        }else {
            window.location.href= 'ordinary.html?user=ordinary';
        }
        //var login_form = document.getElementById('login_form');
        //login_form.style.display = 'block';
        //form.style.display = 'none';
        ///*消息栏*/
        //var header_manager = document.getElementById('header_manager');
        //var header = document.getElementById('header');
        //header.style.display = 'none';
        //header_manager.style.display = 'block';
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
var update_email_code = document.getElementById('update_email_code');
var email_code =  document.getElementById('email_code');
if(update_email_code){
    email_code.innerHTML = getCode();
    update_email_code.onclick = function () {
        email_code.innerHTML = getCode();
    };
}
var update_tel_code = document.getElementById('update_tel_code');
var tel_code =  document.getElementById('tel_code');
if(update_tel_code){
    tel_code.innerHTML = getCode();
    update_tel_code.onclick = function () {
        tel_code.innerHTML = getCode();
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



/*使用管理切换*/
var user_selected = document.getElementById('user_selected');
var tong_selected = document.getElementById('tong_selected');
var right_users_use =   document.getElementById('right_users_use');
var users_manage =  document.getElementById('users_manage');
var tongs_manage = document.getElementById('tongs_manage');
var right_user_use = document.getElementById('right_user_use');
var right_tong_use = document.getElementById('right_tong_use')
if(user_selected){
    user_selected.onclick = function(){
        user_selected.setAttribute('style',"color:#175b98; background: url('../imgs/user_ico.jpg') no-repeat 60px 10px;");
        tong_selected.setAttribute('style',"color:#a1a1a1; background: url('../imgs/untong_ico.jpg') no-repeat 60px 10px;");
        right_users_use .setAttribute('style','display:block');
        users_manage.setAttribute('style','display:block');
        tongs_manage.setAttribute('style','display:none');
        if(right_user_use)
            right_user_use.setAttribute('style','display:none');
        if(right_tong_use){
            right_tong_use.setAttribute('style','display:none');
        }
    };
}
if(tong_selected){
    tong_selected.onclick = function(){
        tong_selected.setAttribute('style',"color:#175b98; background: url('../imgs/tong_ico.jpg') no-repeat 60px 10px;");
        user_selected.setAttribute('style',"color:#a1a1a1; background: url('../imgs/unuser_ico.jpg') no-repeat 60px 10px;");
        right_users_use.setAttribute('style','display:block');
        users_manage.setAttribute('style','display:none');
        tongs_manage.setAttribute('style','display:block');
        if(right_user_use)
            right_user_use.setAttribute('style','display:none');
        if(right_tong_use){
            right_tong_use.setAttribute('style','display:none');
        }
    };
}
var back = document.getElementById('user_back');
if(back){
    back.onclick = function () {
        right_users_use.setAttribute('style','display:block');
        users_manage.setAttribute('style','display:block');
        tongs_manage.setAttribute('style','display:none');
        right_user_use.setAttribute('style','display:none');
    }
}
var tong_back = document.getElementById('tong_back');
if(tong_back){
    tong_back.onclick = function () {
        right_users_use.setAttribute('style','display:block');
        users_manage.setAttribute('style','display:none');
        tongs_manage.setAttribute('style','display:block');
        document.getElementById('right_tong_use').setAttribute('style','display:none');
    }
}
var details = document.getElementsByClassName('details');
if(details){
    for(var i =0;i<details.length;i++)
    details[i].onclick = function(){
        document.getElementById('right_user_use').setAttribute('style','display:block');
        right_users_use.setAttribute('style','display:none');
    }
}
var tong_details = document.getElementsByClassName('tong_details');
if(tong_details){
    for(var i =0;i<tong_details.length;i++)
        tong_details[i].onclick = function(){
            document.getElementById('right_tong_use').setAttribute('style','display:block');
            right_users_use.setAttribute('style','display:none');
        }
}
var details_apply = document.getElementsByClassName('details_apply');
if(details_apply){
    for(var i =0;i<details_apply.length;i++)
        details_apply[i].onclick = function(){
            document.getElementById('right_user_apply').setAttribute('style','display:block');
            right_users_apply.setAttribute('style','display:none');
        }
}
var tong_details_apply = document.getElementsByClassName('tong_details_apply');
if(tong_details_apply){
    for(var i =0;i<tong_details_apply.length;i++)
        tong_details_apply[i].onclick = function(){
            document.getElementById('right_tong_apply').setAttribute('style','display:block;height:100%:');
            right_users_apply.setAttribute('style','display:none');
        }
}


/*查看营业执照*/
var looks = document.getElementsByClassName('look');//查看营业执照
var look_outs = document.getElementsByClassName('look_out');//收起营业执照
var business_licenses = document.getElementsByClassName('business_license');
if(looks){
    for(var i =0;i<looks.length;i++){
        looks[i].i = i;
        looks[i].onclick = function(){
            business_licenses[this.i].style.display = 'block';
            this.style.display = 'none';
            look_outs[this.i].style.display = 'inline-block';
    }
    }
}
if(look_outs){
    for(var i=0;i<look_outs.length;i++){
        look_outs[i].i = i;
        look_outs[i].onclick = function(){
            business_licenses[this.i].style.display = 'none';
            this.style.display = 'none';
            looks[this.i].style.display = 'inline-block';
        }
    }
}



/*申请管理切换*/
/*user and tongtong change*/
var user_authentication_selected = document.getElementById('user_authentication_selected');
var tong_authentication_selected = document.getElementById('tong_authentication_selected');
var right_users_apply =   document.getElementById('right_users_apply');
var users_apply =  document.getElementById('users_apply');
var tongs_apply = document.getElementById('tongs_apply');
var right_user_apply = document.getElementById('right_user_apply');
var right_tong_apply = document.getElementById('right_tong_apply')
if(user_authentication_selected){
    user_authentication_selected.onclick = function(){
        user_authentication_selected.setAttribute('style',"color:#175b98; background: url('../imgs/user_authentication_ico.jpg') no-repeat 60px 10px;");
        tong_authentication_selected.setAttribute('style',"color:#a1a1a1; background: url('../imgs/untong_authentication_ico.jpg') no-repeat 60px 10px;");
        right_users_apply .setAttribute('style','display:block');
        users_apply.setAttribute('style','display:block');
        tongs_apply.setAttribute('style','display:none');
        if(right_user_apply)
            right_user_apply.setAttribute('style','display:none');
        if(right_tong_apply){
            right_tong_apply.setAttribute('style','display:none');
        }
    };
}
if(tong_authentication_selected){
    tong_authentication_selected.onclick = function(){
        tong_authentication_selected.setAttribute('style',"color:#175b98; background: url('../imgs/tong_authentication_ico.jpg') no-repeat 60px 10px;");
        user_authentication_selected.setAttribute('style',"color:#a1a1a1; background: url('../imgs/unuser_authentication_ico.jpg') no-repeat 60px 10px;");
        right_users_apply.setAttribute('style','display:block');
        users_apply.setAttribute('style','display:none');
        tongs_apply.setAttribute('style','display:block');
        if(right_user_apply)
            right_user_apply.setAttribute('style','display:none');
        if(right_tong_apply){
            right_tong_apply.setAttribute('style','display:none');
        }
    };
}
var apply_user_cancel = document.getElementById('apply_user_cancel');
if(apply_user_cancel){
    apply_user_cancel.onclick = function () {
        right_users_apply.setAttribute('style','display:block');
        users_apply.setAttribute('style','display:block');
        tongs_apply.setAttribute('style','display:none');
        right_user_apply.setAttribute('style','display:none');
    }
}
var apply_tong_cancel = document.getElementById('apply_tong_cancel');
if(apply_tong_cancel){
    apply_tong_cancel.onclick = function () {
        right_users_apply.setAttribute('style','display:block');
        users_apply.setAttribute('style','display:none');
        tongs_apply.setAttribute('style','display:block');
        right_tong_apply.setAttribute('style','display:none');
    }
}



/*管理员account_set*/
var update = document.getElementById('update');//修改按钮
if(update){
    update.onclick = function(){
        var current_account = document.getElementById('current_account');
        var new_account = document.getElementById('new_account');
        new_account.value = current_account.innerHTML;
        current_account.style.display = 'none';
        new_account.style.display = 'inline-block';
        new_account.focus();
        update.style.display = 'none';
        document.getElementById('sure').style.display = 'block';
    }
}
var reset = document.getElementById('reset');//重置按钮
if(reset){
    reset.onclick = function(){
        account_selected.onclick();
    }
}
var account_selected = document.getElementById('account_selected');
var security_selected = document.getElementById('security_selected');
var account_index = document.getElementById('account_index');
var account = document.getElementById('account');
var sets = document.getElementById('sets');
var right_account = document.getElementById('right_account');
if(account_selected){
    account_selected.onclick = function(){
        account_selected.setAttribute('class','account_selected');
        security_selected.setAttribute('class','security');
        right_account.style.display = 'block';
        account.style.display = 'block';
        account_index.style.display = 'none';
        sets.style.display = 'none';
        set_email.style.display = 'none';
        set_tel.style.display = 'none';
        set_secret.style.display = 'none';

    }
}
if(security_selected){
    security_selected.onclick = function(){
        security_selected.setAttribute('class','security_selected');
        account_selected.setAttribute('class','account');
        account.style.display = 'none';
        account_index.style.display = 'none';
        right_account.style.display = 'block';
        sets.style.display = 'block';
        set_email.style.display = 'none';
        set_tel.style.display = 'none';
        set_secret.style.display = 'none';
    }
}
var update_email = document.getElementById('update_email');
var update_tel = document.getElementById('update_tel');
var update_secret = document.getElementById('update_secret');
var set_email = document.getElementById('set_email');
var set_tel = document.getElementById('set_tel');
var set_secret = document.getElementById('set_secret');
if(update_email){
    update_email.onclick = function(){
        set_email.style.display = 'block';
        set_tel.style.display = 'none';
        set_secret.style.display = 'none';
        right_account.style.display = 'none';
    }
}
if(update_tel){
    update_tel.onclick = function(){
        set_email.style.display = 'none';
        set_tel.style.display = 'block';
        set_secret.style.display = 'none';
        right_account.style.display = 'none';
    }
}
if(update_secret){
    update_secret.onclick = function(){
        set_email.style.display = 'none';
        set_tel.style.display = 'none';
        set_secret.style.display = 'block';
        right_account.style.display = 'none';
    }
}


/*普通用户登录——用户通管理切换*/
var tong_all_selected = document.getElementById('tong_all_selected');
var tong_apply_selected = document.getElementById('tong_apply_selected');
var tong_send_selected = document.getElementById('tong_send_selected');

var tong_all = document.getElementById('tong_all');
var tong_all_index = document.getElementById('tong_all_index');
var tong_all_content = document.getElementById('tong_all_content');
var tong_all_details = document.getElementById('tong_all_details');
var tong_apply = document.getElementById('tong_apply');
var tong_send = document.getElementById('tong_send');
if(tong_all_selected){
    tong_all_selected.onclick = function () {
        tong_all_selected.setAttribute('style',"color:#175b98; background: url('../imgs/tong_all_ico.jpg') no-repeat 60px 10px;");
        tong_apply_selected.removeAttribute('style');
        tong_send_selected.removeAttribute('style');
        tong_all.style.display = 'block';
        tong_all_index.style.display = 'none';
        tong_all_content.style.display = 'block';
        tong_all_details.style.display = 'none';
        tong_apply.style.display = 'none';
        tong_send.style.display = 'none';
    }

}
if(tong_apply_selected){
    tong_apply_selected.onclick = function(){
        tong_apply_selected.setAttribute('style',"color:#175b98; background: url('../imgs/tong_apply_ico.jpg') no-repeat 60px 10px;");
        tong_all_selected.removeAttribute('style');
        tong_send_selected.removeAttribute('style');
        tong_all.style.display = 'none';
        tong_all_index.style.display = 'none';
        tong_all_content.style.display = 'none';
        tong_all_details.style.display = 'none';
        tong_apply.style.display = 'block';
        tong_send.style.display = 'none';
    }
}
if(tong_send_selected){
    tong_send_selected.onclick = function(){
        tong_send_selected.setAttribute('style',"color:#175b98; background: url('../imgs/tong_send_ico.jpg') no-repeat 60px 10px;");
        tong_all_selected.removeAttribute('style');
        tong_apply_selected.removeAttribute('style');
        tong_all.style.display = 'none';
        tong_all_index.style.display = 'none';
        tong_all_content.style.display = 'none';
        tong_all_details.style.display = 'none';
        tong_apply.style.display = 'none';
        tong_send.style.display = 'block';
    }

}
var tong_content_details = document.getElementsByClassName('tong_content_details');
if(tong_content_details){
    for(var i =0;i<tong_content_details.length;i++)
        tong_content_details[i].onclick = function(){
            tong_all_details.setAttribute('style','display:block');
            tong_all.setAttribute('style','display:none');
        }
}


/*普通用户登录——账号设置切换*/
var business_selected = document.getElementById('business_selected');
var ordinary_security_selected = document.getElementById('ordinary_security_selected');
var wallet_selected = document.getElementById('wallet_selected');

var business_content = document.getElementById('business_content');
var ordinary_sets = document.getElementById('ordinary_sets');
var wallet = document.getElementById('wallet');
var ordinary_sets_content = document.getElementById('ordinary_sets_content');
var ordinary_set_email = document.getElementById('ordinary_set_email');
var ordinary_set_tel = document.getElementById('ordinary_set_tel');
var ordinary_set_secret = document.getElementById('ordinary_set_secret');
var ordinary_set_tong_secret = document.getElementById('ordinary_set_tong_secret');
if(business_selected){
    business_selected.onclick = function () {
        business_selected.setAttribute('style',"color:#175b98; background: url('../imgs/business_ico.jpg') no-repeat 60px 10px;");
        ordinary_security_selected.removeAttribute('style');
        wallet_selected.removeAttribute('style');
        right_account.style.display = 'block';
        business_content.style.display = 'block';
        ordinary_sets.style.display = 'none';
        wallet.style.display = 'none';
        ordinary_sets_content.style.display = 'none';
    }
}
if(ordinary_security_selected){
    ordinary_security_selected.onclick = function () {
        ordinary_security_selected.setAttribute('style',"color:#175b98; background: url('../imgs/security_ico.jpg') no-repeat 60px 10px;");
        business_selected.removeAttribute('style');
        wallet_selected.removeAttribute('style');
        right_account.style.display = 'block';
        business_content.style.display = 'none';
        ordinary_sets.style.display = 'block';
        wallet.style.display = 'none';
        ordinary_sets_content.style.display = 'none';
    }
}
if(wallet_selected){
    wallet_selected.onclick = function () {
        wallet_selected.setAttribute('style',"color:#175b98; background: url('../imgs/wallet_ico.jpg') no-repeat 60px 10px;");
        ordinary_security_selected.removeAttribute('style');
        business_selected.removeAttribute('style');
        right_account.style.display = 'block';
        business_content.style.display = 'none';
        ordinary_sets.style.display = 'none';
        wallet.style.display = 'block';
        ordinary_sets_content.style.display = 'none';
    }
}
var ordinary_update_email = document.getElementById('ordinary_update_email');
var ordinary_update_tel = document.getElementById('ordinary_update_tel');
var ordinary_update_secret = document.getElementById('ordinary_update_secret');
var ordinary_update_tong_secret = document.getElementById('ordinary_update_tong_secret');
if(ordinary_update_email){
    ordinary_update_email.onclick = function(){
        right_account.style.display = 'none';
        ordinary_sets_content.style.display = 'block';
        ordinary_set_email.style.display = 'block';
        ordinary_set_tel.style.display = 'none';
        ordinary_set_secret.style.display = 'none';
        ordinary_set_tong_secret.style.display = 'none';
    }
}
if(ordinary_update_tel){
    ordinary_update_tel.onclick = function(){
        right_account.style.display = 'none';
        ordinary_sets_content.style.display = 'block';
        ordinary_set_email.style.display = 'none';
        ordinary_set_tel.style.display = 'block';
        ordinary_set_secret.style.display = 'none';
        ordinary_set_tong_secret.style.display = 'none';
    }
}
if(ordinary_update_secret){
    ordinary_update_secret.onclick = function(){
        right_account.style.display = 'none';
        ordinary_sets_content.style.display = 'block';
        ordinary_set_email.style.display = 'none';
        ordinary_set_tel.style.display = 'none';
        ordinary_set_secret.style.display = 'block';
        ordinary_set_tong_secret.style.display = 'none';
    }
}
if(ordinary_update_tong_secret){
    ordinary_update_tong_secret.onclick = function(){
        right_account.style.display = 'none';
        ordinary_sets_content.style.display = 'block';
        ordinary_set_email.style.display = 'none';
        ordinary_set_tel.style.display = 'none';
        ordinary_set_secret.style.display = 'none';
        ordinary_set_tong_secret.style.display = 'block';
    }
}


/*关于我们——选项卡切换*/
var technology_selected = document.getElementById('technology_selected');
var investor_selected = document.getElementById('investor_selected');
var team_selected = document.getElementById('team_selected');
var technology = document.getElementById('technology');
var investor = document.getElementById('investor');
var team = document.getElementById('team');
if(technology_selected){
    technology_selected.onclick = function () {
        technology_selected.setAttribute('style',' color:#175b98;');
        investor_selected.setAttribute('style',' color:#a1a1a1;');
        team_selected.setAttribute('style',' color:#a1a1a1;');
        technology.style.display = 'block';
        investor.style.display = 'none';
        team.style.display = 'none';
    }
}
if(investor_selected){
    investor_selected.onclick = function () {
        technology_selected.setAttribute('style','color:#a1a1a1;;');
        investor_selected.setAttribute('style','color:#175b98');
        team_selected.setAttribute('style',' color:#a1a1a1;');
        technology.style.display = 'none';
        investor.style.display = 'block';
        team.style.display = 'none';
    }
}
if(team_selected){
    team_selected.onclick = function () {
        technology_selected.setAttribute('style','color:#a1a1a1;');
        investor_selected.setAttribute('style','color:#a1a1a1;');
        team_selected.setAttribute('style','color:#175b98;');
        technology.style.display = 'none';
        investor.style.display = 'none';
        team.style.display = 'block';
    }
}

/*关于我们、常见问题、联系我们 ，根据不同权限nav显示不同内容*/
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
var user = getQueryString('user');
console.log('user:'+user);
var header_ordinary = document.getElementById('header');
var header_manager =  document.getElementById('header_manager');
if(user == null || user == "null"){
    if(header_ordinary)
        header_ordinary.style.display = 'block';
    if(header_manager)
        header_manager.style.display = 'none';
}else{
    if(header_ordinary)
        header_ordinary.style.display = 'none';
    if(header_manager)
        header_manager.style.display = 'block';
}
var about_us_a = document.getElementById('about_us_a');
if(about_us_a)
    about_us_a.href = './about_us.html?user='+getQueryString('user');
var normal_question_a = document.getElementById('normal_question_a');
if(normal_question_a)
    normal_question_a.href='./normal_question.html?user='+getQueryString('user');
var contact_us_a = document.getElementById('contact_us_a');
if(contact_us_a)
    contact_us_a.href = './contact_us.html?user='+getQueryString('user');





/*管理员登录页面导航切换*/
var nav_lists = document.getElementById('nav_lists');
if(nav_lists){
    var lists = nav_lists.getElementsByTagName('a');
    for(var i = 0;i<lists.length;i++){
        lists[i].i = i;
        lists[i].onclick = function(){
            for(var i=0;i<lists.length;i++){
                lists[i].removeAttribute('class');
            }
            this.setAttribute('class','selected');
            switch(this.i){
                case 3:/*首页*/
                    //document.getElementById('body').setAttribute('style','height:1700px;');
                    document.getElementById('manager_index').setAttribute('style','display:block');
                    document.getElementById('apply_manage').setAttribute('style','display:none');
                    document.getElementById('use_manage').setAttribute('style','display:none');
                    document.getElementById('account_set').setAttribute('style','display:none');
                    break;
                case 2:/*使用管理*/
                    document.getElementById('body').setAttribute('style','min-height:745px;');
                    document.getElementById('manager_index').setAttribute('style','display:none');
                    document.getElementById('apply_manage').setAttribute('style','display:none');
                    document.getElementById('use_manage').setAttribute('style','display:block');
                    document.getElementById('account_set').setAttribute('style','display:none');
                    user_selected.onclick();
                    break;
                case 1:/*申请管理*/
                    document.getElementById('body').setAttribute('style','min-height:745px;');
                    document.getElementById('manager_index').setAttribute('style','display:none');
                    document.getElementById('apply_manage').setAttribute('style','display:block');
                    document.getElementById('use_manage').setAttribute('style','display:none');
                    document.getElementById('account_set').setAttribute('style','display:none');
                    user_authentication_selected.onclick();
                    break;
                case 0:/*账号设置*/
                    document.getElementById('body').setAttribute('style','min-height:745px;');
                    document.getElementById('account_set').setAttribute('style','display:block');
                    account_selected.setAttribute('class','account');
                    security_selected.setAttribute('class','security');
                    right_account.style.display = 'block';
                    account.style.display = 'none';
                    account_index.style.display = 'block';
                    sets.style.display = 'none';
                    set_email.style.display = 'none';
                    set_tel.style.display = 'none';
                    set_secret.style.display = 'none';
                    document.getElementById('manager_index').setAttribute('style','display:none');
                    document.getElementById('apply_manage').setAttribute('style','display:none');
                    document.getElementById('use_manage').setAttribute('style','display:none');
                    break;
            }
        }
    }
}

/*未登录状态导航切换*/
var nav = document.getElementById('unload_nav_lists');
if(nav){
    var index_content = document.getElementById('index_content');
    var guide_content_out = document.getElementById('guide_content_out');
    var supply_content_out = document.getElementById('supply_content_out');
    var latest_content_out = document.getElementById('latest_content_out');

    var lists = nav.getElementsByTagName('a');
    for(var i = 0;i<lists.length;i++){
        lists[i].i = i;
        lists[i].onclick = function(){
            for(var i=0;i<lists.length;i++){
                lists[i].removeAttribute('class');
            }
            this.setAttribute('class','selected');
            switch(this.i){
                //case 3:/*首页*/
                //    index_content.style.display = 'block';
                //    guide_content_out.style.display = 'none';
                //    supply_content_out.style.display = 'none';
                //    latest_content_out.style.display = 'none';
                //    break;
                case 2:/*新手指导*/
                    index_content.style.display = 'none';
                    guide_content_out.style.display = 'block';
                    supply_content_out.style.display = 'none';
                    latest_content_out.style.display = 'none';
                    break;
                case 1:/*用户支持*/
                    index_content.style.display = 'none';
                    guide_content_out.style.display = 'none';
                    supply_content_out.style.display = 'block';
                    latest_content_out.style.display = 'none';
                    break;
                case 0:/*最新咨询*/
                    index_content.style.display = 'none';
                    guide_content_out.style.display = 'none';
                    supply_content_out.style.display = 'none';
                    latest_content_out.style.display = 'block';
                    break;
            }
        }
    }
}


/*普通用户登录导航*/
var ordinary_nav_lists = document.getElementById('ordinary_nav_lists');
if(ordinary_nav_lists){
    var manager_index = document.getElementById('manager_index');
    var guide_content_out = document.getElementById('guide_content_out');
    var tong_manage = document.getElementById('tong_manage');
    var account_set = document.getElementById('account_set');

    var lists = ordinary_nav_lists.getElementsByTagName('a');
    for(var i = 0;i<lists.length;i++){
        lists[i].i = i;
        lists[i].onclick = function(){
            for(var i=0;i<lists.length;i++){
                lists[i].removeAttribute('class');
            }
            this.setAttribute('class','selected');
            switch(this.i){
                //case 3:/*首页*/
                //document.getElementById('body').setAttribute('style','height:1700px;');
                //    manager_index.style.display = 'block';
                //    guide_content_out.style.display = 'none';
                //    tong_manage.style.display = 'none';
                //    account_set.style.display = 'none';
                //    break;
                case 2:/*新手指导*/
                    //document.getElementById('body').setAttribute('style','height:803px;');
                    manager_index.style.display = 'none';
                    guide_content_out.style.display = 'block';
                    tong_manage.style.display = 'none';
                    account_set.style.display = 'none';
                    break;
                case 1:/*用户通管理*/
                    //document.getElementById('body').setAttribute('style','height:745px;');
                    manager_index.style.display = 'none';
                    guide_content_out.style.display = 'none';
                    tong_manage.style.display = 'block';
                    tong_all.style.display = 'block';
                    tong_all_index.style.display = 'block';
                    tong_all_content.style.display = 'none';
                    tong_all_details.style.display = 'none';
                    tong_apply.style.display = 'none';
                    tong_send.style.display = 'none';
                    account_set.style.display = 'none';
                    tong_send_selected.removeAttribute('style');
                    tong_all_selected.removeAttribute('style');
                    tong_apply_selected.removeAttribute('style');
                    break;
                case 0:/*账号设置*/
                    //document.getElementById('body').setAttribute('style','height:745px;');
                    manager_index.style.display = 'none';
                    guide_content_out.style.display = 'none';
                    tong_manage.style.display = 'none';
                    account_set.style.display = 'block';
                    business_selected.onclick();
                    break;
            }
        }
    }
}


/*百度地图*/
function initMap1(){
    createMap1();//创建地图
    setMapEvent();//设置地图事件
    addMapOverlay();//向地图添加覆盖物
}
function initMap2(){
    createMap2();//创建地图
    setMapEvent();//设置地图事件
    addMapOverlay();//向地图添加覆盖物
}
function createMap1(){
    map = new BMap.Map("new_map");
    map.centerAndZoom(new BMap.Point(116.413603,40.020542),15);
}
function createMap2(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.419603,40.009542),15);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
    var markers = [
        {content:"北京市朝阳区大屯里317号楼金泉时代1单元2611",title:"井通科技",imageOffset: {width:0,height:-21},position:{lat:40.012333,lng:116.421112}}
    ];
    for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
    };
}
var map;
var new_map = document.getElementById('new_map');
var contact_map = document.getElementById('map');
if(new_map){
    initMap1();
}
if(contact_map){
    initMap2();
}


/*遮罩层动画控制*/
var whole = document.getElementsByClassName('whole');
var blue_back = document.getElementsByClassName('blue_back');
var black_back_div = document.getElementsByClassName('black_back_div');
var font_back = document.getElementsByClassName('font_back');
if(whole){
    for(var i = 0;i<whole.length;i++){
        whole[i].i = i;
        whole[i].onmousemove = function(e){
            e.stopPropagation();
            blue_back[this.i].style.top = 0;
            font_back[this.i].style.top = 0;
            black_back_div[this.i].style.top = "100%";
        }
        whole[i].onmouseleave = function (e) {
            e.stopPropagation();
            blue_back[this.i].style.top="-100%";
            font_back[this.i].style.top = "-100%";
            black_back_div[this.i].style.top=0;
        }
    }
}
