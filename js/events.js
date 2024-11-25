function showCategory(category) {
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
      tab.classList.remove('active');
  });

  var members = document.querySelectorAll('.timeline');
  members.forEach(function(member) {
      member.classList.add('hidden');
  });

  var members = document.querySelectorAll('.day-name');
    members.forEach(function(member) {
        member.classList.add('hidden');
    });

  var activeTab = document.querySelector('.tab[onclick="showCategory(\'' + category + '\')"]');
  activeTab.classList.add('active');

  var activeMembers = document.querySelectorAll('.timeline.' + category);
  activeMembers.forEach(function(member) {
      member.classList.remove('hidden');
  });

  var activeMembers = document.querySelectorAll('.day-name.' + category);
    activeMembers.forEach(function(member) {
        member.classList.remove('hidden');
    });
}

// Show the default category
showCategory('day-1');

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