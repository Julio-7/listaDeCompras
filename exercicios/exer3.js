
document.querySelector('.checkbox-label').addEventListener('click', function(event) {

  var checkbox = event.currentTarget.querySelector('.input-checkbox');
 
   var customCheckbox = event.currentTarget.querySelector('.custom-checkbox');
 
  if (checkbox.checked) {
 
   customCheckbox.classList.add('checked');
   
 
   } else {
 
   customCheckbox.classList.remove('checked');
 
   }
 
   });