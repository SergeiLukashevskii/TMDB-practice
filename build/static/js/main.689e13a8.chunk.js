(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{11:function(e,t,c){e.exports={poster:"SearchResultPage_poster__3s5T9",container:"SearchResultPage_container__1TXvv",filmsContainer:"SearchResultPage_filmsContainer__1IGk7",filmContainer:"SearchResultPage_filmContainer__2psWy",titleContainer:"SearchResultPage_titleContainer___Sl0W",title:"SearchResultPage_title__JvJYk",review:"SearchResultPage_review__qZYSs"}},39:function(e,t,c){},40:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(18),a=c.n(n),r=(c(39),c(40),c(19)),l=c(2),o=c(3),d=c(5),j=c.n(d),b=c(13),u=Object(b.a)({name:"test",initialState:{popular:{},image:{},person:{},nowPlaying:{},film:{},token:{},findValue:"",foundFilm:{}},reducers:{setPopular:function(e,t){var c=t.payload;e.popular=c},setNowPlaying:function(e,t){var c=t.payload;e.nowPlaying=c},setImage:function(e,t){var c=t.payload;e.image[c.id]=c},setPerson:function(e,t){var c=t.payload;e.person[c.id]=c},setFilm:function(e,t){var c=t.payload;e.film[c.id]=c},setToken:function(e,t){var c=t.payload;e.token=c},setFindValue:function(e,t){var c=t.payload;e.findValue=c},setFoundFilm:function(e,t){var c=t.payload;e.foundFilm=c}}}),h=u.actions,m=h.setPopular,O=h.setImage,v=h.setNowPlaying,x=h.setFilm,p=(h.setPerson,h.setToken),f=(h.setUser,h.setFindValue),g=h.setFoundFilm,N=(h.setHeaderSearchButton,u.reducer),C=function(){return function(e){j.a.get("https://api.themoviedb.org/3/authentication/token/new?api_key=f0d7e41686782ec02dbe7d4d333bce05").then((function(t){e(p(t.data.request_token)),window.location.assign("https://www.themoviedb.org/authenticate/".concat(t.data.request_token,"?redirect_to=http://localhost:3000/login"))}))}},y=c(0);var F=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),s=Object(o.b)(),n=Object(i.useCallback)((function(){return s(f(t.current.value))}),[t]);return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"searchDiv",children:[Object(y.jsx)("input",{className:"findFilm",ref:t,style:e.styles,placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0444\u0438\u043b\u044c\u043c,\u0441\u0435\u0440\u0438\u0430\u043b,\u043f\u0435\u0440\u0441\u043e\u043d\u0443..."}),Object(y.jsx)("div",{className:"findFilmButton",style:e.buttonDivStyles,children:Object(y.jsx)(l.b,{to:"/SearchResultPage",children:Object(y.jsx)("div",{className:"findFilmButtonText",style:e.buttonStyles,ref:c,onClick:n,children:Object(y.jsx)("span",{children:"Search"})})})})]})})},_=Object(b.a)({name:"test",initialState:{data:null},reducers:{setUser:function(e,t){var c=t.payload;e.data=c}}}),w=_.actions.setUser,k=function(e){return e.userReducer.data},S=_.reducer,P=Object(y.jsx)("svg",{className:"search",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{fill:"currentColor",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"})}),L=Object(y.jsx)("svg",{className:"search",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C9,20 6.39,18.34 5,15.89L6.75,14V13A1.25,1.25 0 0,1 8,11.75A1.25,1.25 0 0,1 9.25,13V14H12M16,11.75A1.25,1.25 0 0,0 14.75,13A1.25,1.25 0 0,0 16,14.25A1.25,1.25 0 0,0 17.25,13A1.25,1.25 0 0,0 16,11.75Z"})}),E=Object(y.jsx)("svg",{className:"search",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})});var R=function(e){var t=Object(o.b)(),c=Object(o.c)((function(e){return k(e)})),s=Object(i.useState)(!1),n=Object(r.a)(s,2),a=n[0],d=n[1],j=Object(i.useCallback)((function(){return t(C())}),[]),b=Object(i.useMemo)((function(){return!!c&&c.id}),[c]),u=Object(i.useCallback)((function(){return t(w())}),[]),h=Object(i.useCallback)((function(){return localStorage.removeItem("sessionId")}),[]),m=Object(i.useCallback)((function(){return d(!a)}),[a]);return Object(y.jsxs)("div",{className:"headerContainer",children:[Object(y.jsxs)("div",{className:"headerContainerLeft",children:[Object(y.jsx)("div",{className:"logoDiv",children:Object(y.jsx)("a",{children:Object(y.jsxs)(l.b,{to:"/",children:["   ",Object(y.jsx)("img",{className:"logo",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:""})," "]})})}),Object(y.jsxs)("div",{className:"headerContainerLeftFilms",children:[Object(y.jsx)("a",{href:"#",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(y.jsxs)("div",{className:"popit",children:[Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/PopularFilms",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/WatchNow",children:"\u0421\u043c\u043e\u0442\u0440\u044f\u0442 \u0441\u0435\u0439\u0447\u0430\u0441"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/Expected",children:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{style:{color:"#FFE773"},to:"/BestFilms",children:"\u041b\u0443\u0447\u0448\u0438\u0435"})]})]})]}),Object(y.jsxs)("div",{className:"headerContainerLeftSerials",children:[Object(y.jsx)("a",{href:"#",children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"}),Object(y.jsxs)("div",{className:"popit",children:[Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/PopularSerials",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/Live",children:"\u0412 \u044d\u0444\u0438\u0440\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/OnTv",children:"\u041f\u043e \u0442\u0435\u043b\u0435\u0432\u0438\u0434\u0435\u043d\u0438\u044e"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{style:{color:"#FFE773"},to:"/BestSerials",children:"\u041b\u0443\u0447\u0448\u0438\u0435"})]})]})]}),Object(y.jsxs)("div",{className:"headerContainerLeftMen",children:[Object(y.jsx)("a",{href:"#",children:"\u041b\u044e\u0434\u0438 "}),Object(y.jsx)("div",{className:"popitPopularMen",children:Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/PopularMen",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043b\u044e\u0434\u0438"})]})})]}),Object(y.jsxs)("div",{className:"headerContainerLeftMore",children:[Object(y.jsx)("a",{href:"#",children:"\u0415\u0449\u0451"}),Object(y.jsxs)("div",{className:"popit",children:[Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/Discussions",style:{color:"#FFE773"},children:"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/HallofFame",children:"\u0414\u043e\u0441\u043a\u0430 \u043f\u043e\u0447\u0435\u0442\u0430"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/Support",children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"})]}),Object(y.jsxs)("div",{className:"popitFilmsElem",children:[" ",Object(y.jsx)(l.b,{to:"/Api",children:"API"})]})]})]})]}),Object(y.jsxs)("div",{className:"headerContainerRight",children:[!b&&Object(y.jsx)("div",{className:"login",onClick:j,children:Object(y.jsx)("a",{href:"#",children:" \u0412\u043e\u0439\u0442\u0438"})}),b&&Object(y.jsx)("div",{className:"login",onClick:u,children:Object(y.jsx)("a",{href:"#",onClick:h,children:" \u0412\u044b\u0439\u0442\u0438"})}),Object(y.jsx)(l.b,{to:"/profile",children:Object(y.jsx)("div",{className:c?"headerUserLogoLogged":"headerUserLogoUnlogged",children:L})}),Object(y.jsx)("div",{children:Object(y.jsx)("a",{href:"#",onClick:m,children:a?E:P})})]}),a&&Object(y.jsx)("div",{className:"HeaderFindInput",children:Object(y.jsx)(F,{styles:{backgroundColor:"white",borderRadius:0},buttonStyles:{color:"black"},buttonDivStyles:{borderRadius:0}})})]})};function I(e){var t=e.movies,c=Object(i.useMemo)((function(){return t.results?t.results.map((function(e,t){return Object(y.jsx)(l.b,{to:"/movies/"+e.id,children:Object(y.jsx)("div",{className:"FilmInfoContainer",children:Object(y.jsxs)("div",{className:"popularImgDiv",children:[Object(y.jsx)("img",{className:"popularImg",src:"https://image.tmdb.org/t/p/original"+e.poster_path}),Object(y.jsx)("div",{className:"popularVoitCircle",children:10*e.vote_average}),Object(y.jsx)("div",{className:"popularTitle",children:e.title}),Object(y.jsx)("div",{className:"popularFilmReleaseData",children:e.release_date})]})})},t)})):"loading..."}),[t.results]);return Object(y.jsx)("div",{className:"popularLane",children:Object(y.jsx)("div",{className:"FilmsInfoContainer",children:c})})}var H="potv",T="vkino";function A(e){var t=Object(o.b)(),c=Object(i.useState)(H),s=Object(r.a)(c,2),n=s[0],a=s[1],l=Object(i.useCallback)((function(){return a(H)}),[]),d=Object(i.useCallback)((function(){return a(T)}),[]),b=Object(o.c)((function(e){return function(e){return e.testReducer.nowPlaying}(e)})),u=Object(o.c)((function(e){return function(e){return e.testReducer.popular}(e)}));return Object(i.useEffect)((function(){t(n===H?function(e){j.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=f0d7e41686782ec02dbe7d4d333bce05").then((function(t){e(v(t.data))}))}:function(e){j.a.get("https://api.themoviedb.org/3/movie/popular?api_key=f0d7e41686782ec02dbe7d4d333bce05").then((function(t){e(m(t.data))}))})}),[n]),Object(y.jsxs)("div",{className:"mainPageContainer",children:[Object(y.jsx)("div",{className:"welcomeContainer",children:Object(y.jsxs)("div",{className:"welcomeContent",children:[Object(y.jsxs)("div",{className:"title",children:[Object(y.jsx)("h2",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(y.jsx)("h3",{children:"\u041c\u0438\u043b\u043b\u0438\u043e\u043d\u044b \u0444\u0438\u043b\u044c\u043c\u043e\u0432,\u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438 \u043b\u044e\u0434\u0435\u0439.\u0418\u0441\u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441"})]}),Object(y.jsx)(F,{})]})}),Object(y.jsxs)("div",{className:"popular",children:[Object(y.jsxs)("div",{className:"popularHeader",children:[Object(y.jsx)("div",{className:"watPop",children:"\u0427\u0442\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e"}),Object(y.jsx)("button",{className:"bt",onClick:l,children:"  \u041f\u043e \u0442\u0432 "}),Object(y.jsx)("button",{className:"bt",onClick:d,children:"   \u0412 \u043a\u0438\u043d\u043e "})]}),Object(y.jsx)("div",{children:Object(y.jsx)(I,{movies:n===H?b:u})})]})]})}var B=function(e){return Object(y.jsxs)("div",{className:"footerContainer",children:[Object(y.jsx)("div",{className:"footerContainerElem",children:Object(y.jsx)("img",{className:"footerLogo",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:""})}),Object(y.jsxs)("div",{className:"footerContainerElem",children:[Object(y.jsx)("div",{className:"FooterDivTitile",children:"\u0413\u041b\u0410\u0412\u041d\u041e\u0415"}),Object(y.jsx)("div",{children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"}),Object(y.jsx)("div",{children:"\u0424\u043e\u0440\u0443\u043c\u044b"}),Object(y.jsx)("div",{children:"API"}),Object(y.jsx)("div",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"})]}),Object(y.jsxs)("div",{className:"footerContainerElem",children:[Object(y.jsx)("div",{className:"FooterDivTitile",children:"\u0423\u0427\u0410\u0421\u0422\u0412\u0423\u0419\u0422\u0415"}),Object(y.jsx)("div",{children:"\u041f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0431 \u0443\u0447\u0430\u0441\u0442\u0438\u0438"}),Object(y.jsx)("div",{children:"\u0421\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(y.jsx)("div",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0444\u0438\u043b\u044c\u043c"}),Object(y.jsx)("div",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u0435\u0440\u0438\u0430\u043b"})]}),Object(y.jsxs)("div",{className:"footerContainerElem",children:[Object(y.jsx)("div",{className:"FooterDivTitile",children:"\u0421\u041e\u041e\u0411\u0429\u0415\u0421\u0422\u0412\u041e"}),Object(y.jsx)("div",{children:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430"}),Object(y.jsx)("div",{children:"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(y.jsx)("div",{children:"\u0414\u043e\u0441\u043a\u0430 \u043f\u043e\u0447\u0435\u0442\u0430"}),Object(y.jsx)("div",{children:"Twitter"})]}),Object(y.jsxs)("div",{className:"footerContainerElem",children:[Object(y.jsx)("div",{className:"FooterDivTitile",children:"\u041e \u041f\u0420\u0410\u0412\u0415"}),Object(y.jsx)("div",{children:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(y.jsx)("div",{children:"API \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(y.jsx)("div",{children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"})]})]})},D=c(4);function M(){var e=Object(o.b)(),t=Object(D.h)().id,c=Object(o.c)((function(e){return function(e,t){return e.testReducer.film[t]}(e,t)})),s=Object(o.c)((function(e){return function(e,t){return e.testReducer.image[t]}(e,t)}));Object(i.useEffect)((function(){e(function(e){return function(t){j.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=f0d7e41686782ec02dbe7d4d333bce05")).then((function(e){t(x(e.data))}))}}(t)),e(function(e){return function(t){j.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/images?api_key=f0d7e41686782ec02dbe7d4d333bce05")).then((function(e){t(O(e.data))}))}}(t))}),[]);var n="https://image.tmdb.org/t/p/original"+(s?s.posters[0].file_path:"just image");return Object(y.jsx)("div",{className:"InfoContainer",children:Object(y.jsxs)("div",{className:"InfoContainer",children:[Object(y.jsx)("div",{className:"imgInfo",children:Object(y.jsx)("img",{className:"filmPoster",src:n,alt:""})}),Object(y.jsxs)("div",{className:"textInfo",children:[Object(y.jsxs)("div",{className:"textInfoTop",children:[Object(y.jsxs)("div",{children:[c?c.title:"just data","  (",c?c.release_date.substring(0,4):"loading...",")"]}),Object(y.jsxs)("div",{className:"genresContainer",children:[c?c.genres.map((function(e,t){return Object(y.jsx)("div",{className:"genres",children:e.name},t)})):"loading...",Object(y.jsx)("div",{children:c?c.runtime+"m":"loading..."})]})]}),Object(y.jsxs)("div",{className:"circleDiv",children:[Object(y.jsx)("div",{className:"PFPageVoitCircle",children:c?10*c.vote_average:"loading..."}),Object(y.jsxs)("div",{className:"ps",children:[Object(y.jsx)("div",{children:" \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439  "}),Object(y.jsx)("div",{children:"\u0441\u0447\u0451\u0442   "})]})]}),Object(y.jsx)("div",{className:"tagline",children:c?c.tagline:"loading..."}),Object(y.jsx)("div",{children:"\u041e\u0431\u0437\u043e\u0440"}),Object(y.jsx)("div",{className:"overview",children:c?c.overview:"loading..."})]})]})})}var V=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"best films"})};var q=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"expected"})};var U=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"popular films"})};var W=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"watch now"})};var J=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"popular men"})};var Z=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"best Serials"})};var Y=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"live"})};var G=function(e){return Object(y.jsx)("div",{style:{minHeight:500},children:"on TV"})};var X=function(e){return Object(y.jsx)("div",{style:{minHeight:500},children:"popular Serials"})};var z=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"api"})};var K=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"discussions"})};var Q=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"hall of Fame"})};var $=function(){return Object(y.jsx)("div",{style:{minHeight:500},children:"support"})};var ee=function(){return new URLSearchParams(Object(D.g)().search)},te=function(){return function(e){j.a.get("https://api.themoviedb.org/3//account/new?api_key=f0d7e41686782ec02dbe7d4d333bce05&session_id=".concat(localStorage.getItem("sessionId"))).then((function(t){e(w(t.data))}))}},ce=function(e){return function(t){j.a.post("https://api.themoviedb.org/3/authentication/session/new?api_key=f0d7e41686782ec02dbe7d4d333bce05",{request_token:e}).then((function(e){e.data.success&&(localStorage.setItem("sessionId",e.data.session_id),t(te()))}))}};function ie(){var e=ee(),t=Object(o.b)();return Object(i.useEffect)((function(){e.get("approved")&&t(ce(e.get("request_token")))}),[]),Object(y.jsx)("div",{className:"loginCont",children:Object(y.jsx)(D.a,{to:"/"})})}var se=c(11),ne=c.n(se);var ae=function(e){var t=Object(o.b)(),c=Object(o.c)((function(e){return function(e){return e.testReducer.findValue}(e)})),s=Object(o.c)((function(e){return function(e){return e.testReducer.foundFilm}(e)}));return Object(i.useEffect)((function(){return t((e=c,function(t){var c="https://api.themoviedb.org/3/search/movie?query=".concat(e).concat("&api_key=f0d7e41686782ec02dbe7d4d333bce05 ");j.a.get(c).then((function(e){t(g(e.data))}))}));var e})),Object(y.jsxs)("div",{className:ne.a.container,children:[Object(y.jsx)(F,{styles:{borderTop:"3px solid #FFB273",borderBottom:"3px solid #FFB273",borderRadius:0},buttonStyles:{color:"black",borderRadius:0,backgroundColor:"#FFB273"},buttonDivStyles:{borderRadius:0,backgroundColor:"white"}}),Object(y.jsx)("div",{className:ne.a.filmsContainer,children:s.results?s.results.map((function(e,t){return Object(y.jsxs)("div",{className:ne.a.filmContainer,children:[Object(y.jsxs)(l.b,{to:"/movies/"+e.id,children:["     ",Object(y.jsx)("img",{className:ne.a.poster,src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:"noPoster("})," "]}),Object(y.jsxs)("div",{className:ne.a.titleContainer,children:[Object(y.jsxs)("div",{className:ne.a.title,children:[" ",Object(y.jsx)(l.b,{to:"/movies/"+e.id,children:e.title}),"  "]}),Object(y.jsxs)("div",{className:ne.a.review,children:[" ",e.overview,"  "]})]})]},t)})):""})]})};var re=function(e){var t=Object(o.c)((function(e){return k(e)})),c=Object.entries(t);return Object(y.jsx)("div",{style:{minHeight:500},children:c.map((function(e,t){return Object(y.jsxs)("div",{children:[" ",e[0]+":  "," ",Object(y.jsx)("span",{style:{color:"red"},children:String(e[1])}),"  "]},t)}))})};var le=function(e){var t=e.children;return Object(o.c)((function(e){return k(e)}))?t:Object(y.jsx)("div",{style:{minHeight:500},children:" you need to login "})};var oe=function(e){var t=Object(o.b)();return Object(i.useEffect)((function(){t((function(e){localStorage.getItem("sessionId")&&e(te())}))}),[]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(l.a,{children:[Object(y.jsx)(R,{}),Object(y.jsx)("div",{className:"bodyContainer",children:Object(y.jsxs)(D.d,{children:[Object(y.jsx)(D.b,{exact:!0,path:"/",component:A}),Object(y.jsx)(D.b,{path:"/movies/:id",component:M}),Object(y.jsx)(D.b,{exact:!0,path:"/Expected",component:q}),Object(y.jsx)(D.b,{exact:!0,path:"/PopularFilms",component:U}),Object(y.jsx)(D.b,{exact:!0,path:"/WatchNow",component:W}),Object(y.jsx)(D.b,{exact:!0,path:"/PopularMen",component:J}),Object(y.jsx)(D.b,{exact:!0,path:"/Live",component:Y}),Object(y.jsx)(D.b,{exact:!0,path:"/OnTv",component:G}),Object(y.jsx)(D.b,{exact:!0,path:"/PopularSerials",component:X}),Object(y.jsx)(D.b,{exact:!0,path:"/Api",component:z}),Object(y.jsx)(D.b,{exact:!0,path:"/HallofFame",component:Q}),Object(y.jsx)(D.b,{exact:!0,path:"/Support",component:$}),Object(y.jsx)(D.b,{exact:!0,path:"/login",component:ie}),Object(y.jsx)(D.b,{exact:!0,path:"/SearchResultPage",component:ae}),Object(y.jsxs)(le,{children:[Object(y.jsx)(D.b,{exact:!0,path:"/profile",component:re}),Object(y.jsx)(D.b,{exact:!0,path:"/BestFilms",component:V}),Object(y.jsx)(D.b,{exact:!0,path:"/BestSerials",component:Z}),Object(y.jsx)(D.b,{exact:!0,path:"/Discussions",component:K})]})]})}),Object(y.jsx)(B,{})]})})},de=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),i(e),s(e),n(e),a(e)}))},je=c(10),be=c(15),ue=c(34),he=Object(je.combineReducers)({testReducer:N,userReducer:S}),me=Object(je.createStore)(he,Object(ue.composeWithDevTools)(Object(je.applyMiddleware)(be.a)));a.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(o.a,{store:me,children:Object(y.jsx)(oe,{})})}),document.getElementById("root")),de()}},[[69,1,2]]]);
//# sourceMappingURL=main.689e13a8.chunk.js.map