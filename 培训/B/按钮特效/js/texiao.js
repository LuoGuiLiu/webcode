window.onload=function(){
	var oTo_1=document.getElementById("button_1");
		oTo_2=document.getElementById("button_2");
		oTo_3=document.getElementById("button_3");

	var oA=document.getElementsByTagName('a');
		oA_1=oA[0];
		oA_2=oA[1];
		oA_3=oA[2];
	var	oEm=document.getElementsByTagName('em');
		oEm_1=oEm[0];
	var oDiv=document.getElementsByTagName('div');
		oDiv_1=oDiv[4]
	var oBlock=document.getElementById("block")	
	var	Tip_1=oA_1.getAttribute('data');
		Tip_2=oA_2.getAttribute('data');
		Tip_3=oA_3.getAttribute('data');
	oTo_1.onmouseover=function(){
		oDiv_1.className="tip";
		oEm_1.innerHTML=Tip_1;
		oBlock.style.display="block";
		oDiv_1.style.left="-20px"
		}
	oTo_1.onmouseout=function(){
		oDiv_1.className=""
		oEm_1.innerHTML="";

		}
	oTo_2.onmouseover=function(){
		oDiv_1.className="tip";
		oEm_1.innerHTML=Tip_2;
		oBlock.style.display="block";
		oDiv_1.style.left="100px"
		}
	oTo_2.onmouseout=function(){
		oDiv_1.className=""
		oEm_1.innerHTML="";
		}
	oTo_3.onmouseover=function(){
		oDiv_1.className="tip";
		oEm_1.innerHTML=Tip_3;
		oBlock.style.display="block";
		oDiv_1.style.left="400px"
		}
	oTo_3.onmouseout=function(){
		oDiv_1.className=""
		oEm_1.innerHTML="";
		}		
	}