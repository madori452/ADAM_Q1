

    $(document).ready(function() {

        /*載入動畫設定*/
        var percent=0
        var timer1=setInterval(function(){
            $(".bar").css("width",percent+"%")
            percent+=1
            if(percent>100){
                clearInterval(timer1)
                $(".pageloading").addClass("complete")
            }
        },30);
        /*載入動畫設定_end*/



        //fix_banner
        $('.banner_cancel').click(function(){
                // alert('ssss');
                $('#fix_banner').addClass('fadeout');
                $('#fix_banner').css('opacity','0');
                 $('#fix_banner').css('transition','1s');
        });

        //fix_banner_mb
        $('.banner_cancel_mb').click(function(){
                // alert('ssss');
                $('#fix_banner_mb').addClass('fadeout');
                $('#fix_banner_mb').css('opacity','0');
                 $('#fix_banner_mb').css('transition','1s');
        });

        //展開了解更多
        $('.t06-3').click(function(){
            // alert('ddd');
           $('.p09_open_block').slideToggle('slow');
           $('img.p09_open').toggleClass('rotate');
           $('img.p09_open').toggleClass('rotate2');

        });








        //h2.sub01
        $('h2.sub01').click(function(){
           // alert('fagea')
           $('.p06-1-1').css('display','block');
           $('.p06-1-1').addClass('fadeIn');
           $('.p06-1-2,.p06-2-1,.p06-2-2').css('display','none');

           $('img.sit01').addClass('icon06-rotate02');
           $('img.sit02, img.sit03, img.sit04').removeClass('icon06-rotate02');
           
           $('img.p06-pc-1').css('display','block');
           $('img.p06-pc-02-gif, img.p06-pc-03').css('display','none');

           
            $('#productBg06').removeClass('situ01');
            $('#productBg06').removeClass('situ02');
           $('#productBg06').css('background-color','#fff');
           $('#productBg06').css('transition','1s');

          $('#productBg06 .t06-1-content').css('color','#7e7e7e');
           $('h2.sub').css('color','#4a4a4a');
           $('#productBg06 .t06-1').css('color','#000');
           $('.dash03').css('border','solid 1px #000');


        });

        //h2.sub02
        $('h2.sub02').click(function(){
           $('.p06-1-2').css('display','block');
           $('.p06-1-2').addClass('fadeIn');
           $('.p06-1-1,.p06-2-1,.p06-2-2').css('display','none');

           $('img.sit02').addClass('icon06-rotate02');
           $('img.sit01').addClass('icon06-rotate01');
           $('img.sit01, img.sit03, img.sit04').removeClass('icon06-rotate02');

           $('img.p06-pc-02-gif').css('display','block');
           $('img.p06-pc-1,img.p06-pc-03').css('display','none');

           $('#productBg06').removeClass('situ01');
           $('#productBg06').removeClass('situ02');
           $('#productBg06').css('background-color','#fff');
           $('#productBg06').css('transition','1s');

           $('#productBg06 .t06-1-content').css('color','#7e7e7e');
           $('h2.sub').css('color','#4a4a4a');
           $('#productBg06 .t06-1').css('color','#000');
           $('.dash03').css('border','solid 1px #000');

        });

        //h2.sub03
        $('h2.sub03').click(function(){
           $('.p06-2-1').css('display','block');
           $('.p06-2-1').addClass('fadeIn');
           $('.p06-1-1,.p06-1-2,.p06-2-2').css('display','none');

           $('img.sit03').addClass('icon06-rotate02');
           $('img.sit01, img.sit02, img.sit04').removeClass('icon06-rotate02');

           $('img.p06-pc-1').css('display','block');
           $('img.p06-pc-02-gif, img.p06-pc-03').css('display','none');

           $('#productBg06').addClass('situ01');
           $('#productBg06').removeClass('situ02');
           $('#productBg06').css('transition','1s');

           $('#productBg06 .t06-1-content').css('color','#7e7e7e');
           $('h2.sub').css('color','#4a4a4a');
           $('#productBg06 .t06-1').css('color','#000');
           $('.dash03').css('border','solid 1px #000');
    
           
        });

        //h2.sub04
        $('h2.sub04').click(function(){
           $('.p06-2-2').css('display','block');
           $('.p06-2-2').addClass('fadeIn');
           $('.p06-1-1,.p06-1-2,.p06-2-1').css('display','none');

           $('img.sit04').addClass('icon06-rotate02');
           $('img.sit01, img.sit02, img.sit03').removeClass('icon06-rotate02');

           $('img.p06-pc-03').css('display','block');
           $('img.p06-pc-02-gif, img.p06-pc-1').css('display','none');

           $('#productBg06').addClass('situ02');
           $('#productBg06').css('transition','1s');
           $('#productBg06').removeClass('situ01');

           $('#productBg06 .t06-1-content').css('color','#c6c6c6');
           $('h2.sub').css('color','#c6c6c6');
           $('#productBg06 .t06-1').css('color','#fff');
           $('.dash03').css('border','solid 1px #bdbdbd');
           
        });


        //手機版＿切換
            //h2.sub01_mb
            $('h2.sub01_mb').click(function(){
               // alert('fagea')
              $('.p06-1-1').css('display','block');
              $('.p06-1-1').addClass('fadeIn');
              $('.p06-1-2,.p06-2-1,.p06-2-2').css('display','none');

               $('img.sit01').addClass('icon06-rotate02');
               $('img.sit02, img.sit03, img.sit04').removeClass('icon06-rotate02');
               
               $('img.mb_01').css('display','block');
               $('img.mb_02, img.mb_03, img.mb_04').css('display','none');

                
               $('#productBg06').css('background-color','#fff');
               $('#productBg06').css('transition','1s');

               $('html,body').animate({scrollTop: $('#productBg06_mb').offset().top},700);

             


            });

            //h2.sub02_mb
            $('h2.sub02_mb').click(function(){
              $('.p06-1-2').css('display','block');
              $('.p06-1-2').addClass('fadeIn');
              $('.p06-1-1,.p06-2-1,.p06-2-2').css('display','none');

               $('img.sit02').addClass('icon06-rotate02');
               $('img.sit01').addClass('icon06-rotate01');
               $('img.sit01, img.sit03, img.sit04').removeClass('icon06-rotate02');

               $('img.mb_02').css('display','block');
               $('img.mb_01, img.mb_03, img.mb_04').css('display','none');

               $('html,body').animate({scrollTop: $('#productBg06_mb').offset().top},700);

            });

            //h2.sub03_mb
            $('h2.sub03_mb').click(function(){
              
              $('.p06-2-1').css('display','block');
              $('.p06-2-1').addClass('fadeIn');
              $('.p06-1-1,.p06-1-2,.p06-2-2').css('display','none');
           
               $('img.sit03').addClass('icon06-rotate02');
               $('img.sit01, img.sit02, img.sit04').removeClass('icon06-rotate02');



               $('img.mb_03').css('display','block');
               $('img.mb_03').addClass('fade-slide-down');
               $('img.mb_01, img.mb_02, img.mb_04').css('display','none');


               $('html,body').animate({scrollTop: $('#productBg06_mb').offset().top},700);

               
            });

            //h2.sub04_mb
            $('h2.sub04_mb').click(function(){
             
              $('.p06-2-2').css('display','block');
              $('.p06-2-2').addClass('fadeIn');
              $('.p06-1-1,.p06-1-2,.p06-2-1').css('display','none');



               $('img.sit04').addClass('icon06-rotate02');
               $('img.sit01, img.sit02, img.sit03').removeClass('icon06-rotate02');

             
               $('img.mb_04').css('display','block');
               $('img.mb_04').addClass('fade-slide-down');
               $('img.mb_03, img.mb_02, img.mb_01').css('display','none');


               $('html,body').animate({scrollTop: $('#productBg06_mb').offset().top},700);

               
            });




    //  產品區塊動態 - 淡入
    TweenMax.set($('.ani'), { scale: 0.9, alpha: 0 });


            $(function() {

            $('.logoTitle').click(function(){ $('html,body').animate({scrollTop:$('#productBg01').offset().top}, 1500); });
            $('#btn1').click(function(){ $('html,body').animate({scrollTop:$('#productBg02').offset().top}, 1000); });
            $('#btn2').click(function(){ $('html,body').animate({scrollTop:$('.section-13').offset().top}, 1000); });
            $('#btn3').click(function(){ $('html,body').animate({scrollTop:$('#productBg14').offset().top}, 1000); });

            // 手機版的購買遮罩設定
            $('.product-buy li').on('click',function(){
                var window_width = $(window).width();
                if ( window_width <= 768 ) {
                    $('.product-buy li .mask-info').css('opacity',0);
                    $(this).find('.mask-info').css('opacity',1);
                }
            });

           });





        $(window).scroll(function(){
            var now_Top = $(window).scrollTop(),
                now_bottom = now_Top+$(window).height(),
                window_width = $(window).width();


                //fix bznner 手機版
                if($(window).scrollTop() >=  0){
                    // 背景設定
                    $('.wrap').css('background-color','transparent');
                    $('.wrap').css('opacity','1');
                    $('.wrap').css('transition','1s');

                    //fix_mb_fadeout

                    $('#fix_banner_mb').css('display','none');
                }


                // 小 Menu fixed
                if ( $(window).scrollTop() >= 
                    $('#pre_order').offset().top - $('.fixedTitle') .height()) {
                    $('.fixedTitle').addClass('fixed');} 
                else{
                    $('.fixedTitle').removeClass('fixed');
                }



                //產品區塊動態 - 淡入
                if ( now_bottom >= $('.section-13 .product-des').offset().top + 200 ) {
                $('.section-13 .product-des .ani').each(function( i,ele ){
                    TweenMax.to( $(ele), 0.6, { delay: 0.1*i, scale: 1, alpha: 1, ease: Power4.easeNone });
                });
                 }
               


                //fix banner-淡入
                if(now_bottom>=$('#productBg02').offset().top){
                    $('#fix_banner').css('display','block');
                    $('#fix_banner').addClass('animated fadeIn');
                }


                //fix banner-淡入
                if(now_bottom>=$('.product-buy').offset().top){
                    $('#fix_banner').css('display','none');
                    $('#fix_banner').addClass('animated fadeout');
                }

                //p02 scroll
                if( $(window).scrollTop() >= $('#productBg02').offset().top){
                  // alert('goo')
                  $('img.p02-1').css('top','100px');
                  $('img.p02-1').css('transition','0.5s');

                  $('img.p02-3').css('opacity','1');
                  $('img.p02-3').css('transition','0.9s');
                }
                else{
                  $('img.p02-1').css('top','0px');
                  $('img.p02-1').css('transition','0.5s');

                  $('img.p02-3').css('opacity','0');
                  $('img.p02-3').css('transition','0.5s');
                }





                //土故納新
                if (now_bottom>= $('#productBg10').offset().top+400) {
                    $('img.p10-2').css('opacity','1');
                    $('img.p10-2').css('transition','4s')
                }

                if ( now_bottom > $('#productBg06').offset().top + $('#productBg06').height() + 200 )

                {
                     //bar動畫
                      $(".progress-bar").each(function(){
                        each_bar_width = $(this).attr('aria-valuenow');
                        $(this).width(each_bar_width + '%');
                        $('.mbps01').addClass('animated fadeInUp');
                        $('.mbps02').addClass('animated fadeInUp');
                        $('.mbps03').addClass('animated fadeInUp');


                      });
                }

                if ( now_bottom > $('#productBg09').offset().top + $('#productBg09').height() + 100 )

                {
                     //bar動畫02
                      $(".progress-bar02").each(function(){
                        each_bar_width = $(this).attr('aria-valuenow');
                        $(this).width(each_bar_width + '%');
                        $('#productBg09 .mb').addClass('animated fadeInUp01')
                        $('#productBg09 .mb02').addClass('animated fadeInUp01')

                      });
                }

                 if ( now_bottom > $('#productBg09').offset().top + $('#productBg09').height() + 100 )

                {
                     //bar動畫03
                      $(".progress-bar03").each(function(){
                        each_bar_width = $(this).attr('aria-valuenow');
                        $(this).width(each_bar_width + '%');
                      });
                };


                /* Check the location of each desired element */
                $('.ani02').each(function(i) {

                    var bottom_of_object = $(this).offset().top
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    /* If the object is completely visible in the window, fade it it */
                    if (bottom_of_window > bottom_of_object) {

                         $(this).animate({ 'opacity': '1' }, 1500);

                    }

                });






                });


        
        $( ".canClick" ).click(function() {
        $(this).find(".mask-info").toggleClass( "appear" )});

      

            var isFirefox = typeof InstallTrigger !== 'undefined';
            var isIE = /*@cc_on!@*/ false || !!document.documentMode;
            var isChrome = !!window.chrome;
            var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
            var prefix;

            if (isFirefox) {
                prefix = '-moz-';
            } else if (isIE) {

            } else if (isChrome || isSafari) {
                prefix = '-webkit-';
            }

    
            
            if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
                skrollr.init({
                    forceHeight: false
                });
            }


        });

