        
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // Fill in the blank to reference the unordered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
button.addEventListener('click', function() {
});
if (input.value.trim() !== '') { 
}
deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
});
input.value = '';
input.focus();
