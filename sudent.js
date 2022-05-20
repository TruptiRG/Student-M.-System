
let arr=[];
function Student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=b;
}

function t1(e){
    e.preventDefault();

    let name1=document.querySelector("#name").value;
    let course=document.querySelector("#course").value;
    let unit=document.querySelector("#unit").value;
    let image=document.querySelector("#image").value;
    let batch=document.querySelector("#batch").value;

    let t2=new Student(name1,course,unit,image,batch);
    arr.push(t2);
    console.log(arr);
    localStorage.setItem("Students_data",JSON.stringify(arr));

    document.getElementById("name").value=null;
    document.getElementById("course").value=null;
    document.getElementById("unit").value=null;
    document.getElementById("image").value=null;
    document.getElementById("batch").value=null;
}
// function tt1(e){
//     e.preventDefault();

//     let name1=document.querySelector("#name").value;
//     let course=document.querySelector("#course").value;
//     let unit=document.querySelector("#unit").value;
//     let image=document.querySelector("#image").value;
//     let batch=document.querySelector("#batch").value;

//     let t2=new Student(name1,course,unit,image,batch);
//     arr.push(t2);
//     console.log(arr);
//     localStorage.setItem("Students_data2",JSON.stringify(arr));

//     document.getElementById("name").value=null;
//     document.getElementById("course").value=null;
//     document.getElementById("unit").value=null;
//     document.getElementById("image").value=null;
//     document.getElementById("batch").value=null;

    
// }

let sCount=JSON.parse(localStorage.getItem("Students_data"));
// let sCount2=JSON.parse(localStorage.getItem("Students_data2"))||[]

function display(){
    // let batch=document.querySelector("#batch").value; 
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = "web-17";
    let td2 = document.createElement("td");
    td2.innerText = sCount.length;

    tr1.append(td1,td2);
    document.querySelector("tbody").append(tr1);
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