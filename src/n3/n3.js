define(['text!./n3.html','jquery','css!./n3.css'],function(html,$){
    function add(){
        $("#container").html(html);
    }
    return {
        add:add
    }
   
})