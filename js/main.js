$('.hero').first() .addClass ('shown');

$('h1.name').text( $('.shown').attr('title') );


$('button.next') .on('click', function(){

if ( $('.shown').is(':last-child') ) {
	$('.shown')
	.removeClass('shown')
	.siblings('.hero')
	.first()  
	.addClass('shown');
}

else {
	$('.shown') 
.removeClass('shown') 
.next() 
.addClass('shown');
}


var name= $('.shown').attr('title');
$('h1.name').text( name );
});
 

$('button.prev') .on('click', function(){

if ( $('.shown').is(':first-child') ) {
	$('.shown')
	.removeClass('shown')
	.siblings('.hero')
	.last()  
	.addClass('shown');
}

else{
	$('.shown') 
	.removeClass('shown') 
	.prev() 
	.addClass('shown');
}

var name= $('.shown').attr('title');
$('h1.name').text( name );

});