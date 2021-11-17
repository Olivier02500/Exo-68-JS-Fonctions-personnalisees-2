


function randomNumber(){
    return Math.trunc(Math.random() *100);
}
let element = document.getElementsByTagName("p");

for  (let i =0; i<10;i++ ){
    element[i].innerHTML = randomNumber().toString();

}
