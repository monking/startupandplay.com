jQuery(document).ready(function() {

	// events
	jQuery("#enablexmlsitemap").change(function() {
		jQuery("#sitemapinfo").toggle(jQuery(this).is(':checked'));
	}).change();

	jQuery("#cleanpermalinks").change(function() {
		jQuery("#cleanpermalinksdiv").toggle(jQuery(this).is(':checked'));
	}).change();

	jQuery('#wpseo-tabs a').click(function() {
		jQuery('#wpseo-tabs a').removeClass('nav-tab-active');
		jQuery('.wpseotab').removeClass('active');
	
		var id = jQuery(this).attr('id').replace('-tab','');
		jQuery('#' + id).addClass('active');
		jQuery(this).addClass('nav-tab-active');
	});

	// init
	var active_tab = window.location.hash.replace('#top#','');

	// default to first tab
	if ( active_tab == '' || active_tab == '#_=_') {
		active_tab = jQuery('.wpseotab').attr('id');
	}

	jQuery('#' + active_tab).addClass('active');
	jQuery('#' + active_tab + '-tab').addClass('nav-tab-active');
		
});


// global functions
function setWPOption( option, newval, hide, nonce ) {
	jQuery.post(ajaxurl, { 
			action: 'wpseo_set_option', 
			option: option,
			newval: newval,
			_wpnonce: nonce 
		}, function(data) {
			if (data)
				jQuery('#'+hide).hide();
		}
	);
}

function wpseo_killBlockingFiles( nonce ) {
	jQuery.post( ajaxurl, {
		action: 'wpseo_kill_blocking_files',
		_ajax_nonce: nonce
	}, function(data) {
		if (data == 'success')
			jQuery('#blocking_files').hide();
		else
			jQuery('#block_files').html(data);
	});
}