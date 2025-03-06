function menu(){
    let button = document.querySelector("header div button");
    if (button){
        button.addEventListener("click", function(){
            let navTag = document.createElement("nav");
            let body = document.querySelector("body");
            body.insertBefore(navTag, body.firstChild);
            navTag.style.backgroundColor = "#73212F";
            navTag.style.height = "100vh";
            navTag.style.position = "fixed";
            navTag.style.top = "0";
            navTag.style.left = "0";
            navTag.style.zIndex = "1000";
            navTag.style.padding = "2em";
            let olTag = document.createElement("ol");
            let liTag1 = document.createElement("li");
            let liTag2 = document.createElement("li");
            let liTag3 = document.createElement("li");
            let liTag4 = document.createElement("li");
            let liTag5 = document.createElement("li");
            let liTag6 = document.createElement("li");
            let aTag1 = document.createElement("a");
            let aTag2 = document.createElement("a");
            let aTag3 = document.createElement("a");
            let aTag4 = document.createElement("a");
            let aTag5 = document.createElement("a");
            let aTag6 = document.createElement("a");
            navTag.appendChild(olTag);
            olTag.appendChild(liTag1);
            liTag1.appendChild(aTag1);
            aTag1.textContent = "Planos e serviços"
            olTag.appendChild(liTag2);
            liTag2.appendChild(aTag2);
            aTag2.textContent = "Pagamento online"
            olTag.appendChild(liTag3);
            liTag3.appendChild(aTag3);
            aTag3.textContent = "Nossas unidadess"
            olTag.appendChild(liTag4);
            liTag4.appendChild(aTag4);
            aTag4.textContent = "Artigos funerários"
            olTag.appendChild(liTag5);
            liTag5.appendChild(aTag5);
            aTag5.textContent = "Velório online"
            olTag.appendChild(liTag6);
            liTag6.appendChild(aTag6);
            aTag6.textContent = "Fale conosco"
        });
    }
}
document.addEventListener("DOMContentLoaded", menu);