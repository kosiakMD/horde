CKEDITOR.dialog.add("paste",function(f){var e=f.lang.clipboard,h=CKEDITOR.env.isCustomDomain();function g(d){var c=new CKEDITOR.dom.document(d.document),b=c.$,a=c.getById("cke_actscrpt");a&&a.remove();CKEDITOR.env.ie?b.body.contentEditable="true":b.designMode="on";if(CKEDITOR.env.ie&&CKEDITOR.env.version<8){c.getWindow().on("blur",function(){b.selection.empty()})}c.on("keydown",function(p){var o=p.data,n=o.getKeystroke(),m;switch(n){case 27:this.hide();m=1;break;case 9:case CKEDITOR.SHIFT+9:this.changeFocus(true);m=1}m&&o.preventDefault()},this);f.fire("ariaWidget",new CKEDITOR.dom.element(d.frameElement))}return{title:e.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?370:350,minHeight:CKEDITOR.env.quirks?250:245,onShow:function(){this.parts.dialog.$.offsetHeight;this.setupContent()},onHide:function(){if(CKEDITOR.env.ie){this.getParentEditor().document.getBody().$.contentEditable="true"}},onLoad:function(){if((CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&f.lang.dir=="rtl"){this.parts.contents.setStyle("overflow","hidden")}},onOk:function(){this.commitContent()},contents:[{id:"general",label:f.lang.common.generalTab,elements:[{type:"html",id:"securityMsg",html:'<div style="white-space:normal;width:340px;">'+e.securityMsg+"</div>"},{type:"html",id:"pasteMsg",html:'<div style="white-space:normal;width:340px;">'+e.pasteMsg+"</div>"},{type:"html",id:"editing_area",style:"width: 100%; height: 100%;",html:"",focus:function(){var a=this.getInputElement().$.contentWindow;setTimeout(function(){a.focus()},500)},setup:function(){var l=this.getDialog(),k='<html dir="'+f.config.contentsLangDirection+'" lang="'+(f.config.contentsLanguage||f.langCode)+'"><head><style>body { margin: 3px; height: 95%; } </style></head><body><script id="cke_actscrpt" type="text/javascript">window.parent.CKEDITOR.tools.callFunction( '+CKEDITOR.tools.addFunction(g,l)+", this );<\/script></body></html>",d=CKEDITOR.env.air?"javascript:void(0)":h?"javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())\"":"",c=CKEDITOR.dom.element.createFromHtml('<iframe class="cke_pasteframe" frameborder="0"  allowTransparency="true" src="'+d+'" role="region" aria-label="'+e.pasteArea+'" aria-describedby="'+l.getContentElement("general","pasteMsg").domId+'" aria-multiple="true"></iframe>');c.on("load",function(j){j.removeListener();var i=c.getFrameDocument();i.write(k);if(CKEDITOR.env.air){g.call(this,i.getWindow().$)}},l);c.setCustomData("dialog",l);var b=this.getElement();b.setHtml("");b.append(c);if(CKEDITOR.env.ie){var a=CKEDITOR.dom.element.createFromHtml('<span tabindex="-1" style="position:absolute;" role="presentation"></span>');a.on("focus",function(){c.$.contentWindow.focus()});b.append(a);this.focus=function(){a.focus();this.fire("focus")}}this.getInputElement=function(){return c};if(CKEDITOR.env.ie){b.setStyle("display","block");b.setStyle("height",c.$.offsetHeight+2+"px")}},commit:function(l){var k=this.getElement(),d=this.getDialog().getParentEditor(),c=this.getInputElement().getFrameDocument().getBody(),b=c.getBogus(),a;b&&b.remove();a=c.getHtml();setTimeout(function(){d.fire("paste",{html:a})},0)}}]}]}});