(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{966:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));t(4),t(5),t(3),t(6),t(8),t(1);var a=t(119),l=t(936),r=t(937);var o={},c={_frontmatter:o},b=l.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(a.b)(b,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Introduction"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Textarea")," components maps directly to a ",Object(a.b)("inlineCode",{parentName:"p"},"textarea")," element."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Textarea\n  name="textarea-1"\n  placeholder="Textarea placeholder..."\n/>\n')),Object(a.b)("h2",null,"Textarea with a label"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Pane>\n  <Label\n    htmlFor="textarea-2"\n    marginBottom={4}\n    display="block"\n  >\n    Label\n  </Label>\n  <Textarea\n    id="textarea-2"\n    placeholder="Textarea placeholder..."\n  />\n</Pane>\n')),Object(a.b)("h2",null,"Controlled usage"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Textarea")," component works the same as using ",Object(a.b)("inlineCode",{parentName:"p"},"textarea")," directly.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"e.target.value")," to get the value of the component on change. "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component initialState={{ value: 'Hello'}}>\n  {({ state, setState }) => (\n    <Textarea\n      onChange={e => setState({ value: e.target.value })}\n      value={state.value}\n    />\n  )}\n</Component>\n")),Object(a.b)(r.a,{of:"Textarea",mdxType:"PropsTable"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-textarea-mdx-82ac67730d8478c2b152.js.map