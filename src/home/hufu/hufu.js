define(['text!src/hufu/hufu.html','jquery','css!src/hufu/hufu.css'],function(html,$){
   

    function add(){
      $("#container").html(html);
    }

function getData(){
       $.get('http://localhost:3000/gethufu',function(res){
           console.log(res);
          var nr =res.data.notes;
          var html_left=[];
           var html_right=[];
          for(var i=0;i<nr.length;i++){
          var box = getTemplate(nr[i]);
        //  
        if(i%2==0){
          html_left.push(box);
        }else{
            html_right.push(box);
        }
        }
       html_left = html_left.join('');
       html_right= html_right.join('');
        $('.home-left').html(html_left);
        $('.home-right').html(html_right);
       })
   }

   function getTemplate(data){
   var str=' <div class="box">\
   <img src="'+data.image+'">\
     <p>'+data.title+'</p>\</div>'
      return str;
   }

    return {
        add: add,
        getData:getData
    }
     
})