/*!build time : 2015-01-16 2:21:09 PM*/
KISSY.add("kg/page/2.0.5/index",function(a,b,c,d,e){var f=a.isString,g=a.substitute,h=a.one,i=e.Query,j="page-",k=j+"first",l=j+"previous",m=j+"next",n=j+"last",o=j+"num",p=j+"btn",q=j+"skip",r=j+"total",s=j+"current",t=j+"dot",u=/^[1-9]+[0-9]*$/,v=c.extend({initializer:function(){var a=this;a.container=a.get("container"),a.container&&(a.get("support_hash")&&(a._getHash(),a._setHash()),a.renderPage(),a.bindUI())},bindUI:function(){var a=this;d.delegate(a.container,"click","a",function(b){var c=h(b.currentTarget),d=c.attr("class");switch(d){case k:a.goFirstPage();break;case l:a.goPreviousPage();break;case m:a.goNextPage();break;case n:a.goLastPage();break;case o:a.skip(c.html(),c)}}),d.delegate(a.container,"click","."+p,function(b){var c=b.currentTarget,d=a.container.one("."+q).val();/^\d+$/.test(d)&&d>0?a.skip(d,c):a.fire("page:error",{target:h(c)})}),a.get("support_hash")&&a.on("page:skip",a._setHash,a)},renderPage:function(){var a=this;a.htmlArr=[],a.htmlArr.push("<div class='page'>");var b=a.get("total_page"),c=a.get("current_page"),d=b>0&&c>1;if(a.get("first_show")&&a._getOnePageHtml(a.get("first_text"),d,k),a.get("previous_show")&&a._getOnePageHtml(a.get("previous_next"),c>1,l),b>0){var c=a.get("current_page"),e=a.get("edge_page");a._getBeginEnd();for(var f=1;e>=f;f++)a._getOnePageHtml(f,!0,o);a.startPage>e+1&&a.get("edge_page")&&a._getOnePageHtml(a.get("dot_text"),!1,t);for(var h=Math.max(e+1,a.startPage),f=h;f<=a.endPage;f++)a._getOnePageHtml(f,!0,o);var i=b-e;a.endPage<i&&a._getOnePageHtml(a.get("dot_text"),!1,t),i=Math.max(a.endPage,i);for(var f=i+1;b>=f;f++)a._getOnePageHtml(f,!0,o)}a.get("next_show")&&a._getOnePageHtml(a.get("next_text"),b>c||0==b,m);var j=b>c&&b>1;a.get("last_show")&&a._getOnePageHtml(a.get("last_text"),j,n),b>0&&(a.get("total_show")&&a._getOnePageHtml(g(a.get("total_text"),{totalPage:b}),!1,r),a.get("skip_show")&&a._setSkipHtml()),a.htmlArr.push("</div>"),a.container.html(a.htmlArr.join(""))},changeTotalPage:function(a){var b=this;b.set("total_page",a),b.renderPage()},setCurrentPage:function(a){var b=this;b.set("current_page",a),b.renderPage()},disablePreviousPage:function(){var a=this;a.set("total_page",a.currentPage),a.renderPage()},disableNextPage:function(){var a=this;a.currentPage=0,a.renderPage()},getCurrentPage:function(){return this.get("current_page")},getCurrentNode:function(){return h("."+s)},getTotalPage:function(){return this.get("total_page")},destory:function(){var a=this;d.undelegate(a.container,"click","a"),d.undelegate(a.container,"click","."+p)},goFirstPage:function(){var a=this,b=h("."+k);a.skip(1,b),a.fire("page:firstPage",{target:b})},goLastPage:function(){var a=this,b=h("."+o);a.skip(a.get("total_page"),b),a.fire("page:lastPage",{target:b})},goPreviousPage:function(){var a=this,b=a.get("current_page"),c=h("."+l);(b>1||!totalPage)&&a.skip(--b,c),a.fire("page:previousPage",{target:c})},goNextPage:function(){var a=this,b=a.get("current_page"),c=a.get("total_page"),d=h("."+m);(c>b||!c)&&a.skip(++b,d),a.fire("page:nextPage",{target:d})},skip:function(a,b){var c=this,a=Number(a);c.fire("before:skip",{pageNum:a,target:b}),a>0&&a<=c.get("total_page")&&(c.set("current_page",a),c.renderPage(),c.fire("after:skip",{pageNum:a,target:b})),c.fire("page:skip",{pageNum:a,target:b})},_getBeginEnd:function(){var a=this,b=a.get("total_page"),c=a.get("current_page"),d=(a.get("edge_page"),a.get("continuous_page"));return a.startPage=c-Math.floor(d/2),a.endPage=c+Math.floor(d/2),a.startPage<=1?(a.startPage=1,void(a.endPage=Math.min(b,a.startPage+d-1))):void(a.endPage>=b&&(a.endPage=b,a.startPage=Math.max(1,a.endPage-d+1)))},_getOnePageHtml:function(a,b,c){var d=this,e=d.get("current_page");if(b){if(e==a)return c+=" "+s,void d.htmlArr.push("<span class='"+c+"'>"+a+"</span>");d.htmlArr.push("<a href='javascript:;' class='"+c+"'>"+a+"</a>")}else d.htmlArr.push("<span class='"+c+" "+c+"-disabled'>"+a+"</span>")},_setSkipHtml:function(){var a=this,b=[];b.push(g(a.get("skip_text"),{input:"<input type='text' class='"+q+"' >"})),b.push("<input type='button' class='"+p+"' value='"+a.get("skip_btn")+"' >"),a._getOnePageHtml(b.join(""),!1,r)},_setHash:function(){var a=this,b=window.location.hash,c=new i(b.slice(1));c.set(a.get("hash_name"),a.get("current_page")),window.location.hash=c.toString()},_getHash:function(){var a=this,b=window.location.hash.slice(1),c=new i(b).get(a.get("hash_name"));c&&u.test(c)&&a.set("current_page",c)}},{ATTRS:{container:{value:null,getter:function(a){return f(a)?h(a):a}},total_page:{value:0},continuous_page:{value:5,getter:function(a){return a<this.get("edge_page")?this.get("edge_page"):a}},current_page:{value:1},linlk_to:{value:"#"},edge_page:{value:2,getter:function(a){return a>this.get("total_page")?this.get("total_page"):a}},total_show:{value:!1},total_text:{value:"\u5171{totalPage}\u9875"},skip_show:{value:!1},skip_text:{value:"\u5230\u7b2c{input}\u9875"},skip_btn:{value:"\u786e\u5b9a"},dot_text:{value:"..."},first_show:{value:!1},first_text:{value:"\u9996\u9875"},last_show:{value:!1},last_text:{value:"\u672b\u9875"},previous_next:{value:"\u4e0a\u4e00\u9875"},next_text:{value:"\u4e0b\u4e00\u9875"},previous_show:{value:!1},next_show:{value:!1},support_hash:{value:!1},hash_name:{value:"page"}}});return v},{requires:["node","rich-base","event","uri"]});