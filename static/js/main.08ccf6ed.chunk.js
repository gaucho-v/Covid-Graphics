(this["webpackJsonpvirus-2019"]=this["webpackJsonpvirus-2019"]||[]).push([[0],{279:function(e,n,t){e.exports=t(541)},284:function(e,n,t){},464:function(e,n,t){},541:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(7),i=t.n(o),c=t(19),l=t(31),u=t(32),s=t(36),d=t(35),f=t(9),m=t(10),p=(t(284),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("h2",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."),r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),b=t(547);function h(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 5px;\n"]);return h=function(){return e},e}function v(){var e=Object(f.a)(["\n    display: flex;\n    border: 1px solid #b8b8b8;\n    z-index: -1;\n     @media (max-width: 900px) {\n     border: 1px solid #b8b8b8;\n     border-bottom: none;\n    }\n"]);return v=function(){return e},e}var x=m.b.div(v()),E=m.b.div(h()),g=t(152),j=t(24),y={confirmed:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043d\u044b\u0445 \u0434\u0438\u0430\u0433\u043d\u043e\u0437\u043e\u0432",cured:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u0438",deaths:"\u0421\u043a\u043e\u043d\u0447\u0430\u043b\u0438\u0441\u044c"},O=function(e,n){return[e,y[n]||n]},w=function(e){var n=e.location,t=e.isMobile,a=n.statistics.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{date:e.date.slice(5,10)})})),o=t?window.innerWidth-40:450;return r.a.createElement(j.c,{width:o,height:240,data:a},r.a.createElement(j.e,{dataKey:"date"}),r.a.createElement(j.f,{width:55}),r.a.createElement(j.a,{strokeDasharray:"0.5 1"}),r.a.createElement(j.d,{formatter:O,wrapperStyle:{zIndex:222}}),r.a.createElement(j.b,{type:"monotone",dataKey:"confirmed",stroke:"red",r:1}),r.a.createElement(j.b,{type:"monotone",dataKey:"cured",stroke:"#82ca9d",r:1}),r.a.createElement(j.b,{type:"monotone",dataKey:"deaths",stroke:"black",r:1}))};function L(){var e=Object(f.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  font-size: 22px;\n"]);return L=function(){return e},e}function k(){var e=Object(f.a)(["\n  text-align: center;\n  font-size: larger;\n  text-transform: capitalize;\n"]);return k=function(){return e},e}function C(){var e=Object(f.a)(["\n    position: absolute;\n    display: flex;\n    top: 45px;\n    left: 68px;\n    @media (max-width: 900px) {\n      position: initial;\n      justify-content: center;\n    }\n"]);return C=function(){return e},e}function M(){var e=Object(f.a)(["\n  position: relative;\n  margin: 2px;\n  box-shadow: 2px 2px 5px 0 #0000005c;\n  width: ","\n"]);return M=function(){return e},e}var S=m.b.div(M(),(function(e){return e.isMobile?"100%":"48%"})),I=m.b.div(C()),D=m.b.h3(k()),z=m.b.span(L()),R=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,n=e.location,t=e.title,a=e.onRemoveChart,o=e.isMobile;return r.a.createElement(S,{isMobile:o},r.a.createElement(z,{onClick:function(){return a(t)}},r.a.createElement(b.a,null)),r.a.createElement(D,null,t),r.a.createElement(w,{location:n,isMobile:o}),r.a.createElement(I,null,function(e){var n=e.statistics,t=n[n.length-1],a=n[n.length-2],o=n[n.length-3],i=a.date.slice(5,10),c=t.confirmed>a.confirmed,l={confirmed:"\u0437\u0430\u0431\u043e\u043b\u0435\u043b\u0438",cured:"\u0432\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u0438",deaths:"\u0443\u043c\u0435\u0440\u043b\u0438"};return c?r.a.createElement("div",null,r.a.createElement(x,null,Object.keys(l).map((function(e,n){return r.a.createElement(E,{key:"".concat(n,".").concat(e)},r.a.createElement("span",null,r.a.createElement("b",{style:{fontSize:"larger"}},t[Object.keys(l)[n]])),r.a.createElement("span",null,Object.values(l)[n]),"cured"===e?r.a.createElement("span",{style:{color:"#ff1a1a"}},"+",t[e]-a[e]):r.a.createElement("span",{style:{color:"green"}},"+",t[e]-a[e]))})))):r.a.createElement("div",null,r.a.createElement("span",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430: ",r.a.createElement("b",null,i)),r.a.createElement(x,null,Object.keys(l).map((function(e,n){return r.a.createElement(E,{key:"".concat(n,".").concat(e)},r.a.createElement("span",null,r.a.createElement("b",{style:{fontSize:"larger"}},a[Object.keys(l)[n]])),r.a.createElement("span",null,Object.values(l)[n]),"cured"===e?r.a.createElement("span",{style:{color:"#ff1a1a"}},"+",a[e]-o[e]):r.a.createElement("span",{style:{color:"green"}},"+",a[e]-o[e]))}))))}(n)))}}]),t}(a.PureComponent);function P(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return P=function(){return e},e}var A=m.b.div(P()),K=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,n=e.data,t=e.selected,a=e.onRemoveChart,o=e.isMobile;return r.a.createElement(A,{isMobile:o},t.map((function(e,t){var i=function(e,n){var t=n.toLowerCase().trim();return e.find((function(e){var n=e.en,a=e.ru;return n.toLowerCase()===t||a.toLowerCase()===t}))}(n,e);return i?r.a.createElement(R,{key:t+e,location:i,title:e,onRemoveChart:a,isMobile:o}):null})))}}]),t}(a.PureComponent),B=["\u0440\u043e\u0441\u0441\u0438\u044f","\u043c\u043e\u0441\u043a\u0432\u0430","\u0441\u0430\u043d\u043a\u0442-\u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0432\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u0431\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u043a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","\u0443\u043a\u0440\u0430\u0438\u043d\u0430","\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u044c","\u0441\u0448\u0430"],J=t(248),N=t(545),W=t(546),q=t(150);t(464);function F(){var e=Object(f.a)(["\n  margin: 0 11px;\n"]);return F=function(){return e},e}function G(){var e=Object(f.a)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]);return G=function(){return e},e}function U(){var e=Object(f.a)(["\n    display: flex;\n    flex: auto;\n    justify-content: space-between;\n    min-width: 0;\n    max-height: none;\n    padding: 6px 0;\n    :hover {\n      background-color: #eee;\n    }\n"]);return U=function(){return e},e}function Y(){var e=Object(f.a)(["\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    border-radius: 0 0 15px 15px;\n    box-shadow: 0 4px 6px 0 rgba(32,33,36,0.28);\n    padding-bottom: 4px;\n    overflow: hidden;\n"]);return Y=function(){return e},e}function H(){var e=Object(f.a)(["\n    position: absolute;\n    width: 100%;\n    text-align: left;\n    margin-top: 32px;\n    z-index: 989;\n    cursor: default;\n"]);return H=function(){return e},e}function Q(){var e=Object(f.a)(["\n  position: relative;\n  display: flex;\n  margin: 0 auto;\n  padding: 10px 0;\n  max-width: 720px;\n  @media (max-width: 900px) {\n      max-width: 100%;\n      margin: 0 3px;\n      padding: 5px 0;\n      margin-bottom: 10px;\n    }\n     \n"]);return Q=function(){return e},e}var T=m.b.div(Q()),V=m.b.div(H()),X=m.b.div(Y()),Z=m.b.div(U()),$=m.b.ul(G()),_=m.b.span(F());window.onscroll=function(){var e=document.getElementById("header");e&&(window.pageYOffset>30?e.classList.add("header-fixed"):e.classList.remove("header-fixed"))};var ee=function(e){var n=e.search,t=e.onChange,o=e.onAddPlace,i=e.filteredLocations,c=e.locationsData,l=e.isMobile,u=Object(a.useState)(!1),s=Object(J.a)(u,2),d=s[0],f=s[1],m=d?"15px 0 0 0":"15px 0px 0px 15px",p=d?"0 15px 0 0":"0px 15px 15px 0px";return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o()}},r.a.createElement(T,{id:"header"},r.a.createElement(N.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",style:{borderRadius:m},value:n,onChange:function(e){f(!0),""===e.target.value&&f(!1),t(e)},onBlur:function(e){return e}}),r.a.createElement(W.a,{title:"search"},r.a.createElement(q.a,{style:{borderRadius:p},type:"primary"},l?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e")),!!i.length&&r.a.createElement(V,null,r.a.createElement(X,null,r.a.createElement($,null,i.splice(0,5).map((function(e,n){return r.a.createElement("li",{key:e+n,onClick:function(){return o(e)}},r.a.createElement(Z,null,r.a.createElement(_,null,r.a.createElement("b",null,e)),r.a.createElement(_,null,function(e){return(c.find((function(n){return n.en===e}))||c.find((function(n){return n.ru===e}))).confirmed}(e)," \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0435\u043d\u043d\u044b\u0445 \u0434\u0438\u0430\u0433\u043d\u043e\u0437\u043e\u0432")))})))))))},ne=t(548),te=t(239),ae=t.n(te),re={getStats:function(){return ae.a.get("https://cors-anywhere.herokuapp.com/coronavirus-monitor.ru/jquery-lite-9.js?a=12").then((function(e){var n=e.data,t=n.substring(n.indexOf("{")),a=JSON.parse(t),r=a.cities,o=a.countries,i=a.russianSubjects;return[].concat(Object(c.a)(r.data.cities),Object(c.a)(o.data.countries),Object(c.a)(i.data.subjects))})).catch((function(e){return console.log(e),{}}))}},oe=t(240),ie=function(e){return function(n){Object(s.a)(a,n);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).checkIfIsMobile=function(){var e=window.innerWidth<900;n.setState({isMobile:e})},n.state={isMobile:!1},n.checkIfIsMobile=Object(oe.debounce)(n.checkIfIsMobile,1e3),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.checkIfIsMobile(),window.addEventListener("resize",this.checkIfIsMobile)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkIfIsMobile)}},{key:"render",value:function(){return r.a.createElement(e,{isMobile:this.state.isMobile})}}]),a}(a.Component)};function ce(){var e=Object(f.a)(["\n  margin: 0;\n  text-align: center;\n"]);return ce=function(){return e},e}function le(){var e=Object(f.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  border: 2px solid #eee;\n  border-radius: 7px;\n  background-color: white;\n  @media (max-width: 1024px) {\n        width: 100%;\n        border: none;\n        padding: 0;\n    }\n"]);return le=function(){return e},e}function ue(){var e=Object(f.a)(["\n  @import url(\"https://fonts.googleapis.com/css?family=Inconsolata&display=swap\");\n  body {\n    background-color: #eee;\n    font-family: 'Inconsolata', monospace;\n    height: auto;\n    @media (max-width: 1024px) {\n      background: none;\n    }\n  };\n"]);return ue=function(){return e},e}var se=Object(m.a)(ue()),de=m.b.div(le()),fe=m.b.h1(ce()),me=ie(function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={search:"",locationsData:{},filteredLocations:[],selectedLocations:localStorage.selectedLocations?localStorage.selectedLocations.split(","):Object(c.a)(B),isLoading:!1},e.saveLocations=function(){var n=e.state.selectedLocations;localStorage.setItem("selectedLocations",n)},e.filterLocation=function(n){var t=e.state.locationsData,a=n.toLowerCase().trim(),r=t.filter((function(e){return e.ru.slice(0,a.length).toLowerCase().includes(a)})),o=t.filter((function(e){return e.en.slice(0,a.length).toLowerCase().includes(a)}));return[].concat(Object(c.a)(r.map((function(e){return e.ru}))),Object(c.a)(o.map((function(e){return e.en}))))},e.handleSearchChange=function(n){var t=n.target.value,a=t?Object(c.a)(new Set(e.filterLocation(t))):[];e.setState({search:t,filteredLocations:a})},e.handleClickOutSearch=function(){e.setState({filteredLocations:[]})},e.handleAddPlace=function(n){var t=e.state,a=t.locationsData,r=t.selectedLocations,o=e.state.search;n&&(o=n);var i=o.toLowerCase().trim();r.map((function(e){return e.toLowerCase()})).includes(i)?ne.a.error("\u0413\u0440\u0430\u0444\u0438\u043a \u043f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u043c\u0435\u0441\u0442\u0443 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"):a.reduce((function(e,n){return e.push(n.en.toLowerCase()),e.push(n.ru.toLowerCase()),e}),[]).find((function(e){return e===i}))?(ne.a.info("\u041c\u0435\u0441\u0442\u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u0433\u0440\u0430\u0444\u0438\u043a \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),e.setState({selectedLocations:[i].concat(Object(c.a)(r)),search:"",filteredLocations:[]})):ne.a.error("\u041f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u043c\u0435\u0441\u0442\u0443 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430")},e.handleRemoveLocation=function(n){e.setState((function(e){return{selectedLocations:e.selectedLocations.filter((function(e){return e!==n}))}}))},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),re.getStats().then((function(n){e.setState({locationsData:n,isLoading:!1})})),window.onbeforeunload=this.saveLocations}},{key:"render",value:function(){var e=this.props.isMobile,n=this.state,t=n.search,o=n.locationsData,i=n.selectedLocations,c=n.isLoading,l=n.filteredLocations;return r.a.createElement(de,{onClick:this.handleClickOutSearch},r.a.createElement(se,null),c?r.a.createElement(p,null):r.a.createElement(a.Fragment,null,r.a.createElement(fe,null,"Covid Graphics"),r.a.createElement(ee,{search:t,onAddPlace:this.handleAddPlace,onChange:this.handleSearchChange,filteredLocations:l,locationsData:o,isMobile:e}),!!o.length&&r.a.createElement(K,{isMobile:e,data:o,selected:i,onRemoveChart:this.handleRemoveLocation})))}}]),t}(a.Component));t(540);i.a.render(r.a.createElement(me,null),document.getElementById("root"))}},[[279,1,2]]]);
//# sourceMappingURL=main.08ccf6ed.chunk.js.map