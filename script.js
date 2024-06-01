
        function updateCountdown() {
            const weddingDate = new Date('2024-07-27T15:00:00');
            const now = new Date();
            const diff = weddingDate - now;

            if (diff <= 0) {
                document.getElementById('time').innerHTML = "Już czas!";
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').innerHTML = `${days} dni`;
            document.getElementById('hours').innerHTML = `${hours} godziny`;
            document.getElementById('minutes').innerHTML = `${minutes} minuty`;
            document.getElementById('seconds').innerHTML = `${seconds} sekundy`;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('.nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        });