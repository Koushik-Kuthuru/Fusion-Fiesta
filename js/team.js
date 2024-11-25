function showCategory(category) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    var members = document.querySelectorAll('.flip-card');
    members.forEach(function(member) {
        member.classList.add('hidden');
    });

    var members = document.querySelectorAll('.team-title');
    members.forEach(function(member) {
        member.classList.add('hidden');
    });

    var activeTab = document.querySelector('.tab[onclick="showCategory(\'' + category + '\')"]');
    activeTab.classList.add('active');

    var activeMembers = document.querySelectorAll('.flip-card.' + category);
    activeMembers.forEach(function(member) {
        member.classList.remove('hidden');
    });

    var activeMembers = document.querySelectorAll('.team-title.' + category);
    activeMembers.forEach(function(member) {
        member.classList.remove('hidden');
    });
}

// Show the default category
showCategory('executive-team');