$(document).ready(function() {
	$('.confirm').click(function(event) {
		if (!confirm('Are you sure?')) {
			event.preventDefault();
		}
	});
	
});

function urlize(input) {
    var exp = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]))/ig;
    output = input.replace(exp,'<a href="$1" target="_blank">$3</a>');
	return output;
}

function tweep(input) {
    var exp = /(\@(\w+?)) /ig;
    output = input.replace(exp,'<a href="http://www.twitter.com/$2" target="_blank">$1</a> ');
	return output;
}

