var runs=10;
if(runs>=100){
    console.log("century");
}
else if(runs<100 && runs>=50){
    console.log("half century");
}
else if(runs<50 && runs>=10){
    console.log("U can do better");
}
else if(runs==0 || runs<=10 || runs!=10 ){
    console.log("better luck next time");
}