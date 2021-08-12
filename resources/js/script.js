/*************************************************************
 Dark Theme
*************************************************************/

function darkTheme () {
  this.style.display = "none";
  document.getElementById('light').style.display = "block";
  document.getElementsByTagName('html')[0].style.backgroundColor = "var(--jet)";
  document.getElementsByTagName('html')[0].style.color = "var(--white)";
  document.getElementsByTagName('header')[0].style.backgroundColor = "var(--black)";
  document.getElementsByTagName('footer')[0].style.backgroundColor = "var(--black)";
  let anchor = document.getElementsByTagName('a');
  for( let i = 0; i < anchor.length; i++) {
    anchor[i].style.color = "var(--platinum)";
  };
  let navItem = document.getElementsByClassName('nav-link');
  for( let i = 0; i < navItem.length; i++) {
    navItem[i].style.color = "var(--black)";
  }
} 

el = document.getElementById('dark')

el.addEventListener('click', darkTheme);
el.addEventListener('focus', darkTheme);


/*************************************************************
 Light Theme
*************************************************************/

function lightTheme () {
  this.style.display = "none";
  document.getElementById('dark').style.display = "block";
  document.getElementsByTagName('html')[0].style.backgroundColor = "";
  document.getElementsByTagName('html')[0].style.color = "";
  document.getElementsByTagName('header')[0].style.backgroundColor = "";
  document.getElementsByTagName('footer')[0].style.backgroundColor = "";
  let anchor = document.getElementsByTagName('a');
  for( let i = 0; i < anchor.length; i++) {
    anchor[i].style.color = "";
  }
  let navItem = document.getElementsByClassName('nav-item');
  for( let i = 0; i < navItem.length; i++) {
    navItem[i].style.color = "";
  }
} 

el = document.getElementById('light')

el.addEventListener('click', lightTheme);
el.addEventListener('focus', lightTheme);


/***************************************
Projects Preview
****************************************/
//Open Preview 

// Store reference to all available projects
const siteExamplesArray = ['project-1', 'project-2', 'project-3', 'project-4', 'project-5'];
const siteExamples = [];
siteExamplesArray.forEach(function(example){
  siteExamples.push(document.getElementById(example));
})

// Write named functions that change the color of the keys below
const openBlock = (event) =>{
  let blockElement = event.target.parentNode.nextElementSibling;
  blockElement.style.display = 'flex';
}

// Write a named function with event handler properties
function openingFunction (example){
  example.addEventListener('click', openBlock);
}

// Write a loop that runs the array elements through the function
siteExamples.forEach(function(example){
  openingFunction(example);
})

// Close Preview

const closeBlock = (event) => {
  event.target.parentNode.style.display = 'none';
}

function closingFunction(example) {
  example.lastElementChild.addEventListener('click', closeBlock, false)
}

const closeArray = document.getElementsByClassName('site-block');
const closeButton = [];
for(let i = 0; i < closeArray.length; i++) {
  closeButton.push(document.getElementsByClassName('site-block')[i])
}

closeButton.forEach(function(button) {
  closingFunction(button);
})