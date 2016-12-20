/**
 * Created by rocky on 16-12-16.
 */
var test = (function () {
    var initModule = function (container) {
        var c = (new test.shape.Circle());
        c.init(container, 20, 20, 10);
        c.circle.attr({fill:"red",});
        c.circle.drag();
        m=100;
    };
    return {initModule: initModule};
}());