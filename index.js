var toc = require('markdown-toc');

module.exports = {
	book: {},
	hooks: {
		"page:before": function (page) {
			page.content = toc.insert(page.content, {
				linkify: function (ele, text, slug, opts) {
				    var match = /(.*)\s*{(#[^}]+)}/.exec(text);
				    if (match) {
				        ele.content = '<a href="' + match[2] + '">' + match[1] + '</a>'
				    }

				    return ele
				}
			});
			if (this.options.pluginsConfig.toc.addClass) {
				var className = this.options.pluginsConfig.toc.className || 'toc';
				page.content = page.content + '\n\n\n<script type="text/javascript">var targetUl = document.getElementsByClassName(\'page-inner\')[0].getElementsByTagName(\'ul\')[0];if(targetUl && targetUl.getElementsByTagName(\'a\').length>0){targetUl.className=\'' + className + '\';}</script>';
			}
			return page;
		}
	}
};
