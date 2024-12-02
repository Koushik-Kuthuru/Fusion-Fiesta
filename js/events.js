function showCategory(category) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  const members = document.querySelectorAll('.timeline, .day-name');
  members.forEach(member => member.classList.add('hidden'));

  const activeTab = document.querySelector(`.tab[onclick="showCategory('${category}')"]`);
  if (activeTab) {
      activeTab.classList.add('active');
      // Store the active category in local storage
      localStorage.setItem('activeTab', category);
  }

  const activeMembers = document.querySelectorAll(`.timeline.${category}, .day-name.${category}`);
  activeMembers.forEach(member => member.classList.remove('hidden'));
}

// Show the default category on page load
document.addEventListener('DOMContentLoaded', () => {
  const activeTab = localStorage.getItem('activeTab') || 'day-1'; // Default to 'day-1' if none found
  showCategory(activeTab);
});


/**********************/
(function() {

    'use strict';
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();