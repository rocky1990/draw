/**
 * Created by Rocky on 2016/8/11.
 */
draw.config = (function () {
    //variable set
    var configMap = {
            main_html: String()
            + '<div class="col-md-2 draw-shell-config" id="config">'
            + '<div class="row">'
            + '<div class="btn-group btn-group-justified" role="group">'
            + '<div class="col-md-6">'
            + '<button type="button" class="btn-default">二次曲线</button>'
            + '</div>'
            + '<div class="col-md-6">'
            + '<button type="button" class="btn-default">三次曲线</button>'
            + '</div>'
            + '</div>'
            + '</div><!--</div class="row">-->'
            + '<div class="row">'
            + '<div class="col-md-6">'
            + '<div class="input-group">'
            + '<span class="input-group-btn">'
            + '<button class="btn btn-default" type="button">起始点x</button>'
            + '</span>'
            + '<input type="text" class="form-control" placeholder="Search for...">'
            + '</div><!-- /input-group -->'
            + '</div><!--</col-md-6>-->'
            + '<div class="col-md-6">'
            + '<div class="input-group">'
            + '<span class="input-group-btn">'
            + '<button class="btn btn-default" type="button">起始点y</button>'
            + '</span>'
            + '<input type="text" class="form-control" placeholder="Search for...">'
            + '</div><!-- /input-group -->'
            + '</div><!--</col-md-6>-->'
            + '</div>'
            + '<div class="row">'
            + '<div class="col-md-6">'
            + '<div class="input-group">'
            + '<span class="input-group-btn">'
            + '<button class="btn btn-default" type="button">终点x</button>'
            + '</span>'
            + '<input type="text" class="form-control" placeholder="Search for...">'
            + '</div>'
            + '</div>'
            + '<div class="col-md-6">'
            + '<div class="input-group">'
            + '<span class="input-group-btn">'
            + '<button class="btn btn-default" type="button">终点y</button>'
            + '</span>'
            + '<input type="text" class="form-control" placeholder="Search for...">'
            + '</div>'
            + '</div>'
            + ''
            + '</div>'
            + ''
            + '</div><!--</div class="col-md-2 draw-shell-config">-->'
        },
        stateMap = {
            $container: null,
        };
    //end of variable set

}());