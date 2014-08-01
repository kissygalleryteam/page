/*! page - v2.0.0 - 2013-10-07 2.0.04:17 PM
* Copyright (c) 2013 兰梦; Licensed  */
KISSY.add("kg/page/2.0.0/index",function(a,b,c,d){function e(a){var b=this;e.superclass.constructor.call(b,a),b._init.apply(b,arguments)}var f=a.isString,g=a.substitute,h=a.one,i="page-",j=i+"first",k=i+"preview",l=i+"next",m=i+"last",n=i+"num",o=i+"btn",p=i+"skip",q=i+"total",r=i+"current",s=i+"dot";return a.extend(e,c,{_init:function(){var a=this;a.container=a.get("container"),a.container&&(a.renderPage(),a.bindUI())},bindUI:function(){var a=this;d.delegate(a.container,"click","a",function(b){var c=h(b.currentTarget),d=c.attr("class");switch(d){case j:a.goFirstPage();break;case k:a.goPreviewPage();break;case l:a.goNextPage();break;case m:a.goLastPage();break;case n:a.skip(c.html(),c)}}),d.delegate(a.container,"click","."+o,function(b){var c=b.currentTarget,d=a.container.one("."+p).val();/^\d+$/.test(d)&&d>0?a.skip(d,c):a.fire("page:error",{target:h(c)})})},renderPage:function(){var a=this;a.htmlArr=[],a.htmlArr.push("<div class='page'>");var b=a.get("total_page"),c=a.get("current_page"),d=b>0&&c>1;if(a.get("first_show")&&a._getOnePageHtml(a.get("first_text"),d,j),a.get("preview_show")&&a._getOnePageHtml(a.get("preview_text"),c>1,k),b>0){var c=a.get("current_page"),e=a.get("edge_page");a._getBeginEnd();for(var f=1;e>=f;f++)a._getOnePageHtml(f,!0,n);a.startPage>e+1&&a.get("edge_page")&&a._getOnePageHtml(a.get("dot_text"),!1,s);for(var h=Math.max(e+1,a.startPage),f=h;f<=a.endPage;f++)a._getOnePageHtml(f,!0,n);var i=b-e;a.endPage<i&&a._getOnePageHtml(a.get("dot_text"),!1,s),i=Math.max(a.endPage,i);for(var f=i+1;b>=f;f++)a._getOnePageHtml(f,!0,n)}a.get("next_show")&&a._getOnePageHtml(a.get("next_text"),b>c||0==b,l);var o=b>c&&b>1;a.get("last_show")&&a._getOnePageHtml(a.get("last_text"),o,m),b>0&&(a.get("total_show")&&a._getOnePageHtml(g(a.get("total_text"),{totalPage:b}),!1,q),a.get("skip_show")&&a._setSkipHtml()),a.htmlArr.push("</div>"),a.container.html(a.htmlArr.join(""))},changetTotalPage:function(a){var b=this;b.set("total_page",a)},setCurrentPage:function(a){var b=this;b.set("currentPage",a),b.renderPage()},disablePreviewPage:function(){var a=this;a.set("total_page",a.currentPage),a.renderPage()},disableNextPage:function(){var a=this;a.currentPage=0,a.renderPage()},getCurrentPage:function(){return this.get("current_page")},getCurrentNode:function(){return h("."+r)},getToatalPage:function(){return this.get("total_page")},goFirstPage:function(){var a=this,b=h("."+j);a.skip(1,b),a.fire("page:firstPage",{target:b})},goLastPage:function(){var a=this,b=h("."+n);a.skip(a.get("total_page"),b),a.fire("page:lastPage",{target:b})},goPreviewPage:function(){var a=this,b=a.get("current_page"),c=h("."+k);(b>1||!totalPage)&&a.skip(--b,c),a.fire("page:previewPage",{target:c})},goNextPage:function(){var a=this,b=a.get("current_page"),c=a.get("total_page"),d=h("."+l);(c>b||!c)&&a.skip(++b,d),a.fire("page:nextPage",{target:d})},skip:function(a,b){var c=this;a&&c.set("current_page",parseInt(a)),c.fire("page:skip",{pageNum:a,target:b}),c.renderPage()},_getBeginEnd:function(){var a=this,b=a.get("total_page"),c=a.get("current_page");a.get("edge_page");var d=a.get("continuous_page");return a.startPage=c-Math.floor(d/2),a.endPage=c+Math.floor(d/2),a.startPage<=1?(a.startPage=1,a.endPage=Math.min(b,a.startPage+d-1),void 0):(a.endPage>=b&&(a.endPage=b,a.startPage=Math.max(1,a.endPage-d+1)),void 0)},_getOnePageHtml:function(a,b,c){var d=this,e=d.get("current_page");b?(e==a&&(c+=" "+r),d.htmlArr.push("<a href='javascript:;' class='"+c+"'>"+a+"</a>")):d.htmlArr.push("<span class='"+c+"'>"+a+"</span>")},_setSkipHtml:function(){var a=this,b=[];b.push(g(a.get("skip_text"),{input:"<input type='text' class='"+p+"' >"})),b.push("<input type='button' class='"+o+"' value='"+a.get("skip_btn")+"' >"),a._getOnePageHtml(b.join(""),!1,q)}},{ATTRS:{container:{value:null,getter:function(a){return f(a)?h(a):a}},total_page:{value:0},continuous_page:{value:5,getter:function(a){return a<this.get("edge_page")?this.get("edge_page"):a}},current_page:{value:1},linlk_to:{value:"#"},edge_page:{value:2,getter:function(a){return a>this.get("total_page")?this.get("total_page"):a}},total_show:{value:!1},total_text:{value:"\u5171{totalPage}\u9875"},skip_show:{value:!1},skip_text:{value:"\u5230\u7b2c{input}\u9875"},skip_btn:{value:"\u786e\u5b9a"},dot_text:{value:"..."},first_show:{value:!1},first_text:{value:"\u9996\u9875"},last_show:{value:!1},last_text:{value:"\u672b\u9875"},preview_text:{value:"\u4e0a\u4e00\u9875"},next_text:{value:"\u4e0b\u4e00\u9875"},preview_show:{value:!1},next_show:{value:!1}}}),e},{requires:["node","base","event"]});