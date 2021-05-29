let time = Date.now();

document.onreadystatechange = function (event) {
    //@ts-ignore
    if (event.target?.readyState !== "complete") {
        return;
    }

    let UserWrapper = new UserWrappr.UserWrappr(FullScreenMario.FullScreenMario.prototype.proliferate(
        {
            "GameStartrConstructor": FullScreenMario.FullScreenMario
        }, FullScreenMario.FullScreenMario.settings.ui, true));

    console.log("It took " + (Date.now() - time) + " milliseconds to start."), UserWrapper.displayHelpMenu()
};
