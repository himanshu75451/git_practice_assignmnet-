let N=6;
let str=nrupul;
let bag="";
    for(let x=str.length-1; x>=0; x--){
        bag+=str[x];
    }
    if(bag==str){
        console.log("Yes");
    }else{
        console.log("No");
    }