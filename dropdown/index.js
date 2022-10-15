    const button = document.querySelector(".dropdown-button");
    button.addEventListener("click", function(e) {
        const dropData= document.querySelector(".dropdown-content");
        dropData.style.setProperty("--openHeight",dropData.scrollHeight+'px');
        dropData.classList.toggle('show');
        dropData.classList.toggle('hide');
    });
