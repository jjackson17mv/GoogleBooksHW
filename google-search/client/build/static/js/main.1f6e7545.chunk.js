(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},40:function(e,t,a){},58:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(29),r=a.n(l),c=a(31),i=a(6),s=a(10),u=a(11),m=a(13),f=a(12),v=a(14);a(39);var d=function(e){return o.a.createElement("button",Object.assign({className:"btn btn-danger delete-btn"},e),"Delete")};a(40);var h=function(e){return o.a.createElement("a",Object.assign({href:e.link,alt:e.title},e),o.a.createElement("button",{className:"btn btn-primary view-btn"},"View"))};var E=function(e){var t=e.children;return o.a.createElement("div",{style:{textAlign:"center"},className:"col-lg jumbotron"},t)},b=a(8),k=a.n(b),g={getBooks:function(){return k.a.get("/api/books")},getBook:function(e){return k.a.get("/api/books/".concat(e))},deleteBook:function(e){return k.a.delete("/api/books/".concat(e))},saveBook:function(e){return k.a.post("/api/books",e)},getTitles:function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q=title:".concat(e))}};function p(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function B(e){var t=e.lPadding,a=e.size,n=e.children,l="";return l=t?"pl-".concat(t):"",l+=a?" col-".concat(a):"",o.a.createElement("div",{className:l.trim()},n)}a(58);function w(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}var j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",description:"",image:"",link:""},a.loadBooks=function(){g.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",description:"",image:"",link:""})}).catch(function(e){return console.log(e)})},a.viewBook=function(e){window.location=e},a.deleteBook=function(e){g.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(p,{fluid:!0},o.a.createElement(N,null,o.a.createElement(E,null,o.a.createElement("h1",null,"(React) Google Book Search"))),o.a.createElement(N,null,o.a.createElement(p,null,o.a.createElement("h2",null,"Saved Books"),this.state.books.length?o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(y,{key:t._id},o.a.createElement("img",{className:"float-left mb-1 mr-4",src:t.image,alt:t.title}),o.a.createElement(N,null,o.a.createElement(B,{lPadding:"0",size:"8"},o.a.createElement("strong",null,t.title)),o.a.createElement(B,{size:"4"},o.a.createElement(d,{onClick:function(){return e.deleteBook(t._id)}}),o.a.createElement(h,{onClick:function(){return e.viewBook(t.link)}}))),o.a.createElement("p",null,"Written by ",t.author),o.a.createElement("p",{className:"text-justify"},t.description))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),O=a(30);var I=function(e){return o.a.createElement("button",Object.assign({className:"btn btn-warning save-btn"},e),"Save")};function S(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function C(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:{},title:""},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(O.a)({},n,o))},a.saveBook=function(e){var t=a.state.books.find(function(t){return t.id===e});g.saveBook({title:t.volumeInfo.title,author:t.volumeInfo.authors[0],description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.previewLink}).then(function(){a.setState({books:a.state.books.filter(function(t){return t.id!==e})})}).catch(function(e){return console.log(e)})},a.viewBook=function(e){window.location=e},a.showBooks=function(e){a.setState({books:e.data.items})},a.searchBook=function(e){e.preventDefault(),g.getTitles(a.state.title).then(function(e){return a.showBooks(e)}).catch(function(e){return console.log(e)})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({books:{},title:""})}},{key:"render",value:function(){var e=this;return o.a.createElement(p,{fluid:!0},o.a.createElement(N,null,o.a.createElement(E,null,o.a.createElement("h1",null,"(React) Google Book Search"))),o.a.createElement(N,null,o.a.createElement(p,null,o.a.createElement("h2",null,"Book Search"),o.a.createElement("form",null,o.a.createElement(S,{name:"title",value:this.state.title,onChange:this.handleInputChange,placeholder:"Book Title"}),o.a.createElement(C,{onClick:this.searchBook},"Search")))),o.a.createElement(N,null,o.a.createElement(p,null,this.state.books.length?o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(y,{key:t.id},o.a.createElement(N,null,o.a.createElement(B,{size:"8"},o.a.createElement("strong",null,t.volumeInfo.title)),o.a.createElement(B,{size:"4"},o.a.createElement(I,{onClick:function(){return e.saveBook(t.id)}}),o.a.createElement(h,{onClick:function(){return e.viewBook(t.volumeInfo.previewLink)}}))),o.a.createElement("p",null,"Written by ",t.volumeInfo.authors[0]||"Not provided by Google Books API"),o.a.createElement("p",{className:"text-justify"},t.volumeInfo.description))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component);var D=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/search"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/books"},"Saved")))))};var z=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(D,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:j}),o.a.createElement(i.a,{exact:!0,path:"/books",component:j}),o.a.createElement(i.a,{exact:!0,path:"/search/",component:x}),"/>")))};r.a.render(o.a.createElement(z,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1f6e7545.chunk.js.map