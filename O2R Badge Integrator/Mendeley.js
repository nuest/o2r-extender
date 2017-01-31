function ServiceProvider() {
	
	this.name = "Mendeley";
	this.articleContainerQuery = '.document';
	this.retry = 0;
	this.hasFilterBar = true;
	
	this.getFilterHtml = function(page) {
		var html = '<div class="padding"><h2 class="heading-line"><span>Badge Types</span></h2><div class="extra-facet-filter">';
		for(var i = 0; i < page.types.length; i++) {
			html += '<div>' + page.getSelectBoxHtml(page.types[i]) + ' ' + page.getSelectLabelHtml(page.types[i]) + '</div>';
		}
		html += '</div></div>';
		html += '<div class="padding"><div class="extra-facet-filter">';
		html += '<h2 class="heading-line"><span>Badge Value Filter</span></h2><div class="extra-facet-filter">';
		for(var i = 0; i < page.types.length; i++) {
			html += '<div style="padding-top: 0.5em;">' + page.getFilterLabelHtml(page.types[i]) + '<br />' + page.getFilterBoxHtml(page.types[i]) + '</div>';
		}
		html += '</div></div>';
		return html;
	};
	
	this.insertFilter = function(page, html) {
		$('.column-b').each(function() {
			var elem = $(this);
			if (elem.find('#search-facets').length > 0) {
				elem.append(html);
			}
		});
	};
	
	this.getDoi = function(article) {
		return null;
	};
	
	this.getTitle = function(article) {
		return article.getContainerElement().find('.title').text().trim();
	};
	
	this.insertBadgeContainer = function(article) {
		var elem = article.getContainerElement().find('.metadata');
		$('<div id="'+ article.getBadgesContainerName() +'" style="min-height: 1.5em; vertical-align: middle;"></div>').insertAfter(elem);
	};
		
}