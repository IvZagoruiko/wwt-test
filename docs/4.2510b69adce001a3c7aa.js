(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ry1Y:function(n,t,a){"use strict";a.r(t),a.d(t,"HomePageModule",function(){return Q});var o=a("ofXK"),e=a("tyNb"),c=a("fXoL"),r=a("6qqp"),i=a("bTqV");function l(n,t){if(1&n&&(c.Rb(0,"li"),c.qc(1),c.Qb()),2&n){const n=t.$implicit;c.Cb(1),c.rc(n)}}let s=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["app-side-bar-list"]],inputs:{data:"data"},decls:5,vars:2,consts:[[1,"container"],[1,"font-22-bold","list-title"],[1,"font-14","list"],[4,"ngFor","ngForOf"]],template:function(n,t){1&n&&(c.Rb(0,"div",0),c.Rb(1,"p",1),c.qc(2),c.Qb(),c.Rb(3,"ul",2),c.oc(4,l,2,1,"li",3),c.Qb(),c.Qb()),2&n&&(c.Cb(2),c.rc(null==t.data?null:t.data.title),c.Cb(2),c.ec("ngForOf",null==t.data?null:t.data.items))},directives:[o.h],styles:[".container[_ngcontent-%COMP%]{margin:45px 40px 0;color:#fff}.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{margin-left:16px}.container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{margin-bottom:8px}.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker{color:#fb6d3a}"]}),n})();function p(n,t){if(1&n&&(c.Rb(0,"div",6),c.Rb(1,"span",7),c.qc(2),c.Qb(),c.Rb(3,"a",8),c.qc(4),c.Qb(),c.Qb()),2&n){const n=t.$implicit,a=c.bc();c.Cb(2),c.rc(n.label),c.Cb(1),c.ec("href",n.ref,c.jc)("target",a.getTarget(n.ref)),c.Cb(1),c.rc(n.text)}}function b(n,t){1&n&&c.Nb(0,"app-side-bar-list",9),2&n&&c.ec("data",t.$implicit)}let d=(()=>{class n{getTarget(n){return-1!==n.search(/tel: | mailto: /)?"_self":"_blank"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["app-side-bar"]],inputs:{data:"data"},decls:7,vars:2,consts:[[1,"side-bar"],[1,"photo"],[1,"contacts"],[1,"font-22-bold","contacts-title"],["class","font-14",4,"ngFor","ngForOf"],[3,"data",4,"ngFor","ngForOf"],[1,"font-14"],[1,"contact-type"],[1,"contact-link",3,"href","target"],[3,"data"]],template:function(n,t){1&n&&(c.Rb(0,"aside",0),c.Nb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"p",3),c.qc(4,"Contacts"),c.Qb(),c.oc(5,p,5,4,"div",4),c.Qb(),c.oc(6,b,1,1,"app-side-bar-list",5),c.Qb()),2&n&&(c.Cb(5),c.ec("ngForOf",null==t.data?null:t.data.contacts),c.Cb(1),c.ec("ngForOf",null==t.data?null:t.data.lists))},directives:[o.h,s],styles:[".side-bar[_ngcontent-%COMP%]{width:370px;padding:40px 0;background:#1e2939}.side-bar[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{height:300px;background:url(/assets/images/photo.png) no-repeat 50%;background-size:contain;background-position-y:-2px}.side-bar[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]{margin:51px 40px 0;color:#fff}.side-bar[_ngcontent-%COMP%]   .contacts-title[_ngcontent-%COMP%]{margin-bottom:8px}.side-bar[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .contact-type[_ngcontent-%COMP%]{margin-right:10px}.side-bar[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%]{color:#fff;opacity:.5;text-decoration:none}"]}),n})();function u(n,t){if(1&n&&(c.Rb(0,"li"),c.qc(1),c.Qb()),2&n){const n=t.$implicit;c.Cb(1),c.rc(n)}}let g=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["app-work"]],inputs:{data:"data"},decls:9,vars:4,consts:[[1,"container"],[1,"font-16-bold"],[1,"color-orange"],[1,"font-12","period"],[1,"font-14","duties"],[4,"ngFor","ngForOf"]],template:function(n,t){1&n&&(c.Rb(0,"div",0),c.Rb(1,"p",1),c.qc(2),c.Rb(3,"span",2),c.qc(4),c.Qb(),c.Qb(),c.Rb(5,"p",3),c.qc(6),c.Qb(),c.Rb(7,"ul",4),c.oc(8,u,2,1,"li",5),c.Qb(),c.Qb()),2&n&&(c.Cb(2),c.sc(" ",null==t.data?null:t.data.position," "),c.Cb(2),c.rc(null==t.data?null:t.data.company),c.Cb(2),c.rc(null==t.data?null:t.data.period),c.Cb(2),c.ec("ngForOf",null==t.data?null:t.data.duties))},directives:[o.h],styles:[".container[_ngcontent-%COMP%]{margin-top:16px}.container[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]{margin-top:11px;color:#a8a8a8}.container[_ngcontent-%COMP%]   .duties[_ngcontent-%COMP%]{margin-top:8px;margin-left:16px;color:#595959}.container[_ngcontent-%COMP%]   .duties[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker{font-weight:700;font-size:14px;line-height:24px}"]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["app-institution"]],inputs:{data:"data"},decls:10,vars:4,consts:[[1,"container"],[1,"font-16-bold","color-orange"],[1,"font-14-bold","specialty"],[1,"font-12","period"],[1,"color-black"]],template:function(n,t){1&n&&(c.Rb(0,"div",0),c.Rb(1,"p",1),c.qc(2),c.Qb(),c.Rb(3,"p",2),c.qc(4),c.Qb(),c.Rb(5,"p",3),c.qc(6),c.Rb(7,"span",4),c.qc(8,"|"),c.Qb(),c.qc(9),c.Qb(),c.Qb()),2&n&&(c.Cb(2),c.rc(null==t.data?null:t.data.name),c.Cb(2),c.rc(null==t.data?null:t.data.specialty),c.Cb(2),c.sc(" ",null==t.data?null:t.data.period," "),c.Cb(3),c.sc(" ",null==t.data?null:t.data.country," "))},styles:[".container[_ngcontent-%COMP%]{margin-top:12px}.container[_ngcontent-%COMP%]   .specialty[_ngcontent-%COMP%]{margin-top:11px}.container[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]{margin-top:11px;color:#a8a8a8}"]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["app-course"]],inputs:{data:"data"},decls:5,vars:3,consts:[[1,"container"],["target","_blank",1,"font-16-bold","course-link",3,"href"],[1,"font-12","period"]],template:function(n,t){1&n&&(c.Rb(0,"div",0),c.Rb(1,"a",1),c.qc(2),c.Qb(),c.Rb(3,"p",2),c.qc(4),c.Qb(),c.Qb()),2&n&&(c.Cb(1),c.ec("href",null==t.data?null:t.data.link,c.jc),c.Cb(1),c.rc(null==t.data?null:t.data.name),c.Cb(2),c.rc(null==t.data?null:t.data.period))},styles:[".container[_ngcontent-%COMP%]{margin-top:10px}.container[_ngcontent-%COMP%]   .course-link[_ngcontent-%COMP%]{color:#000;text-decoration:none}.container[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]{margin-top:11px;color:#a8a8a8}"]}),n})();function m(n,t){1&n&&c.Nb(0,"app-work",7),2&n&&c.ec("data",t.$implicit)}function O(n,t){1&n&&c.Nb(0,"app-institution",7),2&n&&c.ec("data",t.$implicit)}function _(n,t){1&n&&c.Nb(0,"app-course",7),2&n&&c.ec("data",t.$implicit)}let M=(()=>{class n{constructor(){this.data=r.a}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["app-summary"]],decls:31,vars:7,consts:[[1,"container","column"],[1,"download"],[1,"text-center"],[1,"links"],["href","assets/documents/Ivan%20Zahoruiko%20cv.docx.pdf","target","_blank","mat-flat-button",""],["href","assets/documents/Ivan%20Zahoruiko%20cv.docx","target","_blank","mat-flat-button",""],[1,"summary"],[3,"data"],[1,"content"],[1,"font-14-bold"],[1,"font-45-bold","my-name"],[1,"font-14","info-about-me"],[1,"section"],[1,"font-22-bold"],[3,"data",4,"ngFor","ngForOf"]],template:function(n,t){1&n&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"p",2),c.qc(3,"Download summary"),c.Qb(),c.Rb(4,"div",3),c.Rb(5,"a",4),c.qc(6,"Download PDF"),c.Qb(),c.Rb(7,"a",5),c.qc(8,"Download Word"),c.Qb(),c.Qb(),c.Qb(),c.Rb(9,"div",6),c.Nb(10,"app-side-bar",7),c.Rb(11,"div",8),c.Rb(12,"div"),c.Rb(13,"p",9),c.qc(14),c.Qb(),c.Rb(15,"p",10),c.qc(16),c.Qb(),c.Rb(17,"p",11),c.qc(18),c.Qb(),c.Qb(),c.Rb(19,"div",12),c.Rb(20,"p",13),c.qc(21,"Work Experience"),c.Qb(),c.oc(22,m,1,1,"app-work",14),c.Qb(),c.Rb(23,"div",12),c.Rb(24,"p",13),c.qc(25,"Education"),c.Qb(),c.oc(26,O,1,1,"app-institution",14),c.Qb(),c.Rb(27,"div",12),c.Rb(28,"p",13),c.qc(29,"Courses"),c.Qb(),c.oc(30,_,1,1,"app-course",14),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&n&&(c.Cb(10),c.ec("data",null==t.data?null:t.data.sideBar),c.Cb(4),c.rc(null==t.data?null:t.data.position),c.Cb(2),c.rc(null==t.data?null:t.data.name),c.Cb(2),c.rc(null==t.data?null:t.data.aboutMe),c.Cb(4),c.ec("ngForOf",null==t.data?null:t.data.experience),c.Cb(4),c.ec("ngForOf",null==t.data?null:t.data.education),c.Cb(4),c.ec("ngForOf",null==t.data?null:t.data.courses))},directives:[i.a,d,o.h,g,f,C],styles:[".container[_ngcontent-%COMP%]{width:1200px;margin:40px auto}.container[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]{width:350px;align-self:center}.container[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{margin-top:15px;display:flex;justify-content:space-around}.container[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{margin-top:15px;display:flex;box-shadow:6px 6px 20px rgba(0,0,0,.1)}.container[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:102px 88px 107px;flex-grow:1;background:#fff}.container[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .my-name[_ngcontent-%COMP%]{margin-top:19px}.container[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-about-me[_ngcontent-%COMP%]{margin-top:24px;color:#595959}.container[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{margin-top:50px}"]}),n})();const P=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["app-home-page"]],decls:1,vars:0,template:function(n,t){1&n&&c.Nb(0,"app-summary")},directives:[M],styles:[""]}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({imports:[[e.d.forChild(P)],e.d]}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({imports:[[o.b,i.c,x]]}),n})()}}]);