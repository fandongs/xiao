define(['text!./list.html','jquery','css!./list.css'],function(html,$){
 function add(){
      $("#container").html(html);
    }


 function get(){
        $.get('http://localhost:3000/dest',function(res){
            console.log(res);
            var notes = res.notes;
            var left = [];
            var right = [];
            for(var i = 0; i<notes.length;i++){
                var box = getTemplate(notes[i]);
                if(i%2==0){
                    left.push(box);
                }else{
                    right.push(box);
                }
            }
            left= left.join('');
            right= right.join('');
            $('.left').html(left);
            $('.right').html(right);
        })
    }
    function getTemplate(data){
        var str = '<div class="commodity"><img class="lazy" src="'+data.image+'"><div class="text"><p>'+data.title+'</p>'+
        '<div class="tt"><span>'+data.desc+'</span></div><div class="mm"><img src="'+data.user.image+'"><span class="ming">'+
        data.user.nickname+'</span><img class="xin" src="//s.xiaohongshu.com/s/mobile-discovery/*/search/img/likes-icon-be12924.png">'+
        '<span class="liang">'+data.user.fans_total+'</span></div></div></div>'
        return str;
    }


    return {
        add: add,
       get: get

    }
})