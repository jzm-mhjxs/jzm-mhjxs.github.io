$(function() {
    var winW = $(window).width();
    var winH = $(window).height();
    var $logo = $(".logo");
    var $c0Box = $(".c0-box");
    var $c0 = $("#i-c0");
    var $c0Img = $c0.find(".c0-img");
    var $c0Bottom = $c0.find(".c0-bottom");

    var $part2Tit = $(".part2-tit");
    var $part2TitLi = $part2Tit.find("li");
    var $part2Cont = $(".part2-cont");
    var $part2ContLi = $part2Cont.find("li");

    // var $partIframe = $(".part-iframe");
    // var $partIframeCont = $partIframe.find("iframe");
    // $partIframe.height(winH);
    // var logoH = $logo.height();
    // var c0H = $c0.height();
    // var c0ImgH = $c0Img.height();
    // $c0Bottom.height(c0H - c0ImgH);
    /*******************************************************************************
                                封面
    *******************************************************************************/
    /* var oSwiper = new Swiper('#o-c', {
         direction: 'vertical',
         autoHeight: true,
         mousewheelControl: true,
         onSetTransition: function(swiper) {
             if (swiper.activeIndex == 1) {
                 swiper.params.onlyExternal = true;
                 swiper.disableMousewheelControl();
             } else {
                 swiper.params.onlyExternal = false;
                 swiper.enableMousewheelControl();
             }

         }

     })*/
    var c0swiper = new Swiper('#i-c0', {
        pagination: '#c0-pagination',
        paginationClickable: true,
        parallax: true,
        speed: 1000,
        loop: true,
        autoplay: 5000,
         onSlideChangeStart: function(swiper) {
            //  $c0Bottom.height(c0H - c0ImgH);
         }
    });
    /*var c1Swiper = new Swiper('#i-c1', {
        scrollbar: '#i-c1-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentum: true,
        mousewheelControl: true,
        mousewheelSensitivity: 0.5,
        onSetTransition: function(swiper, translate) {
            //translate 一直为0，不可直接用
            nowTranslate = swiper.translate;
            if (typeof(beforeTranslate) == "undefined") {
                beforeTranslate = 0
            };
            slideHeight = swiper.slides[0].scrollHeight;
            swiperHeight = swiper.height
            if (nowTranslate > -2 && nowTranslate > beforeTranslate) {
                oSwiper.slideTo(0);
            }
            // if(slideHeight-swiperHeight+nowTranslate<2 && nowTranslate < beforeTranslate){oSwiper.slideTo(2);}

            beforeTranslate = nowTranslate;

        }
    });*/



    /*******************************************************************************
                    权威解读   习语近人  习语图解  学习秒答  学习评论
    *******************************************************************************/


    // $part2ContLi.eq(0).removeClass("hide");
    $part2TitLi.on("click", function() {
        var curIndex = $(this).index();
        $part2TitLi.eq(curIndex).addClass("on").siblings().removeClass("on");
        part2swiper.slideTo(curIndex + 1, 1000, true);
    })
    var part2swiper = new Swiper('#c1-part2-swiper', {
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 30,
        loop: true,
        autoHeight: true,
        autoplay: 3000,
        onSlideChangeEnd: function(swiper) {
            aa(swiper)
        }
    });

    function aa(swiper) {
        // console.log(swiper.realIndex);
        $part2TitLi.eq(swiper.realIndex).addClass("on").siblings().removeClass("on");
    }

    /*******************************************************************************
                                    专家解读
    *******************************************************************************/
    var part4swiper = new Swiper('#c1-part4-swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 10,
        loop: true
    });
    /*******************************************************************************
                                    专家解读
    *******************************************************************************/


    var part1swiper = new Swiper('#c1-part1-swiper', {
        pagination: '.c1-part1-pagination',
        slidesPerView: 2,
        slidesPerGroup: 2,
        paginationClickable: true,
        loop: true
    });





}) 
