/**
 * Created by Rocky on 2016/8/10.
 */
/**
 * Created by Rocky on 2016/8/9.
 */
var ncheck = -1;
var num = -1;
function createcircle() {
    ncheck = 1;
}



function drag(e)
{
    e = e ? e : window.event;
    var obj = e.target;
    var objH = document.getElementById("H1");
    if(obj.getAttribute("class")==="station") {
        obj.style.position = "absolute";
        var temp1 = Number(obj.getAttribute('x'));
        var temp2 = Number(obj.getAttribute('y'));
        // alert(temp1);
        x = e.clientX;
        y = e.clientY;
        function movehandler(e) {
            e = e ? e : window.event;
            objH.innerHTML = "x:" + e.clientX + "y:" + e.clientY;
            obj.setAttribute("x", e.clientX + temp1 - x);
            obj.setAttribute("y", e.clientY + temp2 - y);
            //         obj.style.transform="translate("+(e.clientX -temp1)+"px,"+(e.clientY - temp2)+"px)";
            //         obj.style.transform="translate(500px,500px)";
            //         obj.cx =100;
            //         obj.cy = 100;

        }

        function uphandler(e) {
            e = e ? e : window.event;
            document.removeEventListener("mousemove", movehandler, false);
            document.removeEventListener("mouseup", uphandler, false);
        }

        document.addEventListener("mousemove", movehandler, false);
        document.addEventListener("mouseup", uphandler, false);
    }
    //     e.stopPropagation();

}


function getobj(e)
{
    e = e ? e : window.evesnt;
    var obj = e.target;
    obj.addEventListener("mousedown", drag, false);

}
// window.ondbclick = function(e) {
function dbl(event) {

    var obj = document.getElementById("H1");
    var objdraw = document.getElementById("draw");
    // document.onmousemove=function(e)
    //     document.onclick = function(e)
    //     {
    //     event = event || window.event;
    if (ncheck !== -1) {
        //obj.innerHTML = "x:" + event.clientX + "y:" + event.clientY;
        var svgns = "http://www.w3.org/2000/svg";
        // var circle=document.createElementNS(svgns,"svg:svg");
        var circle = document.getElementById("svg1");
        //         circle.setAttribute("width", 1000);
        //         circle.setAttribute("height", 1000);
        circle.setAttribute("viewbox", (event.clientX) + " " + (event.clientY) + " 100 100");
        var icon = document.createElementNS(svgns, "rect");
        icon.setAttribute("id", ++num);
        icon.setAttribute("x", event.clientX);
        //         obj.height;
        //         objdraw.clientHeight;
        icon.setAttribute("y", event.clientY - obj.clientHeight - objdraw.clientHeight - 27);
        //  icon.setAttribute("y", e.clientY);
        icon.setAttribute("width", 20);
        icon.setAttribute("height", 20);
        icon.setAttribute("fill", "red");
        icon.setAttribute("type", "rect");
        icon.setAttribute("class", "station");
        //         icon.style.position = "absolute";
        //         icon.addEventListener("mousedown",drag, true);


        circle.appendChild(icon);
        ncheck = -1;
        this.ondbclick = null ;
        //return circle;
    }
    //     }

}

$(document).ready(function(){
    $(document).mousedown(function (e) {
        if(e.which===3){
            setTimeout(function(){
                //alert('123');
                $('.rightClick').css(
                    {
                        top: e.clientY,
                        left: e.clientX
                    }
                ).fadeIn(100).addClass('showing');
            },200);
        }
    });
    $(document).dblclick(function (e) {
        setTimeout(function () {
            //alert('123');
            $('.rightClick').fadeOut(100).removeClass('showing');
        }, 200);
    });
});

/**
 * Created by rocky on 15-9-19.
 */
