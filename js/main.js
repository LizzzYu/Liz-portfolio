$(function(){

	if($(window).width() > 1920){

	    $("#HOME").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:0},800);
			return false;	
		});
		
		$("#AboutMe").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:1840},800);
			return false;	
		});
		
		$("#Feature").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:3200},800);
			return false;	
		});
		
		$("#Works").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:4490},800);
			return false;	
		});

	} else if($(window).width() > 1025) {

	    $("#HOME").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:0},800);
			return false;	
		});
		
		$("#AboutMe").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:1540},800);
			return false;	
		});
		
		$("#Feature").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:2600},800);
			return false;	
		});
		
		$("#Works").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:3700},800);
			return false;	
		});

	} else {

	    $("#HOME").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:0},800);
			return false;	
		});
		
		$("#AboutMe").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:840},800);
			return false;	
		});
		
		$("#Feature").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:1640},800);
			return false;	
		});
		
		$("#Works").click(function(){
			$("html,body").stop(true,false).animate({scrollTop:2640},800);
			return false;	
		});
	}

    var $mobile = $('#mobile') ,
        $toggle = $mobile.find('.toggle') ,
        $menu = $mobile.find('.wrap');
     
    $toggle.click(function(e) {
        $menu.slideToggle()
    });

});