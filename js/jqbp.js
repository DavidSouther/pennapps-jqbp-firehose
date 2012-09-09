jQuery(function($){

	$.ajax('newswire.php', {dataType: "xml"}).then(function(data){
		console.log(data);
	});

}(jQuery));