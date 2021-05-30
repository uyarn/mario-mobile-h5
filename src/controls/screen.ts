(function () {

    let gameElement = document.getElementById('game');
    let handshankElement = document.getElementById('handshank');

    let devicewidth = window.screen.width;
    let deviceheight = window.screen.height;

    if (devicewidth > deviceheight) {

        gameElement.style.border = '0';
    }
    const clickableElements = document.querySelectorAll(".clickable");

    clickableElements.forEach((ele) => {
        ele.addEventListener("touchstart", () => {
            const eleId = ele.getAttribute("id");
            //@ts-ignore
            const { player, MapScreener, AudioPlayer, TimeHandler, ModAttacher, GamesRunner } = FSM;
            switch (eleId) {
                case "left":
                    player.keys.run = -1;
                    player.keys.leftDown = true;
                    player.FSM.ModAttacher.fireEvent("onKeyDownLeft");
                    return;
                case "right":
                    player.keys.run = 1;
                    player.keys.rightDown = true;
                    player.FSM.ModAttacher.fireEvent("onKeyDownRight");
                    return;

                case "up":
                    player.keys.up = true;

                    if (
                        player.canjump &&
                        (player.resting || MapScreener.underwater)
                    ) {
                        player.keys.jump = true;
                        player.canjump = false;
                        player.keys.jumplev = 0;

                        if (player.power > 1) {
                            AudioPlayer.play("Jump Super");
                        } else {
                            AudioPlayer.play("Jump Small");
                        }

                        if (MapScreener.underwater) {
                            TimeHandler.addEvent(function (): void {
                                player.jumping = player.keys.jump = false;
                            }, 14);
                        }
                    }

                    ModAttacher.fireEvent("onKeyDownUp");
                    return;
                case "down":
                    player.keys.crouch = true;
                    ModAttacher.fireEvent("onKeyDownDown");
                    return;
                case "keyS":
                    if (player.power === 3 && player.keys.sprint === false && !player.crouching) {
                        player.fire(player);
                    }

                    player.keys.sprint = true;
                    player.FSM.ModAttacher.fireEvent("onKeyDownSprint");
                    return;
                case "keyP":
                    if (GamesRunner.getPaused()) {
                        GamesRunner.play();
                    } else {
                        GamesRunner.pause();
                    }

                    ModAttacher.fireEvent("onKeyDownPause");
                    return;
            }
        });
        ele.addEventListener("touchend", () => {
            const eleId = ele.getAttribute("id");
            //@ts-ignore
            const { player, animatePlayerRemoveCrouch, ModAttacher } = FSM;

            switch (eleId) {
                case "left":
                    player.keys.run = 0;
                    player.keys.leftDown = false;
                    ModAttacher.fireEvent("onKeyUpLeft");
                    return;
                case "right":
                    player.keys.run = 0;
                    player.keys.rightDown = false;
                    ModAttacher.fireEvent("onKeyUpRight");
                    return;

                case "up":
                    player.canjump = true;
                    ModAttacher.fireEvent("onKeyUpUp");
                    return;
                case "down":
                    player.keys.crouch = false;

                    if (!player.piping) {
                        animatePlayerRemoveCrouch(player);
                    }

                    ModAttacher.fireEvent("onKeyUpDown");
                    return;
                case "keyS":

                    player.keys.sprint = false;
                    ModAttacher.fireEvent("onKeyUpSprint");
                    return;
                case "keyP":
                    ModAttacher.fireEvent("onKeyUpPause");
                    return;
            }
        });
    });
    window.onresize = function () {  //监听屏幕的改变
        let devicewidth = window.screen.width;
        let deviceheight = window.screen.height;
        let touchControlEle = document.querySelector('.touch-passer-container')

        gameElement.style.borderWidth = devicewidth > deviceheight ? '0' : '20px';
        handshankElement.style.display = devicewidth > deviceheight ? 'none' : 'block'
        //@ts-ignore
        touchControlEle.style.display = devicewidth > deviceheight ? 'block' : 'none'
    };
}())