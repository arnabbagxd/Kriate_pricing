// Page navigation functionality
function showPage(id, btn) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  
  // Remove active state from all buttons
  document.querySelectorAll('.sn-btn').forEach(b => b.classList.remove('on'));
  
  // Show selected page and mark button as active
  document.getElementById(id).classList.add('on');
  btn.classList.add('on');
}
