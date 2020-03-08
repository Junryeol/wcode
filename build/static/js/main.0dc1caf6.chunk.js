(this.webpackJsonpwcode=this.webpackJsonpwcode||[]).push([[0],{18:function(e,t,n){},30:function(e,t,n){e.exports=n(77)},36:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fileBuffer",(function(){return y})),n.d(a,"project",(function(){return w})),n.d(a,"view",(function(){return k}));var i={};n.r(i),n.d(i,"CONNECTION_OPEN",(function(){return N})),n.d(i,"READ_PROJECT",(function(){return F})),n.d(i,"CREATE_DIRECTORY",(function(){return A})),n.d(i,"UPDATE_DIRECTORY",(function(){return D})),n.d(i,"DELETE_DIRECTORY",(function(){return T})),n.d(i,"CREATE_FILE",(function(){return R})),n.d(i,"READ_FILE",(function(){return x})),n.d(i,"UPDATE_FILE",(function(){return S})),n.d(i,"DELETE_FILE",(function(){return M})),n.d(i,"EXIT_APP",(function(){return P})),n.d(i,"KEEP_ALIVE",(function(){return L})),n.d(i,"NOTIFICATION",(function(){return I}));var r={};n.r(r),n.d(r,"DEBUG",(function(){return _})),n.d(r,"API_URL",(function(){return z})),n.d(r,"CONTACT_EMAIL",(function(){return B})),n.d(r,"NO_DATE",(function(){return V}));var c={};n.r(c),n.d(c,"INFO",(function(){return W})),n.d(c,"ERROR",(function(){return U})),n.d(c,"SUCCESS",(function(){return Y})),n.d(c,"WARNING",(function(){return K}));var o={};n.r(o),n.d(o,"registerSocket",(function(){return Q})),n.d(o,"exit",(function(){return ee})),n.d(o,"keepAlive",(function(){return te})),n.d(o,"readProjectFiles",(function(){return ne})),n.d(o,"createFile",(function(){return ae})),n.d(o,"readFile",(function(){return ie})),n.d(o,"updateFile",(function(){return re})),n.d(o,"deleteFile",(function(){return ce})),n.d(o,"createDirectory",(function(){return oe})),n.d(o,"deleteDirectory",(function(){return le}));var l=n(0),s=n.n(l),u=n(11),d=n.n(u),h=n(8),f=n(3),p=n(2),m=n(1),v={},E=function(){function e(){Object(f.a)(this,e),this.loading=!1,this.openedFiles=[],this.activeFilePath="",this.previousFilePaths=[]}return Object(p.a)(e,[{key:"isLoading",value:function(e){this.loading=Boolean(e)}},{key:"selectFile",value:function(e){this.activeFilePath&&this.previousFilePaths.push(this.activeFilePath),this.activeFilePath=e}},{key:"addToBuffer",value:function(e){var t=this.openedFiles.length;this.openedFiles.push(e),v[e.path]=t}},{key:"close",value:function(e){this.previousFilePaths=this.previousFilePaths.filter((function(t){return t!==e})),this.activeFilePath===e&&(this.activeFilePath="");var t,n=v[e];this.openedFiles.splice(n,1),delete v[e],t=this.openedFiles,v=t.reduce((function(e,t,n){return e[t.path]=n,e}),{})}},{key:"exists",value:function(e){return!isNaN(v[e])}},{key:"lastOpenedFile",value:function(){return this.previousFilePaths.pop()}},{key:"updateCode",value:function(e,t){var n=v[e];this.openedFiles[n].content=t}},{key:"activeFile",get:function(){var e=v[this.activeFilePath];return this.openedFiles[e]}},{key:"nextFile",get:function(){var e=(v[this.activeFilePath]+1)%this.openedFiles.length;return this.openedFiles[e]}},{key:"previousFile",get:function(){var e=v[this.activeFilePath]-1;return e>-1?this.openedFiles[e]:this.openedFiles[this.openedFiles.length-1]}},{key:"fileStates",get:function(){var e=this;return this.openedFiles.map((function(t){var n=t.name,a=t.path;return{name:n,path:a,active:a===e.activeFilePath}}))}}]),e}();Object(m.j)(E,{loading:m.o,openedFiles:m.o,activeFilePath:m.o,activeFile:m.g,nextFile:m.g,previousFile:m.g,fileStates:m.g,isLoading:m.f,selectFile:m.f,addToBuffer:m.f,close:m.f});var y=new E,g=function(){function e(){Object(f.a)(this,e),this.loading=!1,this.name="",this.path="",this.content={}}return Object(p.a)(e,[{key:"isLoading",value:function(e){this.loading=Boolean(e)}},{key:"load",value:function(e){var t=e.name,n=e.path,a=e.files,i=e.folders;this.name=t,this.path=n,this.content={files:a,folders:i}}},{key:"unload",value:function(){this.name="",this.path="",this.content={}}}]),e}();Object(m.j)(g,{loading:m.o,name:m.o,path:m.o,content:m.o,isLoading:m.f,load:m.f,unload:m.f});var w=new g,b=function(){function e(){Object(f.a)(this,e),this.width=-1,this.height=-1,this.updateDimensions()}return Object(p.a)(e,[{key:"isDesktop",get:function(){return this.width>768}},{key:"isTablet",get:function(){return this.width>544&&this.width<=768}},{key:"isMobile",get:function(){return this.width<=544}}]),Object(p.a)(e,[{key:"updateDimensions",value:function(){this.width=window.innerWidth,this.height=window.innerHeight}}]),e}();Object(m.j)(b,{width:m.o,height:m.o,isDesktop:m.g,isTablet:m.g,isMobile:m.g,updateDimensions:m.f});var k=new b,C=n(5),O=n(4),j=n(6),N="open",F="action/project/read",A="action/directory/create",D="action/directory/update",T="action/directory/delete",R="action/file/create",x="action/file/read",S="action/file/update",M="action/file/delete",P="action/control/exit",L="action/control/keepalive",I="action/control/notify",_=!1,H=window.location.protocol.includes("https")?"wss":"ws",z="".concat(H,"://").concat(window.location.host),B="fredericoamsouza@gmail.com",V="0001-01-01T00:00:00Z",W="notification/info",U="notification/error",Y="notification/success",K="notification/warning",Z=function(){return o.readProjectFiles()},J=function(e){y.addToBuffer(e),pe(e.path)},G=function(e){switch(e.type){case i.CREATE_DIRECTORY:return Z(e.payload);case i.CREATE_FILE:return n=e.payload,Z(),void J(n);case i.DELETE_DIRECTORY:return Z(e.payload);case i.DELETE_FILE:return function(e){y.close(e.path),Z()}(e.payload);case i.KEEP_ALIVE:return t=e.payload,void console.log("received keep alive",t);case i.READ_FILE:return J(e.payload);case i.READ_PROJECT:return function(e){return w.load(e)}(e.payload);case i.UPDATE_DIRECTORY:case i.UPDATE_FILE:return Z(e.payload);case i.NOTIFICATION:return function(e){var t=e.level,n=e.message;switch(t){case c.INFO:return console.info(n);case c.ERROR:return console.error(n);case c.SUCCESS:return console.log(n);case c.WARNING:return console.warn(n);default:return console.log(n)}}(e.payload);default:console.log("Unhandled incoming message type:",e)}var t,n},X=function(e){return function(t,n){!function e(t,n,a){var i={type:n,payload:a};if(t.readyState!==t.OPEN)return setTimeout((function(){return e(t,n,a)}),0);t.send(JSON.stringify(i))}(e,t,n)}},$=null,q=function(){return X($)},Q=function(e){return $=e},ee=function(){if(!$)return console.error("Connection not opened.");q()(i.EXIT_APP,null),window.open("","_self",""),window.close()},te=function(){if(!$)return console.error("Connection not opened.");q()(i.KEEP_ALIVE,null)},ne=function(){if(!$)return console.error("Connection not opened.");q()(i.READ_PROJECT,null)},ae=function(e){if(!$)return console.error("Connection not opened.");!function(e,t){e(i.CREATE_FILE,{file:t})}(q(),e)},ie=function(e){if(!$)return console.error("Connection not opened.");!function(e,t){e(i.READ_FILE,{file:t})}(q(),e)},re=function(e){if(!$)return console.error("Connection not opened.");!function(e,t){e(i.UPDATE_FILE,{file:t})}(q(),e)},ce=function(e){if(!$)return console.error("Connection not opened.");!function(e,t){e(i.DELETE_FILE,{file:t})}(q(),e)},oe=function(e){if(!$)return console.error("Connection not opened.");!function(e,t){e(i.CREATE_DIRECTORY,{directory:t})}(q(),e)},le=function(e){if(!$)return console.error("Connection not opened.");!function(e,t){e(i.DELETE_DIRECTORY,{directory:t})}(q(),e)},se=function(){return o.exit()},ue=null,de=null,he=function(e){return ue=e},fe=function(e){return de=e},pe=function(e){var t=y.activeFilePath;if(t){var n=me();y.updateCode(t,n)}y.selectFile(e);var a=y.activeFile,i=a.content,r=a.name;de.loadCode(i,ve(r.split(".").pop().toLowerCase()))},me=function(){return de.code},ve=function(e){return"js"===e?"javascript":"ts"===e?"typescript":"py"===e?"python":"md"===e?"markdown":"sh"===e?"shell":"yml"===e?"yaml":"rb"===e?"ruby":"h"===e?"cpp":e},Ee=n(15),ye=null,ge=function(e){ye=e},we=function(){return o.readProjectFiles()},be=function(e){var t=e.path;return y.exists(t)?pe(t):o.readFile({path:t})},ke=function(e){if(y.activeFilePath===e){var t=y.lastOpenedFile();t?pe(t):de.loadCode("","")}y.close(e)},Ce=function(){var e=y.activeFilePath;ke(e)},Oe=function(){return y.fileStates.map((function(e){var t=e.path;return ke(t)}))},je=function(e){return o.createFile({path:e})},Ne=function(e){return o.deleteFile(e)},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e||(e=w.path,y.activeFilePath&&((e=y.activeFilePath.split("/")).pop(),e=e.join("/"))),ye.createNewElement(e)},Ae=function(e){return o.createDirectory({path:e})},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e||(e=w.path,y.activeFilePath&&((e=y.activeFilePath.split("/")).pop(),e=e.join("/"))),ye.createNewElement(e,"newdirectory")},Te=function(e){return o.deleteDirectory(e)},Re=function(){var e=y.activeFile;if(e){var t=me();o.updateFile(Object(Ee.a)({},e,{content:t}))}},xe=function(){return y.openedFiles.map((function(e){return Re()}))},Se=function(){var e=y.nextFile;be(e)},Me=function(){var e=y.previousFile;be(e)},Pe=n(29),Le=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},e),s.a.createElement("path",{d:"M11 10.07H5.344L11 4.414v5.656z"}))},Ie=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},e),s.a.createElement("path",{d:"M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z"}))},_e=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"3 3 16 16"},e),s.a.createElement("path",{fill:"%23e8e8e8",d:"M12.597 11.042l2.803 2.803-1.556 1.555-2.802-2.802L8.239 15.4l-1.556-1.555 2.802-2.803-2.802-2.803 1.555-1.556 2.804 2.803 2.803-2.803L15.4 8.239z"}))},He=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"-1 0 16 16"},e),s.a.createElement("path",{fill:"#C5C5C5",d:"M14 1v9h-1V2H5V1h9zM3 3v1h8v8h1V3H3zm7 2v9H1V5h9zM8 7H3v5h5V7z"}),s.a.createElement("path",{fill:"#75BEFF",d:"M4 9h3v1H4z"}))},ze=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},e),s.a.createElement("path",{d:"M17.705 8H9s-2 .078-2 2v15s0 2 2 2l11-.004C22 27 22 25 22 25V13.509L17.705 8zM16 10v5h4v10H9V10h7zm5.509-6h-8.493S11 4.016 10.985 6H19v.454L22.931 11H24v12c2 0 2-1.995 2-1.995V9.648L21.509 4z"}))},Be=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),s.a.createElement("path",{d:"M20.75,2H4.35V30h23.3V9Zm4.6,25.7H6.75V4.3h11.7v7h7V27.7Z"}))},Ve=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),s.a.createElement("path",{d:"M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z",style:{fill:"#c09553"}}))},We=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),s.a.createElement("path",{d:"M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z",style:{fill:"#dcb67a"}}),s.a.createElement("polygon",{points:"25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7",style:{fill:"#dcb67a"}}))},Ue=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},e),s.a.createElement("polygon",{fill:"#C5C5C5",points:"12,3 8,3 8,4 11,4 11,7 14,7 14,14 6,14 6,8 5,8 5,15 15,15 15,6"}),s.a.createElement("path",{fill:"#89D185",d:"M7 3.018h-2v-2.018h-1.981v2.018h-2.019v1.982h2.019v2h1.981v-2h2v-1.982z"}))},Ye=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},e),s.a.createElement("path",{fill:"#C09553",d:"M14 4h-4.382l-1 2h-2.618v2h-3v6h12v-10h-1zm0 2h-3.882l.5-1h3.382v1z"}),s.a.createElement("polygon",{fill:"#89D185",points:"7,3.018 5,3.018 5,1 3.019,1 3.019,3.018 1,3.018 1,5 3.019,5 3.019,7 5,7 5,5 7,5"}))},Ke=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},e),s.a.createElement("path",{d:"M13.451 5.609l-.579-.939-1.068.812-.076.094c-.335.415-.927 1.341-1.124 2.876l-.021.165.033.163.071.345c0 1.654-1.346 3-3 3a2.98 2.98 0 0 1-2.107-.868 2.98 2.98 0 0 1-.873-2.111 3.004 3.004 0 0 1 2.351-2.929v2.926s2.528-2.087 2.984-2.461h.012L13.115 4.1 8.196 0H7.059v2.404A6.759 6.759 0 0 0 .938 9.125c0 1.809.707 3.508 1.986 4.782a6.707 6.707 0 0 0 4.784 1.988 6.758 6.758 0 0 0 6.75-6.75 6.741 6.741 0 0 0-1.007-3.536z",fill:"#2D2D30"}),s.a.createElement("path",{d:"M12.6 6.134l-.094.071c-.269.333-.746 1.096-.91 2.375.057.277.092.495.092.545 0 2.206-1.794 4-4 4a3.986 3.986 0 0 1-2.817-1.164 3.987 3.987 0 0 1-1.163-2.815c0-2.206 1.794-4 4-4l.351.025v1.85S9.685 5.679 9.69 5.682l1.869-1.577-3.5-2.917v2.218l-.371-.03a5.75 5.75 0 0 0-4.055 9.826 5.75 5.75 0 0 0 9.826-4.056 5.725 5.725 0 0 0-.859-3.012z",fill:"#C5C5C5"}))},Ze=function(e){return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},e),s.a.createElement("path",{d:"M19.23 4.095c-4.842 0-8.769 3.928-8.769 8.771 0 1.781.539 3.43 1.449 4.815 0 0-5.482 5.455-7.102 7.102-1.621 1.646 1.001 4.071 2.602 2.409 1.602-1.659 7.006-7.005 7.006-7.005a8.726 8.726 0 0 0 4.814 1.45 8.773 8.773 0 0 0 8.772-8.771c.001-4.844-3.927-8.771-8.772-8.771zm0 15.035a6.265 6.265 0 1 1 0-12.529 6.264 6.264 0 1 1 0 12.529z"}))},Je=function(e){var t=e.name,n=Object(Pe.a)(e,["name"]);switch(t){case"chevron-down":return s.a.createElement(Le,n);case"chevron-right":return s.a.createElement(Ie,n);case"close":return s.a.createElement(_e,n);case"collapse":return s.a.createElement(He,n);case"explorer":return s.a.createElement(ze,n);case"file":return s.a.createElement(Be,n);case"folder":return s.a.createElement(Ve,n);case"folder-open":return s.a.createElement(We,n);case"new-file":return s.a.createElement(Ue,n);case"new-folder":return s.a.createElement(Ye,n);case"refresh":return s.a.createElement(Ke,n);case"search":return s.a.createElement(Ze,n);default:return null}},Ge=(n(36),function(e){var t=e.name,n=e.path,a=e.active,i=e.onClick;return s.a.createElement("div",{className:"FileTab ".concat(a&&"active")},s.a.createElement("div",{className:"title",children:t,onClick:function(){return i({name:t,path:n})}}),s.a.createElement(Je,{name:"close",className:"icon",onClick:function(){return ke(n)}}))}),Xe=n(20),$e=n.n(Xe),qe=(n(65),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={value:"",language:"",theme:"dark",editor:null},n.editor=null,n.options={minimap:{enabled:!1},selectOnLineNumbers:!0,theme:"dark"},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"editorDidMount",value:function(e,t){this.editor=e}},{key:"loadCode",value:function(e,t){this.props.body;this.setState({value:e,language:t})}},{key:"updateDimensions",value:function(){var e=this.props.body,t=this.editor;null!=t&&t.layout(e)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"TextEditor ".concat(this.visible&&"visible"),height:"100%"},s.a.createElement($e.a,Object.assign({},this.state,{options:this.options,onChange:function(t){return e.setState({value:t})},editorDidMount:function(t,n){return e.editorDidMount(t,n)}})))}},{key:"visible",get:function(){return this.state.value&&this.state.language}},{key:"code",get:function(){return this.state.value}}]),t}(s.a.Component)),Qe=(n(66),n(27)),et=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={body:{width:0,height:0}},n.textEditor=s.a.createRef(),n.updateDimensions=Object(Qe.debounce)((function(){var e=n.refs.editor,t=e.clientHeight,a=e.clientWidth,i=t-36;n.setState({body:{width:a,height:i}}),null!=n.textEditor&&n.textEditor.updateDimensions()}),100),n.onClickTab=function(e){pe(e.path)},n.setRef=function(e){n.textEditor=e,fe(e)},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.updateDimensions(),window.addEventListener("resize",(function(){return e.updateDimensions()})),he(this)}},{key:"componentWillUnmount",value:function(){var e=this;he(null),window.removeEventListener("resize",(function(){return e.updateDimensions()}))}},{key:"renderOpenedFileTabs",value:function(){var e=this,t=this.props.fileBuffer;return 0===t.fileStates.length?null:s.a.createElement("div",{className:"editorTabs"},t.fileStates.map((function(t,n){return s.a.createElement(Ge,Object.assign({key:n},t,{onClick:e.onClickTab}))})))}},{key:"render",value:function(){return s.a.createElement("div",{className:"Editor",ref:"editor"},this.renderOpenedFileTabs(),s.a.createElement("div",{className:"editorView",style:this.style},s.a.createElement(qe,Object.assign({ref:this.setRef},this.state))))}},{key:"style",get:function(){var e=this.state.body;return{width:e.width,height:e.height}}}]),t}(s.a.Component),tt=Object(h.b)("fileBuffer")(Object(h.c)(et)),nt=n(12),at=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={collapsed:{fileMenu:!0}},n.collapseAll=function(){var e=n.state.collapsed;e=Object.keys(e).reduce((function(e,t){return Object(Ee.a)({},e,Object(nt.a)({},t,!0))}),{}),n.setState({collapsed:e})},n.toggle=function(e){return n.setState({collapsed:Object(nt.a)({},e,!n.state.collapsed[e])})},n.callAndClose=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return function(){n.collapseAll(),e()}},n.renderFileMenu=function(e){return s.a.createElement("div",{className:"menuItem"},s.a.createElement("span",{className:"title clickable",children:"File",onClick:function(){return n.toggle("fileMenu")}}),!e&&s.a.createElement("div",{className:"submenu"},s.a.createElement("div",{className:"clickable item",children:"New file",onClick:n.callAndClose(Fe)}),s.a.createElement("div",{className:"separator"}),s.a.createElement("div",{className:"clickable item",children:"Save",onClick:n.callAndClose(Re)}),s.a.createElement("div",{className:"clickable item",children:"Save all",onClick:n.callAndClose(xe)}),s.a.createElement("div",{className:"separator"}),s.a.createElement("div",{className:"clickable item",children:"Close file",onClick:n.callAndClose(Ce)}),s.a.createElement("div",{className:"clickable item",children:"Close all",onClick:n.callAndClose(Oe)}),s.a.createElement("div",{className:"clickable item",children:"Exit",onClick:n.callAndClose(se)})))},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){27===(t.keyCode||t.which)&&e.collapseAll()}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",(function(){}))}},{key:"render",value:function(){var e=this.props.className;return s.a.createElement("div",{className:"Menu ".concat(e||"")},this.renderFileMenu(this.state.collapsed.fileMenu),!this.menuCollapsed&&s.a.createElement("div",{className:"clickableOverlay",onClick:this.collapseAll}))}},{key:"menuCollapsed",get:function(){var e=this;return Object.keys(this.state.collapsed).map((function(t){return e.state.collapsed[t]})).reduce((function(e,t){return e||t}),!1)}}]),t}(s.a.Component),it=(n(68),function(e){return s.a.createElement("div",{className:"Header"},s.a.createElement("div",{className:"left side"},s.a.createElement("span",{className:"name item"},"wcode"),s.a.createElement(at,{className:"item"})),s.a.createElement("div",{className:"right side"}))}),rt=(n(69),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={active:null},n.isActive=function(e){return n.state.active===e?"active":""},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.selectOption("explorer")}},{key:"selectOption",value:function(e){this.props.onToolSelect(e),this.setState({active:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Toolbar"},s.a.createElement("div",{className:"top"},s.a.createElement(Je,{name:"explorer",className:"icon ".concat(this.isActive("explorer")),onClick:function(){e.isActive("explorer")?e.selectOption(null):e.selectOption("explorer"),ue.updateDimensions()}})),s.a.createElement("div",{className:"bottom"}))}}]),t}(s.a.Component)),ct=n(14),ot=(n(18),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={collapsed:!0,x:0,y:0},n.toggle=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n.setState({collapsed:!n.state.collapsed,x:e,y:t})},n.callAndClose=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return function(){n.toggle(),e()}},n.onClickOpen=function(){return be(n.props)},n.onClickDelete=function(){var e=n.props.path.split("/").pop();window.confirm("Are you sure you want to delete '".concat(e,"'?"))&&Ne(n.props)},n.renderMenu=function(e){return!e&&s.a.createElement("div",{className:"menuItem",style:{left:n.state.x,top:n.state.y}},s.a.createElement("div",{className:"clickable item",children:"Open",onClick:n.callAndClose(n.onClickOpen)}),s.a.createElement("div",{className:"clickable item",children:"Delete",onClick:n.callAndClose(n.onClickDelete)}))},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){27===(t.keyCode||t.which)&&e.setState({collapsed:!0})}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",(function(){}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"ArchiveMenu"},this.renderMenu(this.state.collapsed),!this.state.collapsed&&s.a.createElement("div",{className:"clickableOverlay",onClick:this.toggle}))}}]),t}(s.a.Component)),lt=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",path:"",type:"",abdicate:!1},n.onKeyPress=function(e){var t=e.keyCode||e.which;if(27===t)return n.setState({abdicate:!0});if(13===t){var a="".concat(n.props.path,"/").concat(e.target.value);return"newfile"===n.state.type?je(a):Ae(a)}},n.onBlur=function(e){if(!e.target.value)return n.setState({abdicate:!0});var t="".concat(n.props.path,"/").concat(e.target.value);return"newfile"===n.state.type?je(t):Ae(t)},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.name,a=t.path,i=t.type;"newfile"===i||"newdirectory"===i?this.setState({type:i},(function(){return e.refs.newFile&&e.refs.newFile.focus()})):this.setState({name:n,path:a,type:i})}},{key:"onRightClick",value:function(e){e.preventDefault(),this.refs.menu.toggle(e.clientX,e.clientY)}},{key:"renderEdit",value:function(){return this.state.abdicate?null:s.a.createElement("div",{className:"ItemFile"},s.a.createElement("div",{className:"node"},s.a.createElement("input",{ref:"newFile",type:"text",onKeyDown:this.onKeyPress,onBlur:this.onBlur})))}},{key:"renderReadOnly",value:function(){var e=this,t=this.props,n=t.name,a=t.path,i=t.onClick,r=t.type;return s.a.createElement("div",{className:"ItemFile"},s.a.createElement("div",{className:"node ".concat(this.selected&&"active"),onClick:function(){return i({name:n,path:a,type:r})},onContextMenu:function(t){return e.onRightClick(t)}},s.a.createElement(Je,{name:"file",className:"icon"}),s.a.createElement("div",{className:"title"},n)),s.a.createElement(ot,Object.assign({ref:"menu"},this.props)))}},{key:"render",value:function(){var e=this.state.type;return e&&"newfile"!==e&&"newdirectory"!==e?this.renderReadOnly():this.renderEdit()}},{key:"selected",get:function(){var e=this.props,t=e.fileBuffer,n=e.path;return t.activeFilePath===n}}]),t}(s.a.Component),st=Object(h.b)("fileBuffer")(Object(h.c)(lt)),ut=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={collapsed:!0,x:0,y:0},n.toggle=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n.setState({collapsed:!n.state.collapsed,x:e,y:t})},n.callAndClose=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return function(){n.toggle(),e()}},n.onClickNewFile=function(){return Fe(n.props.path)},n.onClickNewDirectory=function(){return De(n.props.path)},n.onClickDelete=function(){var e=n.props.path.split("/").pop();window.confirm("Are you sure you want to delete '".concat(e,"' and its contents?"))&&Te(n.props)},n.renderMenu=function(e){return!e&&s.a.createElement("div",{className:"menuItem",style:{left:n.state.x,top:n.state.y}},s.a.createElement("div",{className:"clickable item",children:"New file",onClick:n.callAndClose(n.onClickNewFile)}),s.a.createElement("div",{className:"clickable item",children:"New directory",onClick:n.callAndClose(n.onClickNewDirectory)}),s.a.createElement("div",{className:"clickable item",children:"Delete",onClick:n.callAndClose(n.onClickDelete)}))},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){27===(t.keyCode||t.which)&&e.setState({collapsed:!0})}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",(function(){}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"ArchiveMenu",onKeyDown:this.onKeyDown},this.renderMenu(this.state.collapsed),!this.state.collapsed&&s.a.createElement("div",{className:"clickableOverlay",onClick:this.toggle}))}}]),t}(s.a.Component),dt=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={collapsed:!0,files:[],folders:[]},n.renderFile=function(e){return s.a.createElement(st,Object.assign({},e,{key:"".concat(e.path,"-").concat(Math.random()),onClick:n.props.onClick}))},n.renderFolder=function(e){return s.a.createElement(t,Object.assign({},e,{key:"".concat(e.path,"-").concat(Math.random()),onClick:n.props.onClick,onRenderChild:n.props.onRenderChild,ref:function(t){return n.props.onRenderChild(e.path,t)}}))},n.renderSubNodes=function(e,t){return s.a.createElement("div",{className:"subnodes",children:[].concat(t.map(n.renderFolder)).concat(e.map(n.renderFile))})},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.files,n=e.folders;this.setState({files:t,folders:n})}},{key:"componentWillReceiveProps",value:function(e){var t=e.files,n=e.folders;this.setState({files:t,folders:n})}},{key:"onClick",value:function(){var e=this.props,t=e.name,n=e.path,a=e.onClick,i=!this.state.collapsed;this.setState({collapsed:i},(function(){return a({name:t,path:n,collapsed:i})}))}},{key:"onRightClick",value:function(e){e.preventDefault(),this.refs.menu.toggle(e.clientX,e.clientY)}},{key:"createElement",value:function(e){var t=this.props.path,n=this.state.files;n.push({type:e,path:t}),this.setState({files:n})}},{key:"render",value:function(){var e=this,t=this.state,n=t.collapsed,a=t.files,i=t.folders;return s.a.createElement("div",{className:"ItemFolder"},s.a.createElement("div",{className:"node",onClick:function(){return e.onClick()},onContextMenu:function(t){return e.onRightClick(t)}},s.a.createElement("div",{className:"title"},s.a.createElement(Je,{name:this.chevronName,className:"icon"}),s.a.createElement(Je,{name:this.folderName,className:"icon"}),this.props.name)),s.a.createElement(ut,Object.assign({ref:"menu"},this.props)),!n&&this.renderSubNodes(a,i))}},{key:"chevronName",get:function(){return this.state.collapsed?"chevron-right":"chevron-down"}},{key:"folderName",get:function(){return this.state.collapsed?"folder":"folder-open"}}]),t}(s.a.Component),ht=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={collapsed:!1,files:[],folders:[]},n.childFolders={},n.limitText=20,n.createNewElement=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"newfile",a=n.props.path===e?Object(ct.a)(n):n.childFolders[e];a.createElement(t)},n.onRenderChild=function(e,t){n.childFolders[e]=t},n.renderFile=function(e){return s.a.createElement(st,Object.assign({},e,{key:"".concat(e.path,"-").concat(Math.random()),onClick:n.props.onClickNode}))},n.renderFolder=function(e){return s.a.createElement(dt,Object.assign({},e,{key:"".concat(e.path,"-").concat(Math.random()),onClick:n.props.onClickNode,onRenderChild:n.onRenderChild,ref:function(t){return n.onRenderChild(e.path,t)}}))},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.content,t=e.files,n=e.folders;this.setState({files:t,folders:n})}},{key:"componentWillReceiveProps",value:function(e){var t=e.content,n=t.files,a=t.folders;this.setState({files:n,folders:a})}},{key:"collapseAll",value:function(){var e=this;this.setState({collapsed:!0},(function(){return e.setState({collapsed:!1})}))}},{key:"createElement",value:function(e){var t=this.props.path,n=this.state.files;n.push({type:e,path:t}),this.setState({files:n})}},{key:"renderFileTree",value:function(e){var t=this.state,n=t.files,a=t.folders;return s.a.createElement("div",{className:"rootContent subnodes no-padding ".concat(e&&"visible")},[].concat(a.map(this.renderFolder)).concat(n.map(this.renderFile)))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"FileTree"},s.a.createElement("div",{className:"rootTitle title"},s.a.createElement("div",{className:"left column",onClick:function(){return e.setState({collapsed:!e.state.collapsed})}},s.a.createElement(Je,{name:this.iconName,className:"icon"}),this.projectName),s.a.createElement("div",{className:"right column"},s.a.createElement(Je,{name:"new-file",className:"icon",onClick:function(){return Fe()}}),s.a.createElement(Je,{name:"new-folder",className:"icon",onClick:function(){return De()}}),s.a.createElement(Je,{name:"refresh",className:"icon",onClick:function(){return we()}}),s.a.createElement(Je,{name:"collapse",className:"icon",onClick:function(){return e.collapseAll()}}))),this.renderFileTree(!this.state.collapsed))}},{key:"iconName",get:function(){return this.state.collapsed?"chevron-right":"chevron-down"}},{key:"projectName",get:function(){var e=this.props.title;return e.length>this.limitText?"".concat(e.slice(0,this.limitText),"..."):e}}]),t}(s.a.Component),ft=(n(70),function(e){function t(){return Object(f.a)(this,t),Object(C.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){we()}},{key:"onClickNode",value:function(e){e.type&&be(e)}},{key:"renderFileTree",value:function(){var e=this,t=this.props.project;return t.loading||!t.name?null:s.a.createElement(ht,{path:t.path,title:t.name,content:t.content,ref:ge,onClickNode:function(t){return e.onClickNode(t)}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Explorer"},s.a.createElement("div",{className:"title"},s.a.createElement("span",null,"Explorer")),this.renderFileTree())}}]),t}(s.a.Component)),pt=Object(h.b)("project")(Object(h.c)(ft)),mt=(n(71),function(e){function t(){return Object(f.a)(this,t),Object(C.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Search"},s.a.createElement("div",{className:"title"},s.a.createElement("span",null,"Search")))}}]),t}(s.a.Component)),vt=(n(72),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(C.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).state={selectedTool:null},n}return Object(j.a)(t,e),Object(p.a)(t,[{key:"renderContext",value:function(){switch(this.state.selectedTool){case"explorer":return s.a.createElement("div",{className:"container"},s.a.createElement(pt,null));case"search":return s.a.createElement("div",{className:"container"},s.a.createElement(mt,null));default:return null}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",Object.assign({className:"Sidebar"},this.props),s.a.createElement(rt,{onToolSelect:function(t){return e.setState({selectedTool:t})}}),this.renderContext())}}]),t}(s.a.Component)),Et=(n(73),function(e){return s.a.createElement("div",{className:"StatusBar"},s.a.createElement("div",{className:"left"}),s.a.createElement("div",{className:"right"},s.a.createElement("a",{href:"https://github.com/fmsouza/monaco-web-ide",target:"_blank",rel:"noopener noreferrer"},"Github")))}),yt=(n(74),function(e){function t(){return Object(f.a)(this,t),Object(C.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(it,null),s.a.createElement("div",{className:"body",style:this.style},s.a.createElement(vt,null),s.a.createElement(tt,null)),s.a.createElement(Et,null))}},{key:"style",get:function(){var e=this.props.view;return{width:e.width,height:e.height-44}}}]),t}(s.a.Component)),gt=Object(h.b)("view")(Object(h.c)(yt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var wt=n(28),bt=n.n(wt),kt=function(e,t){return bt.a.on(e,(function(e){return e.preventDefault()||t()}))};window.addEventListener("resize",(function(){return k.updateDimensions()})),kt(["ctrl + s","command + s"],Re),kt(["ctrl + w"],Ce),kt(["alt + right"],Se),kt(["alt + left"],Me),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),function(){var e=new WebSocket(r.API_URL);Q(e),e.onopen=function(e){return te()},e.onmessage=function(e){return G(JSON.parse(e.data))},e.onerror=console.error}();d.a.render(s.a.createElement((function(){return s.a.createElement(h.a,a,s.a.createElement(gt,null))}),null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0dc1caf6.chunk.js.map