$(function () {
    myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false})


    $(".banner").scrollBanner({
        images : [
            {src:"img/44.jpg",href:"#"},
            {src:"img/44.1.jpg",href:"#"},
            {src:"img/44.2.jpg",href:"#"},
            {src:"img/44.jpg",href:"#"},
            {src:"img/44.1.jpg",href:"#"}
        ],
        scrollTime:2000,
        bannerHeight:"150px",
        iconColor: "#FFFFFF",
        iconHoverColor : "#b0b0b0",
        iconPosition : "center"
    });


})
