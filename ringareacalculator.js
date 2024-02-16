//JavaScript Code
function ringAreaCalculator() {
    let innerRadius = document.getElementById('tbInnerRadius').value;
    let outerRadius = document.getElementById('tbOuterRadius').value;
    let inner = 3.14 * innerRadius * innerRadius;
    let outer = 3.14 * outerRadius * outerRadius;
    let circleRadiusOutput = inner - outer;
    let calcRadiusOutput = document.getElementById('ringAreaOutput');
    calcRadiusOutput.textContent = circleRadiusOutput + ' this is your radius output';
}
