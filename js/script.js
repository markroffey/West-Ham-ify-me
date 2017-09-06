(function () {
    const ratio = 922 / 1024; // w/h of image 

    var docBody = document.body;

    //get viewable height
    var windowHeight =  docBody.clientHeight;
    var windowWidth = docBody.clientWidth;

    var randomImageHeight = getRandomInt(104, 256);
    var randomImageWidth = randomImageHeight * ratio;

    var div = document.createElement("div");
    div.className += 'whufc-block';

    var divStyle = div.style;
    divStyle.top = getRandomVerticalPosition() + 'px';
    divStyle.left = getRandomHorizontalPosition() + 'px';
    divStyle.width = randomImageWidth + 'px';
    divStyle.height = randomImageHeight + 'px';
    divStyle.zIndex = getHighestZIndex() + 1;
    docBody.appendChild(div);

    function getRandomHorizontalPosition() {
        let randomPosX = getRandomInt(1, windowWidth);
        let xPositionOfImage = randomPosX + randomImageWidth;
        if (xPositionOfImage > windowWidth) {
            //push it to the far right of the frame to avoid horizontal scroll bars
            randomPosX = (windowWidth - randomImageWidth);
        }

        return randomPosX;
    }

    function getRandomVerticalPosition() {
        let randomPosY = getRandomInt((docBody.scrollTop), docBody.scrollTop + window.innerHeight);
        let yPositionOfImage = randomPosY + randomImageHeight;
        if (yPositionOfImage > windowHeight) {
            return getRandomVerticalPosition();
        }

        return randomPosY;
    }

    function getRandomInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getHighestZIndex() {
        const domNodes = document.getElementsByTagName('*');
        let highestZIndex = 1;

        for (let i = 0; i < domNodes.length; i++) {
            const zIndex = parseInt(
                getComputedStyle(domNodes[i], null).getPropertyValue('z-index')
            );

            if (highestZIndex === null && typeof zIndex === 'number' && !isNaN(zIndex))
                highestZIndex = zIndex;
            else if (!isNaN(zIndex) && zIndex > highestZIndex)
                highestZIndex = zIndex;
        }

        return highestZIndex;
    }
})();