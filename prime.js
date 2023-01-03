let N=5;
let flag=true;
for(let i=2; i<N; i++){
    if(i%N==0){
        flag=false;
    }
    else{
        flag=true;
    }
}

if(flag==true){
    console.log("true");
}
else{
    console.log("false");
}
