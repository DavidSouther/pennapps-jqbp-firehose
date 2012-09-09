jQuery(function($){

	$.getJSON('newswire.php').then(function(data){
		if(data.status === 'OK') {
			$.each(data.results, showResult);
		}
	});

	var showResult = function(i, result) {
		var $story = showResult.buildStory(result);
		if(i===0) {
			showResult.leader($story);
		} else if (i < 4) {
			showResult.highlight($story);
		} else if (i < 9) {
			showResult.story($story);
		}
	};

	$.extend(showResult, {
		buildStory: function(story){
			var created = new Date(story.created_date);
			var $story = $($("#templates #news_item").clone()).attr("id", null);
			$story.find(".title a").text(story.title).attr("href", story.url);
			$story.find(".byline").text(story.byline);
			$story.find(".abstract").text(story.abstract);
			$story.find(".created").text(created.toLocaleString());
			return $story;
		},
		leader: function($story) {
			$story.appendTo("#leader");
		},
		highlight: function($story){
			$story.appendTo("#highlights");
		},
		story: function($story){
			$story
				.find(".abstract").toggle(false).end()
				.appendTo("#stories");
		}
	});
}(jQuery));