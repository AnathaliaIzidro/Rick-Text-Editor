document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    const toolButtons = document.querySelectorAll(".tool--btn");
    const themeToggle = document.createElement("button");
    const container = document.querySelector(".container");
    
    // Create the theme toggle button
    themeToggle.classList.add("theme-toggle");
    themeToggle.innerHTML = '<i class="fas fa-adjust"></i>';
    document.querySelector(".toolbar").prepend(themeToggle);

    // Theme toggle functionality
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Handle tool buttons
    toolButtons.forEach(button => {
        button.addEventListener("click", function() {
            const command = button.getAttribute("data-command");
            if (command === "createLink") {
                const url = prompt("Enter the link URL:");
                if (url) {
                    document.execCommand(command, false, url);
                }
            } else {
                document.execCommand(command, false, null);
            }
        });
    });

    // Auto-expand contenteditable div
    output.addEventListener("input", function() {
        output.style.height = "auto";
        output.style.height = output.scrollHeight + "px";
    });
});
