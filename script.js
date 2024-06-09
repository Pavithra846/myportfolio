function selectTab(tab) {
    // Remove 'active' class from all nav-items
    var navItems = document.getElementsByClassName('nav-item');
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('activetab');
    }
  
    // Add 'active' class to the selected tab
    tab.classList.add('activetab');
  }
  