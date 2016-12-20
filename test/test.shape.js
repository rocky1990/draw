/**
 * Created by rocky on 16-12-16.
 */
test.shape = (function () {
    var Circle;
    Circle=function() {
    }
    Circle.prototype.circle;
    Circle.prototype.init=function (Snap,cx,cy,r) {
       this.circle= Snap.circle(cx,cy,r);
    }

    return {
        Circle: Circle,
    }
}());