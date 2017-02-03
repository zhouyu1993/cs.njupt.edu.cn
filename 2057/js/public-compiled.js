$(function () {
	// Ƶ��1-����
	try {
		if (zNodes1 && zNodes1.length) {
			$('.menu').html('');
			var html = '',
			    html2 = '';
			for (var i = 0; i < zNodes1.length; i++) {
				if (!zNodes1[i].pId) {
					html += '<li value=' + i + '><a href="' + zNodes1[i].link + '">' + zNodes1[i].name + '</a><i></i></li>';
					html2 += '<li><span></span></li><li><a href="' + zNodes1[i].link + '">' + zNodes1[i].name + '</a><i></i></li>';
				}
			}
			$('.menu').append(html);
			$('.foot .foot_link ul').append(html2);
			$('.menu').on('hover', 'li', function () {
				$('.menu2 .w1400 .erji').html('');
				$('.menu i').hide();
				$(this).find('i').show();
				var html = '',
				    i = $(this).attr('value');
				i += 1;
				while (i < zNodes1.length && zNodes1[i].pId) {
					html += '<a href="' + zNodes1[i].link + '">' + zNodes1[i].name + '</a>';
					i++;
				}
				$('.menu2 .w1400 .erji').append(html);
				$('.menu2').show();
			});
		}
	} catch (e) {
		console.log(e);
	}
	// Ƶ��3-ͼƬ����
	var table3_img = $('.table3 a img');
	if ($('.table3 a img').length) {
		var html = '';
		for (var i = 0; i < table3_img.length; i++) {
			var href = table3_img.parent('a').eq(i).attr('href');
			if (href === '#') {
				href = 'javascript:;';
			}
			var title = table3_img.parent('a').eq(i).attr('title');
			var src = table3_img.eq(i).attr('src');
			html += '<li><a href="' + href + '" title="' + title + '"><img src="http://cs.njupt.edu.cn' + src + '"></a></li>';
		}
		$('.banner .main_image ul').append(html);
		$('.banner').show();

		var $dragBln = false;

		$(".main_image").touchSlider({
			flexible: true,
			speed: 200,
			btn_prev: $("#btn_prev"),
			btn_next: $("#btn_next"),
			paging: $(".flicking_con a"),
			counter: function (e) {
				$(".flicking_con a").removeClass("on").eq(e.current - 1).addClass("on");
			}
		});

		$(".main_image").bind("mousedown", function () {
			$dragBln = false;
		});

		$(".main_image").bind("dragstart", function () {
			$dragBln = true;
		});

		$(".main_image a").click(function () {
			if ($dragBln) {
				return false;
			}
		});

		timer = setInterval(function () {
			$("#btn_next").click();
		}, 5000);

		$(".main_visual").hover(function () {
			clearInterval(timer);
		}, function () {
			timer = setInterval(function () {
				$("#btn_next").click();
			}, 5000);
		});

		$(".main_image").bind("touchstart", function () {
			clearInterval(timer);
		}).bind("touchend", function () {
			timer = setInterval(function () {
				$("#btn_next").click();
			}, 5000);
		});
	}
});

//# sourceMappingURL=public-compiled.js.map