// Grabs the webpage
let rootElements = document.documentElement;

// Grabs the webpage styling
let pageElements = getComputedStyle(rootElements);

// Grabs specific variables in the stylesheet for us to use
let startingSize = Number(pageElements.getPropertyValue('--starting-size').replace('px', ''));
let circleCount = Number(pageElements.getPropertyValue('--circle-count'));
let startingZIndex = circleCount;
let circleGap = Number(pageElements.getPropertyValue('--gap').replace('px', ''));

// Selects the 'circle-container' div from the DOM
let circleContainer = document.getElementById('circle-container');

// Logic for injecting the circles
for (let i = 1; i <= circleCount; i++) {
    if (i == 1) {
        circleContainer.appendChild(createCircleElement(i));
        let currentCircle = document.getElementById("circle-" + JSON.stringify(i));
        let currentCircleHeight = startingSize;
        let currentCircleWidth = startingSize;
        let currentCircleZIndex = startingZIndex;
        increaseSize(currentCircle, currentCircleHeight, currentCircleWidth, currentCircleZIndex);
    } else {
        circleContainer.appendChild(createCircleElement(i));
        let currentCircle = document.getElementById("circle-" + JSON.stringify(i));
        let previousCircle = document.getElementById("circle-" + (Number(JSON.stringify(i)) - 1));
        let previousCircleHeight = previousCircle.offsetHeight;
        let previousCircleWidth = previousCircle.offsetWidth;
        let previousCircleZIndex = Number(previousCircle.style.zIndex);
        increaseSize(currentCircle, previousCircleHeight, previousCircleWidth, previousCircleZIndex);
    }
  }

function createCircleElement(circleNum) {
    let circleElement = document.createElement('div');
    circleElement.id = "circle-" + JSON.stringify(circleNum);
    circleElement.className += "div-center dynamic-border circle";
    return circleElement;
}

function increaseSize(elementId, currentHeight, currentWidth, currentZIndex) {
    newHeight = currentHeight + circleGap;
    newWidth = currentWidth + circleGap;
    newZIndex = currentZIndex -= 1;
    elementId.style.height = `${newHeight}px`;
    elementId.style.width = `${newWidth}px`;
    elementId.style.zIndex = `${newZIndex}`;
}

function zIndexFunction(elementId) {
    alert(document.getElementById(elementId).style.zIndex);
    }