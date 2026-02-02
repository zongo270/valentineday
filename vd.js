document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("valentineForm");
    const formContent = document.getElementById("form-content");
    const successMessage = document.getElementById("success-message");
    const card = document.querySelector(".card");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const amour = form.querySelector('select[name="amour"]').value;
        const valentine = form.querySelector('select[name="valentine"]').value;

        const googleFormURL =
            "https://docs.google.com/forms/d/e/1FAIpQLSdQUmlygN6gmc3vQPK2vr9AP29NMWZHVieHaXWjrSeR_hBqMw/formResponse";

        const data = new FormData();
        data.append("entry.2024382051", amour);
        data.append("entry.511140012", valentine);

        // Envoi au Google Form
        fetch(googleFormURL, {
            method: "POST",
            mode: "no-cors",
            body: data
        });

        // Animation & message
        card.classList.add("sent");
        setTimeout(() => {
            formContent.style.display = "none";
            successMessage.style.display = "block";
        }, 500);

        launchHearts();
    });

    function launchHearts() {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement("div");
            heart.textContent = "💖";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "-30px";
            heart.style.fontSize = Math.random() * 25 + 20 + "px";
            heart.style.zIndex = "9999";
            document.body.appendChild(heart);

            let y = -30;
            const fall = setInterval(() => {
                y += 5;
                heart.style.top = y + "px";
                if (y > window.innerHeight) {
                    clearInterval(fall);
                    heart.remove();
                }
            }, 20);
        }
    }
});
