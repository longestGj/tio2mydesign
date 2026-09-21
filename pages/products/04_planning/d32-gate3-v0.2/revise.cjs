const fs=require('fs'),path=require('path');
const b=path.join(__dirname,'build.cjs'),j=path.join(__dirname,'planning.js');
let s=fs.readFileSync(b,'utf8');s=s.replace('<a href="${rows.find(r=>r.grade===g).url}">View Grade','<a aria-label="View ${g} grade" href="${rows.find(r=>r.grade===g).url}">View Grade');s=s.replace('<a href="${r.url}">View Grade','<a aria-label="View ${r.grade} grade" href="${r.url}">View Grade');s=s.replace('<a href="/products/cr-901/">View Grade','<a aria-label="View CR-901 grade" href="/products/cr-901/">View Grade');fs.writeFileSync(b,s);
s=fs.readFileSync(j,'utf8');s=s.replace('<a href="\'+DATA.rows.find(r=>r.grade===g).url+\'">View Grade','<a aria-label="View \'+g+\' grade" href="\'+DATA.rows.find(r=>r.grade===g).url+\'">View Grade');fs.writeFileSync(j,s);
