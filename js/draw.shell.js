/**
 * Created by Rocky on 2016/8/9.
 */
draw.shell = (function () {
// 变量设置
    var configMap = {
            main_html: String()
            +'<div class="row draw-shell-nav">'
            +'<nav class="navarbar" role="navigation">'
            +'<div class="navbar-header">'
            +'<a class="navbar-brand" href="#">绘图工具</a>'
            +'</div>'
            +'</nav>'
            +'</div>'
            ,
        },
        stateMap = {
            $container: null
        },
        jqueryMap = {},
        setJqueryMap, initModule;
//变量设置结束
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {
            $container: $container,
        };
    };
    //初始化函数
    initModule = function ($container) {
        //载入html和map，jquery集合
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        //添加svg画布
        draw.map.initModule($container);
        //添加右键管理框
        draw.rb.initModule($container);
        //添加属性信息
        $shell=$container.children(".draw-shell-map");
        draw.config.initModule($shell);
        setJqueryMap();
    };
    //初始化函数结束
    return {initModule: initModule};
}());