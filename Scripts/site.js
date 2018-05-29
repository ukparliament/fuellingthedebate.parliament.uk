(function () {

    var resizeContainer=function () {
        var width = $("nav img:visible").width();
        if (width > 0) {
            $("main").width(width + 10 + "px");
            $("footer").width(width + 10 + "px");
        }
        else
            setTimeout(resizeContainer, 1000);
    };

    $(window).resize(resizeContainer);

    resizeContainer();

    $("[data-toggle='tooltip']").tooltip();
    $("[data-tooltip='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

    $("a[data-toggle='collapse']").click(function () {
        $("html,body").animate({
            scrollTop: 150
        }, 500);
    });

})();
