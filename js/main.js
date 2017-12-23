$(function(){
   $('.menu').on('click',function(){
      $('.nav1').toggleClass('open');
   });
  $(".nav1 ul li").click(function(){
      $(".nav1").toggleClass('open')     
      $(".menu").toggleClass("change");
  });
   $(".menu").click(function(){
       $(this).toggleClass("change");
   })
   
});
