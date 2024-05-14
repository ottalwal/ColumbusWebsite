window.addEventListener("DOMContentLoaded", (event) => {
  const menu = document.querySelector('#mobile_menu');
  const menuLinks = document.querySelector('.navbar_menu');
  const navLogo = document.querySelector('#navbar_logo');
  // Display Mobile Menu
  const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };

  menu.addEventListener('click', mobileMenu);
});

const carData= [
  {
    heading:'card 1',
    body:'this is card body1'
  },
  {
    heading:'card 2',
    body:'this is card body1'
  }, {
    heading:'card 3',
    body:'this is card body1'
  }, {
    heading:'card 4',
    body:'this is card body1'
  }, {
    heading:'card 5',
    body:'this is card body1'
  }, {
    heading:'card 6',
    body:'this is card body1'
  },
]


const postContainer = document.querySelector('.container')
const postMethods = ()=>{
  carddata.map((postData)=>{
    const postElement = document.createElement('div')
    postElement.classList.add('rescard')
    postElement.innerHTML= `
     <h3 class="card-heading">card heading</h3>
    <p class="card-body">card body</p> 
    `
    postContainer.appendChild(postElement)
  })
}
postMethods()