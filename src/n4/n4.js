define(['text!./n4.html','jquery','css!./n4.css'],function(html,$){
    function add(){
        $("#container").html(html);
    }
    return {
        add:add
    }
   
})