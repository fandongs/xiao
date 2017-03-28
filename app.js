require.config({
    baseUrl:'/',
    paths:{
        router:'lib/router.min',
        myroute:'src/myroute',
        jquery:'lib/jquery-1.12.4.min',
        text:'lib/text',
        css:'lib/css.min',
        swiper:'lib/swiper.min',
        swiperj:'lib/swiperj.min'
    }
})

require(['myroute'],function(){
// window.addEventListener('hashchange',function(e){
// var hash=location.hash;
// console.log(hash);
// })
//  location.hash = '#/shou'


})