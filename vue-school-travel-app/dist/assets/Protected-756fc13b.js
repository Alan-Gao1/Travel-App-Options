import{_ as u,r as a,o as l,c,a as e,t as i,b as d,w as _}from"./index-85f67c47.js";const m={data(){return{username:window.user}},methods:{logout(){window.user=null,this.$router.push({name:"Home"})}}},p=e("button",null,"Invoices",-1);function f(g,o,w,h,n,t){const r=a("router-link");return l(),c("div",null,[e("h1",null,"Greetings, "+i(n.username),1),e("button",{onClick:o[0]||(o[0]=(...s)=>t.logout&&t.logout(...s))},"Logout"),d(r,{to:{name:"invoices"}},{default:_(()=>[p]),_:1})])}const v=u(m,[["render",f]]);export{v as default};
