
        // Reveal elements when scrolling
        const revealElements = document.querySelectorAll(".reveal");

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15
            });

            revealElements.forEach(function(element) {
                observer.observe(element);
            });
        } else {
            revealElements.forEach(function(element) {
                element.classList.add("visible");
            });
        }

        // Contact form demonstration
        document.getElementById("contactForm").addEventListener(
            "submit", function(event) {
                event.preventDefault();

                const name = document.getElementById("name").value.trim();
                const message = document.getElementById("formMessage");

                message.textContent =
                    "Thank you, " + name +
                    "! The form works, but a sending service is needed to deliver your message.";

                this.reset();
            }
        );
    