
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const addItemToList = () =>{
const myItem = input.value.trim();
if (myItem === '') return;
 input.value='';

 const listItem = document.createElement('li');
 const listText = document.createElement('span');
 const listBtn = document.createElement('button');

 listItem.appendChild(listText);
 listText.textContent = myItem;
 listItem.appendChild(listBtn);
 listBtn.textContent = 'Delete';
 list.appendChild(listItem);

 listBtn.addEventListener('click', ()=>{

 list.removeChild(listItem);

 });
 
 
 input.focus();

};
button.addEventListener('click', addItemToList);

input.addEventListener('keydown', (e) => {
  console.log('Key pressed' , e.key)
  if (e.key === 'Enter'){
    addItemToList();
  }
});






