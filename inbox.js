const showEmail = document.getElementById('email-address').firstElementChild;
let inboxList = document.getElementById('inbox-list');
// const thanks_pop = document.getElementById("thanks-popup");
// const ok_pop = document.getElementById("popup-ok");
const refreshBtn = document.getElementById('re-fresh');
const createNewBtn = document.getElementById('create');
const deleteOldBtn = document.getElementById('delete');

  

createNewBtn.addEventListener('click', async () => {
    try{
        const response = await fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox');
        const data = await response.json();
      
      showEmail.textContent = data;
      inboxList.innerHTML = ''; // clear the inbox list

    }catch(error){
        console.error(error);
    }
});


async function fetchEmails() {
  try {
    const email = showEmail.textContent;
    const fakemail = email.split('@');
    console.log(fakemail);
    const url = "https://www.1secmail.com/api/v1/?action=getMessages&login=" + fakemail[0] + "&domain=" + fakemail[1];
    fetch(url)
      .then(response => {return response.json()})
      .then(data => {
        console.log(data);
        var mails = '';
        for(let i = 0; i < data.length; i++){
          mails += `<div class="messagemail">
          ${data[i].from} - ${new Date(data[i].date).toLocaleString()}
          <div class="comclass" id="arraw">
          <p>
          <a href="./singlemessage.html?id=${data[i].id}&login=${fakemail[0]}&domain=${fakemail[1]}" id="arrowa" target="_blank">
          open full mail
          </a> 
          </p>
          </div>
          </div>`;
        }
        inboxList.innerHTML = mails;
      })
    }catch(error){console.log(error);}
  }


// call fetchEmails on page load or when a refresh button is clicked
refreshBtn.addEventListener('click', fetchEmails);
  
deleteOldBtn.addEventListener('click', async () => {
  inboxList.innerHTML = ''; // clear the inbox list
  setTimeout(() => {
    window.location.href = './index.html';
  },5000)
});