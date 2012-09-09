jQuery(function($){

	$.getJSON('newswire.php').then(function(data){
		if(data.status === 'OK') {
			$.each(data.results, showResult);
		}
	});

	function showResult(i, result){
		var created = new Date(result.created_date);
		var $template = $($("#templates #news_item").clone());
		$template.find(".title a").text(result.title).attr("href", result.url);
		$template.find(".byline").text(result.byline);
		$template.find(".abstract").text(result.abstract);
		$template.find(".created").text(created.toLocaleString());
		$template.appendTo("#firehose");
	}

}(jQuery));