(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(16),c=a.n(r),m=a(17),o=a(7),i=a(2),u=a(5),s=a(1),E=a(3),p=a(4),d=[{path:"/",component:function(){return n.a.createElement(o.r,null,n.a.createElement(o.q,null,n.a.createElement(o.n,null,n.a.createElement(o.g,{iconIos:"f7:menu",iconMd:"material:menu",panelOpen:"left"})),n.a.createElement(o.p,null,"My App"),n.a.createElement(o.o,null,n.a.createElement(o.g,{iconIos:"f7:menu",iconMd:"material:menu",panelOpen:"right"}))),n.a.createElement(o.y,{bottom:!0},n.a.createElement(o.g,null,"Left Link"),n.a.createElement(o.g,null,"Right Link")),n.a.createElement(o.b,{strong:!0},n.a.createElement("p",null,"Here is your blank Framework7 app. Let's see what we have here.")),n.a.createElement(o.d,null,"Navigation"),n.a.createElement(o.h,null,n.a.createElement(o.k,{link:"/about/",title:"About"}),n.a.createElement(o.k,{link:"/form/",title:"Form"})),n.a.createElement(o.d,null,"Modals"),n.a.createElement(o.b,{strong:!0},n.a.createElement(o.v,null,n.a.createElement(o.f,{width:"50"},n.a.createElement(o.e,{fill:!0,raised:!0,popupOpen:"#popup"},"Popup")),n.a.createElement(o.f,{width:"50"},n.a.createElement(o.e,{fill:!0,raised:!0,loginScreenOpen:"#login-screen"},"Login Screen")))),n.a.createElement(o.d,null,"Panels"),n.a.createElement(o.b,{strong:!0},n.a.createElement(o.v,null,n.a.createElement(o.f,{width:"50"},n.a.createElement(o.e,{fill:!0,raised:!0,panelOpen:"left"},"Left Panel")),n.a.createElement(o.f,{width:"50"},n.a.createElement(o.e,{fill:!0,raised:!0,panelOpen:"right"},"Right Panel")))),n.a.createElement(o.h,null,n.a.createElement(o.k,{link:"/dynamic-route/blog/45/post/125/?foo=bar#about",title:"Dynamic Route"}),n.a.createElement(o.k,{link:"/load-something-that-doesnt-exist/",title:"Default Route (404)"})))}},{path:"/panel-left/",component:function(){return n.a.createElement(o.r,null,n.a.createElement(o.q,{title:"Left Panel"}),n.a.createElement(o.b,{strong:!0},n.a.createElement("p",null,"Left panel content goes here")),n.a.createElement(o.d,null,"Load page in panel"),n.a.createElement(o.h,null,n.a.createElement(o.k,{link:"/about/",title:"About"}),n.a.createElement(o.k,{link:"/form/",title:"Form"})),n.a.createElement(o.d,null,"Load page in main view"),n.a.createElement(o.h,null,n.a.createElement(o.k,{link:"/about/",title:"About",view:"#main-view",panelClose:!0}),n.a.createElement(o.k,{link:"/form/",title:"Form",view:"#main-view",panelClose:!0})))}},{path:"/panel-right/",component:function(){return n.a.createElement(o.r,null,n.a.createElement(o.q,{title:"Right Panel"}),n.a.createElement(o.b,{strong:!0},n.a.createElement("p",null,"Right panel content goes here")),n.a.createElement(o.d,null,"Load page in panel"),n.a.createElement(o.h,null,n.a.createElement(o.k,{link:"/about/",title:"About"}),n.a.createElement(o.k,{link:"/form/",title:"Form"})),n.a.createElement(o.d,null,"Load page in main view"),n.a.createElement(o.h,null,n.a.createElement(o.k,{link:"/about/",title:"About",view:"#main-view",panelClose:!0}),n.a.createElement(o.k,{link:"/form/",title:"Form",view:"#main-view",panelClose:!0})))}},{path:"/about/",component:function(){return n.a.createElement(o.r,null,n.a.createElement(o.q,{title:"About",backLink:"Back"}),n.a.createElement(o.d,null,"About My App"),n.a.createElement(o.b,{strong:!0},n.a.createElement("p",null,"Here is About page!"),n.a.createElement("p",null,"You can go ",n.a.createElement(o.g,{back:!0},"back"),"."),n.a.createElement("p",null,"Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst."),n.a.createElement("p",null,"Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.")))}},{path:"/form/",component:function(){return n.a.createElement(o.r,null,n.a.createElement(o.q,{title:"Form",backLink:"Back"}),n.a.createElement(o.d,null,"Form Example"),n.a.createElement(o.h,{form:!0},n.a.createElement(o.j,{label:"Name",type:"text",placeholder:"Name"}),n.a.createElement(o.j,{label:"E-mail",type:"email",placeholder:"E-mail"}),n.a.createElement(o.j,{label:"URL",type:"url",placeholder:"URL"}),n.a.createElement(o.j,{label:"Password",type:"password",placeholder:"Password"}),n.a.createElement(o.j,{label:"Phone",type:"tel",placeholder:"Phone"}),n.a.createElement(o.j,{label:"Gender",type:"select",defaultValue:"Male"},n.a.createElement("option",null,"Male"),n.a.createElement("option",null,"Female")),n.a.createElement(o.j,{label:"Birth date",type:"date",placeholder:"Birth date",value:"2014-04-30"}),n.a.createElement(o.k,{title:"Toggle"},n.a.createElement(o.x,{slot:"after"})),n.a.createElement(o.j,{label:"Slider",input:!1},n.a.createElement(o.u,{label:!0,slot:"input",min:0,max:100,value:50,step:1})),n.a.createElement(o.j,{label:"Textarea",type:"textarea",placeholder:"Bio"}),n.a.createElement(o.j,{label:"Resizable",type:"textarea",placeholder:"Bio",resizable:!0})),n.a.createElement(o.d,null,"Checkbox group"),n.a.createElement(o.h,{form:!0},Array.from(Array(3).keys()).map(function(e){return n.a.createElement(o.k,{key:e,checkbox:!0,name:"my-checkbox",value:e+1,title:"Checkbox ".concat(e+1)})})),n.a.createElement(o.d,null,"Radio buttons group"),n.a.createElement(o.h,{form:!0},Array.from(Array(3).keys()).map(function(e){return n.a.createElement(o.k,{key:e,radio:!0,name:"my-radio",defaultChecked:0===e,value:e+1,title:"Radio ".concat(e+1)})})),n.a.createElement(o.d,null,"Buttons"),n.a.createElement(o.b,{strong:!0},n.a.createElement(o.v,{tag:"p"},n.a.createElement(o.e,{className:"col"},"Button"),n.a.createElement(o.e,{className:"col",fill:!0},"Fill")),n.a.createElement(o.v,{tag:"p"},n.a.createElement(o.e,{className:"col",raised:!0},"Raised"),n.a.createElement(o.e,{className:"col",raised:!0,fill:!0},"Raised Fill")),n.a.createElement(o.v,{tag:"p"},n.a.createElement(o.e,{className:"col",round:!0},"Round"),n.a.createElement(o.e,{className:"col",round:!0,fill:!0},"Round Fill")),n.a.createElement(o.v,{tag:"p"},n.a.createElement(o.e,{className:"col",outline:!0},"Outline"),n.a.createElement(o.e,{className:"col",round:!0,outline:!0},"Outline Round")),n.a.createElement(o.v,{tag:"p"},n.a.createElement(o.e,{className:"col",small:!0,outline:!0},"Small"),n.a.createElement(o.e,{className:"col",small:!0,round:!0,outline:!0},"Small Round")),n.a.createElement(o.v,{tag:"p"},n.a.createElement(o.e,{className:"col",small:!0,fill:!0},"Small"),n.a.createElement(o.e,{className:"col",small:!0,round:!0,fill:!0},"Small Round")),n.a.createElement(o.v,{tag:"p"},n.a.createElement(o.e,{className:"col",large:!0,raised:!0},"Large"),n.a.createElement(o.e,{className:"col",large:!0,fill:!0,raised:!0},"Large Fill")),n.a.createElement(o.v,{tag:"p"},n.a.createElement(o.e,{className:"col",large:!0,fill:!0,raised:!0,color:"red"},"Large Red"),n.a.createElement(o.e,{className:"col",large:!0,fill:!0,raised:!0,color:"green"},"Large Green"))))}},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(o.r,null,n.a.createElement(o.q,{title:"Dynamic Route",backLink:"Back"}),n.a.createElement(o.b,{strong:!0},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("b",null,"Url:")," ",this.$f7route.url),n.a.createElement("li",null,n.a.createElement("b",null,"Path:")," ",this.$f7route.path),n.a.createElement("li",null,n.a.createElement("b",null,"Hash:")," ",this.$f7route.hash),n.a.createElement("li",null,n.a.createElement("b",null,"Params:"),n.a.createElement("ul",null,Object.keys(this.$f7route.params).map(function(t){return n.a.createElement("li",{key:t},n.a.createElement("b",null,t,":")," ",e.$f7route.params[t])}))),n.a.createElement("li",null,n.a.createElement("b",null,"Query:"),n.a.createElement("ul",null,Object.keys(this.$f7route.query).map(function(t){return n.a.createElement("li",{key:t},n.a.createElement("b",null,t,":")," ",e.$f7route.query[t])}))),n.a.createElement("li",null,n.a.createElement("b",null,"Route:")," ",JSON.stringify(this.$f7route.route)))),n.a.createElement(o.b,{strong:!0},n.a.createElement(o.g,{onClick:function(){return e.$f7router.back()}},"Go back via Router API")))}}]),t}(l.Component)},{path:"(.*)",component:function(){return n.a.createElement(o.r,null,n.a.createElement(o.q,{title:"Not found",backLink:"Back"}),n.a.createElement(o.b,{strong:!0},n.a.createElement("p",null,"Sorry"),n.a.createElement("p",null,"Requested content not found.")))}}];a(25),a(27),a(29);m.a.use(o.A),c.a.render(n.a.createElement(function(e){var t={id:"io.framework7.testapp",name:"Framework7",theme:"auto",routes:d};return n.a.createElement(o.a,{params:t},n.a.createElement(o.w,null),n.a.createElement(o.s,{left:!0,cover:!0,themeDark:!0},n.a.createElement(o.z,{url:"/panel-left/"})),n.a.createElement(o.s,{right:!0,reveal:!0,themeDark:!0},n.a.createElement(o.z,{url:"/panel-right/"})),n.a.createElement(o.z,{id:"main-view",url:"/",main:!0,className:"safe-areas"}),n.a.createElement(o.t,{id:"popup"},n.a.createElement(o.z,null,n.a.createElement(o.r,null,n.a.createElement(o.q,{title:"Popup"},n.a.createElement(o.o,null,n.a.createElement(o.g,{popupClose:!0},"Close"))),n.a.createElement(o.b,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.")))),n.a.createElement(o.l,{id:"login-screen"},n.a.createElement(o.z,null,n.a.createElement(o.r,{loginScreen:!0},n.a.createElement(o.m,null,"Login"),n.a.createElement(o.h,{form:!0},n.a.createElement(o.j,{label:"Username",name:"username",placeholder:"Username",type:"text"}),n.a.createElement(o.j,{label:"Password",name:"password",placeholder:"Password",type:"password"})),n.a.createElement(o.h,null,n.a.createElement(o.i,{title:"Sign In",loginScreenClose:!0}),n.a.createElement(o.c,null,n.a.createElement("p",null,"Click Sign In to close Login Screen")))))))}),document.getElementById("app"))}},[[18,2,1]]]);
//# sourceMappingURL=main.b0ccc8c6.chunk.js.map