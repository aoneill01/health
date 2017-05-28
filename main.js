$(function() {
	var health = 5;
	
	function animate() {
		for (var i = 1; i <= health; i++) {
			var heart = $('.heart[data-index="' + i + '"]')[0];
			
			dynamics.animate(heart, {
			  scale: 1.2
			}, {
			  type: dynamics.bounce,
			  delay: 100 * i,
			  duration: 700,
			  friction: 207,
			  frequency: 197
			});
		}
		
		dynamics.setTimeout(animate, Math.max(health * 1000, 1000));	
	}

	animate();

	$('.heart-wrapper').click(function() {
		var $clickedHeart = $(this).find('object');
		health = $clickedHeart.data('index');
		
		for (i = 1; i <= health; i++) {
			let heart = $('.heart[data-index="' + i + '"]')[0];
			var svgDoc = heart.contentDocument;
			var cp = svgDoc.querySelector("clipPath rect");
			dynamics.animate(cp, {
				transform: 'translate(0, 0)'
			}, {
				type: dynamics.gravity,
				complete: function() {
					dynamics.stop(heart);
					dynamics.animate(heart, {
					  scale: 1.0
					}, {
					  type: dynamics.spring
					});
				}
			});
		}
		
		for (i = health + 1; i <= 5; i++) {
			let heart = $('.heart[data-index="' + i + '"]')[0];
			var svgDoc = heart.contentDocument;
			var cp = svgDoc.querySelector("clipPath rect");
			dynamics.animate(cp, {
				transform: 'translate(0, 80)'
			}, {
				type: dynamics.gravity,
				complete: function() {
					dynamics.stop(heart);
					dynamics.animate(heart, {
					  scale: .8
					}, {
					  type: dynamics.spring
					});
				}
			});
		}
	});

});