/**
 * Created by rocky on 16-12-16.
 */
test.shape = (function () {
    function Circle() {
    }

    Circle.prototype.xmlns = "http://www.w3.org/2000/svg";
    Circle.prototype.cx = 0;
    Circle.prototype.cy = 0;
    Circle.prototype.r = 0;
    Circle.prototype.init = function (x, y, r) {
        var c = document.createElementNS(this.xmlns, "circle");
        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
        c.setAttribute("x", r);
        // <circle cx="100" cy="50" r="40" stroke="black"
        // stroke-width="2" fill="red"/>
        return c;
    }
    return {
        Circle: Circle,
    }
}());