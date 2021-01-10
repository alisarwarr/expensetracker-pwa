(this.webpackJsonpatest=this.webpackJsonpatest||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(7),s=n.n(a),i=n(8),o=n(9),u=n(12),j=n(10);var d=function(){return Object(c.jsx)("h2",{id:"header",children:"Expense Tracker"})},l=n(3),b=n(11),O=n(4);var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_TRANSACTION":return Object(O.a)(Object(O.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(O.a)(Object(O.a)({},e),{},{transactions:[t.payload].concat(Object(b.a)(e.transactions))});default:return e}},h={transactions:[]},m=Object(r.createContext)(h),f=function(e){var t=e.children,n=Object(r.useReducer)(x,h),a=Object(l.a)(n,2),s=a[0],i=a[1];return Object(c.jsx)(m.Provider,{value:{transactions:s.transactions,deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){i({type:"ADD_TRANSACTION",payload:e})}},children:t})};var p=function(){var e=Object(r.useContext)(m).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{id:"balance",children:" Your Balance        "}),Object(c.jsxs)("h1",{id:"total",children:["   $",e.toFixed(2)," "]})]})};var v=function(){var e=Object(r.useContext)(m).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(c.jsxs)("div",{className:"incomeExpences",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{id:"income",children:" Income "}),Object(c.jsxs)("p",{className:"money plus",children:[" ",t.toFixed(2),"   "]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{id:"expense",children:" Expense "}),Object(c.jsxs)("p",{className:"money minus",children:[" ",n.toFixed(2)," "]})]})]})};var N=function(e){var t=e.transaction,n=Object(r.useContext)(m).deleteTransaction,a=t.amount<0?"-":"+";return Object(c.jsx)("div",{children:Object(c.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[Object(c.jsx)("button",{id:"btnY",onClick:function(){return n(t.id)},children:" x "}),t.text," ",Object(c.jsxs)("span",{children:[" ",a,"$",Math.abs(t.amount)," "]})]},t.id)})};var T=function(){var e=Object(r.useContext)(m).transactions;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"underlined",children:" History "}),Object(c.jsx)("ul",{id:"transactionList",children:e.map((function(e){return Object(c.jsx)(N,{transaction:e},e.id)}))})]})};var y=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(0),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(r.useContext)(m).addTransaction;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"underlined",children:" Add new transaction "}),Object(c.jsxs)("form",{id:"form",onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:Number(o)};j(t)},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:" Text "}),Object(c.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter text..."})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Amount (-ve = expense, +ve = income)"}),Object(c.jsx)("input",{type:"number",className:"form-control",value:o,onChange:function(e){return u(Number(e.target.value))},placeholder:"Enter amount..."})]}),Object(c.jsx)("button",{className:"btn btn-warning",id:"btnX",children:" add transaction "})]})]})},C=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)(f,{children:Object(c.jsxs)("div",{id:"app",children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(p,{}),Object(c.jsx)(v,{}),Object(c.jsx)(T,{}),Object(c.jsx)(y,{})]})]})})}}]),n}(r.Component);n(18);s.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.44bb6f06.chunk.js.map