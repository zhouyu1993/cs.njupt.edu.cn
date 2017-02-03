$(function () {
	// 频道4-学院新闻
	var table4_img = $('.table4 a img'), html = '', href= '', title = '', src = '', time = '', i = 0;
	if (table4_img.length) {
		for (i = 0; i < table4_img.length; i++) {
			href = table4_img.parent('a').eq(i).attr('href');
			if (href === '#') {
				href = 'javascript:;';
			}
			title = table4_img.parent('a').eq(i).attr('title');
			src = table4_img.eq(i).attr('src');
			html += '<li><a href="' + href + '"><img src="' + src + '"></a><a href="' + href + '">' + title + '</a></li>';
		}
		$('.news .new-content').append(html);
	}
	// 频道5-学院新闻的时间
	var table5_div = $('.table5 div');
	if (table5_div.length === table4_img.length) {
		for (i = 0; i < table5_div.length; i++) {
			time = table5_div.eq(i).html();
			$('.news .new-content li').eq(i).append('<a href="' + href + '">' + time + '</a>');
		}
	}
	// 频道6-通知公告
	var table6_div = $('.table6 div');
	if (table6_div.length) {
		html = '';
		for (i = 0; i < table6_div.length; i++) {
			time = table6_div.eq(i).html();
			var timeArr = time.split('-');
			href = $('.table6 a').eq(i).attr('href');
			title = $('.table6 a').eq(i).attr('title');
			html += '<li><a class="not-ul-le" href="' + href + '"><span>' + timeArr[2] + '日</span><i>' + timeArr[0] + '-' + timeArr[1] + '</i></a><div class="not-ul-ri"><a class="at" href="' + href + '">' + title + '</a></div></li>';
		}
		$('.notice .list').append(html);
	}
	// 频道7-通知公告的内容
	var table7_a = $('.table7 a');
	if (table7_a.length === table6_div.length) {
		for (i = 0; i < table7_a.length; i++) {
			var content = table7_a.eq(i).html();
			$('.notice .list .not-ul-ri').eq(i).append('<a class="ab" href="' + href + '">' + content + '</a>');
		}
	}
	// 频道8-科学研究的栏目链接
	var table8_a = $('.table8 a');
	if (table8_a.length) {
		href = table8_a.eq(0).attr('href');
		$('.science .sci-tit').attr('href', href);
		for (i = 1; i < table7_a.length; i++) {
			href = table8_a.eq(i).attr('href');
			$('.science .scia1').eq(i - 1).attr('href', href);
		}
	}
	// table9-学术讲座
	var table9_div = $('.table9 div');
	if (table9_div.length) {
		html = '';
		var href_Arr = [];
		for (i = 0; i < table9_div.length; i++) {
			href = $('.table9 a').eq(i).attr('href');
			href_Arr.push(href);
			title = $('.table9 a').eq(i).attr('title');
			html += '<div class="con"><a class="leca1" href="' + href + '"><label>报告主题：</label><span>' + title + '</span></a><a class="leca2" href="' + href + '">报告时间：</a></div>';
		}
		$('.lecture .lectab-con').append(html);
	}
	// table10-学术讲座的主讲人
	var table10_img = $('.table10 a img');
	if (table10_img.length) {
		html = '';
		for (i = 0; i < table10_img.length; i++) {
			title = table10_img.parent('a').eq(i).attr('title');
			var title_Arr = [];
			title_Arr =	title.split('@');
			src = table10_img.eq(i).attr('src');
			html += '<li><a class="li-a1" href="' + href_Arr[i] + '"><i></i><img src="' + src + '" /></a><a class="li-a2" href="' + href_Arr[i] + '"><span>' + title_Arr[0] + '</span><label>' + title_Arr[1] + '</label></a></li>';
			$('.lecture .lectab-con .leca2').eq(i).append(title_Arr[2]);
		}
		$('.lecture .lectab').prepend(html);
	}
	// 频道11-科学研究的栏目链接
	var table11_a = $('.table11 a');
	if (table11_a.length) {
		href = table11_a.eq(0).attr('href');
		$('.person .per-tit a').attr('href', href);
		for (i = 1; i < table11_a.length; i++) {
			href = table11_a.eq(i).attr('href');
			$('.person .pertab a').eq(i - 1).attr('href', href);
		}
	}



	$('.lectab li').hover(function () {
		if ($(this).index() == 6) {
			return false;
		}
		$('.lectab-con .con').hide().eq($(this).index()).show();
		$('.lectab i').removeClass('se').eq($(this).index()).addClass('se');
		$('.lectab .li-a2').removeClass('se').eq($(this).index()).addClass('se');
	});

	$('.pertab a').hover(function () {
		$('.pertab a').removeClass('se').eq($(this).index()).addClass('se');
	});
});
