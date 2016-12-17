/**
 * Created by Rocky on 2016/8/10.
 */
//rightclickbox 右击框
draw.rb = (function () {
//变量设置
    var configMap = {
            main_html: String()
            + '<div class="draw-shell-rightClick" style="display:none">'
            + '<div class="buttons draw-shell-rightbuttons">'
            + '<button class="but draw-shell-rightClick-drag">拖拽</button>'
            + '<button class="but draw-shell-rightClick-drawpoint">画点</button>'
            + '<button class="but draw-shell-rightClick-drawline">画线</button>'
            + '<button class="but draw-shell-rightClick-drawcurve">画曲线</button>'
            + '<button class="but draw-shell-rightClick-editdone">编辑完成</button>'
            + '<button class="but help">帮助</button>'
            + '<button class="but but" data-toggle="collapse" data-parent="#btgc" href="#btg">按钮组</button>'
            + '</div>'
            + '</div>',
        },
        stateMap = {
            $container: null,
        },
        jqueryMap = {}, setJqueryMap, initModule, drawline, drawcurve, drag, editdone, slicepath;
    //变量设置结束
    //设置jqueryMap函数
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap.$container = $container;
        jqueryMap.$drawcurve = $container.find(".draw-shell-rightClick-drawcurve");
        jqueryMap.$drag = $container.find(".draw-shell-rightClick-drag");
        jqueryMap.$svgmap = $container.find(".draw-shell-SvgMap");
        jqueryMap.$editdone = $container.find(".draw-shell-rightClick-editdone");
        jqueryMap.$svg = $("#svg");

    };
    //jqueryMap结束

    //silcepath函数 解析path的d
    slicepath = function (d) {
        //如果是一条直线
        if (d.include("L")) {

        }
        //如果说是一条曲线
        else if (d.include("C")) {

        }
    };
    //slicepath函数
    //拖拽元素函数
    drag = function (e) {
        e = e ? e : window.event;
        var obj = e.target;
        // var $coordinate=jqueryMap.$coordinate[0];
        var coordinate = document.getElementById("coordinate");
        var $svgmap = jqueryMap.$svgmap;
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
                coordinate.textContent = (String() + "x:" + parseInt(e.clientX - $svgmap.offset().left) + "y:" + (e.clientY - $svgmap.offset().top));
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

    //drawline函数 绘制直线
    drawline = function (e) {

    };
    //drawline函数结束
    //编辑完成后是善后工作函数
    editdone = function () {
        //删除控制线
        $("#cline1").remove();
        $("#cline2").remove();
        delete jqueryMap.cline1;
        delete jqueryMap.cline2;
        $(".cpoint").remove();
        delete jqueryMap.cpoint1;
        delete  jqueryMap.cpoint2;
        jqueryMap.$svg.unbind();
    };
    //drawcurve函数 绘制直线
    drawcurve = function (e) {
        //判断第几次单击
        var ncheck = 0;
        e = e ? e : window.event;
        var startpoint = {x: 0, y: 0,},
            endpoint = {x: 0, y: 0,};
        var cstartpoint = {x: 0, y: 0,},
            cendpoint = {x: 0, y: 0,};
        var $svg = jqueryMap.$svg;
        var $svgmap = jqueryMap.$svgmap;
        var ncheck1 = 0;
        var cpoint;
        //控制点拖动函数
        var movehandler = function (e) {
            e = e ? e : window.event;
            if (e.target.getAttribute("class") === "cpoint" && ncheck1 === 0) {
                cpoint = e.target;
                cstartpoint.x = cpoint.getAttribute("cx");
                cstartpoint.y = cpoint.getAttribute("cy");
                ncheck1 = 1;
            }
            var coordinate = document.getElementById("coordinate");
            coordinate.textContent = (String() + "x:" + parseInt(e.clientX - $svgmap.offset().left) + "y:" + (e.clientY - $svgmap.offset().top) + "ncheck:" + ncheck.toString());

            if (cpoint.getAttribute("class") === "cpoint") {
                cpoint.setAttribute("cx", (e.clientX - $svg.offset().left).toString());
                cpoint.setAttribute("cy", (e.clientY - $svg.offset().top).toString());
                cendpoint.x = e.clientX - $svg.offset().left;
                cendpoint.y = e.clientY - $svg.offset().top;
                if (cpoint.getAttribute("id") === "cpoint1") {
                    var path = document.getElementById("path");
                    var d = "M" + jqueryMap.pathp1.x + "," + jqueryMap.pathp1.y
                        + "C" + jqueryMap.cpoint1.getAttribute("cx") + "," + jqueryMap.cpoint1.getAttribute("cy") + ","
                        + jqueryMap.cpoint2.getAttribute("cx") + "," + jqueryMap.cpoint2.getAttribute("cy") + ","
                        + jqueryMap.pathp2.x + "," + jqueryMap.pathp2.y;
                    path.setAttribute("d", d);
                    path.setAttribute("fill", "none");
                }
                else if (cpoint.getAttribute("id") === "cpoint2") {
                    var path = document.getElementById("path");
                    var d = "M" + jqueryMap.pathp2.x + "," + jqueryMap.pathp2.y
                        + "C" + jqueryMap.cpoint2.getAttribute("cx") + "," + jqueryMap.cpoint2.getAttribute("cy") + ","
                        + jqueryMap.cpoint1.getAttribute("cx") + "," + jqueryMap.cpoint1.getAttribute("cy") + ","
                        + jqueryMap.pathp1.x + "," + jqueryMap.pathp1.y;
                    path.setAttribute("d", d);
                    path.setAttribute("fill", "none");
                }
                if ("cline1" in jqueryMap && cpoint.getAttribute("id") === "cpoint1") {
                    jqueryMap.cline1.setAttribute("x2", (e.clientX - $svg.offset().left).toString());
                    jqueryMap.cline1.setAttribute("y2", (e.clientY - $svg.offset().top).toString());
                }
                else if (cpoint.getAttribute("id") === "cpoint1") {
                    var svgns = "http://www.w3.org/2000/svg";
                    var cline = document.createElementNS(svgns, "line");
                    cline.setAttribute("x1", cstartpoint.x.toString());
                    cline.setAttribute("y1", cstartpoint.y.toString());
                    cline.setAttribute("x2", cendpoint.x.toString());
                    cline.setAttribute("y2", cendpoint.y.toString());
                    cline.setAttribute("stroke", "white");
                    cline.setAttribute("stroke-width", "2");
                    cline.setAttribute("stroke-dasharray", "10,5");
                    cline.setAttribute("id", "cline1");

                    $svg.append(cline);
                    jqueryMap.cline1 = document.getElementById("cline1");
                    // cline.setAttribute("x2", (e.clientX - $svg.offset().left).toString());
                    // cline.setAttribute("y2", (e.clientY - $svg.offset().top).toString());
                }
                else if ("cline2" in jqueryMap && cpoint.getAttribute("id") === "cpoint2") {
                    jqueryMap.cline2.setAttribute("x2", (e.clientX - $svg.offset().left).toString());
                    jqueryMap.cline2.setAttribute("y2", (e.clientY - $svg.offset().top).toString());
                }
                else if (cpoint.getAttribute("id") === "cpoint2") {
                    var svgns = "http://www.w3.org/2000/svg";
                    var cline = document.createElementNS(svgns, "line");
                    cline.setAttribute("x1", cstartpoint.x.toString());
                    cline.setAttribute("y1", cstartpoint.y.toString());
                    cline.setAttribute("x2", cendpoint.x.toString());
                    cline.setAttribute("y2", cendpoint.y.toString());
                    cline.setAttribute("stroke", "white");
                    cline.setAttribute("stroke-width", "2");
                    cline.setAttribute("stroke-dasharray", "10,5");
                    cline.setAttribute("id", "cline2");
                    $svg.append(cline);
                    jqueryMap.cline2 = document.getElementById("cline2");
                    // cline.setAttribute("x2", (e.clientX - $svg.offset().left).toString());
                    // cline.setAttribute("y2", (e.clientY - $svg.offset().top).toString());
                }
            }

        };
        //控制点拖动后鼠标离开事件响应函数
        var cuphandler = function () {
            $svg.unbind();
            ncheck1 = 0;
            // cpoint=null;
            $svg.mousedown(downhander1);

        };
        //控制点拖动后鼠标离开事件响应函数结束
        //添加控制点操作函数
        var downhander1 = function (e) {
            //不加这句判断的话，鼠标落下时，控制点就变成落下的位置，不科学
            if (e.target.getAttribute("class") === "cpoint") {
                $svg.mousemove(movehandler);
                $svg.mouseup(cuphandler);
            }

            // $svg.unbind("mousedown", downhandler1);
        }
        //添加控制点操作函数结束
        //曲线绘制第一阶段的直线绘制函数
        var downhandler = function (e) {
            // if ("cline1" in jqueryMap || "cline2" in jqueryMap) {
                delete jqueryMap.cpoint1;
                delete jqueryMap.cpoint2;
                delete jqueryMap.cline1;
                delete jqueryMap.cline2;
                delete jqueryMap.pathp1;
                delete jqueryMap.pathp2;
                $("#path").remove();
                $(".cpoint").remove();
            // }
            e = e || window.event;
            if (ncheck === 0) {
                startpoint.x = e.clientX - $svg.offset().left;
                startpoint.y = e.clientY - $svg.offset().top;
                ncheck = ncheck + 1;
            }
            else if (ncheck === 1) {
                endpoint.x = e.clientX - $svg.offset().left;
                endpoint.y = e.clientY - $svg.offset().top;
                ncheck = -1;
            }
            if (ncheck === -1) {
                var svgns = "http://www.w3.org/2000/svg";
                var path = document.createElementNS(svgns, "path");
                var d = "M" + startpoint.x + "," + startpoint.y + "L" + endpoint.x + "," + endpoint.y;
                path.setAttribute("d", d);
                path.setAttribute("stroke", "white");
                path.setAttribute("stroke-width", "3");
                path.setAttribute("id", "path");
                $svg.append(path);
                //添加控制点
                var cpoint1 = document.createElementNS(svgns, "circle");
                cpoint1.setAttribute("cx", startpoint.x.toString());
                cpoint1.setAttribute("cy", startpoint.y.toString());
                cpoint1.setAttribute("r", "5");
                cpoint1.setAttribute("stroke", "white");
                cpoint1.setAttribute("stroke-width", "3");
                cpoint1.setAttribute("id", "cpoint1");
                cpoint1.setAttribute("class", "cpoint");
                var cpoint2 = document.createElementNS(svgns, "circle");
                cpoint2.setAttribute("cx", endpoint.x.toString());
                cpoint2.setAttribute("cy", endpoint.y.toString());
                cpoint2.setAttribute("r", "5");
                cpoint2.setAttribute("stroke", "white");
                cpoint2.setAttribute("stroke-width", "3");
                cpoint2.setAttribute("id", "cpoint2");
                cpoint2.setAttribute("class", "cpoint");
                $svg.append(cpoint1, cpoint2);
                jqueryMap.cpoint1 = document.getElementById("cpoint1");
                jqueryMap.cpoint2 = document.getElementById("cpoint2");
                jqueryMap.pathp1 = startpoint;//两个点
                jqueryMap.pathp2 = endpoint;//两个点
                ncheck = 0;
                $svg.unbind("mousedown", downhandler);
                $svg.mousedown(downhander1);

            }
        };
        if (ncheck1 === 0) {
            $svg.mousedown(downhandler);
        }
    };
    //drawcurve函数结束
    //初始化函数
    initModule = function ($container) {
        stateMap.$container = $container;
        $container.append(configMap.main_html);
        setJqueryMap();
        //右击工具模块显示
        $(document).mousedown(function (e) {
            if (e.which === 3) {
                setTimeout(function () {
                    //alert('123');
                    $('.draw-shell-rightClick').css(
                        {
                            top: e.clientY,
                            left: e.clientX
                        }
                    ).fadeIn(100).addClass('showing');
                }, 200);
            }
        });
        //右击工具模块关闭
        $(document).dblclick(function (e) {
            setTimeout(function () {
                //alert('123');
                $('.draw-shell-rightClick').fadeOut(100).removeClass('showing');
            }, 200);
        });
        jqueryMap.$drag.click(function () {
            jqueryMap.$svg.unbind();
            // var sss=$._data(jqueryMap.$svgmap.get(0),"events");
            //触发一次试试 然后加个返回值
            jqueryMap.$svgmap.mousedown(drag);
        });

        jqueryMap.$drawcurve.click(drawcurve);
        jqueryMap.$editdone.click(editdone);


    };
    //初始化函数结束

    return {initModule: initModule};
}());