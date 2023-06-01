import{F as l,a as n,C as e,b as r,E as m,c,d as t}from"./ContactForm.module.c8adaa75.js";import{j as a,a as s,e as d,F as u}from"./index.29b324a2.js";const p={name:"",email:"",password:""},h=c().shape({name:t().required(),email:t().email().required(),password:t().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")});function b(){return a(l,{initialValues:p,onSubmit:(i,{resetForm:o})=>{console.log(i),o()},validationSchema:h,children:s(n,{className:e.ContactForm,children:[s("label",{className:e.label,htmlFor:"email",children:["Name",a(r,{type:"text",name:"name",className:e.input}),a(m,{name:"name"})]}),s("label",{className:e.label,htmlFor:"email",children:["Email",a(r,{type:"email",name:"email",className:e.input}),a(m,{name:"email"})]}),s("label",{className:e.label,htmlFor:"password",children:["Password",a(r,{type:"password",name:"password",className:e.input}),a(m,{name:"password"})]}),a("button",{type:"submit",className:e.buttonSubmit,children:"Register"})]})})}function g(){return d(),a(u,{children:a(b,{})})}export{g as default};
