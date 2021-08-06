(self.webpackChunkextension_kitchensink=self.webpackChunkextension_kitchensink||[]).push([["configure"],{59713:e=>{e.exports=function(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}},55393:(e,o,t)=>{"use strict";t.d(o,{I:()=>a});var r=t(18117),n=t(36632),a=(0,r.ZP)(n.Xd).withConfig({displayName:"ButtonOutline",componentId:"ncggc7-0"})(["background:",";border:1px solid ",";color:",";&:hover,&:focus,&.hover{background:",";color:",";}&[aria-expanded='true'],&:active,&.active{background:",";border-color:",";color:",";}&[disabled]{&:hover,&:active,&:focus{background-color:",";border-color:",";color:",";}}"],(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors["".concat(r,"Text")]}),(function(e){return e.theme.colors.ui2}),(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors[r]}),(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors["".concat(r,"Subtle")]}),(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors["".concat(r)]}),(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors["".concat(r,"Accent")]}),(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors["".concat(r,"Focus")]}),(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors[r]}),(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors["".concat(r,"Text")]}),(function(e){return e.theme.colors.ui3}),(function(e){var o=e.theme,t=e.color,r=void 0===t?"key":t;return o.colors[r]}))},41074:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>p});var r=t(59713),n=t.n(r),a=t(48926),c=t.n(a),i=t(67294),l=t(71272),s=t(16051),d=t(55393),u=t(19407),h=t(38287);function m(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?m(Object(t),!0).forEach((function(o){n()(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}const p=e=>{var{canPersistContextData:o,configurationData:t,updateConfigurationData:r}=e,[n,a]=(0,i.useState)({dashboardId:"",exploreId:"",lookId:""}),m=(0,i.useContext)(u.ExtensionContext2),{extensionSDK:p}=m;(0,i.useEffect)((()=>{var e=function(){var e=c()((function*(){if(o)try{var e=yield p.refreshContextData();e&&a(e)}catch(e){console.error("failed to get latest context data",e)}}));return function(){return e.apply(this,arguments)}}();a(b({},t)),e()}),[]);var g=e=>e.match(/\d+/g)?parseInt(e,10):e,f=(()=>{var e;return"string"==typeof n.dashboardId&&(e||(e={}),e.dashboardId={type:"error",message:"dashboard id is not numeric"}),""===n.exploreId&&(e||(e={}),e.exploreId={type:"error",message:"explore id is empty"}),"string"==typeof n.lookId&&(e||(e={}),e.lookId={type:"error",message:"look id is not numeric"}),e})();return i.createElement(i.Fragment,null,i.createElement(l.Heading,{mt:"xlarge"},"Configuration"),i.createElement(h.p,null),i.createElement(l.Form,{width:"50%",validationMessages:f,onSubmit:e=>{e.preventDefault(),r(b({},n))}},i.createElement(l.FieldCheckbox,{label:"Show api functions",name:"showApiFunctions",checked:n.showApiFunctions,onChange:()=>{n.showApiFunctions=!n.showApiFunctions,a(b({},n))}}),i.createElement(l.FieldCheckbox,{label:"Show core sdk functions",name:"showCoreSdkFunctions",checked:n.showCoreSdkFunctions,onChange:()=>{n.showCoreSdkFunctions=!n.showCoreSdkFunctions,a(b({},n))}}),i.createElement(l.FieldCheckbox,{label:"Show embed dashboard",name:"showEmbedDashboard",checked:n.showEmbedDashboard,onChange:()=>{n.showEmbedDashboard=!n.showEmbedDashboard,a(b({},n))}}),i.createElement(l.FieldCheckbox,{label:"Show embed explore",name:"showEmbedExplore",checked:n.showEmbedExplore,onChange:()=>{n.showEmbedExplore=!n.showEmbedExplore,a(b({},n))}}),i.createElement(l.FieldCheckbox,{label:"Show embed look",name:"showEmbedLook",checked:n.showEmbedLook,onChange:()=>{n.showEmbedLook=!n.showEmbedLook,a(b({},n))}}),i.createElement(l.FieldCheckbox,{label:"Show external api functions",name:"showExternalApiFunctions",checked:n.showExternalApiFunctions,onChange:()=>{n.showExternalApiFunctions=!n.showExternalApiFunctions,a(b({},n))}}),i.createElement(l.FieldCheckbox,{label:"Show miscellaneous functions",name:"showMiscFunctions",checked:n.showMiscFunctions,onChange:()=>{n.showMiscFunctions=!n.showMiscFunctions,a(b({},n))}}),i.createElement(l.FieldText,{label:"Dashboard id",name:"dashboardId",value:n.dashboardId,onChange:e=>{n.dashboardId=g(e.currentTarget.value),a(b({},n))}}),i.createElement(l.FieldText,{label:"Explore id",name:"exploreId",value:n.exploreId,onChange:e=>{n.exploreId=e.currentTarget.value,a(b({},n))}}),i.createElement(l.FieldText,{label:"Look id",name:"lookId",value:n.lookId,onChange:e=>{n.lookId=g(e.currentTarget.value),a(b({},n))}}),i.createElement(l.FieldTextArea,{label:"Thought for the day",name:"thoughtForTheDay",value:n.thoughtForTheDay||"",onChange:e=>{n.thoughtForTheDay=e.currentTarget.value,a(b({},n))}}),i.createElement(l.FieldTextArea,{label:"Image data",name:"imageData",value:n.imageData||"",onChange:e=>{n.imageData=e.currentTarget.value,a(b({},n))}}),n.imageData&&i.createElement("img",{src:n.imageData}),i.createElement(s.z,{disabled:!!f},"Update configuration")),o&&i.createElement(l.SpaceVertical,{width:"50%"},i.createElement(d.I,{onClick:()=>{a(b({},t))}},"Reset configuration")))}},38287:(e,o,t)=>{"use strict";t.d(o,{p:()=>a});var r=t(67294),n=t(71272),a=()=>{var[e,o]=(0,r.useState)("");return(0,r.useEffect)((()=>{try{var e;null===(e=window.parent.looker)||void 0===e||e.version,o("NOT")}catch(e){o("")}}),[]),r.createElement(n.Paragraph,{my:"medium"},"This extension is ",r.createElement("b",null,e)," sandboxed.")}}}]);
//# sourceMappingURL=configure.bundle.js.map