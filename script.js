t=0;
i=0;
let w=0;
function make(){
    document.getElementById("faq").classList.remove("hidden");
    //console.log("hi")
    const q = document.getElementById('q').value
    const qNode = document.createTextNode(q);
    const a = document.getElementById('a').value
    const aNode = document.createTextNode(a);
    let b = document.createElement("button");
    let p = document.createElement("div");
    b.setAttribute("class","m")
    p.setAttribute("class","panel hidden ip");
    b.appendChild(qNode);
    p.appendChild(aNode);
    let newFaq = new faq(b,p)
    b.addEventListener('click',function(){
        
        if(w==0){
            p.classList.remove("hidden");
            
            w=1;
        }
        else{
            p.classList.add("hidden");
            w=0;
        }
        
    })
    document.body.appendChild(b);
    document.body.appendChild(p);
    
    
    i++;
}

class faq{
    constructor(b,p){
        this.b=b;
        this.p=p;
    }

    
}
document.getElementById("dot").addEventListener("click",function(){
    if(t==0){
        document.getElementById("info").classList.remove("hidden")
        t=1;
    }
    else{
        document.getElementById("info").classList.remove("hidden");
        t=0;
    }
    
})

