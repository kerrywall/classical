var classical = {};
classical.types  = ["concerto","sonata","fugue","nocturne","etude","symphony","mass","prelude","polonaise","rhapsody","suite","toccata","waltz","string quartet"];
classical.instruments = ["piano","violin","viola","cello","double bass","clarinet","harp","bassoon","contrabassoon","tuba","trombone","horn","flute","percussion"];
classical.keys = ["A major","A minor","Ab major","Ab minor","B major","B minor","Bb major","Bb minor","C major","C minor","C# major","C# minor","D major","D minor","Db major","E major","E minor","Eb major","Eb minor","F major","F minor","F# major","F# minor","G major","G minor","Gb major"];

classical.randomize = function() {
	randomType = classical.types[Math.floor(Math.random()*classical.types.length)];
	randomInstrument = classical.instruments[Math.floor(Math.random()*classical.instruments.length)];
	randomKey = classical.keys[Math.floor(Math.random()*classical.keys.length)];
}

$(document).ready(function() {
	$('.youtube').hide();
});

$('button').on('click',function() {
	classical.randomize();
	if (randomType == "symphony" || randomType == "mass" || randomType == "string quartet") {
		result = randomType + " in " + randomKey;
	} else {
		result = randomType + " for " + randomInstrument + " in " + randomKey;
	}
	$('.result a').attr('href', 'https://www.youtube.com/results?search_query='+result);
	$('.result a').html(result);
});