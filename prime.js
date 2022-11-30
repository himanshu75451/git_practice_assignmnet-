
let num=13;
let factor=0;
for(let x=1; x<=num; x++){
    if(num%x===0){
        factor++;
    }
}
if(factor==1){
    console.log("Yes");
}
