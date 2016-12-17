/**
 * Created by rocky on 16-12-16.
 */
var test = (function () {
    var initModule = function ($container) {
        var c = (new test.shape.Circle()).init(10,10,100);

        m = 100;
    };
    return {initModule: initModule};
}());