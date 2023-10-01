let codes = document.getElementById("codes");
let run = document.getElementById("run");
let remove = document.getElementById("delete");
let result = document.getElementById("result-js");
let change = document.getElementById("cahngeTR");
let resultTR = document.getElementById("result");
let Arabic = document.getElementById("Arabic");
let English = document.getElementById("English");
Arabic.onclick = ()=>{
    setlanugage(Arabic)
    localStorage.setItem("langage", "Arabic");
}
English.onclick = ()=>{
    setlanugage(English);
    localStorage.setItem("langage", "English");
}
function setlanugage(getlanugage){
    if(getlanugage === Arabic){
        change.innerHTML = "تغيير اللغة";
        run.innerHTML = "أبدأ بتشغيل الأكواد";
        remove.innerHTML = "احذف الأكواد";
        resultTR.innerHTML = "المخرجات";
}
    else if(getlanugage === English){
        change.innerHTML = "Change Language";
        run.innerHTML = "Run Codes";
        remove.innerHTML = "Delete Codes";
        resultTR.innerHTML = "Result";
    }
}
run.onclick = ()=>{
    if(codes.value != 0){
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT" , codes.value);
    }
};
remove.onclick = ()=>{
    result.innerHTML = "";
    localStorage.clear();
    codes.value = ""
}

onload = ()=>{
    setlanugage(localStorage.getItem("langage"));
    if (localStorage.getItem("RESULT")==null){
        document.getElementById("codes").innerHTML;
    }
    else{
        codes.value =  localStorage.getItem("RESULT");
        result.innerHTML = codes.value;
    }
}