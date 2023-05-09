window.onload = function () {

    document.getElementsByClassName("confettiButton")[0].onclick = function () {
        let canvas = document.createElement("canvas");

        canvas.width = 450;
        canvas.height = 450;

        let container = document.getElementsByClassName("buttons")[0];
        container.appendChild(canvas);

        let confetti_button = confetti.create(canvas);
        confetti_button({
            particleCount: 200,
            spread: 200,
            startVelocity: 15,
            scalar: 0.9,
            ticks: 90
        }).then(() => container.removeChild(canvas));
    }

    document.getElementsByClassName("confettiButton")[1].onclick = function () {
        let canvas = document.createElement("canvas");

        canvas.width = 450;
        canvas.height = 450;

        let container = document.getElementsByClassName("buttons")[1];
        container.appendChild(canvas);

        let confetti_button = confetti.create(canvas);
        confetti_button({
            particleCount: 200,
            spread: 200,
            startVelocity: 15,
            scalar: 0.9,
            ticks: 90
        }).then(() => container.removeChild(canvas));
    }

    let roSmall = document.querySelectorAll("small.ro");
    let enSmall = document.querySelectorAll("small.en");

    for (let ro of roSmall) {
        ro.onclick = function() {

            for(let otherRo of roSmall) {
                otherRo.style.color = "var(--lightCyan)";
            }

            document.getElementsByClassName("content-english")[0].style.display = "none";
            document.getElementsByClassName("content-romanian")[0].style.display = "flex";

            for (let en of enSmall) {
                en.style.color = "white";
            }
        }
    }

    for (let en of enSmall) {
        en.onclick = function () {

            for(let otherEn of enSmall) {
                otherEn.style.color = "var(--lightCyan)";
            }

            document.getElementsByClassName("content-romanian")[0].style.display = "none";
            document.getElementsByClassName("content-english")[0].style.display = "flex";

            for (let ro of roSmall) {
                ro.style.color = "white";
            }
        }
    }


}