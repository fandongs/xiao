define(['text!./shou.html','jquery','swiperj','css!./css/shou.css','css!lib/swiper.min.css'],function(html,$,swiperj){
    function add(){
        $("#container").html(html);
    }
    function dob(){
        var swiper = new Swiper('.swiper-container', {

            pagination: '.swiper-pagination',
            loop: true,
            paginationClickable: true,
            paginationType: 'fraction',
            autoplay: 1000,
        });

        var swiper = new Swiper('.swiper-container2', {

            slidesPerView: 3.5,
            paginationClickable: true,
            spaceBetween: 15,
            freeMode: true
        });
   
    }


    return {
        add:add,
        dob:dob
    }
   
})