var r = "|"

console.log(r);

const o = "+-x/";

var s = "0";
document.getElementById('res').innerHTML = s;


function svn(){
    s = s + "7"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};


function egt(){
    s = s + "8"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function nin(){
    s = s + "9"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function pls(){
    s = s + "+"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function four(){
    s = s + "4"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function fiv(){
    s = s + "5"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function six(){
    s = s + "6"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function min(){
    s = s + "-"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function one(){
    s = s + "1"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function too(){
    s = s + "2"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function ree(){
    s = s + "3"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function zer(){
    s = s + "0"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
}

function mul(){
    s = s + "x"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function div(){
    s = s + "/"
    if(s.charAt(0)=="0"){
      s =  s.replace("0","");
    }
    document.getElementById('res').innerHTML = s;
};

function clr(){
    s = 0;
    document.getElementById('res').innerHTML = s;
}



function result(){
    var c = o.indexOf(s.charAt(0));
    console.log(c)
    if(c != -1){
        alert("Invalid");
    }
    
    else{
    for(var j = 0; j<s.length; j++){
        var c2 = o.indexOf(s.charAt(j));
        if(c2==0){
            var op = s.indexOf("+")
            var sec = parseInt(s.slice(op+1,s.length))
            var fir = parseInt(s.slice(0,op+1))
            s = fir + sec;
            document.getElementById('res').innerHTML = s;
        }
        else if(c2==1){
            var op = s.indexOf("-")
            var sec = parseInt(s.slice(op+1,s.length))
            var fir = parseInt(s.slice(0,op+1))
            s = fir - sec;
            document.getElementById('res').innerHTML = s;
        }
        else if(c2==2){
            var op = s.indexOf("x")
            var sec = parseInt(s.slice(op+1,s.length))
            var fir = parseInt(s.slice(0,op+1))
            s = fir*sec;
            document.getElementById('res').innerHTML = s;
        }
        else if(c2==3){
            var op = s.indexOf("/")
            var sec = parseInt(s.slice(op+1,s.length))
            var fir = parseInt(s.slice(0,op+1))
            s = fir/sec;
            document.getElementById('res').innerHTML = s;
        }


    }
}
}