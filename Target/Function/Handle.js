import t from"path";import m from"fs-extra";import e from"chalk";import{verboseLog as w}from"./utils";var x=async(o,n,c,i,a=!1,r=!1)=>{for(const h of n){const{dir:p}=t.parse(h);p.endsWith("/**")||w(`The from path ${e.white(n)} of current asset pair doesnot ends with ${e.white("/**/*(.ext)")}, `,a);const l=p.replace("/**",""),[,d]=c.split(l),f=t.resolve(c),s=t.extname(i)===""?t.resolve(o,i,d.slice(1)):t.resolve(o,i);r||m.ensureDirSync(t.dirname(s)),r||m.copyFileSync(f,s),(await import("@Function/Log.js")).default(`${r?e.white("[DryRun] "):""}File copied: ${e.white(f)} -> ${e.white(s)}`,a)}};export{x as default};
