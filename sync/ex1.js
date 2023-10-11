console.log('first 1')
console.log('second 2')
console.log('third 3')
function sync(){
    console.log('10')
    console.log('20')
    console.log('30')
}
sync()
// Async
setTimeout(()=>console.log('step1'),1000)
setTimeout(()=>console.log('step2'),2000)
setTimeout(()=>console.log('step3'),1000)
// ------
console.log('bye')
for(let i=1;i<=5;i++){
    console.log(i)
}
// 
setInterval(()=>console.log('hi'),3000)