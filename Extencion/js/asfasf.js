


let htmla = `<div id="fdiuohf3434ggg">
<a id="fdiuohf3434gg" href="`;
//htmla += resultLink;
htmla += `" download="image">
<img src="`;
htmla += `https://i.ibb.co/598kC6g/download-file.png`;
htmla += `" alt="Download">
</a>
</div>`;
function setDiv(id) {
    let parentDiv = document.createElement("div");
    parentDiv.id = id;
   
   
    return parentDiv;
}
function setChild1() {
    let child1 = document.createElement("a");
    child1.id = "childldl";
    child1.href ="google.com" ;
    child1.download = 'image.jpg';
    
    return child1;
}
function setChild2() {
    let myImage = new Image(40,40);
    myImage.src = 'https://i.ibb.co/598kC6g/download-file.png';

    // child2.src = 'https://i.ibb.co/598kC6g/download-file.png';
    // child2.alt = 'Download';
    return myImage;
}


var temp = document.title;
if(temp.indexOf("Instagram photo") != -1){
    
    let as = document.getElementsByTagName("img");
    
    for (let i = 0; i < as.length; i++) {
        let temp = as[i];
        if (temp.src.match('(https).*[^\">]') ){
            let sp1 = setDiv(temp.src);
            let child1 = setChild1();
            sp1.appendChild(child1);
            console.log(sp1);
            let sp2 = temp;
            console.log(sp2);
            sp2.parentNode.insertBefore(sp1, sp2);
            let ghjghjhj = '';
            document.getElementById(temp.src).insertAdjacentHTML("beforeend", ghjghjhj );
            console.log(document.getElementById("asdasd"));
            
           
            
           
            //temp.addEventListener('click', console.log("asdasd"));
        
    } 
}


console.log("Succesfully found Instagram");
}
