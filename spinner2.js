let shape = ['|','/','-','\\','|','/','-','\\','|','\n'];

let duration = 100;
for(const elm of shape){
setTimeout(() => {
  process.stdout.write(`\r ${elm}`);
}, duration);
 duration += 200;
}