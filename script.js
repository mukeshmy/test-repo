
function convert(){
    let number = document.getElementById("input-number").value;
    let from = document.getElementById("select-from").value;
    let to = document.getElementById("select-to").value

    if(from == "F" && to == "C"){
       let num=((number-32)/1.8).toFixed(1);
        document.getElementById("degree-result").innerHTML=(num+ "&degC")

    }else if(from == "C" && to == "F"){
        let num=((number*1.8)+32).toFixed(1);
        document.getElementById("degree-result").innerHTML=(num+"&degF")

    }else{
        document.getElementById("degree-result").innerHTML=(number)
    }
}