(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(3),c=a(5),r=a(4),i=a(6),s=a(0),m=a.n(s),u=(a(59),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={path:""},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return m.a.createElement("div",null)}}]),t}(m.a.Component));t.default=u},82:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(3),c=a(5),r=a(4),i=a(6),s=a(0),m=a.n(s),u=(a(60),a(13)),o=a(14),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e)))._initImgInterval=function(){var e=a.state.imgIndex,t=setInterval(function(){e>8&&(e=0),a.setState({imgIndex:e,className:"img-leave"}),e++;var t=setTimeout(function(){a.setState({className:"img-enter"})},2200);a.setState({timeoutVal:t})},3e3);a.setState({imgInterval:t})},a.clearImgInterval=function(){clearInterval(a.state.imgInterval),clearTimeout(a.state.timeoutVal),a.resetClass()},a.tick=function(e){a.setState({imgIndex:e}),a.clearImgInterval()},a.tickIndex=function(e,t){t.preventDefault();var n=a.state.imgIndex;-1===e?--n<0&&(n=8):++n>8&&(n=0),a.setState({imgIndex:n})},a.resetClass=function(){a.setState({className:"img-leave"})},a.renderLoad=function(){a.props.onRouterPath("/download")},a.state={imgURL:["http://p1.music.126.net/wQsqqUnoykzy-WTLnhvTDw==/109951163937786615.jpg","http://p1.music.126.net/3UG3d6-nBuqv6Wx-USnyuw==/109951163935409399.jpg","http://p1.music.126.net/BgpNkh351u-TmHuU44bnSw==/109951163936998232.jpg","http://p1.music.126.net/Aczda9IuaZEjRWOyxvra4g==/109951163937002181.jpg","http://p1.music.126.net/at3nstKnW80lWg9BxELBhg==/109951163937006567.jpg","http://p1.music.126.net/Yh2tem4WWvWctTCvi4Tt9w==/109951163937005723.jpg","http://p1.music.126.net/zLrt840c5nXP32VgjRodRw==/109951163937003461.jpg","http://p1.music.126.net/yLOmQlOxT-twvrL5vSkCig==/109951163937365184.jpg","http://p1.music.126.net/Wwkozl6e0vxvA59T99W0FQ==/109951163937363418.jpg"],background:["http://p1.music.126.net/jiaqZ-u0GvgZvqx1gpuffg==/109951163937789009.jpg","http://p1.music.126.net/VJ3i3SgGgXsHodMum0eLxw==/109951163936991946.jpg","http://p1.music.126.net/2kAY3rsKzUCAYN0SaHGBuQ==/109951163936998674.jpg","http://p1.music.126.net/WPaLytug6g4KK16mxDcMrg==/109951163936996866.jpg","http://p1.music.126.net/n8l_0H44hvnxBBwPQZbnZA==/109951163937004656.jpg","http://p1.music.126.net/hw3etMj8c68u-b9rdA3cHQ==/109951163937007200.jpg","http://p1.music.126.net/mDv_GjkHRsGYM_NRx1FZJg==/109951163937008233.jpg","http://p1.music.126.net/t5fg1lFOLeh7EUY8Wrid4Q==/109951163937369527.jpg","http://p1.music.126.net/oNVzfMkDFLoEw_aW7sudcw==/109951163937367766.jpg"],imgIndex:0,imgInterval:null,className:"",timeoutVal:null},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.clearImgInterval(),this._initImgInterval()}},{key:"componentWillUnmount",value:function(){this.clearImgInterval()}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",{className:"discover",onClick:this.resetClass,style:{backgroundImage:"url(".concat(this.state.background[this.state.imgIndex],")")},onMouseEnter:this.clearImgInterval,onMouseLeave:this._initImgInterval},m.a.createElement("div",{style:{display:"none"}},this.state.imgURL.map(function(e,t){return m.a.createElement("img",{key:t,alt:t,src:e})})),this.state.background.map(function(e,t){return m.a.createElement("div",{className:"img-prev",key:t,style:{backgroundImage:"url(".concat(e,")")}})}),m.a.createElement("div",{className:"discover-wrapper"},m.a.createElement("div",{className:"img-wrapper"},m.a.createElement("img",{alt:"pic",src:this.state.imgURL[this.state.imgIndex],width:"730",height:"336",className:this.state.className}),m.a.createElement("div",{className:"a-dot"},this.state.imgURL.map(function(t,a){return m.a.createElement("span",{onClick:e.tick.bind(e,a),className:"target-a ".concat(e.state.imgIndex===a?"target-a-isactive":"target-a-default"),key:a,"target-index":t},"\xa0")}))),m.a.createElement("span",{onClick:this.tickIndex.bind(this,-1),className:"arrow left-arrow"},"\xa0"),m.a.createElement("span",{onClick:this.tickIndex.bind(this,1),className:"arrow right-arrow"},"\xa0"),m.a.createElement("div",{className:"download-wrapper"},m.a.createElement(u.b,{onClick:this.renderLoad,to:"/download"},"\u4e0b\u8f7d\u5ba2\u6237\u7aef"),m.a.createElement("p",{className:"downlaod-p"},"PC \u5b89\u5353 iPhone WP iPad Mac \u516d\u5927\u5ba2\u6237\u7aef")))))}}]),t}(m.a.Component),h=p=Object(o.b)(function(e){return{path:e.path}},function(e){return{onRouterPath:function(t){e({type:"ROUTER_ACTION",path:t})}}})(p),E=(a(61),a(62),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"v-h2"},m.a.createElement(u.b,{to:this.props.route.path},this.props.route.name),m.a.createElement("span",{className:"more"},m.a.createElement(u.b,{to:this.props.route.path},"\u66f4\u591a"),m.a.createElement("i",{className:"logo cor"})))}}]),t}(m.a.Component)),g=E=Object(o.b)(function(e){return{path:e.path}},function(e){return{onRouterPath:function(t){e({type:"ROUTER_ACTION",path:t})}}})(E),d=(a(63),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return m.a.createElement("div",{className:"n-vh3"},m.a.createElement("span",null,this.props.title.title),m.a.createElement("a",{style:{display:this.props.title.more?"block":"none"},className:"n-vh3-more",href:"/#"},"\u67e5\u770b\u5168\u90e8 >"))}}]),t}(m.a.Component)),v=(a(64),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"musicbox"},m.a.createElement("div",{className:"music-pic"},m.a.createElement("img",{alt:"1",src:"http://p1.music.126.net/ADGkaOacodi6cS65n8vNTg==/109951163943184850.jpg?param=140y140"}),m.a.createElement("a",{href:"/#",className:"bg-pic"},"\xa0"),m.a.createElement("div",{className:"music-bottom"},m.a.createElement("a",{href:"/#",className:"play"},"\xa0"),m.a.createElement("span",{className:"play-icon"}),m.a.createElement("span",{className:"play-count"},9999))),m.a.createElement("div",{className:"desc"},m.a.createElement("a",{href:"/#"},"\u3010VIP\u4e13\u4eab\u3011\u4e00\u5468\u65b0\u6b4c\u63a8\u8350")))}}]),t}(m.a.Component)),f=(a(65),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"singerbox"},m.a.createElement("a",{href:"/#",className:"singerbox-link"},m.a.createElement("div",{className:"header"},m.a.createElement("img",{alt:this.props.singer.name,src:this.props.singer.img,width:"62",height:"62"})),m.a.createElement("div",{className:"info"},m.a.createElement("h4",null,m.a.createElement("span",{className:"thide"},this.props.singer.name)),m.a.createElement("p",{className:"thide"},this.props.singer.info))))}}]),t}(m.a.Component)),b=(a(66),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"zb-box"},m.a.createElement("a",{href:"/#"},m.a.createElement("img",{alt:this.props.zb.name,src:this.props.zb.img,width:"40",height:"40"})),m.a.createElement("div",{className:"info"},m.a.createElement("a",{href:"/#",className:"thide"},this.props.zb.name),m.a.createElement("i",{className:"zb-icon"}),m.a.createElement("p",{className:"thide"},this.props.zb.info)))}}]),t}(m.a.Component)),j=(a(67),a(68),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).toggleBtn=function(){a.setState({play:!a.state.play})},a.state={url:"http://p3.music.126.net/1nJkc21Zqejot92ZfiW3mw==/109951163936577670.jpg?param=100y100",play:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"album"},m.a.createElement("div",{onMouseEnter:this.toggleBtn,onMouseLeave:this.toggleBtn},m.a.createElement("img",{alt:this.state.url,src:this.state.url,width:"100",height:"100"}),m.a.createElement("a",{href:"/#"},"\xa0"),m.a.createElement("span",{className:"play-album ".concat(this.state.play?"play-album-show":"")},"\xa0")),m.a.createElement("div",null,m.a.createElement("p",{className:"info-album album-text"},"A Few Good Kids"),m.a.createElement("p",{className:"album-singer album-text"},"\u9a6c\u601d\u552f")))}}]),t}(m.a.Component)),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={count:new Array(15).fill(0)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this)}},{key:"render",value:function(){return m.a.createElement("div",{className:"album-box"},m.a.createElement("div",{className:"album-inner"},m.a.createElement("span",{className:"turn-left arrow-i"},"\xa0"),m.a.createElement("div",{className:"roll-pull"},m.a.createElement("ul",{className:"roll-list"},this.state.count.map(function(e,t){return m.a.createElement("li",{key:t},m.a.createElement(j,{index:e}))}))),m.a.createElement("span",{className:"turn-right arrow-i"},"\xa0")))}}]),t}(m.a.Component),O=(a(69),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"sing-list"},"11111")}}]),t}(m.a.Component)),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"content-wrapper"},m.a.createElement("div",{className:"sing-warpper"},m.a.createElement(g,{route:{path:"/discover/playlist",name:"\u70ed\u95e8\u63a8\u8350"}}),m.a.createElement("div",{className:"box-wrapper"},m.a.createElement(v,null),m.a.createElement(v,null),m.a.createElement(v,null),m.a.createElement(v,null),m.a.createElement(v,null),m.a.createElement(v,null)),m.a.createElement("div",{className:"grap"}),m.a.createElement(g,{route:{path:"/discover/album",name:"\u65b0\u789f\u4e0a\u67b6"}}),m.a.createElement(N,null),m.a.createElement(g,{route:{path:"/discover/toplist",name:"\u699c\u5355"}}),m.a.createElement(O,null)),m.a.createElement("div",{className:"login-content"},m.a.createElement("div",{className:"login-form-control"},m.a.createElement("p",{className:"login-note"},"\u767b\u5f55\u7f51\u6613\u4e91\u97f3\u4e50\uff0c\u53ef\u4ee5\u4eab\u53d7\u65e0\u9650\u6536\u85cf\u7684\u4e50\u8da3\uff0c\u5e76\u4e14\u65e0\u9650\u540c\u6b65\u5230\u624b\u673a"),m.a.createElement("a",{href:"/#",className:"btn-default"},"\u7528\u6237\u767b\u5f55")),m.a.createElement("div",{className:"n-singer"},m.a.createElement(d,{title:{title:"\u5165\u9a7b\u6b4c\u624b",more:!0}}),m.a.createElement("div",{className:"n-singer-list"},m.a.createElement(f,{singer:{img:"http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62",name:"\u5f20\u60e0\u59b9aMEI",info:"\u53f0\u6e7e\u6b4c\u624b\u5f20\u60e0\u59b9"}}),m.a.createElement(f,{singer:{img:"http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62",name:"\u5f20\u60e0\u59b9aMEI",info:"\u53f0\u6e7e\u6b4c\u624b\u5f20\u60e0\u59b9"}}),m.a.createElement(f,{singer:{img:"http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62",name:"\u5f20\u60e0\u59b9aMEI",info:"\u53f0\u6e7e\u6b4c\u624b\u5f20\u60e0\u59b9"}}),m.a.createElement(f,{singer:{img:"http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62",name:"\u5f20\u60e0\u59b9aMEI",info:"\u53f0\u6e7e\u6b4c\u624b\u5f20\u60e0\u59b9"}}),m.a.createElement(f,{singer:{img:"http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62",name:"\u5f20\u60e0\u59b9aMEI",info:"\u53f0\u6e7e\u6b4c\u624b\u5f20\u60e0\u59b9"}})),m.a.createElement("div",{className:"apply-to-singer"},m.a.createElement("a",{href:"/#"},"\u7533\u8bf7\u6210\u4e3a\u7f51\u6613\u97f3\u4e50\u4eba")),m.a.createElement("div",{className:"zb-wrapper"},m.a.createElement(d,{title:{title:"\u70ed\u95e8\u4e3b\u64ad",more:!1}}),m.a.createElement("div",{className:"zb-list"},m.a.createElement(b,{zb:{img:"http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",name:"\u9648\u7acb",info:"\u5fc3\u7406\u5b66\u5bb6\u3001\u7f8e\u98df\u5bb6\u9648\u7acb\u6559\u6388"}}),m.a.createElement(b,{zb:{img:"http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",name:"\u9648\u7acb",info:"\u5fc3\u7406\u5b66\u5bb6\u3001\u7f8e\u98df\u5bb6\u9648\u7acb\u6559\u6388"}}),m.a.createElement(b,{zb:{img:"http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",name:"\u9648\u7acb",info:"\u5fc3\u7406\u5b66\u5bb6\u3001\u7f8e\u98df\u5bb6\u9648\u7acb\u6559\u6388"}}),m.a.createElement(b,{zb:{img:"http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",name:"\u9648\u7acb",info:"\u5fc3\u7406\u5b66\u5bb6\u3001\u7f8e\u98df\u5bb6\u9648\u7acb\u6559\u6388"}}),m.a.createElement(b,{zb:{img:"http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",name:"\u9648\u7acb",info:"\u5fc3\u7406\u5b66\u5bb6\u3001\u7f8e\u98df\u5bb6\u9648\u7acb\u6559\u6388"}})))))))}}]),t}(m.a.Component),k=(a(70),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"footer"},m.a.createElement("div",{className:"footer-content"},m.a.createElement("div",{className:"copy"},m.a.createElement("ul",null,m.a.createElement("li",null,"\u5173\u4e8e\u7f51\u6613"),m.a.createElement("li",null,"|"),m.a.createElement("li",null,"\u5ba2\u670d\u670d\u52a1"),m.a.createElement("li",null,"|"),m.a.createElement("li",null,"\u670d\u52a1\u6761\u6b3e"),m.a.createElement("li",null,"|"),m.a.createElement("li",null,"\u7f51\u7ad9\u5bfc\u822a"),m.a.createElement("li",null,"|"),m.a.createElement("li",null,"\u610f\u89c1\u53cd\u9988")),m.a.createElement("p",null,m.a.createElement("p",null,"\u7f51\u6613\u516c\u53f8\u7248\u6743\u6240\u6709\xa91997-2019"),m.a.createElement("p",null,"\u676d\u5dde\u4e50\u8bfb\u79d1\u6280\u6709\u9650\u516c\u53f8\u8fd0\u8425\uff1a"),m.a.createElement("p",null,"\u6d59\u7f51\u6587[2018]3506-263\u53f7")),m.a.createElement("div",{className:"jb-police"},m.a.createElement("span",null,"\u8fdd\u6cd5\u548c\u4e0d\u826f\u4fe1\u606f\u4e3e\u62a5\u7535\u8bdd\uff1a0571-89853516"),m.a.createElement("span",null,"\u4e3e\u62a5\u90ae\u7bb1\uff1a"),m.a.createElement("span",null,"ncm5990@163.com"))),m.a.createElement("div",{className:"footer-share"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("div",null),m.a.createElement("p",null,"\u7528\u6237\u8ba4\u8bc1")),m.a.createElement("li",null,m.a.createElement("div",null),m.a.createElement("p",null,"\u72ec\u7acb\u97f3\u4e50\u4eba")),m.a.createElement("li",null,m.a.createElement("div",null),m.a.createElement("p",null,"\u8d5e\u8d4f")),m.a.createElement("li",null,m.a.createElement("div",null),m.a.createElement("p",null,"\u89c6\u9891\u5956\u52b1"))))))}}]),t}(m.a.Component)),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(h,null),m.a.createElement(y,null),m.a.createElement(k,null))}}]),t}(m.a.Component);t.default=w}}]);