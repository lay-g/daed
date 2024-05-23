import{c as B}from"./codemirror.es2-5884f31a.js";var A=Object.defineProperty,u=(R,S)=>A(R,"name",{value:S,configurable:!0}),W={exports:{}},z;function q(){return z||(z=1,function(R,S){(function(p){p(B())})(function(p){var h=p.Pos;function k(e){var t=e.flags;return t??(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}u(k,"regexpFlags");function L(e,t){for(var n=k(e),r=n,o=0;o<t.length;o++)r.indexOf(t.charAt(o))==-1&&(r+=t.charAt(o));return n==r?e:new RegExp(e.source,r)}u(L,"ensureFlags");function C(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}u(C,"maybeMultiline");function M(e,t,n){t=L(t,"g");for(var r=n.line,o=n.ch,i=e.lastLine();r<=i;r++,o=0){t.lastIndex=o;var s=e.getLine(r),c=t.exec(s);if(c)return{from:h(r,c.index),to:h(r,c.index+c[0].length),match:c}}}u(M,"searchRegexpForward");function I(e,t,n){if(!C(t))return M(e,t,n);t=L(t,"gm");for(var r,o=1,i=n.line,s=e.lastLine();i<=s;){for(var c=0;c<o&&!(i>s);c++){var m=e.getLine(i++);r=r==null?m:r+`
`+m}o=o*2,t.lastIndex=n.ch;var a=t.exec(r);if(a){var l=r.slice(0,a.index).split(`
`),f=a[0].split(`
`),g=n.line+l.length-1,d=l[l.length-1].length;return{from:h(g,d),to:h(g+f.length-1,f.length==1?d+f[0].length:f[f.length-1].length),match:a}}}}u(I,"searchRegexpForwardMultiline");function O(e,t,n){for(var r,o=0;o<=e.length;){t.lastIndex=o;var i=t.exec(e);if(!i)break;var s=i.index+i[0].length;if(s>e.length-n)break;(!r||s>r.index+r[0].length)&&(r=i),o=i.index+1}return r}u(O,"lastMatchIn");function b(e,t,n){t=L(t,"g");for(var r=n.line,o=n.ch,i=e.firstLine();r>=i;r--,o=-1){var s=e.getLine(r),c=O(s,t,o<0?0:s.length-o);if(c)return{from:h(r,c.index),to:h(r,c.index+c[0].length),match:c}}}u(b,"searchRegexpBackward");function D(e,t,n){if(!C(t))return b(e,t,n);t=L(t,"gm");for(var r,o=1,i=e.getLine(n.line).length-n.ch,s=n.line,c=e.firstLine();s>=c;){for(var m=0;m<o&&s>=c;m++){var a=e.getLine(s--);r=r==null?a:a+`
`+r}o*=2;var l=O(r,t,i);if(l){var f=r.slice(0,l.index).split(`
`),g=l[0].split(`
`),d=s+f.length,x=f[f.length-1].length;return{from:h(d,x),to:h(d+g.length-1,g.length==1?x+g[0].length:g[g.length-1].length),match:l}}}}u(D,"searchRegexpBackwardMultiline");var w,P;String.prototype.normalize?(w=u(function(e){return e.normalize("NFD").toLowerCase()},"doFold"),P=u(function(e){return e.normalize("NFD")},"noFold")):(w=u(function(e){return e.toLowerCase()},"doFold"),P=u(function(e){return e},"noFold"));function v(e,t,n,r){if(e.length==t.length)return n;for(var o=0,i=n+Math.max(0,e.length-t.length);;){if(o==i)return o;var s=o+i>>1,c=r(e.slice(0,s)).length;if(c==n)return s;c>n?i=s:o=s+1}}u(v,"adjustPos");function N(e,t,n,r){if(!t.length)return null;var o=r?w:P,i=o(t).split(/\r|\n\r?/);t:for(var s=n.line,c=n.ch,m=e.lastLine()+1-i.length;s<=m;s++,c=0){var a=e.getLine(s).slice(c),l=o(a);if(i.length==1){var f=l.indexOf(i[0]);if(f==-1)continue t;var n=v(a,l,f,o)+c;return{from:h(s,v(a,l,f,o)+c),to:h(s,v(a,l,f+i[0].length,o)+c)}}else{var g=l.length-i[0].length;if(l.slice(g)!=i[0])continue t;for(var d=1;d<i.length-1;d++)if(o(e.getLine(s+d))!=i[d])continue t;var x=e.getLine(s+i.length-1),F=o(x),E=i[i.length-1];if(F.slice(0,E.length)!=E)continue t;return{from:h(s,v(a,l,g,o)+c),to:h(s+i.length-1,v(x,F,E.length,o))}}}}u(N,"searchStringForward");function j(e,t,n,r){if(!t.length)return null;var o=r?w:P,i=o(t).split(/\r|\n\r?/);t:for(var s=n.line,c=n.ch,m=e.firstLine()-1+i.length;s>=m;s--,c=-1){var a=e.getLine(s);c>-1&&(a=a.slice(0,c));var l=o(a);if(i.length==1){var f=l.lastIndexOf(i[0]);if(f==-1)continue t;return{from:h(s,v(a,l,f,o)),to:h(s,v(a,l,f+i[0].length,o))}}else{var g=i[i.length-1];if(l.slice(0,g.length)!=g)continue t;for(var d=1,n=s-i.length+1;d<i.length-1;d++)if(o(e.getLine(n+d))!=i[d])continue t;var x=e.getLine(s+1-i.length),F=o(x);if(F.slice(F.length-i[0].length)!=i[0])continue t;return{from:h(s+1-i.length,v(x,F,x.length-i[0].length,o)),to:h(s,v(a,l,g.length,o))}}}}u(j,"searchStringBackward");function y(e,t,n,r){this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):h(0,0),this.pos={from:n,to:n};var o;typeof r=="object"?o=r.caseFold:(o=r,r=null),typeof t=="string"?(o==null&&(o=!1),this.matches=function(i,s){return(i?j:N)(e,t,s,o)}):(t=L(t,"gm"),!r||r.multiline!==!1?this.matches=function(i,s){return(i?D:I)(e,t,s)}:this.matches=function(i,s){return(i?b:M)(e,t,s)})}u(y,"SearchCursor"),y.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(e){var t=this.doc.clipPos(e?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(t=h(t.line,t.ch),e?(t.ch--,t.ch<0&&(t.line--,t.ch=(this.doc.getLine(t.line)||"").length)):(t.ch++,t.ch>(this.doc.getLine(t.line)||"").length&&(t.ch=0,t.line++)),p.cmpPos(t,this.doc.clipPos(t))!=0))return this.atOccurrence=!1;var n=this.matches(e,t);if(this.afterEmptyMatch=n&&p.cmpPos(n.from,n.to)==0,n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0;var r=h(e?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:r,to:r},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(e,t){if(this.atOccurrence){var n=p.splitLines(e);this.doc.replaceRange(n,this.pos.from,this.pos.to,t),this.pos.to=h(this.pos.from.line+n.length-1,n[n.length-1].length+(n.length==1?this.pos.from.ch:0))}}},p.defineExtension("getSearchCursor",function(e,t,n){return new y(this.doc,e,t,n)}),p.defineDocExtension("getSearchCursor",function(e,t,n){return new y(this,e,t,n)}),p.defineExtension("selectMatches",function(e,t){for(var n=[],r=this.getSearchCursor(e,this.getCursor("from"),t);r.findNext()&&!(p.cmpPos(r.to(),this.getCursor("to"))>0);)n.push({anchor:r.from(),head:r.to()});n.length&&this.setSelections(n,0)})})}()),W.exports}u(q,"requireSearchcursor");export{q as K};
