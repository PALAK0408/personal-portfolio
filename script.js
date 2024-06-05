function showData(id) {
    // Hide all data elements
    var elements = document.getElementsByClassName('collapse');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('show');
    }

    // Show the selected data element
    var element = document.getElementById(id);
    element.classList.add('show');

    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    var activeButton = document.querySelector('[data-target="#' + id + '"]');
    activeButton.classList.add('active');
  }
  