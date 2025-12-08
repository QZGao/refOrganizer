// Main page: [[User:SuperGrey/gadgets/refOrganizer]]

$.when (
	$.ready,
	mw.loader.using(['mediawiki.util', 'jquery.ui'])
	).done(function () {
		// Only load on appropriate namespaces
		var namespace = mw.config.get( 'wgNamespaceNumber' );
		if ( namespace === 0 || namespace === 2 || namespace === 118 ) {
			// Only load when editing wikitext (and not in common.js or common.css, for example)
			var contentModel = mw.config.get( 'wgPageContentModel' );
			if ( contentModel === 'wikitext' ) {
				// Configure the gadget for this particular wiki
				mw.config.set({
					'refcon-gadgetname': 'Reference Organizer', //Gadget name
					'refcon-summary': 'Arranged references with [[w:zh:User:SuperGrey/gadgets/refOrganizer|script]]', // Edit summary automatically added by RefCon
					'refcon-summaryseparator': ' + ', // Edit summary separator if summary is added to existing summary
					'refcon-linkname': 'Organize refs', //Portlet link name
					'refcon-linkhover': 'Organize references', //Text that is displayed when hovering above the link; link title
					'refcon-reftemplatenames': [ //List template {{reflist}} name and aliases that are used in wiki. Separate with commas. Put the main first.
						'reflist'
					],
					'refcon-reftemplategroupnames': [ //List template {{reflist}} 'group' parameter aliases that are used in wiki. Separate with commas. Put the main first.
						'group'
					],
					'refcon-reftemplaterefsnames': [ //List template {{reflist}} 'refs' parameter aliases that are used in wiki. Separate with commas. Put the main first.
						'refs'
					],
					'refcon-sortrefs': 'user',	// Whether references will be sorted alphabetically in reference template.
												// Value can be 'yes', 'no', 'user'
					'refcon-usetemplateR': 'user',	// Whether to use template {{R}} for citations. See [[:en:Template:R]].
													// Value can be 'yes', 'no', 'user'
					'refcon-image-yes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yes_check.svg/240px-Yes_check.svg.png',
					'refcon-image-no': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/210px-X_mark.svg.png'
				});
				mw.messages.set({
					'refcon-parsereferror': "This reference string caused error:\n$1",
					'refcon-parserefforbidden': "Reference name contains forbidden characters [$1]:\n$2",
					'refcon-name': "Name",
					'refcon-reference': "Reference",
					'refcon-refstemplateno': "Reference list template no.",
					'refcon-referencegroup': "reference group",
					'refcon-buttonabort': "Abort",
					'refcon-buttoncontinue': "Continue",
					'refcon-referenceuses': "Uses",
					'refcon-closetitle': "Close window",
					'refcon-checkboxsortorder': "save in the selected sort order (click on headers to sort)",
					'refcon-checkboxkeepnames': "keep unnecessary article body reference names",
					'refcon-checkboxmakecopies': "save article body references as separate copies (for article separation)",
					'refcon-optionsheaderreflocation': "References location:",
					'refcon-optionsheaderother': "Other choices:",
					'refcon-optionlocation1': "all references are located in reference list template(s)",
					'refcon-optionlocation2': "all references are located in the body of article",
					'refcon-optionlocation3': "all references w/ at least $1 uses are located in reference list template(s)"
				});
				mw.loader.load( '//zh.wikipedia.org/w/index.php?title=User:SuperGrey/gadgets/refOrganizer/styles.css&action=raw&ctype=text/css', 'text/css' );
				// cache loaded scripts for faster loading
				$.ajaxSetup({
					cache: true
				});
				// load xmlToJSON
				$.getScript( '//en.wikipedia.org/w/index.php?title=User:Kaniivel/XmlToJSON.min.js&action=raw&ctype=text/javascript', function() {
					// load the main script
					mw.loader.load( '//zh.wikipedia.org/w/index.php?title=User:SuperGrey/gadgets/refOrganizer/helper.js&action=raw&ctype=text/javascript', 'text/javascript' );
				});
			}
		}
	}
);
