$(document).ready(function(){
	// open modal
	$('#feedback-btn').click(function(){
		$('#feedback-form').removeClass('d-none');
		$('body').css('overflow','hidden');
	});
	// close modal on btn
	$('#feedback-form .close-btn').click(function(){
		closeForm();
	});
	// close modal no target click
	$(document).mouseup(function(e){
		if ( !($('#feedback-btn').hasClass('d-none')) ) {
			if($(e.target).parents('#feedback-form').length === 0){
				closeForm();
			}
		}
	});
	// submit form
	$('#feedback-form .send').click(function(e) {
		e.preventDefault();
		$('small.wrong').addClass('d-none');
		if ( !checkInputExp(parseInt($('input[name=one]').val()), parseInt($('input[name=two]').val()), parseInt($('input[name=sum]').val()) ) ) {
				$('small.wrong').removeClass('d-none');
		}
		else {
			var formData = $('#feedback-form form').serialize();
			console.log(formData);
			// $.ajax({
			// 	type: 'post',

			// });
		}
	});
});
function closeForm(){
	$('#feedback-form').addClass('d-none');
	$('body').css('overflow','scroll');
};
function checkInputExp(one, two, sum) {
	if((one + two) == sum) return 1;
	else return 0;
};
