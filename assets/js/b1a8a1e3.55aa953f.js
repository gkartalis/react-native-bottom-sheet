"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5146],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(o),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||a;return o?n.createElement(u,s(s({ref:t},c),{},{components:o})):n.createElement(u,s({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5162:(e,t,o)=>{o(7294)},5488:(e,t,o)=>{o(7294),o(2389)},1305:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));o(5488),o(5162);const a={id:"methods",title:"Methods",description:"Bottom Sheet methods.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/methods"},s=void 0,i={unversionedId:"methods",id:"version-2/methods",title:"Methods",description:"Bottom Sheet methods.",source:"@site/versioned_docs/version-2/methods.md",sourceDirName:".",slug:"/methods",permalink:"/react-native-bottom-sheet/v2/methods",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/methods.md",tags:[],version:"2",frontMatter:{id:"methods",title:"Methods",description:"Bottom Sheet methods.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/methods"},sidebar:"version-2/packages",previous:{title:"Props",permalink:"/react-native-bottom-sheet/v2/props"},next:{title:"Hooks",permalink:"/react-native-bottom-sheet/v2/hooks"}},l={},p=[{value:"<code>snapTo</code>",id:"snapto",level:3},{value:"<code>expand</code>",id:"expand",level:3},{value:"<code>collapse</code>",id:"collapse",level:3},{value:"<code>close</code>",id:"close",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These methods are accessible using the bottom sheet reference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useRef } from 'react';\nimport { Button } from 'react-native';\nimport BottomSheet from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  const handleClosePress = () => bottomSheetRef.current.close()\n\n  return (\n    <>\n      <Button title=\"Close Sheet\" onPress={handleClosePress} />\n      <BottomSheet ref={bottomSheetRef}>\n    </>\n  )\n}\n\n")),(0,r.kt)("h3",{id:"snapto"},(0,r.kt)("inlineCode",{parentName:"h3"},"snapTo")),(0,r.kt)("p",null,"Animate the sheet to one of the provided point from ",(0,r.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type snapTo = (index: number) => void;\n")),(0,r.kt)("h3",{id:"expand"},(0,r.kt)("inlineCode",{parentName:"h3"},"expand")),(0,r.kt)("p",null,"Animate the sheet to the highest provided point from ",(0,r.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type expand = () => void;\n")),(0,r.kt)("h3",{id:"collapse"},(0,r.kt)("inlineCode",{parentName:"h3"},"collapse")),(0,r.kt)("p",null,"Animate the sheet to the lowest provided point from ",(0,r.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type collapse = () => void;\n")),(0,r.kt)("h3",{id:"close"},(0,r.kt)("inlineCode",{parentName:"h3"},"close")),(0,r.kt)("p",null,"Close the sheet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type close = () => void;\n")))}d.isMDXComponent=!0}}]);