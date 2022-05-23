
let sCount=JSON.parse(localStorage.getItem("Students_data"));
// let sCount2=JSON.parse(localStorage.getItem("Students_data2"))||[]

console.log(sCount);

sCount.map(function(ele,index){
    let box=document.createElement("div");
    box.setAttribute("class","box")
    let box1=document.createElement("div");
    let box2=document.createElement("div");
    box2.setAttribute("class","box2");
    let img=document.createElement("img");
    img.src=ele.image;
    img.setAttribute("class","img1")
    let name=document.createElement("h4");
    name.innerText=`Name: ${ele.name}`;
    let batch=document.createElement("p");
    batch.innerText=`Batch: ${ele.batch}`;
    let course=document.createElement("p");
    course.innerText=`Course: ${ele.course}`;
    let unit=document.createElement("h3");
    unit.innerText=`Unit: ${ele.unit}`;
    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.setAttribute("class","btn");
    btn.addEventListener("click",function(){
        removeItem(ele,index);
    });
    box1.append(img);
    box2.append(name,batch,course,unit,btn);
    box.append(box1,box2);
    document.querySelector("#container").append(box);

});
function removeItem(elem, index) {
    console.log(elem, index);
    sCount.splice(index, 1);
    console.log(sCount);
    localStorage.setItem("Students_data", JSON.stringify(sCount));
    window.location.reload();
  }

function display(){
    // let batch=document.querySelector("#batch").value; 
    let data= JSON.parse(localStorage.getItem("Students_data")) || []
    let obj={};
    for(let i=0;i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0;
        }
    }
    for(let i=0;i<data.length;i++){
        obj[data[i].batch]++;
    }
    // let batch=document.querySelector("#batch").value; 
    for(var key in obj){
         k=key;
         v=obj[key];
         let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = k;
        let td2 = document.createElement("td");
        td2.innerText = v;

        tr1.append(td1,td2);
        document.querySelector("tbody").append(tr1);
    }
}
// function display2(){
//     // let batch=document.querySelector("#batch").value; 
//     let tr1 = document.createElement("tr");
//     let td1 = document.createElement("td");
//     td1.innerText = "web-18";
//     let td2 = document.createElement("td");
//     td2.innerText = sCount2.length;

//     tr1.append(td1,td2);
//     document.querySelector("tbody").append(tr1);
// }

display();
// display2();