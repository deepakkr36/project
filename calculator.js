let add=document.getElementById("add");

add.onclick=()=>{
    let first=parseInt(document.getElementById("first").value);
    let last=parseInt(document.getElementById("last").value);

    let sum=first+last;
    let ans=document.getElementById("ans");
    ans.value=sum;
    return false;
}

let sub=document.getElementById("sub");
sub.onclick=()=>{
    let first=parseInt(document.getElementById("first").value);
    let last=parseInt(document.getElementById("last").value);

    let sub=first-last;
    let ans=document.getElementById("ans");
    ans.value=sub;
    return false;
}

let mul=document.getElementById("mul");
mul.onclick=()=>{
    let first=parseInt(document.getElementById("first").value);
    let last=parseInt(document.getElementById("last").value);

    let mul=first*last;
    let ans=document.getElementById("ans");
    ans.value=mul;
    return false;
}

let div=document.getElementById("div");
div.onclick=()=>{;
    let first=parseInt(document.getElementById("first").value);
    let last=parseInt(document.getElementById("last").value);

    let div=first/last;
    let ans=document.getElementById("ans");
    ans.value=div;
    return false;
}

let rem=document.getElementById("rem");
rem.onclick=()=>{;
    let first=parseInt(document.getElementById("first").value);
    let last=parseInt(document.getElementById("last").value);

    let rem=first%last;
    let ans=document.getElementById("ans");
    ans.value=rem;
    return false;
}

