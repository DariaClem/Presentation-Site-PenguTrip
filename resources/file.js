window.onload = function () {

    document.getElementsByClassName("confettiButton")[0].onclick = function () {
        let canvas = document.createElement("canvas");
        canvas.width = 450;
        canvas.height = 450;
        let container = document.getElementsByClassName("buttons")[0];
        container.appendChild(canvas);

        console.log(container);

        let confetti_button = confetti.create(canvas);
        confetti_button({
            particleCount: 200,
            spread: 200,
            startVelocity: 15,
            scalar: 0.9,
            ticks: 90
        }).then(() => container.removeChild(canvas));
    }

}