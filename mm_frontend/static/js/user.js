$(function () {
    $(document).scroll(function () {
        let $menu = $(".menu-dekstop");
        $menu.toggleClass('scrolled', $(this).scrollTop() > $menu.height());
    });
});