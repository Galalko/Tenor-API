
const imgContainer =document.querySelector("#img-container")
const searchForm = document.querySelector(".search-form")
const searchKey = document.querySelector("#search-key")
const submitButton = document.querySelector("#submit-button")



let searchKeyValue="";
searchForm.addEventListener("submit",function(e){
   
    e.preventDefault()
     searchKeyValue = searchKey.value
     document.getElementById("error-click").innerHTML ="";
     document.getElementById("img-container").innerHTML ="";
     if (searchKeyValue==="") {
         document.getElementById("error-click").innerHTML = "Come on !! you have to write Something ";
         
       
        }
        
        else {
        let myRequest = new XMLHttpRequest()
        myRequest.open('GET',`https://api.tenor.com/v1/search?q=${searchKeyValue}&key=J7UMNFGSO69D&limit=50`)
        myRequest.responseType='json'
        
    
        myRequest.onreadystatechange = function () {
            if(myRequest.readyState === 4 && myRequest.status===200){
                const result = myRequest.response
        
                printGif(result)
                
            }else if (result.results.length===0)  {

            }
        }
        myRequest.send()
     }
})

function printGif (result){
    for (let i=0;i<result.results.length;i++){
        const gif= result.results[i].media[0].gif.url
        const gifImage = document.createElement("img")
        gifImage.src=gif
        gifImage.setAttribute("class","allGif")
        imgContainer.appendChild(gifImage)
    }
}

// var beepOne = $("#beep")[0];
// 		$("#img-container")
// 	.mouseenter(function() {
// 		beepOne.play();
//     })