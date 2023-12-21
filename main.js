document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');
  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');

    // Check if dark mode is active
    var isDarkMode = document.documentElement.classList.contains('dark');

    // Update font color based on dark mode
    updateFontColor(isDarkMode);
  });

  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');

  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
    
    // Update font color based on list view
    updateFontColor(document.documentElement.classList.contains('dark'));
  });

  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
    
    // Update font color based on grid view
    updateFontColor(document.documentElement.classList.contains('dark'));
  });

  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });

  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });

  // Function to update font color based on dark mode and view
  function updateFontColor(isDarkMode) {
    var textElements = document.querySelectorAll('.custom, .col'); // Replace with the actual class of your text elements

    textElements.forEach(function (element) {
      if (isDarkMode) {
        // Set font color to white for dark mode
        element.style.color = 'white';
      } else {
        // Reset font color for light mode
        element.style.color = ''; // This will reset to the default color or you can set it to another color
      }
    });
  }
});
