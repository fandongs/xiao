define(['text!src/home/home.html', 'jquery', 'css!src/home/home.css'], function (html, $) {


    function add() {
        $("#container").html(html);
    }


    function initMenu() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 0,
            freeMode: true,
            onTouchStart: function (swiper, event) {
                var active = event.target;
                $(active).siblings('a').removeClass('selected')
                $(active).addClass('selected')
            }
        });


    }


    function getData() {
        $.get('http://localhost:3000/getcz', function (res) {
            console.log(res);
            var nr = res.data.notes;
            var html_left = [];
            var html_right = [];
            for (var i = 0; i < nr.length; i++) {
                var box = getTemplate(nr[i]);

                if (i % 2 == 0) {
                    html_left.push(box);
                } else {
                    html_right.push(box);
                }
            }
            html_left = html_left.join('');
            html_right = html_right.join('');
            $('.home-left').html(html_left);
            $('.home-right').html(html_right);
        })
    }

    function getTemplate(data) {
        var str = ' <div class="box">\
   <img src="'+ data.image + '">\
     <p class="p1">'+ data.title + '</p>\
      <p  class="p2">'+ data.desc + '</p>\
      <div class="item-auth">\
              <div class="avatar"><img class="lazy" data-original="'+ data.user.image + '" /></div><span class="name">' + data.user.nickname + '</span><span class="likes">' + data.likes + '</span>\
            </div>\
     </div>'
        return str;
    }

    return {
        add: add,
        getData: getData,
        x: initMenu
    }

})