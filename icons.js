const iconGrid = document.getElementById('Grid');
const icons = [
      
      "fa-solid fa-home", 
      "fa-solid fa-user", 
      "fa-solid fa-bell", 
      "fa-solid fa-heart", 
      "fa-solid fa-star", 
      "fa-solid fa-cog", 
      "fa-solid fa-trash", 
      "fa-solid fa-camera",
      "fa-solid fa-envelope",
      "fa-solid fa-lock"
    ];

    icons.forEach(icon => {
      const iconDiv = document.createElement('div');
      iconDiv.className = 'icon-item';
      iconDiv.innerHTML = `<i class="${icon}"></i>`;
      iconGrid.appendChild(iconDiv);
    });
