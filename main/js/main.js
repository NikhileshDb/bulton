


const full_url = window.location.href //Get the current location of the url
const page_name = full_url.split('/').pop().split('.')[0]; //extract the pagename from the url

const menuHtmlChildren = document.querySelector('.menu').children //get all the menuItem
const menuArray = [...menuHtmlChildren]; //spread and create array for map



// Set opened active link in the menu
menuArray.map((menuItem) => {
   var menu = menuItem.children[0].href.split('/').pop().split('.')[0]
   if(menu === page_name){
    console.log(page_name);
    menuItem.classList.add('active_link');
   }
});




