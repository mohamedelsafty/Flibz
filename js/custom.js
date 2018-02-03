/*global $*/

$(function () {
   
    "use strict";
    
    $("main:first-of-type").height($(window).height());
    
    $("body").niceScroll({
        
        
    });
    
    
    $(".navbar-nav li a").click(function () {
       
        $("html, body").animate({
           
            scrollTop: $("#" + $(this).data("value")).offset().top
            
        }, 3000);
        
    });
    
    
    $(".slide div").click(function background() {
       
        $(this).addClass("selected").removeClass("one").siblings().addClass("one");

        $("#" + $(this).data("value")).fadeIn(2000).addClass("active")

            .siblings("p").hide().removeClass("active");
        
        $("#" + $(this).data("show")).fadeIn().siblings("img").hide();

    });
    
    
    
    
    $(function animate() {
        
        $(".arrow i").animate({top : '50px'}, 1000, function () {
            
            $(this).animate({
               
                top : '30px'
                
            }, 1000, function () {
                
                animate();
            });
        });
        
    });
    
    $(".arrow i").click(function () {
       
        $("html,body").animate({
            
            scrollTop : $(".welcome").offset().top
        }, 1000);
        
    });
    
    
    $(window).scroll(function () {
       
        if ($(window).scrollTop() >= $(".welcome").offset().top) {
            
            $(".navbar").addClass("navbar-fixed-top");
        } else {
            
            $(".navbar").removeClass("navbar-fixed-top");
            
        }
        
    });
    
    $(".testim .prev").click(function chev() {
       
        $(".testim .slider .select").fadeOut(1000, function () {
            
            $(this).removeClass("select").prev().fadeIn(1000).addClass("select");
            
            if ($(".testim .slider .select").length === 0) {
                
                $(".testim .slider .slide-cont").last().fadeIn(1000).addClass("select");
                   
            }
            
            
        });
        
    });
    
    $(".testim .next").click(function chev() {
       
        $(".testim .slider .select").fadeOut(1000, function () {
            
            $(this).removeClass("select").next().fadeIn(1000).addClass("select");
            
            if ($(".testim .slider .select").length === 0) {
                
                $(".testim .slider .slide-cont").first().fadeIn(1000).addClass("select");
                   
            }
            
        });
        
    });
    
    
    
    $(".portfolio .links li").click(function () {
       
        $(this).addClass("select").siblings().removeClass("select");
        
    });
    
    
    
    
    $(".services aside").click(function () {
       
        $(this).addClass("me").siblings().removeClass("me");
        
        
        $("#" + $(this).data("value")).fadeIn().siblings().hide();
        
    });
    
    
    $(".services aside div").on("click", function () {
       
        $(this).addClass("my-par");
        
        $(this).parent("aside").siblings("aside").children(".selected").removeClass("my-par");
        
    });
    
    
    $(".history .top .selected").click(function () {
       
        $("html, body").animate({
            
            scrollTop : $("main").offset().top
            
        }, 3000);
        
    });
    
    
    $(".go-top .selected").click(function () {
       
        $("html, body").animate({
            
            scrollTop : $("main").offset().top
            
        }, 5000);
        
    });
   
    
    var mixer = mixitup('.container');
    var mixer = mixitup(containerEl);

    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
    
    
    $(".clients .slide .fa-chevron-left").click(function () {
       
        $(".clients .first").hide();
        
        $(".clients .last").show();
        
    });
    
    $(".clients .slide .fa-chevron-right").click(function () {
       
        $(".clients .first").show();
        
        $(".clients .last").hide();
        
    });
    
    $(document).animateScroll();
    
     
});

