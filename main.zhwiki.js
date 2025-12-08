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
					'refcon-gadgetname': '参考整理器', //Gadget name
					'refcon-summary': '[[User:SuperGrey/gadgets/refOrganizer|整理参考]]', // Edit summary automatically added by RefCon
					'refcon-summaryseparator': ' + ', // Edit summary separator if summary is added to existing summary
					'refcon-linkname': '整理参考', //Portlet link name
					'refcon-linkhover': 'Organize references', //Text that is displayed when hovering above the link; link title
					'refcon-reftemplatenames': [ //List template {{reflist}} name and aliases that are used in the wiki. Separate with commas. Put the main first.
						'reflist'
					],
					'refcon-reftemplategroupnames': [ //List template {{reflist}} 'group' parameter name and aliases that are used in the wiki. Separate with commas. Put the main first.
						'group'
					],
					'refcon-reftemplaterefsnames': [ //List template {{reflist}} 'refs' parameter name and aliases that are used in the wiki. Separate with commas. Put the main first.
						'refs'
					],
					'refcon-sortrefs': 'user',	// Whether references will be sorted alphabetically in reference list template.
												// Value can be 'yes', 'no', 'user'
					'refcon-usetemplateR': 'user',	// Whether to use template {{R}} for citations. See [[:en:Template:R]].
													// Value can be 'yes', 'no', 'user'
					'refcon-image-yes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yes_check.svg/240px-Yes_check.svg.png',
					'refcon-image-no': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/210px-X_mark.svg.png'
				});
				mw.messages.set({
					'refcon-parsereferror': "此参考字符串发生错误：\n$1",
					'refcon-parserefforbidden': "参考名称包含被禁用的字符[$1]：\n$2",
					'refcon-name': "名称",
					'refcon-reference': "参考",
					'refcon-refstemplateno': "参考列表模板序号",
					'refcon-referencegroup': "参考组",
					'refcon-buttonabort': "放弃",
					'refcon-buttoncontinue': "继续",
					'refcon-referenceuses': "使用",
					'refcon-closetitle': "关闭窗口",
					'refcon-checkboxsortorder': "以选定的排序保存（点击标题排序）",
					'refcon-checkboxkeepnames': "将参考资料保存在条目正文中时保留参考名称",
					'refcon-checkboxmakecopies': "將參考資料反覆保存在每一處（用於條目分割）",
					'refcon-optionsheaderreflocation': "参考资料位置",
					'refcon-optionsheaderother': "其他选项",
					'refcon-optionlocation1': "所有参考置入参考列表模板中",
					'refcon-optionlocation2': "所有参考置入条目正文中",
					'refcon-optionlocation3': "所有至少使用$1次的参考置入参考列表模板中"
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
