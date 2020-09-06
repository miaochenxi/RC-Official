const audio = document.getElementById('audio1');
var play=true;
document.oncontextmenu=function () {
return false;
}
window.onload=function () {
    document.getElementById("btn").addEventListener("click",click);
}
function f() {
    if(play)
    {
        audio.play();
    }
}
function sendemail() {
    const str_email = document.getElementById("textarea").value;
    window.open("mailto:121581297@qq.com?Subject=WDNMD&body="+str_email);
}
function collect() {
    let collection=document.querySelectorAll("p");
    for (let i=0; i<collection.length; i++)
    {
        document.write(collection.item(i).innerHTML+"<br>");
    }
}
function changeimg() {
    var element=document.createElement("img");
    element.src="./img/dk.jpg";
    var parent=document.getElementById("tql");
    var child=document.getElementById("image");
    parent.replaceChild(element,child);
}
function resize() {
    let newWindow=window.open("http://www.baidu.com","_blank","width=100,height=100");
    newWindow.resizeTo(window.innerWidth*0.8,window.innerHeight*0.8);
}
function click()
{
	let item=document.getElementById("selector").selectedIndex;
	switch(item)
	{
		case 0:alert('i了i了，这就是畅佬吗');break;
		case 1:changeimg();break;
		case 2:collect();break;
        case 3:resize();
	}
}