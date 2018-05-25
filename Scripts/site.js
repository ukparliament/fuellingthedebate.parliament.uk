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

    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-15845045-19', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('send', 'pageview');


})();
