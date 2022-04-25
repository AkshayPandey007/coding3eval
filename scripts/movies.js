// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;
async function searchmovie()
{
try{
    const movie = document.querySelector("#search").value

    const res =await fetch(`https://www.omdbapi.com/?apikey=6fa75e4b&s=${movie}`)

    let data = await res.json()
    console.log(data.Search)
    const letsGO=data.Search
    return  letsGO
}
catch(err)
{
    console.log(err)
}
}

var movieDataSave = JSON.parse(localStorage.getItem("movie")) || []
function appendMovie(data)
{
    document.querySelector("#movies").innerHTML=null
    data.forEach(function(el){
        let box = document.createElement("div")
        box.setAttribute("id","box")

        let image = document.createElement("img")
        image.src=el.Poster
        image.style="width:100%;height:250px"

        let title = document.createElement("p")
        title.innerHTML=el.Title
       
        let btn = document.createElement("button")
        btn.innerText="Book Now"
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
            bookFun(el)
        })

        box.append(image,title,btn)

        document.querySelector("#movies").append(box)
    })
}


function bookFun(el)
{
    // event.preventDefault()
    movieDataSave.push(el)
    localStorage.setItem("movie",JSON.stringify(movieDataSave))
    window.location.href="checkout.html"
}

async function main()
{
    let data = await searchmovie()
    
    if(data === undefined)
    {
        return false
    }

    else{
    appendMovie(data)
}
}

function debounce(func,delay)
{
    if(id)
    {
        clearTimeout(id)
    }

   id =  setTimeout(function(){
        func()
    },delay)
}