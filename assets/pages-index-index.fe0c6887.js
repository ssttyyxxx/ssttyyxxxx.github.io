import{o as t,c as o,w as i,a as s,b as l,r as d,F as c,d as n,i as e,n as a,t as h,e as r}from"./index.7dd1d539.js";const f=["羔羊跪乳","乌鸦反哺","昙花一现","惊鸿一瞥","魂不附体","失魂落魄","锋芒毕露","锐不可挡","朽木难雕","孺子可教","大同小异","大相径庭","举世无双","背信弃义","安身立命","爱屋及乌","暴殄天物","杯弓蛇影","杯水车薪","别具一格"];var m=((t,o)=>{const i=t.__vccOpts||t;for(const[s,l]of o)i[s]=l;return i})({data:()=>({isRead:!0,idiomList:[],wordList:[],matchSlot:[],doneList:[]}),onLoad(){this.initial()},methods:{initial(){this.idiomList=[];for(var t=0;t<16;){let o=Math.floor(Math.random()*f.length),i=f[o];this.idiomList.includes(i)||(this.idiomList.push(i),t+=1)}this.wordList=[],this.matchSlot=[],this.doneList=[],this.idiomList.forEach((t=>{t.split("").forEach((t=>{this.wordList.push({word:t,clicked:!1,hidden:!1,notice:!1})}))})),console.log(this.idiomList),this.randomList()},notice(){if(this.matchSlot.length>=1){const t=this.matchSlot.flatMap((t=>t.word)).join(""),o=this.idiomList.find((o=>o.startsWith(t))),i=o.replace(t,"")[0],s=this.wordList.find((t=>t.word==i));s.notice=!0,console.log(t,o,s)}else{const t=[];this.idiomList.forEach((o=>{this.doneList.includes(o)?console.log(o):t.push(o)})),console.log(t);const o=Math.floor(Math.random()*t.length),i=t[o];console.log(i);this.wordList.find((t=>t.word==i[0])).notice=!0}},wordClick(t){console.log(t);const o=this.wordList[t];if(console.log(o),this.matchSlot.length<1){const i=this.idiomList.find((t=>t.startsWith(o.word)));console.log(i),i&&(this.matchSlot.push({word:o.word,index:t}),o.clicked=!o.clicked)}else{const i=this.matchSlot.at(-1);if(console.log(i),i.word==o.word&&i.index==t)o.clicked=!o.clicked,this.matchSlot.pop();else{this.matchSlot.push({word:o.word,index:t});const i=this.matchSlot.flatMap((t=>t.word)).join("");console.log("73",i);const s=this.idiomList.find((t=>t===i));if(console.log(s),s)o.clicked=!0,this.doneList.push(i),this.matchSlot.forEach((t=>{this.wordList[t.index].hidden=!0})),this.matchSlot=[];else{const t=this.matchSlot.flatMap((t=>t.word)).join("");console.log(t);const i=this.idiomList.find((o=>o.startsWith(t)));console.log(i),i?o.clicked=!0:this.matchSlot.pop()}}}console.log(this.matchSlot),console.log(o)},randomList(){this.wordList.sort((function(){return.5-Math.random()}))}}},[["render",function(f,m,u,w,L,g){const p=r,k=e;return t(),o(k,{class:"content"},{default:i((()=>[s(k,{class:"word-grid"},{default:i((()=>[(t(!0),l(c,null,d(L.wordList,((l,d)=>(t(),o(k,{key:d,class:a(["grid",[l.clicked?"clicked":"",l.hidden?"hidden":"",l.notice?"notice":""]]),onClick:t=>g.wordClick(d)},{default:i((()=>[s(p,null,{default:i((()=>[n(h(l.word),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1}),s(k,{class:"options"},{default:i((()=>[s(k,{onClick:m[0]||(m[0]=t=>g.notice()),class:"reload"},{default:i((()=>[n("提示")])),_:1}),s(k,{onClick:m[1]||(m[1]=t=>g.initial()),class:"reload"},{default:i((()=>[n("重试")])),_:1})])),_:1}),s(k,{class:"word-box"},{default:i((()=>[(t(!0),l(c,null,d(L.doneList,((l,d)=>(t(),o(k,null,{default:i((()=>[s(p,null,{default:i((()=>[n(h(l),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1})}],["__scopeId","data-v-83d5629e"]]);export{m as default};
