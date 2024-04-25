import './polyfills.server.mjs';
import{B as T,C as z,D as x,E as I,F as H,G as D,J as L,P as A,a as d,b as M,c as O,d as _,e as C,f as u,g as p,h as y,i as S,j as g,k as t,l as e,m as i,n as E,o as l,p as P,q as n,r as m,s as v,z as k}from"./chunk-L7B66GZ2.mjs";var B=a=>({open:a}),W=a=>({"navbar-dispaly":a}),j=(()=>{let o=class o{ngAfterViewInit(){document.querySelectorAll(".navigation li a").forEach(r=>{r.addEventListener("click",s=>{s.preventDefault(),console.log("You clicked a button!")})})}constructor(c){this.viewportScroller=c,this.isOpen=!1}scrollToElement(c){this.viewportScroller.scrollToAnchor(c)}ngOnInit(){typeof window<"u"&&window.addEventListener("scroll",()=>{let c=document.querySelector(".site-header");(window.scrollY||document.documentElement.scrollTop)>95?(console.log("User has scrolled down past 90 pixels"),c.classList.add("scrolled")):c.classList.remove("scrolled")})}toggleNav(){this.isOpen=!this.isOpen}};o.\u0275fac=function(r){return new(r||o)(y(I))},o.\u0275cmp=d({type:o,selectors:[["app-header"]],standalone:!0,features:[m],decls:20,vars:6,consts:[[1,"site-header"],[1,"header-title"],["type","button","data-mdb-toggle","collapse","data-mdb-target","#navbarToggleExternalContent10","aria-controls","navbarToggleExternalContent10","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","second-button",3,"click"],[1,"animated-icon2",3,"ngClass"],[1,"navbar",3,"ngClass"],[1,"navigation"],["href","javascript:void(0);",3,"click"]],template:function(r,s){r&1&&(t(0,"header",0)(1,"h1",1),n(2,"DENTAL HEALTH CLINIC"),e(),t(3,"button",2),l("click",function(){return s.toggleNav()}),t(4,"div",3),i(5,"span")(6,"span")(7,"span")(8,"span"),e()(),t(9,"nav",4)(10,"ul",5)(11,"li")(12,"a",6),l("click",function(){return s.scrollToElement("Services")}),n(13,"Service"),e()(),t(14,"li")(15,"a",6),l("click",function(){return s.scrollToElement("about")}),n(16,"About"),e()(),t(17,"li")(18,"a",6),l("click",function(){return s.scrollToElement("footer")}),n(19,"Contact"),e()()()()()),r&2&&(p(4),g("ngClass",v(2,B,s.isOpen)),p(5),g("ngClass",v(4,W,s.isOpen)))},dependencies:[x,T],styles:[".site-header[_ngcontent-%COMP%]{display:flex;margin:auto;align-items:center;justify-content:space-evenly;position:fixed;width:100%;z-index:9}button.second-button[_ngcontent-%COMP%]{display:none}.navigation[_ngcontent-%COMP%]{display:flex;list-style:none}.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2rem}.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-size:1.5rem}.scrolled[_ngcontent-%COMP%]{background-color:#005d54!important;transition:background-color .6s ease-in-out}@media screen and (max-width: 767px){button.second-button[_ngcontent-%COMP%]{display:block}.site-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:1rem 2rem}.site-header[_ngcontent-%COMP%]{align-items:flex-start}.header-title[_ngcontent-%COMP%]{padding:2rem 3.75rem;text-align:center}.animated-icon2[_ngcontent-%COMP%]{width:30px;height:20px;position:relative;margin:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer}.animated-icon2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;position:absolute;height:3px;width:100%;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out}.animated-icon2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#3e2723}.animated-icon2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:0}.animated-icon2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2), .animated-icon2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){top:10px}.animated-icon2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){top:20px}.animated-icon2.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:11px;width:0%;left:50%}.animated-icon2.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.animated-icon2.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.animated-icon2.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){top:11px;width:0%;left:50%}.second-button[_ngcontent-%COMP%]{background-color:transparent;border:none;position:fixed;top:3.8rem;right:1.5rem;z-index:5}.navigation[_ngcontent-%COMP%]{display:inline;list-style-type:none;flex-wrap:wrap;position:relative;top:6rem}.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1rem 1rem 1rem 4.5rem}.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.navbar[_ngcontent-%COMP%]{font-size:2rem;position:fixed;right:-.5rem;background-color:#dcdcdce8;width:0rem;transition:.4s ease-in;top:0;height:100vh}.navbar.navbar-dispaly[_ngcontent-%COMP%]{width:68%;right:0!important;display:block;transition:.4s ease-out}}"]});let a=o;return a})();var F=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-footer"]],standalone:!0,features:[m],decls:83,vars:0,consts:[["id","footer",1,"footer"],[1,"footer__container"],[1,"footer__contact"],[1,"footer__contact-heading"],[1,"footer__contact-list"],[1,"footer__contact-item"],[1,"footer__contact-text"],["href","https://maps.app.goo.gl/N81mUctjNKZTCEpi9"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-building"],["d","M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"],["d","M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"],["href","tel:+919424438829"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-telephone"],["d","M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"],["href","https://api.whatsapp.com/send?phone=+919424438829&text=Hello%20Dental%20Health%20Clinic","rel","noopener"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-whatsapp"],["d","M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"],[1,"footer__hours"],[1,"footer__hours-heading"],[1,"footer__hours-table"],[1,"footer__hours-day"],[1,"footer__hours-time"],[1,"footer__getting-here"],[1,"footer__getting-here-heading"],["src",u`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.0832539832027!2d78.83157075200378!3d24.758334490017642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39784f5756bddd43%3A0x826b0dc4cc642eb4!2sDENTAL%20HEALTH%20CLINIC!5e0!3m2!1sen!2sin!4v1712303291414!5m2!1sen!2sin`,"width","90%","height","90%","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],[1,"footer__copyright"],[1,"footer__copyright-text"]],template:function(r,s){r&1&&(t(0,"footer",0)(1,"div",1)(2,"div",2)(3,"h3",3),n(4,"Contact"),e(),t(5,"ul",4)(6,"li",5)(7,"span",6)(8,"a",7)(9,"address"),_(),t(10,"svg",8),i(11,"path",9)(12,"path",10),e(),n(13," Shiddharth Complex, Civil Line"),C(),i(14,"br"),n(15,"Tikamgarh, Madhya Pradesh 472001"),e()()()(),t(16,"li",5)(17,"span",6)(18,"a",11),_(),t(19,"svg",12),i(20,"path",13),e(),n(21," +91 94244 38829"),e()()(),C(),t(22,"li",5)(23,"span",6)(24,"a",14),_(),t(25,"svg",15),i(26,"path",16),e(),n(27," +91 94244 38829"),e()()()()(),C(),t(28,"div",17)(29,"h3",18),n(30,"Hours"),e(),t(31,"table",19)(32,"thead")(33,"tr")(34,"th",20),n(35,"Day"),e(),t(36,"th",21),n(37,"Time"),e()()(),t(38,"tbody")(39,"tr")(40,"td",20),n(41,"Monday"),e(),t(42,"td",21),n(43,"7:30 am - 4:30 pm"),e()(),t(44,"tr")(45,"td",20),n(46,"Tuesday"),e(),t(47,"td",21),n(48,"7:30 am - 4:30 pm"),e()(),t(49,"tr")(50,"td",20),n(51,"Wednesday"),e(),t(52,"td",21),n(53,"7:30 am - 4:30 pm"),e()(),t(54,"tr")(55,"td",20),n(56,"Thursday"),e(),t(57,"td",21),n(58,"7:30 am - 4:30 pm"),e()(),t(59,"tr")(60,"td",20),n(61,"Friday"),e(),t(62,"td",21),n(63,"7:30 am - 2:00 pm"),e()(),t(64,"tr")(65,"td",20),n(66,"Saturday"),e(),t(67,"td",21),n(68,"Closed"),e()(),t(69,"tr")(70,"td",20),n(71,"Sunday"),e(),t(72,"td",21),n(73,"Closed"),e()()()()(),t(74,"div",22)(75,"h3",23),n(76,"Getting Here"),e(),i(77,"iframe",24),e()(),t(78,"div",25)(79,"p",26),n(80," Copyright \xA9 2024 Dental Health Clinic "),e(),t(81,"p",26),n(82," All Rights Reserved | Privacy Policy "),e()()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#caebd3;padding:8.5rem 0 0}.footer__container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 auto;text-align:center}@media (max-width: 768px){.footer[_ngcontent-%COMP%]{padding:9rem 0 0}.footer__container[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}.footer__contact[_ngcontent-%COMP%], .footer__hours[_ngcontent-%COMP%], .footer__getting-here[_ngcontent-%COMP%]{flex:1;margin-bottom:4rem}@media (max-width: 768px){.footer__contact[_ngcontent-%COMP%], .footer__hours[_ngcontent-%COMP%], .footer__getting-here[_ngcontent-%COMP%]{width:100%;margin-bottom:0}.footer__container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem}}.footer__container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem}.footer__contact-heading[_ngcontent-%COMP%], .footer__hours-heading[_ngcontent-%COMP%], .footer__getting-here-heading[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:1rem}.footer__contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:10px}.footer__contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-weight:700}.footer__contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:20px;width:20px}.footer__contact-list[_ngcontent-%COMP%], .footer__hours-table[_ngcontent-%COMP%]{list-style:none;padding:0;margin:auto}.footer__contact-item[_ngcontent-%COMP%], .footer__hours-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:.5rem;justify-content:center}.footer__contact-text[_ngcontent-%COMP%], .footer__hours-time[_ngcontent-%COMP%]{margin-left:1rem}.footer__hours-day[_ngcontent-%COMP%], .footer__hours-time[_ngcontent-%COMP%]{padding:0 1rem 0rem}.footer__hours-day[_ngcontent-%COMP%]{font-weight:700}.footer__getting-here-map-link[_ngcontent-%COMP%]{color:#333;text-decoration:none;font-weight:700}.footer__getting-here-map-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.footer__copyright[_ngcontent-%COMP%]{text-align:center;padding:1rem;background-color:#005d54}@media (max-width: 768px){.footer__copyright[_ngcontent-%COMP%]{margin-top:0}}.footer__copyright-text[_ngcontent-%COMP%]{margin-bottom:.5rem}.footer__container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:2rem}.footer__contact-text[_ngcontent-%COMP%], .footer__hours-time[_ngcontent-%COMP%], .footer__hours-day[_ngcontent-%COMP%]{font-size:1.5rem}"]});let a=o;return a})();function q(a,o){if(a&1){let w=E();t(0,"div",22),l("click",function(r){M(w);let s=P();return O(s.closeOnOutsideClick(r))}),t(1,"div",23)(2,"button",24),l("click",function(){M(w);let r=P();return O(r.closeModal())}),i(3,"img",25),e(),t(4,"iframe",26),n(5,"Loading\u2026"),e()()()}}var f=(()=>{let o=class o{constructor(){this.isOpen=!1}openModal(){this.isOpen=!0}closeModal(){this.isOpen=!1}closeOnOutsideClick(c){c.target===c.currentTarget&&this.closeModal()}ngOnInit(){}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-home"]],standalone:!0,features:[m],decls:98,vars:1,consts:[[1,"section-first"],["src","assets/images/section1view.webp","alt","background","srcset","",2,"position","absolute","inset","0px","box-sizing","border-box","padding","0px","border","none","margin","auto","display","block","width","0px","height","0px","min-width","100%","max-width","100%","min-height","100%","max-height","100%","object-fit","cover","object-position","50% 50%"],[1,"sf-content"],[3,"click"],["id","about",1,"section-second"],[1,"sf-content","section2view"],["src","assets/images/section2view.webp","alt","","srcset",""],["id","Services",1,"section-third"],[1,"container"],[1,"card"],["src","assets/images/Teeth Whitening Services.webp","alt","Image description"],[1,"card-content"],["href","#"],["src","assets/images/Dental Implants.webp","alt","Image description"],["src","assets/images/Orthodontic Treatment.webp","alt","Image description"],["src","assets/images/Dental Check-ups.webp","alt","Image description"],["src","assets/images/Root Canal Therapy.webp","alt","Image description"],["src","assets/images/Cosmetic Dentistry.webp","alt","Image description"],["src","assets/images/section1view.webp","alt","Image description"],[1,"section-fourth"],["src","assets/images/Olivia.webp","alt","","srcset",""],["class","modal",3,"click",4,"ngIf"],[1,"modal",3,"click"],[1,"modal-content"],[1,"modal-close-button",3,"click"],["src","assets/images/close_btn.svg","alt","","srcset",""],["src",u`https://docs.google.com/forms/d/e/1FAIpQLSctRUxDSJjOnUZtwm1tjgYO1pK0RbskTgu8H1BYweP1_4hyVQ/viewform?embedded=true`,"width","auto","height","auto","frameborder","0","marginheight","0","marginwidth","0"]],template:function(r,s){r&1&&(t(0,"main")(1,"section",0),i(2,"img",1),t(3,"article",2)(4,"h2"),n(5,"Achieve Your Perfect Smile"),e(),t(6,"p"),n(7,"Experience comprehensive dental care with modern equipment and friendly professionals."),e(),t(8,"button",3),l("click",function(){return s.openModal()}),n(9,"Book Now"),e()()(),t(10,"section",4)(11,"article",2)(12,"h2"),n(13,"About us"),e(),t(14,"p"),n(15,"Welcome to Dental Health Clinic, your trusted dental care provider in Tikamgarh District, MP. With a commitment to excellence and a focus on patient comfort, our experienced team is dedicated to delivering top-quality dental services tailored to your individual needs."),e(),i(16,"br"),t(17,"p"),n(18,"From routine check-ups to advanced treatments, we strive to create a welcoming and professional environment for all our patients. Your oral health is our priority, and we look forward to helping you achieve and maintain a beautiful, healthy smile."),e()(),t(19,"article",5),i(20,"img",6),e()(),t(21,"section",7)(22,"h2"),n(23,"Services"),e(),t(24,"article",2)(25,"div",8)(26,"div",9),i(27,"img",10),t(28,"div",11)(29,"h3"),n(30,"Teeth Whitening Services"),e(),t(31,"a",12),n(32,"More Info"),e()()(),t(33,"div",9),i(34,"img",13),t(35,"div",11)(36,"h3"),n(37,"Dental Implants"),e(),t(38,"a",12),n(39,"More Info"),e()()(),t(40,"div",9),i(41,"img",14),t(42,"div",11)(43,"h3"),n(44,"Orthodontic Treatment"),e(),t(45,"a",12),n(46,"More Info"),e()()(),t(47,"div",9),i(48,"img",15),t(49,"div",11)(50,"h3"),n(51,"Dental Check-ups"),e(),t(52,"a",12),n(53,"More Info"),e()()(),t(54,"div",9),i(55,"img",16),t(56,"div",11)(57,"h3"),n(58,"Root Canal Therapy"),e(),t(59,"a",12),n(60,"More Info"),e()()(),t(61,"div",9),i(62,"img",17),t(63,"div",11)(64,"h3"),n(65,"Cosmetic Dentistry"),e(),t(66,"a",12),n(67,"More Info"),e()()(),t(68,"div",9),i(69,"img",18),t(70,"div",11)(71,"h3"),n(72,"Extraction"),e(),t(73,"a",12),n(74,"More Info"),e()()(),t(75,"div",9),i(76,"img",18),t(77,"div",11)(78,"h3"),n(79,"X-Ray"),e(),t(80,"a",12),n(81,"More Info"),e()()(),t(82,"div",9),i(83,"img",18),t(84,"div",11)(85,"h3"),n(86,"Tooth Replacement"),e(),t(87,"a",12),n(88,"More Info"),e()()()()()(),t(89,"section",19)(90,"article",2)(91,"div"),i(92,"img",20),e(),t(93,"p"),n(94,"Dental Health Clinic is phenomenal! Their dental services are exceptional and the staff is highly skilled and friendly. I was impressed by their attention to detail and the comfortable atmosphere. Thank you for providing such excellent dental care!"),e(),t(95,"p"),n(96,"- Olivia"),e()()()(),S(97,q,6,0,"div",21)),r&2&&(p(97),g("ngIf",s.isOpen))},dependencies:[x,z],styles:[".section-first[_ngcontent-%COMP%], .section-second[_ngcontent-%COMP%], .section-third[_ngcontent-%COMP%], .section-fourth[_ngcontent-%COMP%], .section-fifth[_ngcontent-%COMP%]{position:relative;width:100%;height:auto;top:6rem}.section-first[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]{position:relative;padding:2rem 1rem 4rem 2rem;background-color:#8f4cf3d4;height:100%}.section-first[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem;width:70%;color:#f5f5f5;padding:1rem 0}.section-first[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:70%;font-size:2rem;color:#f5f5f5;padding:1rem 0}.section-first[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:20px;width:130px;height:55px;border-radius:5px;background-color:#fff;cursor:pointer;padding:1rem 0;font-weight:700;border-width:0;box-shadow:#32325d40 0 50px 100px -20px,#0000004d 0 30px 60px -30px,#0a254059 0 -2px 6px inset}.section-first[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{box-shadow:#ffd7b980 0 50px 100px -20px,#ffd7b94d 0 30px 60px -30px,#ffd7b959 0 -2px 6px inset}.section-second[_ngcontent-%COMP%]{display:flex;padding:2rem 1rem 4rem 2rem;background-color:#607d8b85}.section-second[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]{position:relative;height:100%}.section-second[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;padding:1rem 0}.section-second[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;padding:1rem 0}.section-second[_ngcontent-%COMP%]   .section2view[_ngcontent-%COMP%]{width:100%;margin-top:6rem;height:20rem;padding-left:1rem}.section2view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:0;inset:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center center;border-radius:4rem}.section-third[_ngcontent-%COMP%]{background-color:#fff}.section-third[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-size:2.5rem;padding-top:3rem}.container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;margin:0 auto;justify-content:space-around}.card[_ngcontent-%COMP%]{transition:2s;width:255px;margin:50px;background-color:#f5f5f5;border-radius:20px;box-shadow:#0006 0 2px 4px,#0000004d 0 7px 13px -3px,#0003 0 -3px inset}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:150px;object-fit:cover;border-radius:20px 20px 0 0}.card-content[_ngcontent-%COMP%]{padding:20px;text-align:center}.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-bottom:10px}.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:15px}.card-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#00b894}.card[_ngcontent-%COMP%]:hover{transition:0s;background-color:#adff2f;box-shadow:#32325d40 0 50px 100px -20px,#0000004d 0 30px 60px -30px,#0a254059 0 -2px 6px inset}.section-third[_ngcontent-%COMP%]{height:auto;width:100%}.section-third[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]{padding:1rem;width:100%}.section-fourth[_ngcontent-%COMP%]{display:flex;background-color:#2a242e}.section-fourth[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]{padding:2rem 1rem 4rem 2rem;width:100%}.section-fourth[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:12%;clip-path:circle()}.section-fourth[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2rem;color:#fff;padding:1rem 0;width:80%}.section-fifth[_ngcontent-%COMP%]{display:flex;background-color:#282629;justify-content:space-evenly;padding:2rem}.section-fifth[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]{border:2px solid blue;width:40%;border-radius:5px}@media (max-width: 768px){.section-fourth[_ngcontent-%COMP%]   .sf-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{top:7rem}.section-second[_ngcontent-%COMP%]{flex-direction:column}.section-second[_ngcontent-%COMP%]   .section2view[_ngcontent-%COMP%]{margin-top:2rem}}.hidden[_ngcontent-%COMP%]{display:none;opacity:0}.modal[_ngcontent-%COMP%]{position:fixed;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);top:0;left:0;width:100%;height:100vh;background-color:#0000004d;display:flex;justify-content:center;align-items:center;transition:opacity .3s ease-in-out}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:5px;box-shadow:0 2px 5px #0003;animation:_ngcontent-%COMP%_modal-open .3s ease-in-out}.modal[_ngcontent-%COMP%]   .modal-close-button[_ngcontent-%COMP%]{float:right;height:28px;background:none;border:none;cursor:pointer}@keyframes _ngcontent-%COMP%_modal-open{0%{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}"]});let a=o;return a})();var R=(()=>{let o=class o{constructor(){this.title="dentalhealth-tkmg"}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-root"]],standalone:!0,features:[m],decls:3,vars:0,template:function(r,s){r&1&&i(0,"app-header")(1,"app-home")(2,"app-footer")},dependencies:[j,f,F]});let a=o;return a})();var V=[{path:"home",component:f},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:f}];var N={providers:[A(V),D()]};var G={providers:[L()]},U=k(N,G);var K=()=>H(R,U),Ct=K;export{Ct as a};
