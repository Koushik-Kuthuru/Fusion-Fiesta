function showCategory(category) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
  
    var members = document.querySelectorAll('.gallery-back');
    members.forEach(function(member) {
        member.classList.add('hidden');
    });
  
    var members = document.querySelectorAll('.year-name');
      members.forEach(function(member) {
          member.classList.add('hidden');
      });
  
    var activeTab = document.querySelector('.tab[onclick="showCategory(\'' + category + '\')"]');
    activeTab.classList.add('active');
  
    var activeMembers = document.querySelectorAll('.gallery-back.' + category);
    activeMembers.forEach(function(member) {
        member.classList.remove('hidden');
    });
  
    var activeMembers = document.querySelectorAll('.year-name.' + category);
      activeMembers.forEach(function(member) {
          member.classList.remove('hidden');
      });
  }
  
  // Show the default category
  showCategory('2023');