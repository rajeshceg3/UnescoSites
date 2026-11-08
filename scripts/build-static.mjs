import {cpSync,mkdirSync,rmSync} from 'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');
for(const item of ['index.html','tour.js','tour.css','vendor','data','diagrams','photos','images'])cpSync(item,'dist/'+item,{recursive:true});
