let count = 0;

function increment() {
    if(count<=9){
    count++;
    document.getElementById("count").value= count;
    console.log(count);}
}

function decrement(){
    if(count>0){
        count--;
        document.getElementById("count").value=count;
        console.log(count)
    }
}

function reset(){
    count=0
    document.getElementById("count").value=count;
}