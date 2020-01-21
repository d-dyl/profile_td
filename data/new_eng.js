// New JQuery Code U0.2
$( document ).ready(function() {
	function c(dark) {

		setTimeout(function () {
			
			if(dark) {
				if(m_attr[1] < 240) {
					m_attr[1] += Math.round((255-m_attr[1])/100 + 0.5)
					document.documentElement.style.setProperty('--mcol', m_attr[1]);
					c(true);
				} else {
					m_attr[0] = true
					m_attr[1] = 255
					document.documentElement.style.setProperty('--mcol', m_attr[1]);
				}
			} else {
				
				if(m_attr[1] > 10) {
					m_attr[1] -= Math.round((m_attr[1])/100 + 0.5)
					document.documentElement.style.setProperty('--mcol', m_attr[1]);
					c(false);
				} else {
					m_attr[0] = false
					m_attr[1] = 0
					document.documentElement.style.setProperty('--mcol', m_attr[1]);
					
				}
			}
		}, 10);
	}
	function check(i) {
		if(parseInt($(document).scrollTop()) >= parseInt(p_attr[i][1]) && !p_attr[i][0]){
			
			$(p_attr[i][2]+' video').each(function(){$(this).get(0).play();});
			$(p_attr[i][2]).animate({"opacity": "1"},{ duration: 800, queue: false });
			$(p_attr[i][2]+' .box').animate({"top": p_attr[i][3]},{ duration: 900, queue: false });
			p_attr[i][0] = true;
			
			
		}
	}
	var p_attr = [
	[false,600,'#cad_3d','550px'],
	[false,1400,'#cad_3d_11','65px'],
	[false,2400,'#arch','515px'],
	[false,3050,'#arch_cad2','225px'],
	[false,3750,'#arch_ske','380px'],
	]
	var m_attr = [false,0]
	var active = false
	var active_a = false
	var scrollspeed = 0
	
	$(window).on('beforeunload', function() {$("html,body").scrollTop(0);$("BODY").hide()});
	$("html, body").animate({scrollTop: 0}, 200);
	$(this).delay(250).queue(function() {
		$("#intro video").each(function(){$(this).get(0).play();});
		$("#intro .box").animate({top: "200px"},{ duration: 600, queue: false });
	
		$(this).delay(50).queue(function() {
			$(".1").animate({"margin-top": "0px"},800);
			$(".1").animate({"opacity": "1"},{ duration: 900, queue: false });
			$(this).dequeue()
		});
		$(this).delay(50).queue(function() {
			$(".2").animate({"margin-top": "0px"},800);
			$(".2").animate({"opacity": "1"},{ duration: 900, queue: false });
			$(this).dequeue()
		});
		$(this).delay(50).queue(function() {
			$(".3").animate({"margin-top": "0px"},800);
			$(".3").animate({"opacity": "1"},{ duration: 900, queue: false });
			$(this).dequeue()
		});
		$(this).delay(50).queue(function() {
			$(".4").animate({"margin-top": "0px"},800);
			$(".4").animate({"opacity": "1"},{ duration: 900, queue: false });
			$(this).dequeue()
		});
		$(this).dequeue();
	});
	
	$( window ).scroll(function() {
		for (var i = 0; i < p_attr.length; i++) {
			check(i)
		}
		if($(document).scrollTop() >= 975 && $(document).scrollTop() <= 2575){
			if(!m_attr[0]){
				c(true);
			}
		} else if (m_attr[0]) {
			c(false);
		}
	});
	$( "#scroll" ).mouseenter(function() {
		$(".arrowhead").stop().animate({"opacity": "0.5"},{ duration: 250, queue: false });
	});
	$( "#scroll" ).mouseleave(function() {
		$(".arrowhead").stop().animate({"opacity": "0"},{ duration: 250, queue: false });
	});
	$( "#home" ).click(function() {
		$("html, body").stop().animate({scrollTop: 0}, $(document).scrollTop()/2);
	});
	$( "#three" ).click(function() {
		$("html, body").stop().animate({scrollTop: 1000}, Math.abs(1000-$(document).scrollTop())/1.5);
	});
	$( "#archL" ).click(function() {
		$("html, body").stop().animate({scrollTop: 2500}, Math.abs(2500-$(document).scrollTop())/1.5);
	});
	$( "#contactL" ).click(function() {
		$("html, body").stop().animate({scrollTop: 4513}, Math.abs(4513-$(document).scrollTop())/2);
	});
	$( "#top_a" ).click(function() {
		$("html, body").stop().animate({scrollTop: $(document).scrollTop() -200}, 300);
	});
	$( "#bot_a" ).click(function() {
		$("html, body").stop().animate({scrollTop: $(document).scrollTop() +200}, 300);
	});

	$( window ).on( "mousemove", function( event ) {
		if(active){
			var val = parseInt($( "#dot" ).css("top"), 10);
			var mid = $( window ).height() / 2
			if(val <  mid + 25 && val > mid - 25){
				$( "#dot" ).stop().css("top", event.clientY - 5)
			}
			else {
				if(val >=  mid + 25) {
					$( "#dot" ).stop().css("top", mid + 30 + (event.clientY - mid)/100)
					if(event.clientY < mid + 25) {
						$( "#dot" ).stop().css("top", mid + 24)
					}
				}
				if(val <=  mid - 25) {
					$( "#dot" ).stop().css("top", mid - 30 + (event.clientY - mid)/100)
					if(event.clientY > mid - 25) {
						$( "#dot" ).stop().css("top", mid - 24)
					}
				}
			}
			scrollspeed = val - mid
		}
		$( "#dot" ).mousedown( function() {
			active = true
		});
		$( window ).mouseup( function() {
			if(active) {
				$( "#dot" ).animate({"top": $(window).height()/2 - 5},{ duration: 600, queue: false });
				active = false
			}
		});
	});
	var interval = setInterval(function(){
		var pos = $(document).scrollTop()
		$( "#top_a" ).css("top", $(window).height()/2 - 7 - 50)
		$( "#bot_a" ).css("top", $(window).height()/2 - 7 + 50)
		if(!active) {
			$(document).scrollTop(pos + scrollspeed*0.5)
			$( "#dot" ).css("top", $(window).height()/2 - 5)
			scrollspeed = parseInt(scrollspeed / 1.05)
		} else {
			$(document).scrollTop(pos + scrollspeed*0.75)
		}
	}, 6);
});