import { drawKen, updateKen } from './ken.js';
import { drawBackground } from './stage';

export const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.onload = function () {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    function frame() {
        updateKen(context);

        drawBackground(context);
        drawKen(context);

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}



