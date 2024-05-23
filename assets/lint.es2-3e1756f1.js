import{C as q}from"./codemirror.es-52e8b92d.js";import{K as u,G as p,d as _,i as ue,a as S,n as fe,b as w,s as F,c as h,e as R,p as v,f as X,h as y,j as T,D as E,O as G,k as Ae,l as Pe,o as O,q as P,r as I,u as k,v as te,w as ke,x as Ue,y as de,z as $,A as pe,B as U,C as Ve,E as je,F as Le,H as Me,I as Ye,J as Xe,L as Be,M as re,T as me,N as ge,P as Te,Q as qe,R as Ge,S as Je,U as Qe,V as He,W as Ke}from"./index-d22abc5c.js";import{R as Ee,P as V}from"./Range-52ddcb6a.js";import"./codemirror.es2-5884f31a.js";function We(e){return e.kind===u.OPERATION_DEFINITION||e.kind===u.FRAGMENT_DEFINITION}function ze(e){return e.kind===u.SCHEMA_DEFINITION||B(e)||e.kind===u.DIRECTIVE_DEFINITION}function B(e){return e.kind===u.SCALAR_TYPE_DEFINITION||e.kind===u.OBJECT_TYPE_DEFINITION||e.kind===u.INTERFACE_TYPE_DEFINITION||e.kind===u.UNION_TYPE_DEFINITION||e.kind===u.ENUM_TYPE_DEFINITION||e.kind===u.INPUT_OBJECT_TYPE_DEFINITION}function Ze(e){return e.kind===u.SCHEMA_EXTENSION||Ne(e)}function Ne(e){return e.kind===u.SCALAR_TYPE_EXTENSION||e.kind===u.OBJECT_TYPE_EXTENSION||e.kind===u.INTERFACE_TYPE_EXTENSION||e.kind===u.UNION_TYPE_EXTENSION||e.kind===u.ENUM_TYPE_EXTENSION||e.kind===u.INPUT_OBJECT_TYPE_EXTENSION}function ve(e){return{Document(t){for(const n of t.definitions)if(!We(n)){const r=n.kind===u.SCHEMA_DEFINITION||n.kind===u.SCHEMA_EXTENSION?"schema":'"'+n.name.value+'"';e.reportError(new p(`The ${r} definition is not executable.`,{nodes:n}))}return!1}}}function xe(e){return{Field(t){const n=e.getParentType();if(n&&!e.getFieldDef()){const i=e.getSchema(),s=t.name.value;let a=_("to use an inline fragment on",en(i,n,s));a===""&&(a=_(nn(n,s))),e.reportError(new p(`Cannot query field "${s}" on type "${n.name}".`+a,{nodes:t}))}}}}function en(e,t,n){if(!ue(t))return[];const r=new Set,i=Object.create(null);for(const a of e.getPossibleTypes(t))if(a.getFields()[n]){r.add(a),i[a.name]=1;for(const o of a.getInterfaces()){var s;o.getFields()[n]&&(r.add(o),i[o.name]=((s=i[o.name])!==null&&s!==void 0?s:0)+1)}}return[...r].sort((a,o)=>{const l=i[o.name]-i[a.name];return l!==0?l:S(a)&&e.isSubType(a,o)?-1:S(o)&&e.isSubType(o,a)?1:fe(a.name,o.name)}).map(a=>a.name)}function nn(e,t){if(w(e)||S(e)){const n=Object.keys(e.getFields());return F(t,n)}return[]}function tn(e){return{InlineFragment(t){const n=t.typeCondition;if(n){const r=h(e.getSchema(),n);if(r&&!R(r)){const i=v(n);e.reportError(new p(`Fragment cannot condition on non composite type "${i}".`,{nodes:n}))}}},FragmentDefinition(t){const n=h(e.getSchema(),t.typeCondition);if(n&&!R(n)){const r=v(t.typeCondition);e.reportError(new p(`Fragment "${t.name.value}" cannot condition on non composite type "${r}".`,{nodes:t.typeCondition}))}}}}function rn(e){return{...sn(e),Argument(t){const n=e.getArgument(),r=e.getFieldDef(),i=e.getParentType();if(!n&&r&&i){const s=t.name.value,a=r.args.map(l=>l.name),o=F(s,a);e.reportError(new p(`Unknown argument "${s}" on field "${i.name}.${r.name}".`+_(o),{nodes:t}))}}}}function sn(e){const t=Object.create(null),n=e.getSchema(),r=n?n.getDirectives():X;for(const a of r)t[a.name]=a.args.map(o=>o.name);const i=e.getDocument().definitions;for(const a of i)if(a.kind===u.DIRECTIVE_DEFINITION){var s;const o=(s=a.arguments)!==null&&s!==void 0?s:[];t[a.name.value]=o.map(l=>l.name.value)}return{Directive(a){const o=a.name.value,l=t[o];if(a.arguments&&l)for(const c of a.arguments){const f=c.name.value;if(!l.includes(f)){const d=F(f,l);e.reportError(new p(`Unknown argument "${f}" on directive "@${o}".`+_(d),{nodes:c}))}}return!1}}}function ye(e){const t=Object.create(null),n=e.getSchema(),r=n?n.getDirectives():X;for(const s of r)t[s.name]=s.locations;const i=e.getDocument().definitions;for(const s of i)s.kind===u.DIRECTIVE_DEFINITION&&(t[s.name.value]=s.locations.map(a=>a.value));return{Directive(s,a,o,l,c){const f=s.name.value,d=t[f];if(!d){e.reportError(new p(`Unknown directive "@${f}".`,{nodes:s}));return}const m=on(c);m&&!d.includes(m)&&e.reportError(new p(`Directive "@${f}" may not be used on ${m}.`,{nodes:s}))}}}function on(e){const t=e[e.length-1];switch("kind"in t||y(!1),t.kind){case u.OPERATION_DEFINITION:return an(t.operation);case u.FIELD:return E.FIELD;case u.FRAGMENT_SPREAD:return E.FRAGMENT_SPREAD;case u.INLINE_FRAGMENT:return E.INLINE_FRAGMENT;case u.FRAGMENT_DEFINITION:return E.FRAGMENT_DEFINITION;case u.VARIABLE_DEFINITION:return E.VARIABLE_DEFINITION;case u.SCHEMA_DEFINITION:case u.SCHEMA_EXTENSION:return E.SCHEMA;case u.SCALAR_TYPE_DEFINITION:case u.SCALAR_TYPE_EXTENSION:return E.SCALAR;case u.OBJECT_TYPE_DEFINITION:case u.OBJECT_TYPE_EXTENSION:return E.OBJECT;case u.FIELD_DEFINITION:return E.FIELD_DEFINITION;case u.INTERFACE_TYPE_DEFINITION:case u.INTERFACE_TYPE_EXTENSION:return E.INTERFACE;case u.UNION_TYPE_DEFINITION:case u.UNION_TYPE_EXTENSION:return E.UNION;case u.ENUM_TYPE_DEFINITION:case u.ENUM_TYPE_EXTENSION:return E.ENUM;case u.ENUM_VALUE_DEFINITION:return E.ENUM_VALUE;case u.INPUT_OBJECT_TYPE_DEFINITION:case u.INPUT_OBJECT_TYPE_EXTENSION:return E.INPUT_OBJECT;case u.INPUT_VALUE_DEFINITION:{const n=e[e.length-3];return"kind"in n||y(!1),n.kind===u.INPUT_OBJECT_TYPE_DEFINITION?E.INPUT_FIELD_DEFINITION:E.ARGUMENT_DEFINITION}default:y(!1,"Unexpected kind: "+T(t.kind))}}function an(e){switch(e){case G.QUERY:return E.QUERY;case G.MUTATION:return E.MUTATION;case G.SUBSCRIPTION:return E.SUBSCRIPTION}}function Ie(e){return{FragmentSpread(t){const n=t.name.value;e.getFragment(n)||e.reportError(new p(`Unknown fragment "${n}".`,{nodes:t.name}))}}}function he(e){const t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),r=Object.create(null);for(const s of e.getDocument().definitions)B(s)&&(r[s.name.value]=!0);const i=[...Object.keys(n),...Object.keys(r)];return{NamedType(s,a,o,l,c){const f=s.name.value;if(!n[f]&&!r[f]){var d;const m=(d=c[2])!==null&&d!==void 0?d:o,g=m!=null&&ln(m);if(g&&ie.includes(f))return;const N=F(f,g?ie.concat(i):i);e.reportError(new p(`Unknown type "${f}".`+_(N),{nodes:s}))}}}}const ie=[...Ae,...Pe].map(e=>e.name);function ln(e){return"kind"in e&&(ze(e)||Ze(e))}function cn(e){let t=0;return{Document(n){t=n.definitions.filter(r=>r.kind===u.OPERATION_DEFINITION).length},OperationDefinition(n){!n.name&&t>1&&e.reportError(new p("This anonymous operation must be the only defined operation.",{nodes:n}))}}}function un(e){var t,n,r;const i=e.getSchema(),s=(t=(n=(r=i==null?void 0:i.astNode)!==null&&r!==void 0?r:i==null?void 0:i.getQueryType())!==null&&n!==void 0?n:i==null?void 0:i.getMutationType())!==null&&t!==void 0?t:i==null?void 0:i.getSubscriptionType();let a=0;return{SchemaDefinition(o){if(s){e.reportError(new p("Cannot define a new schema within a schema extension.",{nodes:o}));return}a>0&&e.reportError(new p("Must provide only one schema definition.",{nodes:o})),++a}}}function fn(e){const t=Object.create(null),n=[],r=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(s){return i(s),!1}};function i(s){if(t[s.name.value])return;const a=s.name.value;t[a]=!0;const o=e.getFragmentSpreads(s.selectionSet);if(o.length!==0){r[a]=n.length;for(const l of o){const c=l.name.value,f=r[c];if(n.push(l),f===void 0){const d=e.getFragment(c);d&&i(d)}else{const d=n.slice(f),m=d.slice(0,-1).map(g=>'"'+g.name.value+'"').join(", ");e.reportError(new p(`Cannot spread fragment "${c}" within itself`+(m!==""?` via ${m}.`:"."),{nodes:d}))}n.pop()}r[a]=void 0}}}function dn(e){let t=Object.create(null);return{OperationDefinition:{enter(){t=Object.create(null)},leave(n){const r=e.getRecursiveVariableUsages(n);for(const{node:i}of r){const s=i.name.value;t[s]!==!0&&e.reportError(new p(n.name?`Variable "$${s}" is not defined by operation "${n.name.value}".`:`Variable "$${s}" is not defined.`,{nodes:[i,n]}))}}},VariableDefinition(n){t[n.variable.name.value]=!0}}}function Oe(e){const t=[],n=[];return{OperationDefinition(r){return t.push(r),!1},FragmentDefinition(r){return n.push(r),!1},Document:{leave(){const r=Object.create(null);for(const i of t)for(const s of e.getRecursivelyReferencedFragments(i))r[s.name.value]=!0;for(const i of n){const s=i.name.value;r[s]!==!0&&e.reportError(new p(`Fragment "${s}" is never used.`,{nodes:i}))}}}}}function pn(e){let t=[];return{OperationDefinition:{enter(){t=[]},leave(n){const r=Object.create(null),i=e.getRecursiveVariableUsages(n);for(const{node:s}of i)r[s.name.value]=!0;for(const s of t){const a=s.variable.name.value;r[a]!==!0&&e.reportError(new p(n.name?`Variable "$${a}" is never used in operation "${n.name.value}".`:`Variable "$${a}" is never used.`,{nodes:s}))}}},VariableDefinition(n){t.push(n)}}}function z(e){switch(e.kind){case u.OBJECT:return{...e,fields:mn(e.fields)};case u.LIST:return{...e,values:e.values.map(z)};case u.INT:case u.FLOAT:case u.STRING:case u.BOOLEAN:case u.NULL:case u.ENUM:case u.VARIABLE:return e}}function mn(e){return e.map(t=>({...t,value:z(t.value)})).sort((t,n)=>fe(t.name.value,n.name.value))}function De(e){return Array.isArray(e)?e.map(([t,n])=>`subfields "${t}" conflict because `+De(n)).join(" and "):e}function gn(e){const t=new In,n=new Map;return{SelectionSet(r){const i=Tn(e,n,t,e.getParentType(),r);for(const[[s,a],o,l]of i){const c=De(a);e.reportError(new p(`Fields "${s}" conflict because ${c}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:o.concat(l)}))}}}}function Tn(e,t,n,r,i){const s=[],[a,o]=M(e,t,r,i);if(Nn(e,s,t,n,a),o.length!==0)for(let l=0;l<o.length;l++){j(e,s,t,n,!1,a,o[l]);for(let c=l+1;c<o.length;c++)L(e,s,t,n,!1,o[l],o[c])}return s}function j(e,t,n,r,i,s,a){const o=e.getFragment(a);if(!o)return;const[l,c]=H(e,n,o);if(s!==l){Z(e,t,n,r,i,s,l);for(const f of c)r.has(f,a,i)||(r.add(f,a,i),j(e,t,n,r,i,s,f))}}function L(e,t,n,r,i,s,a){if(s===a||r.has(s,a,i))return;r.add(s,a,i);const o=e.getFragment(s),l=e.getFragment(a);if(!o||!l)return;const[c,f]=H(e,n,o),[d,m]=H(e,n,l);Z(e,t,n,r,i,c,d);for(const g of m)L(e,t,n,r,i,s,g);for(const g of f)L(e,t,n,r,i,g,a)}function En(e,t,n,r,i,s,a,o){const l=[],[c,f]=M(e,t,i,s),[d,m]=M(e,t,a,o);Z(e,l,t,n,r,c,d);for(const g of m)j(e,l,t,n,r,c,g);for(const g of f)j(e,l,t,n,r,d,g);for(const g of f)for(const N of m)L(e,l,t,n,r,g,N);return l}function Nn(e,t,n,r,i){for(const[s,a]of Object.entries(i))if(a.length>1)for(let o=0;o<a.length;o++)for(let l=o+1;l<a.length;l++){const c=_e(e,n,r,!1,s,a[o],a[l]);c&&t.push(c)}}function Z(e,t,n,r,i,s,a){for(const[o,l]of Object.entries(s)){const c=a[o];if(c)for(const f of l)for(const d of c){const m=_e(e,n,r,i,o,f,d);m&&t.push(m)}}}function _e(e,t,n,r,i,s,a){const[o,l,c]=s,[f,d,m]=a,g=r||o!==f&&w(o)&&w(f);if(!g){const C=l.name.value,ne=d.name.value;if(C!==ne)return[[i,`"${C}" and "${ne}" are different fields`],[l],[d]];if(!vn(l,d))return[[i,"they have differing arguments"],[l],[d]]}const N=c==null?void 0:c.type,b=m==null?void 0:m.type;if(N&&b&&Q(N,b))return[[i,`they return conflicting types "${T(N)}" and "${T(b)}"`],[l],[d]];const x=l.selectionSet,ee=d.selectionSet;if(x&&ee){const C=En(e,t,n,g,O(N),x,O(b),ee);return yn(C,i,l,d)}}function vn(e,t){const n=e.arguments,r=t.arguments;if(n===void 0||n.length===0)return r===void 0||r.length===0;if(r===void 0||r.length===0||n.length!==r.length)return!1;const i=new Map(r.map(({name:s,value:a})=>[s.value,a]));return n.every(s=>{const a=s.value,o=i.get(s.name.value);return o===void 0?!1:se(a)===se(o)})}function se(e){return v(z(e))}function Q(e,t){return P(e)?P(t)?Q(e.ofType,t.ofType):!0:P(t)?!0:I(e)?I(t)?Q(e.ofType,t.ofType):!0:I(t)?!0:k(e)||k(t)?e!==t:!1}function M(e,t,n,r){const i=t.get(r);if(i)return i;const s=Object.create(null),a=Object.create(null);be(e,n,r,s,a);const o=[s,Object.keys(a)];return t.set(r,o),o}function H(e,t,n){const r=t.get(n.selectionSet);if(r)return r;const i=h(e.getSchema(),n.typeCondition);return M(e,t,i,n.selectionSet)}function be(e,t,n,r,i){for(const s of n.selections)switch(s.kind){case u.FIELD:{const a=s.name.value;let o;(w(t)||S(t))&&(o=t.getFields()[a]);const l=s.alias?s.alias.value:a;r[l]||(r[l]=[]),r[l].push([t,s,o]);break}case u.FRAGMENT_SPREAD:i[s.name.value]=!0;break;case u.INLINE_FRAGMENT:{const a=s.typeCondition,o=a?h(e.getSchema(),a):t;be(e,o,s.selectionSet,r,i);break}}}function yn(e,t,n,r){if(e.length>0)return[[t,e.map(([i])=>i)],[n,...e.map(([,i])=>i).flat()],[r,...e.map(([,,i])=>i).flat()]]}class In{constructor(){this._data=new Map}has(t,n,r){var i;const[s,a]=t<n?[t,n]:[n,t],o=(i=this._data.get(s))===null||i===void 0?void 0:i.get(a);return o===void 0?!1:r?!0:r===o}add(t,n,r){const[i,s]=t<n?[t,n]:[n,t],a=this._data.get(i);a===void 0?this._data.set(i,new Map([[s,r]])):a.set(s,r)}}function hn(e){return{InlineFragment(t){const n=e.getType(),r=e.getParentType();if(R(n)&&R(r)&&!te(e.getSchema(),n,r)){const i=T(r),s=T(n);e.reportError(new p(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${s}".`,{nodes:t}))}},FragmentSpread(t){const n=t.name.value,r=On(e,n),i=e.getParentType();if(r&&i&&!te(e.getSchema(),r,i)){const s=T(i),a=T(r);e.reportError(new p(`Fragment "${n}" cannot be spread here as objects of type "${s}" can never be of type "${a}".`,{nodes:t}))}}}}function On(e,t){const n=e.getFragment(t);if(n){const r=h(e.getSchema(),n.typeCondition);if(R(r))return r}}function Dn(e){const t=e.getSchema(),n=Object.create(null);for(const i of e.getDocument().definitions)B(i)&&(n[i.name.value]=i);return{ScalarTypeExtension:r,ObjectTypeExtension:r,InterfaceTypeExtension:r,UnionTypeExtension:r,EnumTypeExtension:r,InputObjectTypeExtension:r};function r(i){const s=i.name.value,a=n[s],o=t==null?void 0:t.getType(s);let l;if(a?l=_n[a.kind]:o&&(l=bn(o)),l){if(l!==i.kind){const c=Sn(i.kind);e.reportError(new p(`Cannot extend non-${c} type "${s}".`,{nodes:a?[a,i]:i}))}}else{const c=Object.keys({...n,...t==null?void 0:t.getTypeMap()}),f=F(s,c);e.reportError(new p(`Cannot extend type "${s}" because it is not defined.`+_(f),{nodes:i.name}))}}}const _n={[u.SCALAR_TYPE_DEFINITION]:u.SCALAR_TYPE_EXTENSION,[u.OBJECT_TYPE_DEFINITION]:u.OBJECT_TYPE_EXTENSION,[u.INTERFACE_TYPE_DEFINITION]:u.INTERFACE_TYPE_EXTENSION,[u.UNION_TYPE_DEFINITION]:u.UNION_TYPE_EXTENSION,[u.ENUM_TYPE_DEFINITION]:u.ENUM_TYPE_EXTENSION,[u.INPUT_OBJECT_TYPE_DEFINITION]:u.INPUT_OBJECT_TYPE_EXTENSION};function bn(e){if(ke(e))return u.SCALAR_TYPE_EXTENSION;if(w(e))return u.OBJECT_TYPE_EXTENSION;if(S(e))return u.INTERFACE_TYPE_EXTENSION;if(Ue(e))return u.UNION_TYPE_EXTENSION;if(de(e))return u.ENUM_TYPE_EXTENSION;if($(e))return u.INPUT_OBJECT_TYPE_EXTENSION;y(!1,"Unexpected type: "+T(e))}function Sn(e){switch(e){case u.SCALAR_TYPE_EXTENSION:return"scalar";case u.OBJECT_TYPE_EXTENSION:return"object";case u.INTERFACE_TYPE_EXTENSION:return"interface";case u.UNION_TYPE_EXTENSION:return"union";case u.ENUM_TYPE_EXTENSION:return"enum";case u.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:y(!1,"Unexpected kind: "+T(e))}}function wn(e){return{...Fn(e),Field:{leave(t){var n;const r=e.getFieldDef();if(!r)return!1;const i=new Set((n=t.arguments)===null||n===void 0?void 0:n.map(s=>s.name.value));for(const s of r.args)if(!i.has(s.name)&&pe(s)){const a=T(s.type);e.reportError(new p(`Field "${r.name}" argument "${s.name}" of type "${a}" is required, but it was not provided.`,{nodes:t}))}}}}}function Fn(e){var t;const n=Object.create(null),r=e.getSchema(),i=(t=r==null?void 0:r.getDirectives())!==null&&t!==void 0?t:X;for(const o of i)n[o.name]=U(o.args.filter(pe),l=>l.name);const s=e.getDocument().definitions;for(const o of s)if(o.kind===u.DIRECTIVE_DEFINITION){var a;const l=(a=o.arguments)!==null&&a!==void 0?a:[];n[o.name.value]=U(l.filter(Rn),c=>c.name.value)}return{Directive:{leave(o){const l=o.name.value,c=n[l];if(c){var f;const d=(f=o.arguments)!==null&&f!==void 0?f:[],m=new Set(d.map(g=>g.name.value));for(const[g,N]of Object.entries(c))if(!m.has(g)){const b=Ve(N.type)?T(N.type):v(N.type);e.reportError(new p(`Directive "@${l}" argument "${g}" of type "${b}" is required, but it was not provided.`,{nodes:o}))}}}}}}function Rn(e){return e.type.kind===u.NON_NULL_TYPE&&e.defaultValue==null}function $n(e){return{Field(t){const n=e.getType(),r=t.selectionSet;if(n){if(k(O(n))){if(r){const i=t.name.value,s=T(n);e.reportError(new p(`Field "${i}" must not have a selection since type "${s}" has no subfields.`,{nodes:r}))}}else if(!r){const i=t.name.value,s=T(n);e.reportError(new p(`Field "${i}" of type "${s}" must have a selection of subfields. Did you mean "${i} { ... }"?`,{nodes:t}))}}}}}function Cn(e,t,n){var r;const i={},s=(r=t.arguments)!==null&&r!==void 0?r:[],a=U(s,o=>o.name.value);for(const o of e.args){const l=o.name,c=o.type,f=a[l];if(!f){if(o.defaultValue!==void 0)i[l]=o.defaultValue;else if(I(c))throw new p(`Argument "${l}" of required type "${T(c)}" was not provided.`,{nodes:t});continue}const d=f.value;let m=d.kind===u.NULL;if(d.kind===u.VARIABLE){const N=d.name.value;if(n==null||!An(n,N)){if(o.defaultValue!==void 0)i[l]=o.defaultValue;else if(I(c))throw new p(`Argument "${l}" of required type "${T(c)}" was provided the variable "$${N}" which was not provided a runtime value.`,{nodes:d});continue}m=n[N]==null}if(m&&I(c))throw new p(`Argument "${l}" of non-null type "${T(c)}" must not be null.`,{nodes:d});const g=je(d,c,n);if(g===void 0)throw new p(`Argument "${l}" has invalid value ${v(d)}.`,{nodes:d});i[l]=g}return i}function oe(e,t,n){var r;const i=(r=t.directives)===null||r===void 0?void 0:r.find(s=>s.name.value===e.name);if(i)return Cn(e,i,n)}function An(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Pn(e,t,n,r,i){const s=new Map;return K(e,t,n,r,i,s,new Set),s}function K(e,t,n,r,i,s,a){for(const o of i.selections)switch(o.kind){case u.FIELD:{if(!J(n,o))continue;const l=kn(o),c=s.get(l);c!==void 0?c.push(o):s.set(l,[o]);break}case u.INLINE_FRAGMENT:{if(!J(n,o)||!ae(e,o,r))continue;K(e,t,n,r,o.selectionSet,s,a);break}case u.FRAGMENT_SPREAD:{const l=o.name.value;if(a.has(l)||!J(n,o))continue;a.add(l);const c=t[l];if(!c||!ae(e,c,r))continue;K(e,t,n,r,c.selectionSet,s,a);break}}}function J(e,t){const n=oe(Le,t,e);if((n==null?void 0:n.if)===!0)return!1;const r=oe(Me,t,e);return(r==null?void 0:r.if)!==!1}function ae(e,t,n){const r=t.typeCondition;if(!r)return!0;const i=h(e,r);return i===n?!0:ue(i)?e.isSubType(i,n):!1}function kn(e){return e.alias?e.alias.value:e.name.value}function Un(e){return{OperationDefinition(t){if(t.operation==="subscription"){const n=e.getSchema(),r=n.getSubscriptionType();if(r){const i=t.name?t.name.value:null,s=Object.create(null),a=e.getDocument(),o=Object.create(null);for(const c of a.definitions)c.kind===u.FRAGMENT_DEFINITION&&(o[c.name.value]=c);const l=Pn(n,o,s,r,t.selectionSet);if(l.size>1){const d=[...l.values()].slice(1).flat();e.reportError(new p(i!=null?`Subscription "${i}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:d}))}for(const c of l.values())c[0].name.value.startsWith("__")&&e.reportError(new p(i!=null?`Subscription "${i}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:c}))}}}}}function Se(e,t){const n=new Map;for(const r of e){const i=t(r),s=n.get(i);s===void 0?n.set(i,[r]):s.push(r)}return n}function we(e){return{Field:t,Directive:t};function t(n){var r;const i=(r=n.arguments)!==null&&r!==void 0?r:[],s=Se(i,a=>a.name.value);for(const[a,o]of s)o.length>1&&e.reportError(new p(`There can be only one argument named "${a}".`,{nodes:o.map(l=>l.name)}))}}function Vn(e){const t=Object.create(null),n=e.getSchema();return{DirectiveDefinition(r){const i=r.name.value;if(n!=null&&n.getDirective(i)){e.reportError(new p(`Directive "@${i}" already exists in the schema. It cannot be redefined.`,{nodes:r.name}));return}return t[i]?e.reportError(new p(`There can be only one directive named "@${i}".`,{nodes:[t[i],r.name]})):t[i]=r.name,!1}}}function Fe(e){const t=Object.create(null),n=e.getSchema(),r=n?n.getDirectives():X;for(const o of r)t[o.name]=!o.isRepeatable;const i=e.getDocument().definitions;for(const o of i)o.kind===u.DIRECTIVE_DEFINITION&&(t[o.name.value]=!o.repeatable);const s=Object.create(null),a=Object.create(null);return{enter(o){if(!("directives"in o)||!o.directives)return;let l;if(o.kind===u.SCHEMA_DEFINITION||o.kind===u.SCHEMA_EXTENSION)l=s;else if(B(o)||Ne(o)){const c=o.name.value;l=a[c],l===void 0&&(a[c]=l=Object.create(null))}else l=Object.create(null);for(const c of o.directives){const f=c.name.value;t[f]&&(l[f]?e.reportError(new p(`The directive "@${f}" can only be used once at this location.`,{nodes:[l[f],c]})):l[f]=c)}}}}function jn(e){const t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),r=Object.create(null);return{EnumTypeDefinition:i,EnumTypeExtension:i};function i(s){var a;const o=s.name.value;r[o]||(r[o]=Object.create(null));const l=(a=s.values)!==null&&a!==void 0?a:[],c=r[o];for(const f of l){const d=f.name.value,m=n[o];de(m)&&m.getValue(d)?e.reportError(new p(`Enum value "${o}.${d}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:f.name})):c[d]?e.reportError(new p(`Enum value "${o}.${d}" can only be defined once.`,{nodes:[c[d],f.name]})):c[d]=f.name}return!1}}function Ln(e){const t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),r=Object.create(null);return{InputObjectTypeDefinition:i,InputObjectTypeExtension:i,InterfaceTypeDefinition:i,InterfaceTypeExtension:i,ObjectTypeDefinition:i,ObjectTypeExtension:i};function i(s){var a;const o=s.name.value;r[o]||(r[o]=Object.create(null));const l=(a=s.fields)!==null&&a!==void 0?a:[],c=r[o];for(const f of l){const d=f.name.value;Mn(n[o],d)?e.reportError(new p(`Field "${o}.${d}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:f.name})):c[d]?e.reportError(new p(`Field "${o}.${d}" can only be defined once.`,{nodes:[c[d],f.name]})):c[d]=f.name}return!1}}function Mn(e,t){return w(e)||S(e)||$(e)?e.getFields()[t]!=null:!1}function Yn(e){const t=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(n){const r=n.name.value;return t[r]?e.reportError(new p(`There can be only one fragment named "${r}".`,{nodes:[t[r],n.name]})):t[r]=n.name,!1}}}function Re(e){const t=[];let n=Object.create(null);return{ObjectValue:{enter(){t.push(n),n=Object.create(null)},leave(){const r=t.pop();r||y(!1),n=r}},ObjectField(r){const i=r.name.value;n[i]?e.reportError(new p(`There can be only one input field named "${i}".`,{nodes:[n[i],r.name]})):n[i]=r.name}}}function Xn(e){const t=Object.create(null);return{OperationDefinition(n){const r=n.name;return r&&(t[r.value]?e.reportError(new p(`There can be only one operation named "${r.value}".`,{nodes:[t[r.value],r]})):t[r.value]=r),!1},FragmentDefinition:()=>!1}}function Bn(e){const t=e.getSchema(),n=Object.create(null),r=t?{query:t.getQueryType(),mutation:t.getMutationType(),subscription:t.getSubscriptionType()}:{};return{SchemaDefinition:i,SchemaExtension:i};function i(s){var a;const o=(a=s.operationTypes)!==null&&a!==void 0?a:[];for(const l of o){const c=l.operation,f=n[c];r[c]?e.reportError(new p(`Type for ${c} already defined in the schema. It cannot be redefined.`,{nodes:l})):f?e.reportError(new p(`There can be only one ${c} type in schema.`,{nodes:[f,l]})):n[c]=l}return!1}}function qn(e){const t=Object.create(null),n=e.getSchema();return{ScalarTypeDefinition:r,ObjectTypeDefinition:r,InterfaceTypeDefinition:r,UnionTypeDefinition:r,EnumTypeDefinition:r,InputObjectTypeDefinition:r};function r(i){const s=i.name.value;if(n!=null&&n.getType(s)){e.reportError(new p(`Type "${s}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:i.name}));return}return t[s]?e.reportError(new p(`There can be only one type named "${s}".`,{nodes:[t[s],i.name]})):t[s]=i.name,!1}}function Gn(e){return{OperationDefinition(t){var n;const r=(n=t.variableDefinitions)!==null&&n!==void 0?n:[],i=Se(r,s=>s.variable.name.value);for(const[s,a]of i)a.length>1&&e.reportError(new p(`There can be only one variable named "$${s}".`,{nodes:a.map(o=>o.variable.name)}))}}}function Jn(e){return{ListValue(t){const n=Ye(e.getParentInputType());if(!P(n))return D(e,t),!1},ObjectValue(t){const n=O(e.getInputType());if(!$(n))return D(e,t),!1;const r=U(t.fields,i=>i.name.value);for(const i of Object.values(n.getFields()))if(!r[i.name]&&Xe(i)){const a=T(i.type);e.reportError(new p(`Field "${n.name}.${i.name}" of required type "${a}" was not provided.`,{nodes:t}))}},ObjectField(t){const n=O(e.getParentInputType());if(!e.getInputType()&&$(n)){const i=F(t.name.value,Object.keys(n.getFields()));e.reportError(new p(`Field "${t.name.value}" is not defined by type "${n.name}".`+_(i),{nodes:t}))}},NullValue(t){const n=e.getInputType();I(n)&&e.reportError(new p(`Expected value of type "${T(n)}", found ${v(t)}.`,{nodes:t}))},EnumValue:t=>D(e,t),IntValue:t=>D(e,t),FloatValue:t=>D(e,t),StringValue:t=>D(e,t),BooleanValue:t=>D(e,t)}}function D(e,t){const n=e.getInputType();if(!n)return;const r=O(n);if(!k(r)){const i=T(n);e.reportError(new p(`Expected value of type "${i}", found ${v(t)}.`,{nodes:t}));return}try{if(r.parseLiteral(t,void 0)===void 0){const s=T(n);e.reportError(new p(`Expected value of type "${s}", found ${v(t)}.`,{nodes:t}))}}catch(i){const s=T(n);i instanceof p?e.reportError(i):e.reportError(new p(`Expected value of type "${s}", found ${v(t)}; `+i.message,{nodes:t,originalError:i}))}}function Qn(e){return{VariableDefinition(t){const n=h(e.getSchema(),t.type);if(n!==void 0&&!Be(n)){const r=t.variable.name.value,i=v(t.type);e.reportError(new p(`Variable "$${r}" cannot be non-input type "${i}".`,{nodes:t.type}))}}}}function Hn(e){let t=Object.create(null);return{OperationDefinition:{enter(){t=Object.create(null)},leave(n){const r=e.getRecursiveVariableUsages(n);for(const{node:i,type:s,defaultValue:a}of r){const o=i.name.value,l=t[o];if(l&&s){const c=e.getSchema(),f=h(c,l.type);if(f&&!Kn(c,f,l.defaultValue,s,a)){const d=T(f),m=T(s);e.reportError(new p(`Variable "$${o}" of type "${d}" used in position expecting type "${m}".`,{nodes:[l,i]}))}}}}},VariableDefinition(n){t[n.variable.name.value]=n}}}function Kn(e,t,n,r,i){if(I(r)&&!I(t)){if(!(n!=null&&n.kind!==u.NULL)&&!(i!==void 0))return!1;const o=r.ofType;return re(e,t,o)}return re(e,t,r)}const $e=Object.freeze([ve,Xn,cn,Un,he,tn,Qn,$n,xe,Yn,Ie,Oe,hn,fn,Gn,dn,pn,ye,Fe,rn,we,Jn,wn,Hn,gn,Re]);class Wn{constructor(t,n){this._ast=t,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=n}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(t){this._onError(t)}getDocument(){return this._ast}getFragment(t){let n;if(this._fragments)n=this._fragments;else{n=Object.create(null);for(const r of this.getDocument().definitions)r.kind===u.FRAGMENT_DEFINITION&&(n[r.name.value]=r);this._fragments=n}return n[t]}getFragmentSpreads(t){let n=this._fragmentSpreads.get(t);if(!n){n=[];const r=[t];let i;for(;i=r.pop();)for(const s of i.selections)s.kind===u.FRAGMENT_SPREAD?n.push(s):s.selectionSet&&r.push(s.selectionSet);this._fragmentSpreads.set(t,n)}return n}getRecursivelyReferencedFragments(t){let n=this._recursivelyReferencedFragments.get(t);if(!n){n=[];const r=Object.create(null),i=[t.selectionSet];let s;for(;s=i.pop();)for(const a of this.getFragmentSpreads(s)){const o=a.name.value;if(r[o]!==!0){r[o]=!0;const l=this.getFragment(o);l&&(n.push(l),i.push(l.selectionSet))}}this._recursivelyReferencedFragments.set(t,n)}return n}}class zn extends Wn{constructor(t,n,r,i){super(n,i),this._schema=t,this._typeInfo=r,this._variableUsages=new Map,this._recursiveVariableUsages=new Map}get[Symbol.toStringTag](){return"ValidationContext"}getSchema(){return this._schema}getVariableUsages(t){let n=this._variableUsages.get(t);if(!n){const r=[],i=new me(this._schema);ge(t,Te(i,{VariableDefinition:()=>!1,Variable(s){r.push({node:s,type:i.getInputType(),defaultValue:i.getDefaultValue()})}})),n=r,this._variableUsages.set(t,n)}return n}getRecursiveVariableUsages(t){let n=this._recursiveVariableUsages.get(t);if(!n){n=this.getVariableUsages(t);for(const r of this.getRecursivelyReferencedFragments(t))n=n.concat(this.getVariableUsages(r));this._recursiveVariableUsages.set(t,n)}return n}getType(){return this._typeInfo.getType()}getParentType(){return this._typeInfo.getParentType()}getInputType(){return this._typeInfo.getInputType()}getParentInputType(){return this._typeInfo.getParentInputType()}getFieldDef(){return this._typeInfo.getFieldDef()}getDirective(){return this._typeInfo.getDirective()}getArgument(){return this._typeInfo.getArgument()}getEnumValue(){return this._typeInfo.getEnumValue()}}function Ce(e,t,n=$e,r,i=new me(e)){var s;const a=(s=r==null?void 0:r.maxErrors)!==null&&s!==void 0?s:100;t||qe(!1,"Must provide document."),Ge(e);const o=Object.freeze({}),l=[],c=new zn(e,t,i,d=>{if(l.length>=a)throw l.push(new p("Too many validation errors, error limit reached. Validation aborted.")),o;l.push(d)}),f=Je(n.map(d=>d(c)));try{ge(t,Te(i,f))}catch(d){if(d!==o)throw d}return l}function Zn(e){return{Field(t){const n=e.getFieldDef(),r=n==null?void 0:n.deprecationReason;if(n&&r!=null){const i=e.getParentType();i!=null||y(!1),e.reportError(new p(`The field ${i.name}.${n.name} is deprecated. ${r}`,{nodes:t}))}},Argument(t){const n=e.getArgument(),r=n==null?void 0:n.deprecationReason;if(n&&r!=null){const i=e.getDirective();if(i!=null)e.reportError(new p(`Directive "@${i.name}" argument "${n.name}" is deprecated. ${r}`,{nodes:t}));else{const s=e.getParentType(),a=e.getFieldDef();s!=null&&a!=null||y(!1),e.reportError(new p(`Field "${s.name}.${a.name}" argument "${n.name}" is deprecated. ${r}`,{nodes:t}))}}},ObjectField(t){const n=O(e.getParentInputType());if($(n)){const r=n.getFields()[t.name.value],i=r==null?void 0:r.deprecationReason;i!=null&&e.reportError(new p(`The input field ${n.name}.${r.name} is deprecated. ${i}`,{nodes:t}))}},EnumValue(t){const n=e.getEnumValue(),r=n==null?void 0:n.deprecationReason;if(n&&r!=null){const i=O(e.getInputType());i!=null||y(!1),e.reportError(new p(`The enum value "${i.name}.${n.name}" is deprecated. ${r}`,{nodes:t}))}}}}const xn=[un,Bn,qn,jn,Ln,Vn,he,ye,Fe,Dn,we,Re];function et(e,t,n,r,i){const s=$e.filter(o=>!(o===Oe||o===ve||r&&o===Ie));return n&&Array.prototype.push.apply(s,n),i&&Array.prototype.push.apply(s,xn),Ce(e,t,s).filter(o=>{if(o.message.includes("Unknown directive")&&o.nodes){const l=o.nodes[0];if(l&&l.kind===u.DIRECTIVE){const c=l.name.value;if(c==="arguments"||c==="argumentDefinitions")return!1}}return!0})}const A={Error:"Error",Warning:"Warning",Information:"Information",Hint:"Hint"},W={[A.Error]:1,[A.Warning]:2,[A.Information]:3,[A.Hint]:4},Y=(e,t)=>{if(!e)throw new Error(t)};function nt(e,t=null,n,r,i){var s,a;let o=null,l="";i&&(l=typeof i=="string"?i:i.reduce((f,d)=>f+v(d)+`

`,""));const c=l?`${e}

${l}`:e;try{o=Qe(c)}catch(f){if(f instanceof p){const d=rt((a=(s=f.locations)===null||s===void 0?void 0:s[0])!==null&&a!==void 0?a:{line:0,column:0},c);return[{severity:W.Error,message:f.message,source:"GraphQL: Syntax",range:d}]}throw f}return tt(o,t,n,r)}function tt(e,t=null,n,r){if(!t)return[];const i=et(t,e,n,r).flatMap(a=>le(a,W.Error,"Validation")),s=Ce(t,e,[Zn]).flatMap(a=>le(a,W.Warning,"Deprecation"));return i.concat(s)}function le(e,t,n){if(!e.nodes)return[];const r=[];for(const[i,s]of e.nodes.entries()){const a=s.kind!=="Variable"&&"name"in s&&s.name!==void 0?s.name:"variable"in s&&s.variable!==void 0?s.variable:s;if(a){Y(e.locations,"GraphQL validation error requires locations.");const o=e.locations[i],l=it(a),c=o.column+(l.end-l.start);r.push({source:`GraphQL: ${n}`,message:e.message,severity:t,range:new Ee(new V(o.line-1,o.column-1),new V(o.line-1,c))})}}return r}function rt(e,t){const n=Ke(),r=n.startState(),i=t.split(`
`);Y(i.length>=e.line,"Query text must have more lines than where the error happened");let s=null;for(let c=0;c<e.line;c++)for(s=new He(i[c]);!s.eol()&&n.token(s,r)!=="invalidchar";);Y(s,"Expected Parser stream to be available.");const a=e.line-1,o=s.getStartOfToken(),l=s.getCurrentPosition();return new Ee(new V(a,o),new V(a,l))}function it(e){const n=e.loc;return Y(n,"Expected ASTNode to have a location."),n}const ce=["error","warning","information","hint"],st={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};q.registerHelper("lint","graphql",(e,t)=>{const{schema:n,validationRules:r,externalFragments:i}=t;return nt(e,n,r,void 0,i).map(s=>({message:s.message,severity:s.severity?ce[s.severity-1]:ce[0],type:s.source?st[s.source]:void 0,from:q.Pos(s.range.start.line,s.range.start.character),to:q.Pos(s.range.end.line,s.range.end.character)}))});
