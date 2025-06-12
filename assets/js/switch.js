setTimeout(() => {
	document.addEventListener('DOMContentLoaded', function () {
  $('body').animate({opacity: 0}, 1000, function() {
    $(this).remove();
	setTimeout(() => {
		window.location.href = "https://youtu.be/9X_Ne3S5FAU";
	}, 3000);
});
})
}, 5000);
