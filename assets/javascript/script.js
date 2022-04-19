(function($){
    "use strict";

    const body = $('body');
    //Hero Typed
    if($('.typed').length){
        let typed_strings = $('.typed').data('type-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed',{
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });

    }
    // Moblile Navigator
    const mobile_navigator_btn = $('.mobile-nav-toggle');
    mobile_navigator_btn.on('click',() => {
        body.toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
    })    
    $('section , main, #header .nav-menu .nav-link a').click(function(e) {
        var container = $('.mobile-nav-toggle');
        if(!container.is(e.target) && container.has(e.target).length == 0){
            if($('body').hasClass('mobile-nav-active')){
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
            }
        }
    });    
    //Back to top  animation
    $(window).scroll( function(){
        if($(this).scrollTop() > 100){
            $('.back-to-top').fadeIn('slow');
        }
        else{
            $('.back-to-top').fadeOut('slow');
        } 
    });
    // Back to top bottom
    $('.back-to-top').on('click', ()=>{
        $('html,body').animate({
            scrollTop: 0
        },1500,'easeInOutExpo');
        return false;
    } ); 
    // Smooth scroll for the naviagtion menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .scrollto, .resume-item .address', function (e){
        if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ){
            e.preventDefault();
            var target = $(this.hash);

            if(target.length) {

                var scrollto = target.offset().top;
                $('html, body').animate({
                    scrollTop : scrollto
                }, 1500, 'easeInOutExpo');

                if($(this).parents('.nav-menu').length){
                    $('.nav-menu .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }
            }
        }
        
    });
    // Active smooth scroll on page load with hash links in the url
    $(document).ready(function(){
        if(window.location.hash){
            var initial_nav = window.location.hash;
            if($(initial_nav).length){
                var scrollto = $(initial_nav).offset().top;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    })
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');
    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function() {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();
                // console.log('top', top);
                // console.log('bottom', bottom);
                //console.log($(this).outerHeight());
            if(cur_pos >= top && cur_pos <= bottom){
                if(cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if(cur_pos < 300){
                $('.nav-menu ul:first li:first').addClass('active');
            }
        });
    });
    // Skill section
    $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css('width', $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });
    // Dark Mode 
    var cv_theme = 'light';
    $('.mode-btn').on('click', () => {
        body.toggleClass('dark');
        if(!body.hasClass('dark')){
            $('.mode-text').text('Dark Mode');
            cv_theme = 'light';            
        }
        else  {
            $('.mode-text').text('Light Mode');
            cv_theme = 'dark';
        }
    });
    let $cv_btn = $('.cv-btn');
    //e.preventDefault();    
    $cv_btn.confirm({
        theme: 'supervan',
        title: "Confirm!",
        content: "Are you sure to download my cv form?",
    })
     // From btn
    $('.form-btn').confirm({
        theme: 'supervan',
        title: "",
        content: "This function use php and doesn't support by github. Thank you.",
        buttons: {
            okay: function(){
                $('.contact input').val('');
                $('.contact textarea').val('');
            }
        }
    })
    // Init AOS
    function aos_init(){
        AOS.init({
            duration: 1000, 
            easing: "ease-in-out-back",
            once: true
        });        
    }
    $(window).on('load', aos_init);
})(jQuery);