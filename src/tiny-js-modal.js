// Grab the modal element
function m() {
  return document.getElementById('tjm');
}

// Add a class to the modal
function a(c) {
  m().classList.add(c);
}

// Remove a class from the modal
function r(c) {
  m().classList.remove(c);
}

function tjmOpen() {
  r('tjm-c');
  r('tjm-cg');

  a('tjm-og');

  setTimeout(function() {
    a('tjm-o');
  }, 9);

  m().onclick = function(e) {
    if (m().classList.contains('tjm-o') && e.target === m()) {
      tjmClose();
    }
  }
}

function tjmClose() {
  r('tjm-o');
  r('tjm-og');

  a('tjm-cg');

  setTimeout(function() {
    r('tjm-cg');
  }, 400);
}
