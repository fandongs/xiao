define(['router', 'jquery'], function (Router, $) {

      var router = new Router()

      //首页 
        .route('#/shou', function (req, next) {
                  console.log('首页')
                  require(['src/shou/shou.js'], function (shou) {
                        shou.add();
                         shou.dob();
                  })
            })

      // 生活
            .route('#/n1', function (req, next) {
                  console.log('首页2')
                  require(['src/home/home.js'], function (home) {
                        home.add();
                        home.getData();
                        // home.x();
                        
                  })

            })
      //目的地
            .route('#/n2', function (req, next) {
                  console.log('分类')
                  require(['src/list/list.js'], function (list) {
                        list.add();
                        list.get();
                      
                  })
            })

            .route('#/dest',function(req,next){
       require(['src/list/list.js'],function(dest){
            dest.add();
            dest.get();
            dest.img();
        })
    })
              
            
             
      //     澳洲
             .route('#/australia',function(req,next){
                  
            require(['src/list/australia/australia.js'],function(australia){
                   console.log( australia);
            australia.add();
             australia.img();
        })
    })
// 韩国
         .route('#/korea',function(req,next){
        require(['src/list/korea/korea.js'],function(korea){
           korea.add();
           korea.img();
        })
    })
  .route('#/hk',function(req,next){
        require(['src/list/hk/hk.js'],function(hk){
          hk.add();
          hk.img();
        })
    })

.route('#/france',function(req,next){
        require(['src/list/france/france.js'],function(france){
           france.add();
           france.img();
        })
    })

.route('#/uk',function(req,next){
        require(['src/list/uk/uk.js'],function(uk){
           uk.add();
           uk.img();
        })
    })
    .route('#/us',function(req,next){
        require(['src/list/us/us.js'],function(us){
           us.add();
           us.img();
        })
    })
.route('#/thailand',function(req,next){
        require(['src/list/thailand/thailand.js'],function(thailand){
           thailand.add();
           thailand.img();
        })
    })

.route('#/taiwan',function(req,next){
        require(['src/list/taiwan/taiwan.js'],function(taiwan){
           taiwan.add();
           taiwan.img();
        })
    })

.route('#/ltaly',function(req,next){
        require(['src/list/ltaly/ltaly.js'],function(ltaly){
           ltaly.add();
           ltaly.img();
        })
    })

    .route('#/germany',function(req,next){
        require(['src/list/germany/germany.js'],function(germany){
           germany.add();
           germany.img();
        })
    })

      //  品牌
            .route('#/n3', function (req, next) {
                  console.log('购物车')
                  require(['src/n3/n3.js'], function (n3) {
                        n3.add();
                  })


            })
     //购买      
            .route('#/n4', function (req, next) {
                  console.log('个人中心')
                  require(['src/n4/n4.js'], function (n4) {
                        n4.add();
                  })
            })
           


})