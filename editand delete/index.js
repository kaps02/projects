// Add the Edit Button:
// Get all elements with the class 'fruit'
var fruitItems = document.querySelectorAll('.fruit');

// Loop through each 'fruit' item and add an edit button
fruitItems.forEach(function (item) {
  // Create an edit button
  var editButton = document.createElement('button');
  editButton.className = 'edit-btn';
  editButton.textContent = 'Edit';

  // Append the edit button to the 'fruit' item
  item.appendChild(editButton);
});

// Implement the code as in the video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Select input element
  const fruitToAdd = document.getElementById('fruit-to-add').value;

  // Create li element with fruit name, delete button, and edit button
  const newLi = document.createElement('li');
  newLi.innerHTML = `${fruitToAdd} <button class="delete-btn">x</button> <button class="edit-btn">Edit</button>`;

  // Append the new 'li' element to the list
  fruits.appendChild(newLi);

  // Clear the input field
  document.getElementById('fruit-to-add').value = '';
});

// Event listener for delete and edit buttons
fruits.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruitToBeDeleted = event.target.parentElement;
    fruits.removeChild(fruitToBeDeleted);
  }
});
