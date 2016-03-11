var classical = {};
classical.types  = ["concerto","sonata","fugue","nocturne","etude","symphony","mass","prelude","polonaise","rhapsody","suite","toccata","waltz","string quartet"];
classical.instruments = ["piano","violin","viola","cello","double bass","clarinet","harp","bassoon","contrabassoon","tuba","trombone","horn","flute","percussion"];
classical.keys = ["A major","A minor","Ab major","Ab minor","B major","B minor","Bb major","Bb minor","C major","C minor","C# major","C# minor","D major","D minor","Db major","E major","E minor","Eb major","Eb minor","F major","F minor","F# major","F# minor","G major","G minor","Gb major"];

classical.randomize = function() {
	randomType = classical.types[Math.floor(Math.random()*classical.types.length)];
	randomInstrument = classical.instruments[Math.floor(Math.random()*classical.instruments.length)];
	randomKey = classical.keys[Math.floor(Math.random()*classical.keys.length)];
}

classical.video = function(query){
	//ajax or whatever here
	$.ajax({
		type: "GET",
		url: "https://www.googleapis.com/youtube/v3/search",
		data: {
			v:3,
			q: query,
			part: "snippet",
			type: "video",
			videoEmbeddable: "true",
			maxResults: 1,
			key: 'AIzaSyBDup_z0u0VSAQ86shWiq0mIMxXLsSFGMs'
		},
		success: function(result){
			var theVideoURL = result.items[0].id.videoId;
			$('.youtube').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+theVideoURL+'" frameborder="0" allowfullscreen></iframe>');
		}
	});
};

$(document).ready(function() {
	// $('.youtube').hide();
});

$('button').on('click',function() {
	classical.randomize();
	if (randomType == "symphony" || randomType == "mass" || randomType == "string quartet") {
		result = randomType + " in " + randomKey;
	} else {
		result = randomType + " for " + randomInstrument + " in " + randomKey;
	}
	$('.result a').attr('href', 'https://www.youtube.com/results?search_query='+result);
	$('.result a').html("search more on YouTube");

	classical.video(result);
});

