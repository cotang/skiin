$(document).ready(function() {

	$("#feedback").submit(function(event) {
		event.preventDefault();

		var formData = new FormData($(this)[0]); //get data

		$(this).find("button").hide(); //hide submit button
		$('.form-notif').html("<span class='notification-load'>Sending...</span>"); //show send message

		// ajax body
		$.ajax({
			type: "POST",
			url: "feedback.php", //handler
			data: formData,
			contentType: false,
			processData: false,
			success: function(msg) {

				if(msg == 'OK') {
					// if send success then show message
					result = '<span class="notification-success">Your mail was sent successfully!</span>'; //success message
					$(".notification-load").hide(); //hide load message
					$('.form-notif').html(result); //show success message
					$(this).find("button"); //show submit button
				} else {
					// if send error then show error message
					result = msg;
					$(this).find("button"); //show submit button
					$('.form-notif').html(result); //show error message
				}
			}
		});
		return false;
	});

});