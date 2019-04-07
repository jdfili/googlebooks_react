(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(67)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},47:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(27),r=a.n(o),c=a(7),i=a(6),s=a(28),u=a(10),m=a(11),v=a(13),h=a(12),f=a(14);a(36);var d=function(e){return l.a.createElement("div",{className:"container text-center"},e.children)};var b=function(e){return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:e.name,value:e.value,onChange:e.onChange})),l.a.createElement("button",{onClick:e.onClick,className:"btn btn-success mt-2"},l.a.createElement("i",{className:"fas fa-search mr-2"}),"Search"))};a(37);var E=function(e){return l.a.createElement("div",{className:"jumbotron text-center mt-4"},l.a.createElement("h3",null,"Google Books"))};a(38);var p=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(c.b,{to:"/",style:{textDecoration:"none",color:"black"}},"Google Books"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active ml-2 mr-2"},l.a.createElement(c.b,{to:"/",style:{textDecoration:"none",color:"black"}},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/saved",style:{textDecoration:"none",color:"black"}},"Saved")))))};var g=function(e){return l.a.createElement("button",{onClick:e.onClick,className:"btn btn-success mb-2"},"Save")};a(47);var k=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:e.imageLinks,className:"mr-4"})," ",l.a.createElement("h4",null,e.title),l.a.createElement("h5",null,e.authors),l.a.createElement("h6",null,e.categories)," ",l.a.createElement("hr",null),l.a.createElement("p",null,e.description),l.a.createElement("div",{className:"text-center"},l.a.createElement(g,{onClick:function(){return e.onClick(e.id)}},"Save")))},N=a(9),I=a.n(N),y={search:function(e){return I.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&key=AIzaSyBwOemITo_zIAv350jNoazbI_BISg2-nb8")},saveBook:function(e){return I.a.post("/api/books",e)},getBooks:function(){return I.a.get("/api/books")},deleteBook:function(e){return I.a.delete("/api/books/"+e)}},C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={results:[],search:""},a.search=function(e){y.search(e).then(function(e){return a.setState({results:e.data.items})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(s.a)({},n,t))},a.save=function(e){var t=a.state.results.filter(function(t){return t.id===e});y.saveBook({title:t[0].volumeInfo.title,authors:t[0].volumeInfo.authors,synopsis:t[0].volumeInfo.description,thumbnail:t[0].volumeInfo.imageLinks.thumbnail}).then(function(e){return alert("Saved to your library!")}).catch(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault(),a.search(a.state.search)},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(d,null,l.a.createElement(E,null),l.a.createElement(b,{onClick:this.handleFormSubmit,onChange:this.handleInputChange,value:this.state.search,name:"search"})),this.state.results.map(function(t){return l.a.createElement("div",null,l.a.createElement(k,{id:t.id,imageLinks:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"http://placekitten.com/200/300",title:t.volumeInfo.title?t.volumeInfo.title:"No title to display",authors:t.volumeInfo.authors?t.volumeInfo.authors:"No authors",categories:t.volumeInfo.categories?t.volumeInfo.categories:"No info",description:t.volumeInfo.description?t.volumeInfo.description:"No info",onClick:e.save}))}))}}]),t}(n.Component);var B=function(e){return l.a.createElement("button",{onClick:e.onClick,className:"btn btn-danger mb-2"},"Delete")};var j=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:e.imageLinks}),l.a.createElement("h4",null,e.title),l.a.createElement("h5",null,e.authors),l.a.createElement("p",null,e.description),l.a.createElement(B,{onClick:function(){return e.onClick(e.id)}},"Delete")))},S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={saved:[]},a.loadBooks=function(){y.getBooks().then(function(e){a.setState({saved:e.data}),console.log(a.state.saved)}).catch(function(e){return console.log(e)})},a.delete=function(e){y.deleteBook(e).then(function(e){a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(d,null,l.a.createElement(E,null),this.state.saved.map(function(t){return l.a.createElement("div",null,l.a.createElement(j,{imageLinks:t.thumbnail?t.thumbnail:"http://placekitten.com/200/300",title:t.title,authors:t.authors,description:t.synopsis,id:t._id,onClick:e.delete}))})))}}]),t}(n.Component);var w=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:C}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:S}))))};r.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ad525df1.chunk.js.map