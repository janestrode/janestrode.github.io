let ourObject = {
    "name": "jane",
    "profession": "art student",
    "age": 21,
    "pets": [{"name": "ida", "age": 4, "type": "dog"},{"name": "daisy", "age": 14, "type": "dog"}]
}

console.log(ourObject);

let myData = {};

function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
        console.log(res);
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})
}
fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData()})

console.log(myData);

let name = "jane";

let myString= "hello ${name} !";
