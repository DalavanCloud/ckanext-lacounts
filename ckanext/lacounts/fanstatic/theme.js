!function(root,factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory(require("jquery")):root.jquery_dotdotdot_js=factory(root.jQuery)}(this,function(jQuery){return function(t){"use strict";function e(){h=t(window),s={},o={},r={},t.each([s,o,r],function(t,e){e.add=function(t){for(var i=0,n=(t=t.split(" ")).length;i<n;i++)e[t[i]]=e.ddd(t[i])}}),s.ddd=function(t){return"ddd-"+t},s.add("truncated keep"),o.ddd=function(t){return"ddd-"+t},r.ddd=function(t){return t+".ddd"},r.add("resize"),e=function(){}}var s,o,r,h,i="dotdotdot",n="3.2.2";t[i]&&t[i].version>n||(t[i]=function(t,e){this.$dot=t,this.api=["getInstance","truncate","restore","destroy","watch","unwatch"],this.opts=e;var n=this.$dot.data(i);return n&&n.destroy(),this.init(),this.truncate(),this.opts.watch&&this.watch(),this},t[i].version=n,t[i].uniqueId=0,t[i].defaults={ellipsis:"… ",callback:function(t){},truncate:"word",tolerance:0,keep:null,watch:"window",height:null},t[i].prototype={init:function(){this.watchTimeout=null,this.watchInterval=null,this.uniqueId=t[i].uniqueId++,this.originalStyle=this.$dot.attr("style")||"",this.originalContent=this._getOriginalContent(),"break-word"!==this.$dot.css("word-wrap")&&this.$dot.css("word-wrap","break-word"),"nowrap"===this.$dot.css("white-space")&&this.$dot.css("white-space","normal"),null===this.opts.height&&(this.opts.height=this._getMaxHeight()),"string"==typeof this.opts.ellipsis&&(this.opts.ellipsis=document.createTextNode(this.opts.ellipsis))},getInstance:function(){return this},truncate:function(){this.$inner=this.$dot.wrapInner("<div />").children().css({display:"block",height:"auto",width:"auto",border:"none",padding:0,margin:0}),this.$inner.empty().append(this.originalContent.clone(!0)),this.maxHeight=this._getMaxHeight();var t=!1;return this._fits()||(t=!0,this._truncateToNode(this.$inner[0])),this.$dot[t?"addClass":"removeClass"](s.truncated),this.$inner.replaceWith(this.$inner.contents()),this.$inner=null,this.opts.callback.call(this.$dot[0],t),t},restore:function(){this.unwatch(),this.$dot.empty().append(this.originalContent).attr("style",this.originalStyle).removeClass(s.truncated)},destroy:function(){this.restore(),this.$dot.data(i,null)},watch:function(){var t=this;this.unwatch();var e={};"window"==this.opts.watch?h.on(r.resize+t.uniqueId,function(i){t.watchTimeout&&clearTimeout(t.watchTimeout),t.watchTimeout=setTimeout(function(){e=t._watchSizes(e,h,"width","height")},100)}):this.watchInterval=setInterval(function(){e=t._watchSizes(e,t.$dot,"innerWidth","innerHeight")},500)},unwatch:function(){h.off(r.resize+this.uniqueId),this.watchInterval&&clearInterval(this.watchInterval),this.watchTimeout&&clearTimeout(this.watchTimeout)},_api:function(){var e=this,i={};return t.each(this.api,function(t){var n=this;i[n]=function(){var t=e[n].apply(e,arguments);return void 0===t?i:t}}),i},_truncateToNode:function(e){var i=[],n=[];if(t(e).contents().each(function(){var e=t(this);if(!e.hasClass(s.keep)){var o=document.createComment("");e.replaceWith(o),n.push(this),i.push(o)}}),n.length){for(var o=0;o<n.length;o++){t(i[o]).replaceWith(n[o]),t(n[o]).append(this.opts.ellipsis);var r=this._fits();if(t(this.opts.ellipsis,n[o]).remove(),!r){if("node"==this.opts.truncate&&1<o)return void t(n[o-2]).remove();break}}for(var h=o;h<i.length;h++)t(i[h]).remove();var a=n[Math.max(0,Math.min(o,n.length-1))];if(1==a.nodeType){var d=t("<"+a.nodeName+" />");d.append(this.opts.ellipsis),t(a).replaceWith(d),this._fits()?d.replaceWith(a):(d.remove(),a=n[Math.max(0,o-1)])}1==a.nodeType?this._truncateToNode(a):this._truncateToWord(a)}},_truncateToWord:function(t){for(var e=t,i=this,n=this.__getTextContent(e),s=-1!==n.indexOf(" ")?" ":"　",o=n.split(s),r="",h=o.length;0<=h;h--)if(r=o.slice(0,h).join(s),i.__setTextContent(e,i._addEllipsis(r)),i._fits()){"letter"==i.opts.truncate&&(i.__setTextContent(e,o.slice(0,h+1).join(s)),i._truncateToLetter(e));break}},_truncateToLetter:function(t){for(var e=this,n=this.__getTextContent(t).split(""),s="",o=n.length;0<=o&&(!(s=n.slice(0,o).join("")).length||(e.__setTextContent(t,e._addEllipsis(s)),!e._fits()));o--);},_fits:function(){return this.$inner.innerHeight()<=this.maxHeight+this.opts.tolerance},_addEllipsis:function(e){for(var i=[" ","　",",",";",".","!","?"];-1<t.inArray(e.slice(-1),i);)e=e.slice(0,-1);return e+this.__getTextContent(this.opts.ellipsis)},_getOriginalContent:function(){var e=this;return this.$dot.find("script, style").addClass(s.keep),this.opts.keep&&this.$dot.find(this.opts.keep).addClass(s.keep),this.$dot.find("*").not("."+s.keep).add(this.$dot).contents().each(function(){var i=this,n=t(this);if(3==i.nodeType){if(""==t.trim(e.__getTextContent(i))){if(n.parent().is("table, thead, tbody, tfoot, tr, dl, ul, ol, video"))return void n.remove();if(n.prev().is("div, p, table, td, td, dt, dd, li"))return void n.remove();if(n.next().is("div, p, table, td, td, dt, dd, li"))return void n.remove();if(!n.prev().length)return void n.remove();if(!n.next().length)return void n.remove()}}else 8==i.nodeType&&n.remove()}),this.$dot.contents()},_getMaxHeight:function(){if("number"==typeof this.opts.height)return this.opts.height;for(var t=["maxHeight","height"],e=0,i=0;i<t.length;i++)if("px"==(e=window.getComputedStyle(this.$dot[0])[t[i]]).slice(-2)){e=parseFloat(e);break}t=[];switch(this.$dot.css("boxSizing")){case"border-box":t.push("borderTopWidth"),t.push("borderBottomWidth");case"padding-box":t.push("paddingTop"),t.push("paddingBottom")}for(i=0;i<t.length;i++){var n=window.getComputedStyle(this.$dot[0])[t[i]];"px"==n.slice(-2)&&(e-=parseFloat(n))}return Math.max(e,0)},_watchSizes:function(t,e,i,n){if(this.$dot.is(":visible")){var s={width:e[i](),height:e[n]()};return t.width==s.width&&t.height==s.height||this.truncate(),s}return t},__getTextContent:function(t){for(var e=["nodeValue","textContent","innerText"],i=0;i<e.length;i++)if("string"==typeof t[e[i]])return t[e[i]];return""},__setTextContent:function(t,e){for(var i=["nodeValue","textContent","innerText"],n=0;n<i.length;n++)t[i[n]]=e}},t.fn[i]=function(n){return e(),n=t.extend(!0,{},t[i].defaults,n),this.each(function(){t(this).data(i,new t[i](t(this),n)._api())})})}(jQuery),!0}),function(C){"use strict";C.Zebra_Pin=function(t,s){var n={class_name:"Zebra_Pin",contain:!(this.version="2.0.0"),hard:!1,top_spacing:0,bottom_spacing:0,z_index:1e3,onPin:null,onUnpin:null},c=this,d=(Math.random()+1).toString(36).substring(2,7),f=C(window);c.update=function(){t.each(function(s){var n=C(this);C(this).hasClass(c.settings.class_name)&&(n.attr("style",n.data("ztt_previous_style")||"").removeClass(c.settings.class_name).removeClass("Zebra_Pin_Contained"),n.next(".Zebra_Pin_Clone").remove());var t,e,i,a,o=n.offset(),l=n.position(),g=n.outerHeight(),_=n.outerWidth(),p=parseInt(n.css("marginLeft"),10)||0,r=parseInt(n.css("marginTop"),10)||0;o.left-=p,o.top-=r,c.settings.contain&&(t=n.parent(),e=t.height(),i=t.offset()),c.settings.hard?n.css({position:"fixed",left:o.left,top:o.top,width:_,zIndex:c.settings.z_index}).addClass(c.settings.class_name):(a=".Zebra_Pin_"+d+"_"+s,f.off("scroll"+a).on("scroll"+a,function(){var t=f.scrollTop();t>=o.top-c.settings.top_spacing&&(!c.settings.contain||t<=i.top+e-c.settings.top_spacing-g-c.settings.bottom_spacing)&&(!n.hasClass(c.settings.class_name)||n.hasClass("Zebra_Pin_Contained"))?(n.hasClass("Zebra_Pin_Contained")?n.removeClass("Zebra_Pin_Contained"):(n.clone().addClass("Zebra_Pin_Clone").insertAfter(n).css("visibility","hidden"),n.data("ztt_previous_style",n.attr("style")).addClass(c.settings.class_name),c.settings.onPin&&"function"==typeof c.settings.onPin&&c.settings.onPin(o.top-c.settings.top_spacing,n,s)),n.css({position:"fixed",left:o.left,top:c.settings.top_spacing,width:_,zIndex:c.settings.z_index})):t<o.top-c.settings.top_spacing&&n.hasClass(c.settings.class_name)?(n.next(".Zebra_Pin_Clone").remove(),n.attr("style",n.data("ztt_previous_style")||"").removeClass(c.settings.class_name),c.settings.onUnpin&&"function"==typeof c.settings.onUnpin&&c.settings.onUnpin(o.top-c.settings.top_spacing,n,s)):c.settings.contain&&t>=i.top+e-c.settings.top_spacing-g-c.settings.bottom_spacing&&!n.hasClass("Zebra_Pin_Contained")&&(n.hasClass(c.settings.class_name)||(n.clone().addClass("Zebra_Pin_Clone").insertAfter(n).css("visibility","hidden"),n.data("ztt_previous_style",n.attr("style")).addClass(c.settings.class_name),c.settings.onPin&&"function"==typeof c.settings.onPin&&c.settings.onPin(o.top-c.settings.top_spacing,n,s)),n.css({position:"absolute",left:l.left,top:e-g-c.settings.bottom_spacing-c.settings.bottom_spacing}).addClass("Zebra_Pin_Contained"))}),f.trigger("scroll"+a))})},c.settings={},c.settings=C.extend({},n,s),c.update(),f.on("resize",function(){c.update()})}}(jQuery),$(document).ready(function(){function closeSearch(){$(".page").addClass("inactive-search"),$(".page").removeClass("active-search"),$(".masthead .site-search .close").remove()}function openSearch(){$(".page").addClass("active-search"),$(".page").removeClass("inactive-search"),$(".site-search").append('<button class="close" type="button"><i class="fa fa-times" aria-hidden="true"></i><span class="sr-only">Close</span></button>');var firstInput=$(".active-search #field-sitewide-search"),lastInput=$(".active-search .masthead .site-search .close");lastInput.on("keydown",function(e){9!==e.which||e.shiftKey||(e.preventDefault(),firstInput.focus())}),firstInput.on("keydown",function(e){9===e.which&&e.shiftKey&&(e.preventDefault(),lastInput.focus())}),$(".active-search .masthead .site-search .close").on("click",function(){closeSearch()}),$(".active-search .masthead .site-search .close").on("keypress",function(e){13==e.which&&closeSearch()})}$(".page").addClass("inactive-search"),$(".masthead .site-search label").attr("tabindex","0"),$(".inactive-search .masthead .site-search label").on("click",function(){openSearch()}),$(".inactive-search .masthead .site-search label").on("keypress",function(e){13==e.which&&(openSearch(),$("#field-sitewide-search").focus())}),$(".masthead").affix({offset:1});var padTop=parseInt($(".page").css("padding-top"),10);function updatePublishers(){var searchTerm=$("#publisher-search .search-input").val().toLowerCase(),activeTypes=[];$("#publisher-filter .filter-list").children("li.active").each(function(){activeTypes.push($(this).children("a").data("publisher-type"))}),$("#publisher-tree .hierarchy-tree-top > li").each(function(){var isPassSearch=$(this).children("a").text().toLowerCase().includes(searchTerm),isPassFilter=activeTypes.includes($(this).data("publisher-type"));isPassSearch&&isPassFilter?$(this).show():$(this).hide()}),0===$("#publisher-tree .hierarchy-tree-top > li:visible").length?0===$("#publisher-tree .not-found").length&&$("#publisher-tree").append('<p class="not-found">Not found</p>'):$("#publisher-tree .not-found").remove()}$(".helper-info .header").on("click",function(){$(this).parent(".helper-info").toggleClass("display")}),$(".stories-list article .text").dotdotdot({}),$("body.blog article .text").dotdotdot({keep:".more"}),$.fn.trunc=function(h){var originalHeight=$(this).height();h<originalHeight&&($(this).addClass("do truncate"),$(this).css({overflow:"hidden","max-height":h+"px"}),$(this).after('<a class="trunc-expand">More</a>')),$(this).parent().on("click",".trunc-expand",function(){$(this).siblings(".truncate").css("max-height",originalHeight),$(this).siblings(".truncate").removeClass("do"),$(this).after('<a class="trunc-collapse">Less</a>'),$(this).remove()}),$(this).parent().on("click",".trunc-collapse",function(){$(this).siblings(".truncate").css("max-height",h+"px"),$(this).siblings(".truncate").addClass("do"),$(this).after('<a class="trunc-expand">More</a>'),$(this).remove()})},$("body.dataset .notes").trunc(100),$("body.details .notes").trunc(100),$("#field-related-datasets").select2({placeholder:"Click to get a drop-down list or start typing a dataset title"}),$(".story .notes > p:first-of-type").addClass("lead").prependTo($(".story .notes")),$(".ckanext-showcase-notes iframe").wrap("<div class='embed'></div>"),$("#publisher-tree .hierarchy-toggle").click(function(){$(this).next().is(":visible")?($(this).next().hide(),$(this).children("i").addClass("fa-plus-circle").removeClass("fa-minus-circle")):($(this).next().show(),$(this).children("i").addClass("fa-minus-circle").removeClass("fa-plus-circle"))}),$("#publisher-filter .filter-toggle").click(function(){$(this).parent("li").toggleClass("active"),updatePublishers()}),$("#publisher-search .search-input").on("change paste keyup",function(){updatePublishers()}),$(window).scroll(function(){if(padTop){var scrollPos=$(window).scrollTop();padTop<scrollPos?$(".to-top").addClass("active"):$(".to-top").removeClass("active")}})});