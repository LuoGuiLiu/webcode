window.onload=function(){
    var oDenglu=document.getElementById("denglu");
    oDenglu.onclick=function(){
        var sWidth=document.documentElement.scrollWidth;
        var sHeight=document.documentElement.scrollHeight;
        var wHeight=document.documentElement.clientHeight;


        var oShadow=document.createElement("div");
        oShadow.id="shadow";
        oShadow.style.width=sWidth+"px";
        oShadow.style.height=sHeight+"px";
        document.body.appendChild(oShadow);
        var oL_position=document.createElement("div");
        oL_position.id="form";
        oL_position.innerHTML='<div><div id="title"><p>滑稽注册</p></div><div id="content"><form action="#"method="pass"><div><label for="姓名"></label><span>姓名</span><input  type="text" name="姓名" value=""/><p class="po"></p><p id="po_1"></p></div><div><label for="密码"></label><span>密码</span><input  type="password" name="密码" value=""/><p class="po"></p><div class="chengdu"><em>弱</em><em>中</em><em>强</em></div></div><div><label  for="确定密码"></label><span>确认密码</span><input  type="password" name="确定密码" disabled="" value=""/><p class="po"></p></div><label  for="确定密码"></label> <input style="width:100px;height:50px;outline: none;border:none" class="zhuce" type="submit" name="提交" value="注册" ><div id="close_1"></div></form></div><div id="footer"><p>&copy;&nbsp;版权归全国各大知名精神病院</p></div>';
        document.body.appendChild(oL_position);
        var dWidth=oL_position.offsetWidth;
        var dHeight=oL_position.offsetHeight;
        oL_position.style.left=(sWidth-dWidth)/2+"px";
        oL_position.style.top=(wHeight-dHeight)/2+"px";


        var oClose=document.getElementById("close_1");
        oClose.onclick=oShadow.onclick=function(){
            document.body.removeChild(oShadow);
            document.body.removeChild(oL_position);
            }



    function Getlength(str){
        return str.replace(/[^\x00-xff]/g,"xx").length;
        } 


    var oName=document.getElementsByTagName("input");
    var Input_1=oName[0];
    var Input_2=oName[1];
    var Input_3=oName[2];
    var oPsw=document.getElementsByTagName("p");
    var P_1=oPsw[2];
    var P_2=oPsw[4];
    var P_3=oPsw[5];
    var oEm=document.getElementsByTagName("em");
    var oP=document.getElementById("po_1")
    var get_length=0;
    var re=/[^\w\u4e00-\u9fa5]/g;

    Input_1.onfocus=function(){
        P_1.innerHTML='<p class="po">请输入您的名字</p>';
        }   

    Input_1.onkeyup=function(){
        oP.style.visibility="visible";
        var get_length=Getlength(this.value);
        oP.innerHTML= get_length+"个字符"

        if(get_length==0){
            oP.style.visibility="hidden";
            }
        }

    Input_1.onblur=function(){
        var re=/[^\w\u4e00-\u9fa5]/g;
        if(re.test(this.value)){
            P_1.innerHTML='<p class="po">含有非法字符</p>'
            }
        else if(this.value==""){
            P_1.innerHTML='<p class="po">不能为空</p>'
            }
        else if(this.value.length>25){
            P_1.innerHTML='<p class="po">长度不能超过25个字符</p>'
            }
        else if(this.value.length<6){
            P_1.innerHTML='<p class="po">长度不能少于6个字符</p>'
            }
        else{
            P_1.innerHTML="OK";
            }
        }

    Input_2.onfocus=function(){
        P_2.innerHTML='<p class="po">请输入您的密码</p>';
        }
    
    Input_2.onkeyup=function(){
        if(this.value.length>5){
            oEm[0].className="Em";
            Input_3.removeAttribute("disabled");
            P_3.innerHTML='<p class="po">请再输一次密码</p>';
            }
        else{
            oEm[0].className="";
            P_3.innerHTML="";
            Input_3.setAttribute("disabled","disabled");
            

            }
        if(this.value.length>10){
            oEm[1].className="Em";
            }
        else{
            oEm[1].className="";
           

            }

        if(this.value.length>15){
            oEm[2].className="Em";
            }
        else{
            oEm[2].className=""; 
            }
        }

    Input_2.onblur=function(){
        window.location.reload(true);

        if(re.test(this.value)){
            P_2.innerHTML='<p class="po">含有非法字符</p>'
          


            }
        else if(this.value==""){
            P_2.innerHTML='<p class="po">不能为空</p>'
            }
        else if(this.value.length>25){
            P_2.innerHTML='<p class="po">长度不能超过25个字符</p>'
           


            }
        else if(this.value.length<6){
            P_2.innerHTML='<p class="po">长度不能少于6个字符</p>'
          


            }
        else{
            P_2.innerHTML="OK"
         

            }

    Input_3.onblur=function(){
        if(this.value!=Input_2.value){
            P_3.innerHTML='<p class="po">请输入正确密码</p>'
            }
        else{
            P_3.innerHTML=''
            window.location.reload(true);

            }
        }
    }

    var mouseoffsetX=0;
    var mouseoffsetY=0;
    var isDragin=false;
    var oForm=document.getElementById("form");
    var oTitle=document.getElementById("title");

    oTitle.addEventListener('mousedown',function(e){
    var e=e||window.event;
    var mouseoffsetX=e.pageX-oForm.offsetLeft;
    var mouseoffsetY=e.pageY-oForm.offsetTop;
        isDragin=true;
        });

    document.onmousemove=function(e){
        var e=e||window.event;
        var mouseX=e.pageX;
        var mouseY=e.pageY;
        var moseX=0;
        var moveY=0;
        if(isDragin===true){
            moveX=mouseX-mouseoffsetX;
            moveY=mouseY-mouseoffsetY;
            var webWidth=document.documentElement.clientWidth;
            var webHeight=document.documentElement.clientHeight;
            var oformWidth=oForm.offsetWidth;
            var oformHeight=oForm.offsetHeight;
            var maxX=webWidth-oformWidth;
            var maxY=webHeight-oformHeight;
            moveX=Math.min(maxX,Math.max(0,moveX));
            moveY=Math.min(maxY,Math.max(0,moveY)); 
            oForm.style.left=moveX+"px";
            oForm.style.top=moveY+"px";
            }
    document.onmouseup=function(){
        isDragin=false;
        }

    }   
}
}





