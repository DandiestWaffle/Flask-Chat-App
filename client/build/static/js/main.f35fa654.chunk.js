(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(8),l=a.n(i),r=a(2),u=a(3),c=a(5),m=a(4),o=a(6),d=a(1),h=function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",{id:"messageList"},this.props.messages&&this.props.messages.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("b",null,e[2])," ",e[0].toString(),": ",e[1].toString())}))}}]),t}(s.Component),b=function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",{id:"userList"},this.props.users&&this.props.users.map(function(e,t){return n.a.createElement("li",{key:t},e.toString())}))}}]),t}(s.Component),p=function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"emoteButtons"},v&&v.map(function(t,a){return n.a.createElement("button",{onClick:function(){return e.props.sendEmote(a)},key:a},t)}))}}]),t}(s.Component),g=a(9),E=a.n(g)()("https://".concat(document.domain,":5000")),v=["\u25d5\u203f\u25d5","\u10da(\xb4\u06a1`\u10da)","(\u0ca5\ufe4f\u0ca5)","(\u3065\uffe3 \xb3\uffe3)\u3065","\xaf_(\u30c4)_/\xaf","\u256d\u2229\u256e(-_-)\u256d\u2229\u256e","(\u3065\uff61\u25d5\u203f\u203f\u25d5\uff61)\u3065","\u0c20_\u0c20","\u25d4\u032f\u25d4","\u0ca0\u76ca\u0ca0","( \u2018-\u2019)\u4eba(\uff9f_\uff9f )"],j=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={messages:[],alias:"",message:"",isLoggedIn:!1,users:[],emotesVisible:!1,kicked:!1},e.handleMessageSubmit=e.handleMessageSubmit.bind(Object(d.a)(Object(d.a)(e))),e.handleAliasSubmit=e.handleAliasSubmit.bind(Object(d.a)(Object(d.a)(e))),e.handleAliasChange=e.handleAliasChange.bind(Object(d.a)(Object(d.a)(e))),e.handleMessageChange=e.handleMessageChange.bind(Object(d.a)(Object(d.a)(e))),e.updateMessages=e.updateMessages.bind(Object(d.a)(Object(d.a)(e))),e.updateUsers=e.updateUsers.bind(Object(d.a)(Object(d.a)(e))),e.handleEmoteSubmit=e.handleEmoteSubmit.bind(Object(d.a)(Object(d.a)(e))),e.showEmotes=e.showEmotes.bind(Object(d.a)(Object(d.a)(e))),E.on("connect",function(){}),E.on("server message",function(t){e.updateMessages(t)}),E.on("new user",function(t){e.updateUsers(t)}),E.on("admin kick",function(){e.setState({kicked:!0})}),e}return Object(o.a)(t,e),Object(u.a)(t,[{key:"showEmotes",value:function(){var e=!this.state.emotesVisible;this.setState({emotesVisible:e})}},{key:"updateMessages",value:function(e){var t=(new Date).toTimeString().substr(0,5),a=this.state.messages;"emote"in e&&(e.message=v[e.emote]),a.push([e.alias,e.message,t]),this.setState({messages:a})}},{key:"updateUsers",value:function(e){this.setState({users:e.users})}},{key:"handleMessageSubmit",value:function(e){e.preventDefault();var t=this.state.alias,a=this.state.message;a?(E.emit("send message",{alias:t,message:a}),this.setState({message:""})):alert("Message must not be empty")}},{key:"handleAliasSubmit",value:function(e){var t=this.state.alias;t?(E.emit("user login",{alias:t}),this.setState({loggedIn:!0})):alert("Alias must not be empty")}},{key:"handleEmoteSubmit",value:function(e){var t=this.state.alias;E.emit("send emote",{alias:t,emote:e})}},{key:"handleAliasChange",value:function(e){this.setState({alias:e.target.value})}},{key:"handleMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){var e=this.state.loggedIn,t=!this.state.kicked,a=this.state.messages,s=this.state.users;return n.a.createElement("div",{className:"App"},t?e?n.a.createElement("div",null,n.a.createElement("div",{id:"banner"},n.a.createElement("h1",null," Start chatting! ")),n.a.createElement("div",{id:"messageWrapper"},n.a.createElement(h,{messages:a})),n.a.createElement("div",{id:"userWrapper"},n.a.createElement(b,{users:s})),n.a.createElement("div",{id:"chatInputWrapper"},n.a.createElement("form",{id:"chatInput",onSubmit:this.handleMessageSubmit},n.a.createElement("input",{id:"input",type:"text",placeholder:"Message",value:this.state.message,onChange:this.handleMessageChange}),n.a.createElement("input",{id:"inputButton",type:"submit",value:"send"}),n.a.createElement("button",{id:"showEmoteButton",type:"button",onClick:this.showEmotes},"Emotes"))),n.a.createElement("div",{id:"emoteWrapper"},n.a.createElement("div",null,this.state.emotesVisible&&n.a.createElement(p,{sendEmote:this.handleEmoteSubmit})))):n.a.createElement("div",{id:"aliasScreen"},n.a.createElement("div",{id:"welcomeText"},n.a.createElement("h1",null," Pick an alias to start chatting. ")),n.a.createElement("div",{id:"aliasInputWrapper"},n.a.createElement("form",{id:"chatInput",onSubmit:this.handleAliasSubmit},n.a.createElement("input",{type:"text",placeholder:"Alias",value:this.state.alias,onChange:this.handleAliasChange}),n.a.createElement("input",{type:"submit",value:"send"})))):n.a.createElement("div",null,n.a.createElement("h1",null,"Kicked")))}}]),t}(s.Component);l.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.f35fa654.chunk.js.map