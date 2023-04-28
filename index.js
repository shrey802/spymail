const loader = document.getElementById('loader');
const get_started = document.getElementById("get-started");
get_started.addEventListener("click",()=>{
    loader.classList.add("add-loader");
    gotomainpage();
})

// Function to create Account
async function gotomainpage(){ 
    window.location.href = 'inbox.html';
}

