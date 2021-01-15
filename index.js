const btn_contact = document.getElementById('btn-contact')
const btn_close = document.getElementById('btn-close');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

btn_contact.addEventListener('click', function(){
   modal.style.display = 'block';   
   overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
}
);

btn_close.addEventListener('click', function(){
     modal.style.display = 'none'; 
     overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
});