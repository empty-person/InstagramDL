
function toDataURL(url) {
    return fetch(url).then((response) => {
        return response.blob();
    }).then(blob => {
        return URL.createObjectURL(blob);
    });
}
// async function download(URL) {
//     const a = document.createElement("a");
//     a.href = await toDataURL(URL);
//     a.download = "";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// }





let boolean = "false";
let boolean1 = "true";
 document.addEventListener('click', function() {
    console.log("click")
    arabCut();
        
     
 });



 function arabCut(){

function setDiv(id) {
    let parentDiv = document.createElement("div");
    parentDiv.id = id;
   parentDiv.className = "totSamiiDiv"
   
    return parentDiv;
}
function setChild1(idz) {
    let child1 = document.createElement("a");
    child1.id = idz;
    child1.download = 'Downloadasd.jpg';
    return child1;
}

function setChild2(URL) {
    let resultUrl = URL.match('(https).*[^\">]');
   




    let superTestChild = document.createElement("img");
    superTestChild.alt = 'Download';
    superTestChild.src ='https://i.postimg.cc/XNDy236d/server-downgrade-2380-3.png';
    console.log(resultUrl[0]);

    superTestChild.addEventListener('click', async function() {
        const a = document.createElement("a");
        a.href = await toDataURL(resultUrl[0]);
        a.download = "";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
    
    return superTestChild;
 }


var temp1 = document.title;
console.log(temp1);
if(temp1.indexOf("Instagram photo") != -1){
   
        
  
    let megapupertest1 = document.querySelectorAll("div > div > img");
    for(let zxcc = 0; zxcc<megapupertest1.length; zxcc++){
        
        let childForButton = document.createElement("a");
        childForButton.className = "placeForButton";
        console.log(megapupertest1[zxcc].parentNode.parentNode.parentNode.parentNode.lastChild.className);
        if(megapupertest1[zxcc].parentNode.parentNode.parentNode.parentNode.lastChild.className == 'placeForButton'){
            console.log("a")
        }else{
        megapupertest1[zxcc].parentNode.parentNode.parentNode.parentNode.appendChild(childForButton)}
    }
   

    let buttonPlaceCollection = document.getElementsByClassName("placeForButton");
    //let as = document.getElementsByClassName('placeForButton')
    //let as = document.getElementsByTagName("img");
    console.log(buttonPlaceCollection.length);
    for(let i = 0; i < buttonPlaceCollection.length; i++){
        let temp = buttonPlaceCollection[i].parentNode.firstChild.firstChild.firstChild.firstChild;
        let temp1 = buttonPlaceCollection[i];
        //console.log(temp);
        if (temp.src.match('(https).*[^\">]') ){
            if(temp1.hasChildNodes()){
                
            }else{
            let iz = i + 'asd';
            let sp1 = setDiv(iz + 'T');
            let child1 = setChild1(iz);
            let child2 = setChild2(temp.src);
            child1.appendChild(child2);
            
            sp1.appendChild(child1);
            
            temp1.append(sp1);}

          
            
            
            //console.log(document.getElementById(iz + 'T'));
            
           
            
           
            
        
    } }



console.log("Succesfully found Instagram");
}}
 