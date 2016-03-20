$(document).ready(function() {
	// événement click des liens de la nav en bas de page
	$('#minerals-nav ul li a').click(function() {
		// change la page active en fonction de l'attribut data du lien cliqué
		$('#main-content article.active').removeClass('active');
		$('#'+$(this).data('page')).addClass('active');

		// change le lien actif en bas de page en fonction de l'attribut data du lien cliqué
		$('#minerals-nav ul li a.active').removeClass('active');
		$(this).addClass('active');
	});
});