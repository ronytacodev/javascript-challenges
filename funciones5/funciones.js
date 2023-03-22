function createP(text) {
    let p = document.createElement("p");

    if (text) {
        let pText = document.createTextNode(text);
        p.appendChild(pText);
    }
    return p;
}

function createA(link, text) {
    let a = document.createElement("a");
    if (link) {
        a.setAttribute("href", link);
    }

    if(text) {
        let aText = document.createTextNode(text);
        a.appendChild(aText);
    }

    return a;
}

function createUl(elements) {

    let ul = document.createElement("ul");

    if(Array.isArray(elements)){
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if(element) {
                let li = document.createElement("li");
                let liText = document.createTextNode(element);
                li.appendChild(liText);
                ul.appendChild(li);
            }
            
        }
    }

    return ul;
}