(function () {
    document.addEventListener('orientationchange', () => {
        if (window.orientation == 180 || window.orientation == 0) {
            alert(" 小主，横屏效果更好，把您的设备开启横屏体验吧3333333333~~~");
        }
        if (window.orientation == 90 || window.orientation == -90) {
            alert("小主，您真棒，已经横屏~~~");
        }
    })
}())