"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),b=s,f=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},35098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={},a=void 0,l={unversionedId:"intro/npm/util",id:"intro/npm/util",title:"util",description:"1. classnames",source:"@site/docs/intro/npm/util.md",sourceDirName:"intro/npm",slug:"/intro/npm/util",permalink:"/docs/intro/npm/util",draft:!1,editUrl:"https://github.com/foolishandi/myblog/tree/main/docs/intro/npm/util.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"momentjs",permalink:"/docs/intro/npm/momentjs"},next:{title:"\u5143\u7d20\u4ea4\u4e92",permalink:"/docs/intro/npm/\u5143\u7d20\u4ea4\u4e92"}},i={},c=[{value:"1. classnames",id:"1-classnames",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-classnames"},"1. classnames"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"npm i classnames\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"classNames('foo', 'bar'); // => 'foo bar'\nclassNames('foo', { bar: true }); // => 'foo bar'\nclassNames({ 'foo-bar': true }); // => 'foo-bar'\nclassNames({ 'foo-bar': false }); // => ''\nclassNames({ foo: true }, { bar: true }); // => 'foo bar'\nclassNames({ foo: true, bar: true }); // => 'foo bar'\n\n// lots of arguments of various types\nclassNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'\n\n// other falsy values are just ignored\nclassNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'\n\n// basic\nvar classNames = require('classnames');\n\nclass Button extends React.Component {\n  // ...\n  render () {\n    var btnClass = classNames({\n      btn: true,\n      'btn-pressed': this.state.isPressed,\n      'btn-over': !this.state.isPressed && this.state.isHovered\n    });\n    return <button className={btnClass}>{this.props.label}</button>;\n  }\n}\n\n//  css-modules\n/* components/submit-button.js */\nimport { Component } from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './submit-button.css';\n\nlet cx = classNames.bind(styles);\n\nexport default class SubmitButton extends Component {\n  render () {\n    let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';\n    let className = cx({\n      base: true,\n      inProgress: this.props.store.submissionInProgress,\n      error: this.props.store.errorOccurred,\n      disabled: this.props.form.valid,\n    });\n    return <button className={className}>{text}</button>;\n  }\n};\n")))}m.isMDXComponent=!0}}]);