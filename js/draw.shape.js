/**
 * Created by Rocky on 2016/10/31.
 */
draw.shape = (function () {
    var Circle, Rect, Line, Curve;

// 定义圆形相关属性
    Circle = function () {
    }
    Circle.prototype.circle;//形状
    Circle.prototype.init=function(Snap,cx,cy,r) {
        this.circle=Snap.circle(cx,cy,r);
    }
    Circle.prototype.station_name;
    Circle.prototype.belongline={};


}());