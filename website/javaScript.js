function readMoreToggle() {
    var container = document.getElementById("skill-text");
    var button = document.getElementById("readMore");
  
    container.classList.toggle("expanded2");
  
    if (container.classList.contains("expanded2")) {
      button.textContent = "Read Less";
      container.style.height = container.scrollHeight + "px";
    } else {
      button.textContent = "Read More";
      container.style.height = "150px";
      container.classList.add("collapsing");
      setTimeout(function() {
        container.classList.remove("collapsing");
      }, 10);
    }
}
