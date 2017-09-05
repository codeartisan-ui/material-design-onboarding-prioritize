$(function () {

    setTimeout(function () {
        $(".md-prioritize").addClass("md-prioritize--visible");
        $("#child").css("display","");
        $(".md-prioritize__surface-text").css("display","");
        $("#got-it-button").css("display","block");
    },100);

    $(".md-prioritize__shadow, #got-it-button").click(function () {
        $("#parent").addClass("animation-exit");
        $("#child").css("display","none");
        $(".md-prioritize__surface-text").css("display","none");
        $("#got-it-button").css("display","none");
        setTimeout(function () {
            $(".md-prioritize").removeClass("md-prioritize--visible");
            $("#parent").removeClass("animation-exit");
            // $("#parent").addClass("animation-exit");
        },100);
    });

});