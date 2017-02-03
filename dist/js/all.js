// 合并对象
function extend(a, b) {
    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
    return _extends(a, b);
};

function dialog(config) {
	var dialogConfig = {
		title: '',
		content: '',
		button: '确定',
		selector: 'body'
	}

	var conf = extend(dialogConfig, config);

	var html = "<div class=\"ui-dialog\"><div class=\"ui-dialog-cnt\"><div class=\"ui-dialog-bd\"><h4 class=\"title\">" + conf.title + "</h4><div class=\"content\">" + conf.content + "</div></div><div class=\"ui-dialog-ft ui-btn-group\">" + conf.button + "</div></div></div>";

	if (!$('.ui-dialog').length) {
		$(conf.selector).append(html);
		$('.ui-btn-group').on('click', function() {
			$('.ui-dialog').remove();
		})
	}
}

function setHome() {
	var url = window.location.href
	try {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(url);
	} catch(e) {
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
			} catch(e){
				dialog({
					title: '抱歉，您需要手动将本网站设置为首页。'
				});
			}
		} else{
			dialog({
				title: '抱歉，您需要手动将本网站设置为首页。'
			});
		}
 }
}

// 添加收藏
function addFavorite() {
	var sURL = window.location.href, sTitle = document.title;
	console.log(sURL, sTitle)
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, '');
		} catch (e) {
			alert('加入收藏失败，请使用Ctrl+D进行添加');
		}
	}
}

$('.setHome').on('click', setHome);

$('.addFavorite').on('click', addFavorite);

