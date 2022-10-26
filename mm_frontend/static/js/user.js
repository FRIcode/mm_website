$(function () {
    $(document).scroll(function () {
        let $menuDesktop = $(".menu-dekstop");
        let $menuMob = $(".menu-mobile");
        $menuDesktop.toggleClass('scrolled', $(this).scrollTop() > $menuDesktop.height());
        $menuMob.toggleClass('scrolled', $(this).scrollTop() > $menuMob.height());
    });
});