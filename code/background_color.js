// const generateColorValue=function(){
//     return Math.floor(Math.random()* 256)
// }

// const createColor=function(){
//     const red=generateColorValue();
//     const green=generateColorValue();
//     const blue=generateColorValue();
//     return `rgb(${red},${green},${blue})`
// }

// const applyColor=function(color){
//     return document.body.style.backgroundColor=color
// }

// const add=function(){
//     const color=createColor()
//     return applyColor(color)
// }
// console.log(add())



// const generateColorValue = ()=>{
//     return Math.floor(Math.random() * 100)
//  }
//  const createColor = ()=>{
//     const red = generateColorValue();
//     const green = generateColorValue();
//     const blue = generateColorValue();
//     return `rgb( ${red}, ${green}, ${blue})`
//  }
//  const applyColorToBody = (color)=>{
//     return document.body.style.backgroundColor = color
//  }
//  const addRandomColorToBg = ()=>{
//     const color = createColor()
//     return applyColorToBody(color)
//  }
//  addRandomColorToBg();
//  const onclickevent = document.getElementById("display");
//     // onclickevent.onClick=()=>addRandomColorToBg();
//  // or
//  onclickevent.addEventListener("click", ()=>setTimeout(addRandomColorToBg, 1000))
 
 
 // onclickevent1.addEventListener("click", ()=>console.log("hello"));
 // setTimeout(addRandomColorToBg, 1000)
 // // setInterval(addRandomColorToBg, 2000)
 // const interval = setInterval(addRandomColorToBg, 2000)
 // onclickevent.addEventListener("click", ()=> clearInterval(interval))

 const tweetlist = document.getElementById("tweet-list");
 //event listner
 EventListener();
 function EventListener() {
  document.querySelector("#form").addEventListener("submit", newtweet);
  //remove tweet from list
  tweetlist.addEventListener('click', removetweet)
 }
 //function
 function newtweet(event) {
  event.preventDefault();
  console.log("form event", event.target[0].innerHTML);
  const tweet = document.getElementById("tweet").value;
  console.log("tweet value", tweet);
  //create a li element
  const li = document.createElement("li");
  li.textContent = tweet;
  tweetlist.appendChild(li);
  //create remove button
  const removeBtn = document.createElement("a");
  removeBtn.textContent = 'X'
  removeBtn.classList = "remove-tweet";
  li.appendChild(removeBtn)
 }
 function removetweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove()
    }
 }