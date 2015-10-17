jQuery(document).ready(function(){

	// PRETTIFY PRE TAGS
	$('pre code').each(function(index){
		if(typeof $(this).attr('data-language') == 'undefined' || $(this).attr('data-language') == false){
			$(this).attr('data-language', 'javascript');
		}
	});
	if(config.highlightcode == true){
		Rainbow.color();
	}

	// SCROLL TO TOP
	$('.backtotop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

	// FITVIDS
	$(".post").fitVids();

	// RESPONSIVE NAVIGATION
	$(".inlinemenu > .graybar").click(function(){
		$(".inlinemenu > .menu").toggle();
	}); 
	
	// INDEX POST FEATURE
	$( ".post" ).each(function( index ) {
		if($("img[alt='postimage']", this).length != 0){
			$('.postfeature', this).css('background-image', 'url(' + $("img[alt='postimage']", this).attr('src') + ')');
			$('.postfeature', this).css('display', 'block');
		}
	});

	// SINGLE FEATURE
	$( ".single" ).each(function( index ) {
		$('.featureheader > .background').css('background-image', 'url(' + $("img[alt='postimage']", this).attr('src') + ')');
		$('.featureheader > .background').css('background-attachment', 'fixed');
	});

	// COMMENTS
	$('.comments .graybar').show();
	if(($('.comments').length != 0) && config.disqus_shortname != '' && config.disqus_shortname != null && config.disqus_shortname != undefined || config.google_comments == true){
		$('.comments .graybar').show();
	}

	$('.comments .graybar').click(function(){
		loadComments();
	});

	if(config.autoload_comments == true){
		loadComments();
	}

	function loadComments(){
		if(($('.comments').length != 0) && config.disqus_shortname != '' && config.disqus_shortname != null && config.disqus_shortname != undefined || config.google_comments == true){
			if(config.disqus_shortname != ''){
				var disqus_shortname = config.disqus_shortname;
				(function() {
				var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
				})();
			}else if(config.google_comments == true){
				$.getScript("https://apis.google.com/js/plusone.js")
				.done(function(script, textStatus ) {
					gapi.comments.render('g-comments', {
					    href: window.location,
					    width: '760',
					    first_party_property: 'BLOGGER',
					    view_type: 'FILTERED_POSTMOD'
					});
				});
			}
		}
		$('.disqus_thread, #g-comments').show();
		$('.comments .graybar').html('<i class="fa fa-comments"></i>Comments');
	}


	// ANALYTICS
	if(config.analytics_id != '' || config.analytics_id != null || config.analytics_id != undefined){
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', config.analytics_id, config.analytics_domain);
		ga('send', 'pageview');
	}
    
});
