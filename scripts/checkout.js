// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var bookData = JSON.parse(localStorage.getItem("movie"))


    // document.querySelector("#movie").innerHTML=null
    bookData.forEach(function(el){
        let box = document.createElement("div")
        box.setAttribute("id","box")

        let image = document.createElement("img")
        image.src=el.Poster
        image.style="width:100%;height:250px"

        let title = document.createElement("p")
        title.innerHTML=el.Title
       
        let btn = document.createElement("button")
        btn.innerText="Book Now"
    
        box.append(image,title,btn)

        document.querySelector("#movie").append(box)
    })
