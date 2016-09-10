jQuery(document).ready(function (e){
	
// When the Read More is clicked display the show-this-on-click. //
    jQuery('.readmore').click(function (e){
        e.preventDefault();
        jQuery('#show-this-on-click').slideDown();
        jQuery('p.readmore').hide();
        jQuery('p.readless hide').show();
    });

// When the Read Less is clicked slide back up. //
    jQuery('.readless').click(function (e){
    	e.preventDefault();
    	jQuery('#show-this-on-click').slideUp();
    	jQuery('p.readmore').show();
    	jQuery('p.readless hide').hide();
    });

// When the Learn More is clicked display the learnmoretext. //
    jQuery('.learnmore').click(function (e){
    	e.preventDefault();
    	jQuery('#learmoretext').slideDown();
    	jQuery('a.learnmore').show();
    	jQuery('a.learnmore').hide();
    });
});