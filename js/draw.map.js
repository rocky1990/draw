/**
 * Created by Rocky on 2016/8/9.
 */
draw.map = (function () {
    var configMap = {
            main_html:String()
            +'<div class="row draw-shell-map">'
            +'<div class="col-md-2 draw-shell-tree">'
            +'tree'
            +'</div>'
            +'<div class="col-md-8 draw-shell-SvgMap">'
            +'<svg id="svg">'
            +'<text id="coordinate" x="0" y="10" fill="red"></text>'
            +'<rect class="station" id="rec" width="20" height="20" fill="white" x="200" y="200"></rect>'
            +'</svg>'
            +'</div>'
            +'</div>'
            ,
        },
        stateMap = {
            $container: null,
        },
        jqueryMap = {},
        setJqueryMap, initModule, ondoubleclick, drag;
    //
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap.$container = $container;
        jqueryMap.$svgmap = $container.find(".draw-shell-SvgMap");
        jqueryMap.$coordinate=$container.find("#coordinate");
    };
    //拖拽元素函数
    drag = function (e) {
        e = e ? e : window.event;
        var obj = e.target;
        // var $coordinate=jqueryMap.$coordinate[0];
        var coordinate = document.getElementById("coordinate");
        var $svgmap=jqueryMap.$svgmap;
        if (obj.getAttribute("class") === "station") {
            obj.style.position = "absolute";
            var temp1 = Number(obj.getAttribute('x'));
            var temp2 = Number(obj.getAttribute('y'));
            // alert(temp1);
            x = e.clientX;
            y = e.clientY;
            function movehandler(e) {
                e = e ? e : window.event;
                // objH.innerHTML = "x:" + e.clientX + "y:" + e.clientY;
                // $coordinate.text(String()+"x:" + e.clientX + "y:" + e.clientY);
                // var lll=d_svg_map.clientX;
                //待修改
                coordinate.textContent=(String()+"x:" + (e.clientX-$svgmap.offset().left) + "y:" + Number(e.clientY-$svgmap.offset().top));
                obj.setAttribute("x", e.clientX + temp1 - x);
                obj.setAttribute("y", e.clientY + temp2 - y);
                //         obj.style.transform="translate("+(e.clientX -temp1)+"px,"+(e.clientY - temp2)+"px)";
                //         obj.style.transform="translate(500px,500px)";
                //         obj.cx =100;
                //         obj.cy = 100;

            };

            function uphandler(e) {
                e = e ? e : window.event;
                document.removeEventListener("mousemove", movehandler, false);
                document.removeEventListener("mouseup", uphandler, false);
            };

            document.addEventListener("mousemove", movehandler, false);
            document.addEventListener("mouseup", uphandler, false);
        }
        //     e.stopPropagation();
    };
    //拖拽元素函数结束
    initModule = function ($container) {
        stateMap.$container = $container;
        $container.append(configMap.main_html);
        setJqueryMap();
        jqueryMap.$svgmap.mousedown(drag);
    };
    return {initModule: initModule};
}());
