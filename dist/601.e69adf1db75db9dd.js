"use strict";(self.webpackChunksb_admin_angular4_bootstrap4=self.webpackChunksb_admin_angular4_bootstrap4||[]).push([[601],{8601:(E,A,a)=>{a.r(A),a.d(A,{ApiInfoModule:()=>yt});var e=a(6814),h=a(6223),f=a(3386),x=a(4611),Z=a(6547),v=a(5914),y=a(3232),T=a(2660),t=a(8830),I=a(6352),b=a(5245),O=a(4192),w=a(8881);function q(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",13)(1,"swadit-object-editor",14),t.NdJ("objChange",function(r){t.CHM(i);const l=t.oxw();return t.KtG(l.api.info=r)}),t.qZA()()}if(2&n){const i=t.oxw();t.xp6(1),t.Q6J("schema",i.apis.schemas.info)("obj",i.api.info)("title",!1)}}function J(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",13)(1,"div",15)(2,"div",16)(3,"swadit-object-editor",17),t.NdJ("objChange",function(r){t.CHM(i);const l=t.oxw();return t.KtG(l.api.info.contact=r)}),t.qZA()()(),t.TgZ(4,"div",18)(5,"div",19)(6,"swadit-object-editor",17),t.NdJ("objChange",function(r){t.CHM(i);const l=t.oxw();return t.KtG(l.api.info.license=r)}),t.qZA()(),t.TgZ(7,"div",19)(8,"swadit-object-editor",17),t.NdJ("objChange",function(r){t.CHM(i);const l=t.oxw();return t.KtG(l.api.externalDocs=r)}),t.qZA()()()()}if(2&n){const i=t.oxw();t.xp6(3),t.Q6J("schema",i.apis.schemas.contact)("obj",i.api.info.contact)("card",!0),t.xp6(3),t.Q6J("schema",i.apis.schemas.license)("obj",i.api.info.license)("card",!0),t.xp6(2),t.Q6J("schema",i.apis.schemas.externalDocs)("obj",i.api.externalDocs)("card",!0)}}function U(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",13)(1,"swadit-object-editor",20),t.NdJ("objChange",function(r){t.CHM(i);const l=t.oxw(2);return t.KtG(l.api=r)}),t.qZA()()}if(2&n){const i=t.oxw(2);t.xp6(1),t.Q6J("schema",i.apis.schemas.root)("obj",i.api)}}function D(n,s){1&n&&(t.TgZ(0,"li",5)(1,"a",6),t._uU(2,"General"),t.qZA(),t.YNc(3,U,2,2,"ng-template",7),t.qZA())}function _(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",13)(1,"swadit-array-editor",20),t.NdJ("objChange",function(r){t.CHM(i);const l=t.oxw();return t.KtG(l.api.tags=r)}),t.qZA()()}if(2&n){const i=t.oxw();t.xp6(1),t.Q6J("schema",i.apis.schemas.tags)("obj",i.api.tags)}}function m(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",13)(1,"p"),t._uU(2,"Security Definitions:"),t.qZA(),t.TgZ(3,"swadit-object-editor",20),t.NdJ("objChange",function(r){t.CHM(i);const l=t.oxw(2);return t.KtG(l.api.securityDefinitions=r)}),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Default Security Requirements:"),t.qZA(),t.TgZ(6,"swadit-security-editor",21),t.NdJ("objChange",function(r){t.CHM(i);const l=t.oxw(2);return t.KtG(l.api.security=r)}),t.qZA()()}if(2&n){const i=t.oxw(2);t.xp6(3),t.Q6J("schema",i.apis.schemas.securityDefinitions)("obj",i.api.securityDefinitions),t.xp6(3),t.Q6J("schema",i.apis.schemas.security)("obj",i.api.security)("securityDefinitions",i.api.securityDefinitions)}}function c(n,s){1&n&&(t.TgZ(0,"li",5)(1,"a",6),t._uU(2,"Security"),t.qZA(),t.YNc(3,m,7,5,"ng-template",7),t.qZA())}let p=(()=>{class n{static#t=this.modalOptions={size:"lg"};constructor(i,o){this.activeModal=i,this.apis=o,console.log(o.current),this.api=(0,T.Z)(o.current),this.api.info||(this.api.info={}),this.api.info.contact||(this.api.info.contact={}),this.api.info.license||(this.api.info.license={}),this.api.externalDocs||(this.api.externalDocs={}),this.api.tags||(this.api.tags=[]),this.apis.isOas2&&(this.api.securityDefinitions||(this.api.securityDefinitions={}),this.api.security||(this.api.security=[])),Object.keys(this.apis.schemas.root.properties).forEach(r=>{const l=this.apis.resolveObj(this.apis.schemas.root.properties[r],this.apis.schemas.root);"object"!=l.type||this.api[r]?"array"==l.type&&!this.api[r]&&(this.api[r]=[]):this.api[r]={}})}ngOnInit(){}ok(){console.log("ApiInfoEditComponent.ok()");const i=(0,T.Z)(this.api);this.apis.current.info=i.info,this.apis.current.externalDocs=i.externalDocs,this.apis.current.tags=i.tags,this.apis.current.securityDefinitions=i.securityDefinitions,this.apis.current.security=i.security,Object.keys(this.apis.schemas.root.properties).forEach(o=>{this.apis.current[o]=i[o]}),this.apis.cleanUp(this.apis.schemas.contact,this.apis.current.info.contact),this.apis.cleanUp(this.apis.schemas.license,this.apis.current.info.license),this.apis.cleanUp(this.apis.schemas.info,this.apis.current.info),this.apis.cleanUp(this.apis.schemas.externalDocs,this.apis.current.externalDocs),this.apis.cleanUp(this.apis.schemas.tags,this.apis.current.tags),this.apis.isOas2&&(this.apis.cleanUp(this.apis.schemas.securityDefinitions,this.apis.current.securityDefinitions),this.apis.cleanUp(this.apis.schemas.security,this.apis.current.security)),this.apis.cleanUp(this.apis.schemas.root,this.apis.current),this.apis.isOas2&&(0==Object.keys(this.apis.current.info.contact).length&&delete this.apis.current.info.contact,0==Object.keys(this.apis.current.info.license).length&&delete this.apis.current.info.license,0==Object.keys(this.apis.current.externalDocs).length&&delete this.apis.current.externalDocs,0==this.apis.current.tags.length&&delete this.apis.current.tags,0==Object.keys(this.apis.current.securityDefinitions).length&&delete this.apis.current.securityDefinitions,0==this.apis.current.security.length&&delete this.apis.current.security),console.log(this.apis.current),this.activeModal.close("ok")}static#i=this.\u0275fac=function(o){return new(o||n)(t.Y36(f.Kz),t.Y36(I.Q))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-api-info-edit"]],decls:25,vars:5,consts:[[3,"ngSubmit"],["editForm","ngForm"],["id","modal-body",1,"modal-body"],["ngbNav","",1,"nav-tabs"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink",""],["ngbNavContent",""],["ngbNavItem","",4,"ngIf"],[1,"mt-2",3,"ngbNavOutlet"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-warning",3,"disabled","click"],[1,"tab-content"],[3,"schema","obj","title","objChange"],[1,"row"],[1,"col","col-sm-12"],[3,"schema","obj","card","objChange"],[1,"row",2,"margin-top","1rem!important"],[1,"col","col-sm-6"],[3,"schema","obj","objChange"],[3,"schema","obj","securityDefinitions","objChange"]],template:function(o,r){if(1&o&&(t.TgZ(0,"form",0,1),t.NdJ("ngSubmit",function(){return r.ok()}),t.TgZ(2,"div",2)(3,"ul",3,4)(5,"li",5)(6,"a",6),t._uU(7,"Info"),t.qZA(),t.YNc(8,q,2,3,"ng-template",7),t.qZA(),t.TgZ(9,"li",5)(10,"a",6),t._uU(11,"Contact"),t.qZA(),t.YNc(12,J,9,9,"ng-template",7),t.qZA(),t.YNc(13,D,4,0,"li",8),t.TgZ(14,"li",5)(15,"a",6),t._uU(16,"Tags"),t.qZA(),t.YNc(17,_,2,2,"ng-template",7),t.qZA(),t.YNc(18,c,4,0,"li",8),t.qZA(),t._UZ(19,"div",9),t.qZA(),t.TgZ(20,"div",10)(21,"button",11),t._uU(22,"Apply"),t.qZA(),t.TgZ(23,"button",12),t.NdJ("click",function(){return r.activeModal.dismiss("cancel")}),t._uU(24,"Cancel"),t.qZA()()()),2&o){const l=t.MAs(1),It=t.MAs(4);t.xp6(13),t.Q6J("ngIf",r.apis.isOas2),t.xp6(5),t.Q6J("ngIf",r.apis.isOas2),t.xp6(1),t.Q6J("ngbNavOutlet",It),t.xp6(2),t.Q6J("disabled",!l.form.valid),t.xp6(2),t.Q6J("disabled",!l.form.valid)}},dependencies:[e.O5,h._Y,h.JL,h.F,f.uN,f.Pz,f.nv,f.Is,f.Vx,f.tO,f.Dy,b._,O.S,w.D],styles:[".modal-dialog[_ngcontent-%COMP%]{width:98%;height:92%;padding:0}.modal-content[_ngcontent-%COMP%]{height:99%}.tab-content[_ngcontent-%COMP%]{padding-top:.6rem}"]})}return n})();var d=a(3104);function u(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",3),t.NdJ("click",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.edit())}),t._UZ(1,"i",4),t.qZA()}}function g(n,s){if(1&n&&(t.TgZ(0,"span",9),t._uU(1),t.qZA()),2&n){const i=t.oxw(2);t.xp6(1),t.hij(" v",i.apis.current.info.version,"")}}function C(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1," ("),t.TgZ(2,"a",12),t._uU(3),t.qZA(),t._uU(4,") "),t.qZA()),2&n){const i=t.oxw(3);t.xp6(2),t.MGl("href","mailto:",i.apis.current.info.contact.email,"",t.LSH),t.xp6(1),t.Oqu(i.apis.current.info.contact.email)}}function M(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Oqu(i.apis.current.info.contact.url)}}function N(n,s){if(1&n&&(t.TgZ(0,"div",10),t._uU(1),t.YNc(2,C,5,2,"span",11),t.YNc(3,M,2,1,"span",11),t.qZA()),2&n){const i=t.oxw(2);t.xp6(1),t.hij(" ",i.apis.current.info.contact.name," "),t.xp6(1),t.Q6J("ngIf",i.apis.current.info.contact.email),t.xp6(1),t.Q6J("ngIf",i.apis.current.info.contact.url)}}function j(n,s){if(1&n&&t._UZ(0,"markdown",13),2&n){const i=t.oxw(2);t.Q6J("data",i.apis.current.info.description)}}function Q(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.Oqu(i.apis.current.externalDocs.description)}}function Y(n,s){1&n&&t._uU(0,"More")}function P(n,s){if(1&n&&(t.TgZ(0,"div",10)(1,"a",14),t.YNc(2,Q,2,1,"span",15),t.YNc(3,Y,1,0,"ng-template",null,16,t.W1O),t.qZA()()),2&n){const i=t.MAs(4),o=t.oxw(2);t.xp6(1),t.s9C("href",o.apis.current.externalDocs.url,t.LSH),t.xp6(1),t.Q6J("ngIf",o.apis.current.externalDocs.description)("ngIfElse",i)}}function S(n,s){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.hij(" Terms of service: ",i.apis.current.info.termsOfService," ")}}function F(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1," ("),t.TgZ(2,"a",12),t._uU(3),t.qZA(),t._uU(4,") "),t.qZA()),2&n){const i=t.oxw(4);t.xp6(2),t.s9C("href",i.apis.current.info.license.url,t.LSH),t.xp6(1),t.Oqu(i.apis.current.info.license.url)}}function k(n,s){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.YNc(2,F,5,2,"span",11),t.qZA()),2&n){const i=t.oxw(3);t.xp6(1),t.hij(" License: ",i.apis.current.info.license.name," "),t.xp6(1),t.Q6J("ngIf",i.apis.current.info.license.url)}}function $(n,s){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,S,2,1,"p",11),t.YNc(2,k,3,2,"p",11),t.qZA()),2&n){const i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.apis.current.info.termsOfService),t.xp6(1),t.Q6J("ngIf",i.apis.current.info.license)}}function K(n,s){if(1&n&&(t.TgZ(0,"div",5)(1,"h1"),t._uU(2),t.YNc(3,g,2,1,"span",6),t.qZA(),t.YNc(4,N,4,3,"div",7),t.YNc(5,j,1,1,"markdown",8),t.YNc(6,P,5,3,"div",7),t.YNc(7,$,3,2,"div",7),t.qZA()),2&n){const i=t.oxw();t.xp6(2),t.hij("",i.apis.current.info.title," "),t.xp6(1),t.Q6J("ngIf",i.apis.current.info.version),t.xp6(1),t.Q6J("ngIf",i.apis.current.info.contact),t.xp6(1),t.Q6J("ngIf",i.apis.current.info.description),t.xp6(1),t.Q6J("ngIf",i.apis.current.externalDocs),t.xp6(1),t.Q6J("ngIf",i.apis.current.info.termsOfService||i.apis.current.info.license)}}function B(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const i=t.oxw(2).$implicit;t.xp6(1),t.Oqu(i.externalDocs.description)}}function R(n,s){1&n&&t._uU(0,"More")}function L(n,s){if(1&n&&(t.TgZ(0,"div")(1,"a",14),t.YNc(2,B,2,1,"span",15),t.YNc(3,R,1,0,"ng-template",null,22,t.W1O),t.qZA()()),2&n){const i=t.MAs(4),o=t.oxw().$implicit;t.xp6(1),t.s9C("href",o.externalDocs.url,t.LSH),t.xp6(1),t.Q6J("ngIf",o.externalDocs.description)("ngIfElse",i)}}function G(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",20),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",21),t._uU(5),t.qZA(),t.YNc(6,L,5,3,"div",11),t.qZA()()),2&n){const i=s.$implicit;t.xp6(2),t.Oqu(i.name),t.xp6(3),t.Oqu(i.description),t.xp6(1),t.Q6J("ngIf",i.externalDocs)}}function H(n,s){if(1&n&&(t.TgZ(0,"div",17)(1,"h2"),t._uU(2,"Tags"),t.qZA(),t.TgZ(3,"table",18)(4,"tbody"),t.YNc(5,G,7,3,"tr",19),t.qZA()()()),2&n){const i=t.oxw();t.xp6(5),t.Q6J("ngForOf",i.apis.current.tags)}}function z(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const i=s.$implicit;t.xp6(1),t.hij("",i,"\xa0")}}function W(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"schemes"),t.qZA(),t.TgZ(3,"td"),t.YNc(4,z,2,1,"span",19),t.qZA()()),2&n){const i=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",i.apis.current.schemes)}}function X(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"host"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const i=t.oxw(2);t.xp6(4),t.Oqu(i.apis.current.host)}}function V(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"basePath"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const i=t.oxw(2);t.xp6(4),t.Oqu(i.apis.current.basePath)}}function tt(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const i=s.$implicit;t.xp6(1),t.Oqu(i)}}function it(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"consumes"),t.qZA(),t.TgZ(3,"td")(4,"ul",24),t.YNc(5,tt,2,1,"li",19),t.qZA()()()),2&n){const i=t.oxw(2);t.xp6(5),t.Q6J("ngForOf",i.apis.current.consumes)}}function nt(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const i=s.$implicit;t.xp6(1),t.Oqu(i)}}function et(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"produces"),t.qZA(),t.TgZ(3,"td")(4,"ul",24),t.YNc(5,nt,2,1,"li",19),t.qZA()()()),2&n){const i=t.oxw(2);t.xp6(5),t.Q6J("ngForOf",i.apis.current.produces)}}function ot(n,s){if(1&n&&(t.TgZ(0,"div",17)(1,"h2"),t._uU(2,"General Information"),t.qZA(),t.TgZ(3,"table")(4,"tbody"),t.YNc(5,W,5,1,"tr",11),t.YNc(6,X,5,1,"tr",11),t.YNc(7,V,5,1,"tr",11),t.YNc(8,it,6,1,"tr",11),t.YNc(9,et,6,1,"tr",11),t.qZA()()()),2&n){const i=t.oxw();t.xp6(5),t.Q6J("ngIf",i.apis.current.schemes),t.xp6(1),t.Q6J("ngIf",i.apis.current.host),t.xp6(1),t.Q6J("ngIf",i.apis.current.basePath),t.xp6(1),t.Q6J("ngIf",i.apis.current.consumes),t.xp6(1),t.Q6J("ngIf",i.apis.current.produces)}}function st(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"description"),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"markdown",25),t.qZA()()),2&n){const i=t.oxw().$implicit,o=t.oxw(2);t.xp6(4),t.Q6J("data",o.apis.current.securityDefinitions[i].description)}}function ct(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"name"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const i=t.oxw().$implicit,o=t.oxw(2);t.xp6(4),t.Oqu(o.apis.current.securityDefinitions[i].name)}}function rt(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"in"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const i=t.oxw().$implicit,o=t.oxw(2);t.xp6(4),t.Oqu(o.apis.current.securityDefinitions[i].in)}}function pt(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"flow"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const i=t.oxw().$implicit,o=t.oxw(2);t.xp6(4),t.Oqu(o.apis.current.securityDefinitions[i].flow)}}function at(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"auth URL"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const i=t.oxw().$implicit,o=t.oxw(2);t.xp6(4),t.Oqu(o.apis.current.securityDefinitions[i].authorizationUrl)}}function _t(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"token URL"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const i=t.oxw().$implicit,o=t.oxw(2);t.xp6(4),t.Oqu(o.apis.current.securityDefinitions[i].tokenUrl)}}function dt(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",20),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const i=s.$implicit,o=t.oxw(2).$implicit,r=t.oxw(2);t.xp6(2),t.Oqu(i),t.xp6(2),t.Oqu(r.apis.current.securityDefinitions[o].scopes[i])}}function lt(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"scopes"),t.qZA(),t.TgZ(3,"td")(4,"table")(5,"tbody"),t.YNc(6,dt,5,2,"tr",19),t.qZA()()()()),2&n){const i=t.oxw().$implicit,o=t.oxw(2);t.xp6(6),t.Q6J("ngForOf",o.keys(o.apis.current.securityDefinitions[i].scopes))}}function ut(n,s){if(1&n&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"Security definition: "),t.TgZ(3,"b"),t._uU(4),t.qZA()(),t.TgZ(5,"table")(6,"tbody")(7,"tr")(8,"td",23),t._uU(9,"type"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA()(),t.YNc(12,st,5,1,"tr",11),t.YNc(13,ct,5,1,"tr",11),t.YNc(14,rt,5,1,"tr",11),t.YNc(15,pt,5,1,"tr",11),t.YNc(16,at,5,1,"tr",11),t.YNc(17,_t,5,1,"tr",11),t.YNc(18,lt,7,1,"tr",11),t.qZA()()()),2&n){const i=s.$implicit,o=t.oxw(2);t.xp6(4),t.Oqu(i),t.xp6(7),t.Oqu(o.apis.current.securityDefinitions[i].type),t.xp6(1),t.Q6J("ngIf",o.apis.current.securityDefinitions[i].description),t.xp6(1),t.Q6J("ngIf",o.apis.current.securityDefinitions[i].name),t.xp6(1),t.Q6J("ngIf",o.apis.current.securityDefinitions[i].in),t.xp6(1),t.Q6J("ngIf",o.apis.current.securityDefinitions[i].flow),t.xp6(1),t.Q6J("ngIf",o.apis.current.securityDefinitions[i].authorizationUrl),t.xp6(1),t.Q6J("ngIf",o.apis.current.securityDefinitions[i].tokenUrl),t.xp6(1),t.Q6J("ngIf",o.apis.current.securityDefinitions[i].scopes)}}function ft(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const i=s.$implicit;t.xp6(1),t.Oqu(i)}}function mt(n,s){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,ft,2,1,"li",19),t.qZA()),2&n){const i=t.oxw().$implicit,o=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",i[o.keys(i)[0]])}}function gt(n,s){if(1&n&&(t.TgZ(0,"div")(1,"p",20),t._uU(2),t.qZA(),t.YNc(3,mt,2,1,"ul",11),t.qZA()),2&n){const i=s.$implicit,o=t.oxw(3);t.xp6(2),t.Oqu(o.keys(i)[0]),t.xp6(1),t.Q6J("ngIf",i[o.keys(i)[0]].length>0)}}function xt(n,s){if(1&n&&(t.TgZ(0,"div")(1,"h3"),t._uU(2,"Default Security Requirements"),t.qZA(),t.YNc(3,gt,4,2,"div",19),t.qZA()),2&n){const i=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",i.apis.current.security)}}function ht(n,s){if(1&n&&(t.TgZ(0,"div",17)(1,"h2"),t._uU(2,"Security"),t.qZA(),t.YNc(3,ut,19,9,"div",19),t.YNc(4,xt,4,1,"div",11),t.qZA()),2&n){const i=t.oxw();t.xp6(3),t.Q6J("ngForOf",i.keys(i.apis.current.securityDefinitions)),t.xp6(1),t.Q6J("ngIf",i.apis.current.security)}}function vt(n,s){if(1&n&&(t.TgZ(0,"div",10),t._uU(1," At document root: "),t._UZ(2,"swadit-extensions-view",26),t.qZA()),2&n){const i=t.oxw(2);t.xp6(2),t.Q6J("obj",i.apis.current)}}function At(n,s){if(1&n&&(t.TgZ(0,"div",10),t._uU(1," At document info: "),t._UZ(2,"swadit-extensions-view",26),t.qZA()),2&n){const i=t.oxw(2);t.xp6(2),t.Q6J("obj",i.apis.current.info)}}function Zt(n,s){if(1&n&&(t.TgZ(0,"div",17)(1,"h2"),t._uU(2,"Extensions"),t.qZA(),t.YNc(3,vt,3,1,"div",7),t.YNc(4,At,3,1,"div",7),t.qZA()),2&n){const i=t.oxw();t.xp6(3),t.Q6J("ngIf",i.apis.hasExtensions(i.apis.current)),t.xp6(1),t.Q6J("ngIf",i.apis.hasExtensions(i.apis.current.info))}}const Tt=[{path:"",component:(()=>{class n{constructor(i,o){this.apis=i,this.modalService=o}ngOnInit(){}edit(){console.log("edit()"),this.editModal=this.modalService.open(p,p.modalOptions),this.editModal.result.then(i=>{this.closeResult=`Closed with: ${i}`,console.info("edit(): "+this.closeResult)},i=>{this.closeResult=`Dismissed ${this.getDismissReason(i)}`,console.warn("edit(): "+this.closeResult)})}getDismissReason(i){return i===f.If.ESC?"by pressing ESC":i===f.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${i}`}keys(i){return Object.keys(i)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(I.Q),t.Y36(f.FF))};static#i=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-api-info"]],decls:6,vars:6,consts:[["class","edit-section",3,"click",4,"ngIf"],["class","api-info",4,"ngIf"],["class","api-info api-info-element",4,"ngIf"],[1,"edit-section",3,"click"],[1,"fa","fa-pencil"],[1,"api-info"],["style","font-size: 70%",4,"ngIf"],["class","api-info-element",4,"ngIf"],["class","api-info-element markdown",3,"data",4,"ngIf"],[2,"font-size","70%"],[1,"api-info-element"],[4,"ngIf"],[3,"href"],[1,"api-info-element","markdown",3,"data"],["target","_blanc",3,"href"],[4,"ngIf","ngIfElse"],["noExternalDocsDescription",""],[1,"api-info","api-info-element"],[1,"tag-table"],[4,"ngFor","ngForOf"],[2,"font-weight","bold"],["Markdown",""],["more",""],[1,"label-text"],[1,"list-unstyled"],[3,"data"],[3,"obj"]],template:function(o,r){1&o&&(t.YNc(0,u,2,0,"div",0),t.YNc(1,K,8,6,"div",1),t.YNc(2,H,6,1,"div",2),t.YNc(3,ot,10,5,"div",2),t.YNc(4,ht,5,2,"div",2),t.YNc(5,Zt,5,2,"div",2)),2&o&&(t.Q6J("ngIf",!r.apis.config.readOnly),t.xp6(1),t.Q6J("ngIf",r.apis.current.info),t.xp6(1),t.Q6J("ngIf",r.apis.current.tags),t.xp6(1),t.Q6J("ngIf",r.apis.isOas2&&(r.apis.current.schemes||r.apis.current.host||r.apis.current.basePath||r.apis.current.consumes||r.apis.current.produces)),t.xp6(1),t.Q6J("ngIf",r.apis.isOas2&&(r.apis.current.securityDefinitions||r.apis.current.security)),t.xp6(1),t.Q6J("ngIf",r.apis.hasExtensions(r.apis.current)||r.apis.hasExtensions(r.apis.current.info)))},dependencies:[e.sg,e.O5,x.lF,d.o]})}return n})()}];let Ct=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#i=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[y.Bz.forChild(Tt),y.Bz]})}return n})(),yt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#i=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[e.ez,h.u5,f.IJ,x.JP.forChild(),Z.z,v.L,Ct]})}return n})()},8881:(E,A,a)=>{a.d(A,{D:()=>D});var e=a(8830),h=a(2660),f=a(6814),x=a(6223),Z=a(3386),v=a(4202),y=a(4192);function T(_,m){1&_&&e._UZ(0,"i",18)}function t(_,m){1&_&&e._UZ(0,"i",19)}function I(_,m){if(1&_&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&_){const c=m.$implicit;e.xp6(1),e.Oqu(c)}}function b(_,m){if(1&_){const c=e.EpF();e.TgZ(0,"select",3),e.NdJ("ngModelChange",function(d){e.CHM(c);const u=e.oxw().$implicit,g=e.oxw().index,C=e.oxw();return e.KtG(C.changeProperty(d,g,u))}),e.YNc(1,I,2,1,"option",4),e.qZA()}if(2&_){const c=e.oxw().$implicit,p=e.oxw(2);e.Gre("form-control ",p.schema["x-swadit-input-class"]||"",""),e.s9C("id",p.id),e.s9C("title",p.schema.description),e.Q6J("ngModel",c),e.xp6(1),e.Q6J("ngForOf",p.keys(p.securityDefinitions))}}function O(_,m){if(1&_){const c=e.EpF();e.TgZ(0,"input",20),e.NdJ("ngModelChange",function(d){e.CHM(c);const u=e.oxw().$implicit,g=e.oxw().index,C=e.oxw();return e.KtG(C.changeProperty(d,g,u))}),e.qZA()}if(2&_){const c=e.oxw().$implicit,p=e.oxw(2);e.Gre("form-control ",p.schema["x-swadit-input-class"]||"",""),e.s9C("id",p.id),e.s9C("placeholder",p.schema.description),e.s9C("title",p.schema.description),e.Q6J("ngModel",c)}}function w(_,m){if(1&_){const c=e.EpF();e.TgZ(0,"div",1)(1,"div",9)(2,"span",5),e.NdJ("click",function(){const u=e.CHM(c).$implicit,g=e.oxw(2);return e.KtG(g.collapsed[u]=!g.collapsed[u])}),e.YNc(3,T,1,0,"i",10),e.YNc(4,t,1,0,"i",11),e.qZA(),e.YNc(5,b,2,7,"select",12),e.YNc(6,O,1,7,"ng-template",13,14,e.W1O),e.TgZ(8,"span",5),e.NdJ("click",function(d){e.CHM(c);const u=e.oxw().index,g=e.oxw();return e.KtG(g.deleteItem(d,u))}),e._UZ(9,"i",15),e.qZA()(),e.TgZ(10,"div",16),e._UZ(11,"swadit-array-editor",17),e.qZA()()}if(2&_){const c=m.$implicit,p=e.MAs(7),d=e.oxw().$implicit,u=e.oxw();e.xp6(3),e.Q6J("ngIf",!u.collapsed[c]),e.xp6(1),e.Q6J("ngIf",u.collapsed[c]),e.xp6(1),e.Q6J("ngIf",u.isSecurityDefinition(c))("ngIfElse",p),e.xp6(5),e.Q6J("ngbCollapse",u.collapsed[c]),e.xp6(1),e.Q6J("schema",u.scopes(c))("obj",d[c])}}function q(_,m){if(1&_&&(e.TgZ(0,"div"),e.YNc(1,w,12,7,"div",8),e.qZA()),2&_){const c=m.$implicit,p=e.oxw();e.xp6(1),e.Q6J("ngForOf",p.keys(c))("ngForTrackBy",p.trackByIndex)}}function J(_,m){if(1&_&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&_){const c=m.$implicit;e.xp6(1),e.Oqu(c)}}function U(_,m){if(1&_){const c=e.EpF();e.TgZ(0,"ngb-alert",21),e.NdJ("close",function(){e.CHM(c);const d=e.oxw();return e.KtG(d.noItemToAdd=!1)}),e._uU(1,"Please enter a valid value to add."),e.qZA()}2&_&&e.Q6J("type","danger")}let D=(()=>{class _{constructor(){this.objChange=new e.vpe,this.securityRequirement={type:"array",items:{type:"string",description:"Security requirement",enum:[]},uniqueItems:!0},this.securityScope={type:"array",items:{type:"string",description:"Oauth2 scope",enum:[]},uniqueItems:!0},this.collapsed={},this.propertyToAdd="",this.noItemToAdd=!1}get obj(){return this._obj}set obj(c){this._obj=c,this.objChange.emit(this._obj)}ngOnInit(){this.keys(this.securityDefinitions).forEach(c=>{this.collapsed[c]=!0})}keys(c){return c?Object.keys(c):[]}scopes(c){if(!this.securityDefinitions||!this.securityDefinitions[c])return this.securityScope;const p=(0,h.Z)(this.securityScope);return p.items.enum=this.securityDefinitions[c].scopes?this.keys(this.securityDefinitions[c].scopes):[],p}addProperty(c){if(c.preventDefault(),console.log("addProperty",this.propertyToAdd),!this.propertyToAdd)return void(this.noItemToAdd=!0);this.noItemToAdd=!1;const p={};p[this.propertyToAdd]=[],this.obj.push(p),this.propertyToAdd=""}deleteItem(c,p){c.preventDefault(),console.log("deleteItem",p),this.obj.splice(p,1)}changeProperty(c,p,d){if(c!=d){const u=this.obj[p][d];this.obj[p]={},this.obj[p][c]=u,this.collapsed[c]=this.collapsed[d],console.log("changeProperty",c,d,this.obj)}}trackByIndex(c,p){return c}isSecurityDefinition(c){let p=!1;return this.keys(this.securityDefinitions).forEach(d=>{c==d&&(p=!0)}),p}static#t=this.\u0275fac=function(p){return new(p||_)};static#i=this.\u0275cmp=e.Xpm({type:_,selectors:[["swadit-security-editor"]],inputs:{schema:"schema",id:"id",securityDefinitions:"securityDefinitions",obj:"obj"},outputs:{objChange:"objChange"},decls:8,vars:10,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[1,"form-group"],[1,"input-group"],[3,"id","ngModel","title","ngModelChange"],[4,"ngFor","ngForOf"],[1,"input-group-addon","clickable",3,"click"],[1,"fa","fa-plus"],[3,"type","close",4,"ngIf"],["class","form-group",4,"ngFor","ngForOf","ngForTrackBy"],[1,"input-group","input-group-overlapping-border"],["class","fa fa-caret-down",4,"ngIf"],["class","fa fa-caret-right",4,"ngIf"],[3,"id","ngModel","class","title","ngModelChange",4,"ngIf","ngIfElse"],["class","form-control"],["noSecDef",""],[1,"fa","fa-trash"],[3,"ngbCollapse"],[1,"form-control",2,"background-color","#f7f7f9",3,"schema","obj"],[1,"fa","fa-caret-down"],[1,"fa","fa-caret-right"],["type","text",2,"color","red",3,"id","ngModel","placeholder","title","ngModelChange"],[3,"type","close"]],template:function(p,d){1&p&&(e.YNc(0,q,2,2,"div",0),e.TgZ(1,"div",1)(2,"div",2)(3,"select",3),e.NdJ("ngModelChange",function(g){return d.propertyToAdd=g}),e.YNc(4,J,2,1,"option",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(g){return d.addProperty(g)}),e._UZ(6,"i",6),e.qZA()(),e.YNc(7,U,2,1,"ngb-alert",7),e.qZA()),2&p&&(e.Q6J("ngForOf",d.obj)("ngForTrackBy",d.trackByIndex),e.xp6(3),e.Gre("form-control ",d.schema["x-swadit-input-class"]||"",""),e.s9C("id",d.id),e.s9C("title",d.schema.description),e.Q6J("ngModel",d.propertyToAdd),e.xp6(1),e.Q6J("ngForOf",d.keys(d.securityDefinitions)),e.xp6(3),e.Q6J("ngIf",d.noItemToAdd))},dependencies:[f.sg,f.O5,x.YN,x.Kr,x.Fj,x.EJ,x.JJ,x.On,Z.xm,Z._D,v.P,y.S],styles:["label[_ngcontent-%COMP%]{font-size:80%;font-weight:700;margin-bottom:.3rem;cursor:pointer}.form-group[_ngcontent-%COMP%]{margin-bottom:.5rem}.monospace[_ngcontent-%COMP%]{font-family:monospace}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#ccc}.header[_ngcontent-%COMP%]{margin-bottom:.3rem}.input-wrap[_ngcontent-%COMP%]{display:block;width:100%;padding:0}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{display:block;width:100%;border-bottom-right-radius:0;border-top-right-radius:0;border-color:#d9d9d9}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{border-color:#5cb3fd}.input-group-overlapping-border[_ngcontent-%COMP%]{margin-bottom:-1px}.input-group-overlapping-border[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-group-overlapping-border[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]{border-color:#d9d9d9}.input-group-overlapping-border[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#5cb3fd}.form-control[_ngcontent-%COMP%]{width:100%}"]})}return _})()},6547:(E,A,a)=>{a.d(A,{z:()=>Z});var e=a(6814),h=a(3386),f=a(4611),x=a(8830);let Z=(()=>{class v{static#t=this.\u0275fac=function(t){return new(t||v)};static#i=this.\u0275mod=x.oAB({type:v});static#n=this.\u0275inj=x.cJS({imports:[e.ez,h.IJ,f.JP.forChild()]})}return v})()}}]);