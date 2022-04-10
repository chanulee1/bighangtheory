const HowToBtn = document.getElementById('Howto');
const popup = document.getElementById('popup-container');
const Message = document.getElementById('message');
const backBtn = document.getElementById('back');


HowToBtn.addEventListener('click', () => {
	Message.innerText = 'Click on a section. A mini game will pop up and you must figure out the name of the section!';
        popup.style.display = 'flex';
    })

backBtn.addEventListener('click', () => {
	location.reload();
})