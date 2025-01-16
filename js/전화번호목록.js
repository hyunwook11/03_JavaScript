let numberDisplay = document.getElementById('numberDisplay');
let contactList = document.getElementById('contactList');
let addNumButton = document.getElementById('addNum');
let clearNumButton = document.getElementById('clearNum');
let del = '';
let currentNumber = '';

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        currentNumber += key.textContent;
        numberDisplay.textContent = currentNumber;
    });
});


addNumButton.addEventListener('click', () => {
   
    let listItem = document.createElement('div')
    listItem.innerText = numberDisplay.innerText;
    contactList.append(listItem);
});

clearNumButton.addEventListener('click', () => {
    currentNumber = '';
    numberDisplay.textContent = '';
});
