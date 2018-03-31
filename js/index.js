var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    // 如果需要分页器
    pagination : '.swiper-pagination',
    paginationType : 'progress',
    effect : 'flip',
    flip: {
        slideShadows : true,
        limitRotation : true,
    },


    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});

$("swiper-container").css("height",$(window).height()+"px");

var musicAudio = $("#musicAudio")[0];
var $musicAudio = $("#musicAudio");
var $mus = $("#mus");
$mus.tap(function () {
    // console.log(1);
    if (musicAudio.paused) {
        musicAudio.play();
        $mus.addClass("seclect");
        // return
    }else {
        musicAudio.pause();
        $mus.removeClass("seclect");
    }
});

