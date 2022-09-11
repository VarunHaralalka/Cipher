window.onload = ()=>{
    let buttton=document.querySelector("#btn");
    buttton.addEventListener("click",ciphertxt);
}

function ciphertxt(){
    var input = "";
        let result =document.querySelector("#result");
        var en="";
        var i = 0;
        var l = 0;
        var c1 = 0;
        var c2 = 0;
        var x = ' ';
        input=document.getElementById("Password").value;
        c1=document.getElementById("key").value;
        console.log(input)
        console.log(c1)
        c2 = c1 + 1;
        l = input.length;
        for (i = 0; i < l; i++)
        {
            x = input.charAt(i);
            if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90)
            {
                if (x.charCodeAt(0) > (90 - c1))
                {
                    en += String.fromCharCode((64 + c1 - (90 - x.charCodeAt(0))));
                }
                else 
                {
                    en += String.fromCharCode((x.charCodeAt(0) + c1));
                }
            }
            else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
            {
                if (x.charCodeAt(0) > (122 - c2))
                {
                    en += String.fromCharCode((96 + c2 - (122 - x.charCodeAt(0))));
                }
                else 
                {
                    en += String.fromCharCode((x.charCodeAt(0) + c2));
                }
            }
            else 
            {
                en += x;
            }
        }
        document.getElementById("result").value=en;
}
