var secondchanged = false;
var lastOperand = "";
var gridchangedTrigno = false;
//var expression = document.getElementById('display').value;

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}



document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.button').forEach(function (element) {
        element.addEventListener('click', function () {
            // Toggle "active" class for "2nd" button
            if (element.value === "2nd") {
                element.classList.toggle("active");
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {

    console.log("clicked1");
    document.querySelectorAll('.button').forEach(function (element) {

        console.log("clicked2");
        if (element.value === "2nd") {
            console.log("clicked");
            element.addEventListener('click', function () {
                if (!secondchanged) {
                    document.getElementById('7').innerHTML = 'x<sup>3</sup>';
                    document.getElementById('8').innerHTML = '<sup>3</sup>√x';
                    document.getElementById('9').innerHTML = '<sup>y</sup>√x';
                    document.getElementById('10').innerHTML = '2<sup>x</sup>';
                    document.getElementById('11').innerHTML = 'log<sub>y</sub>';
                    document.getElementById('12').innerHTML = 'e<sup>x</sup>';
                    secondchanged = true;
                } else {
                    document.getElementById('7').innerHTML = 'x<sup>2</sup>';
                    document.getElementById('8').innerHTML = '<sup>2</sup>√x';
                    document.getElementById('9').innerHTML = 'x<sup>y</sup>';
                    document.getElementById('10').innerHTML = '10<sup>x</sup>';
                    document.getElementById('11').innerHTML = 'log';
                    document.getElementById('12').innerHTML = 'ln';
                    secondchanged = false;
                }
                return false;
            });
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.trignometry-btn').forEach(function (element) {
        if (element.textContent.includes("2nd")) {
            element.addEventListener('click', function () {
                if (!gridchangedTrigno) {
                    document.getElementById('1').innerHTML = 'sin<sup>-1</sup>';
                    document.getElementById('2').innerHTML = 'cos<sup>-1</sup>';
                    document.getElementById('3').innerHTML = 'tan<sup>-1</sup>';
                    document.getElementById('4').innerHTML = 'sec<sup>-1</sup>';
                    document.getElementById('5').innerHTML = 'csc<sup>-1</sup>';
                    document.getElementById('6').innerHTML = 'cot<sup>-1</sup>';
                    gridchangedTrigno = true;
                } else {
                    document.getElementById('1').textContent = 'sin';
                    document.getElementById('2').textContent = 'cos';
                    document.getElementById('3').textContent = 'tan';
                    document.getElementById('4').textContent = 'sec';
                    document.getElementById('5').textContent = 'csc';
                    document.getElementById('6').textContent = 'cot';
                    gridchangedTrigno = false;
                }
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.trignometry-btn').forEach(function (element) {
        if (element.textContent.includes("hype")) {
            element.addEventListener('click', function () {
                if (!gridchangedTrigno) {
                    document.getElementById('1').innerHTML = 'sinh';
                    document.getElementById('2').innerHTML = 'cosh';
                    document.getElementById('3').innerHTML = 'tanh';
                    document.getElementById('4').innerHTML = 'sech';
                    document.getElementById('5').innerHTML = 'csch';
                    document.getElementById('6').innerHTML = 'coth';
                    gridchangedTrigno = true;
                } else {
                    document.getElementById('1').textContent = 'sin';
                    document.getElementById('2').textContent = 'cos';
                    document.getElementById('3').textContent = 'tan';
                    document.getElementById('4').textContent = 'sec';
                    document.getElementById('5').textContent = 'csc';
                    document.getElementById('6').textContent = 'cot';
                    gridchangedTrigno = false;
                }
            });
        }
    });
});


//history and memory tab
function changeTab(ref) {
    try {
        var tab = ref.getAttribute("data-tab");
        var historyTab = document.querySelector(".History-tab");
        var memoryTab = document.querySelector(".Memory-tab");

        if (tab === "History") {
            historyTab.classList.add("clicked");
            memoryTab.classList.remove("clicked");
            document.getElementById("deleteIcon").style.display = "block"; // Show delete icon in history tab
        } else if (tab === "Memory") {
            memoryTab.classList.add("clicked");
            historyTab.classList.remove("clicked");
            document.getElementById("deleteIcon").style.display = "none"; // Hide delete icon in memory tab
        }

        var historyContent = document.querySelector(".History");
        var memoryContent = document.querySelector(".Memory");

        if (tab === "History") {
            historyContent.style.display = "block";
            memoryContent.style.display = "none";
        } else if (tab === "Memory") {
            historyContent.style.display = "none";
            memoryContent.style.display = "block";
        }
    } catch (error) {
        console.log(error);
    }
}

//clear button
function clr() {
    document.getElementById("display").value = "0";
    document.getElementById("display2").value = "";
}

//grid containers
function toggleDropdown(dropdownId, columns) {
    var dropdownContent = $('#' + dropdownId + 'Dropdown');
    if (dropdownContent.css('display') === 'grid') {
        dropdownContent.css('display', 'none');
    } else {
        $('.dropup-content').css('display', 'none');
        dropdownContent.css('display', 'grid');
        dropdownContent.css('grid-template-columns', 'repeat(' + columns + ', auto)');
    }
}

//backspace
function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// (=) button
//function calculate() {
    //let display = document.getElementById("display");
   // let display2 = document.getElementById("display2");
    //let expression = display.value;
    //console.log(expression);
    //let result;

   // try {

      //  result = math.evaluate(expression);
       // console.log(result);
    //    display2.value = "=" + result;
    //} catch (error) {
     ///   display2.value = "Error";
    //}
//}

//pi method
function pi() {
    var res = Math.PI;
    display.value = res;
}


function e() {
    var res = Math.E;
    display.value = res;
    display2.value = res;
}


//history tab
let calculationHistory = [];
let memoryValues = [];

function addToHistory(entry, entry2) {
    calculationHistory.push(entry2 + " = " + entry + "\n");
    updateHistoryDisplay();
}


function updateHistoryDisplay() {
    let historyText = document.getElementById("historyText");
    if (calculationHistory.length === 0) {
        historyText.innerHTML = "<h6>There's no history yet</h6>";
    } else {
        historyText.innerText = calculationHistory.join("\n");
    }
}

//clear history
function clearHistory() {
    calculationHistory = [];
    updateHistoryDisplay();
}


// Define a variable to store the memory value
let memory = 0;

function clearMemory() {
    memory = "0";
    updateMemoryTab();

    // Check if memory is empty
    if (memory == "0") {
        // If memory is cleared, disable MR and MC buttons
        document.getElementById("MCButton").classList.add("disabled");
        document.getElementById("MRButton").classList.add("disabled");
    }
}


// Function to recall the memory value
function recallMemory() {
    document.getElementById("display").value = memory;
}

// Function to add the current display value to memory
function addToMemory() {
    let currentValue = parseFloat(document.getElementById("display").value);
    memory += currentValue;
    updateMemoryTab();
    document.getElementById("MCButton").removeAttribute("disabled");
    document.getElementById("MRButton").removeAttribute("disabled");

}

// Function to subtract the current display value from memory
function subtractFromMemory() {
    let currentValue = parseFloat(document.getElementById("display").value);
    memory -= currentValue;
    updateMemoryTab();
}

// Function to set the memory to the current display value
function setMemory() {
    memory = parseFloat(document.getElementById("display").value);
    updateMemoryTab();
}


function updateMemoryTab() {
    document.getElementById("memoryContent").innerText = memory;
}


function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}

// +/-
function changeSign(display) {
    if (display.value.substring(0, 1) === "-")
        display.value = display.value.substring(1, display.value.length);
    else
        display.value = "-" + display.value;
}


//toggle angle
let angleUnit = "DEG";

function toggleAngleUnit() {
    if (angleUnit === "DEG") {
        angleUnit = "GRAD";
        document.getElementById("deg").value = "GRAD";
        AngleChanger(lastOperand);
    } else if (angleUnit === "GRAD") {
        angleUnit = "RAD";
        document.getElementById("deg").value = "RAD";
        AngleChanger(lastOperand);
    } else {
        angleUnit = "DEG";
        document.getElementById("deg").value = "DEG";
        AngleChanger();
    }
}


function AngleChanger(angle, status) {
    if (status === "DEG") {
        if (angle >= 360) {
            angle %= 360;
        }
        angle = (angle * Math.PI) / 180;
    } else if (status === "GRAD") {
        if (angle >= 400) {
            angle %= 400;
        }
        angle = (angle * Math.PI) / 200;
    } else {
        if (angle >= (2 * Math.PI)) {
            angle %= (2 * Math.PI);
        }
    }
    return angle;
}

function Sine() {
    if ($('#1').html() === 'sin') {

        console.log(9);
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];

        var angle = lastOperand;
        var degElement = document.getElementById("deg");
        var status = degElement.value;
        console.log(lastOperand);
        console.log(status);
        angle = AngleChanger(angle, status);
        var res = Math.sin(angle);
        if (isNaN(res)) { // Check if res is not a number
            res = "Invalid input";
        }
        display.value = res;
        display2.value = res;
    }
    else if ($('#1').html() === 'sinh') {

        SineHyp();

    } else {
        SineInverse();
    }
}


function Cosine() {
    if ($('#2').html() === 'cos') {
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];

        var angle = lastOperand;
        var degElement = document.getElementById("deg");
        var status = degElement.value;
        console.log(lastOperand);
        console.log(status);
        angle = AngleChanger(angle, status);
        var res = Math.cos(angle);
        if (isNaN(res)) { // Check if res is not a number
            res = "Invalid input";
        }
        display.value = res;
        display2.value = res;
    }
    else if ($('#2').html() === 'cosh') {
        CosineHyp();

    } else {
        CosineInverse();
    }
}

function Tangent() {
    if ($('#3').html() === 'tan') {
        if (angle % 90 === 0 && angle % 180 !== 0 && status === "DEG") {
            throw new Error("Invalid input");
        }
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];

        var angle = lastOperand;
        var degElement = document.getElementById("deg");
        var status = degElement.value;
        angle = AngleChanger(angle, status);
        var res = Math.tan(angle);
        if (isNaN(res)) { // Check if res is not a number
            res = "Invalid input";
        }
        display.value = (res);
        display2.value = (res);
    }
    else if ($('#3').html() === 'tanh') {
        TangentHyp();

    }
    else {
        TangentInverse();
    }
}

function Cot() {
    if ($('#6').html() === 'cot') {
        console.log("hchg");
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];

        var angle = lastOperand;
        console.log(angle);
        var degElement = document.getElementById("deg");
        var status = degElement.value;
        var res = 1 / Tangent(angle, status);
        console.log(res);
        if (isNaN(res)) { // Check if res is not a number
            res = "Invalid input";
        }
        display.value = res;
        display2.value = res;
    }
    else if ($('#6').html() === 'coth') {
        console.log("kgjvj");
        CotHyp();

    }
    else {
        console.log("jbjb");
        CotInverse();
    }
}

function Sec() {
    if ($('#4').html() === 'sec') {
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];

        var angle = lastOperand;
        var degElement = document.getElementById("deg");
        var status = degElement.value;
        var res = 1 / Sine(angle, status);
        if (isNaN(res)) { // Check if res is not a number
            res = "Invalid input";
        }
        display.value = res;
        display2.value = res;
    }
    else if ($('#4').html() === 'sech') {
        SecHyp();

    }
    else {
        SecInverse();
    }
}

function Cosec() {
    if ($('#5').html() === 'csc') {
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];

        var angle = lastOperand;
        var degElement = document.getElementById("deg");
        var status = degElement.value;
        var res = 1 / Cosine(angle, status);
        if (isNaN(res)) { // Check if res is not a number
            res = "Invalid input";
        }
        display.value = res;
        display2.value = res;
    }
    else if ($('#4').html() === 'csch') {
        CosecHyp();

    }
    else {
        CosecInverse();
    }
}


function SineInverse() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var ab = Math.asin(angle);
    if (status === "DEG") {
        ab = (ab * 180) / Math.PI;
    } else if (status === "GRAD") {
        ab = (ab * 200) / Math.PI;
    }
  
  
    var res = ab;
 
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function TangentInverse() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];   
    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    let ab = Math.atan(angle);

    if (status === "DEG") {
        ab = (ab * 180) / Math.PI;
    } else if (status === "GRAD") {
        ab = (ab * 200) / Math.PI;
    }
    var res = ab;
    if (isNaN(res)) { 
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function CosineInverse() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];
    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    let ab = Math.acos(angle);
    if (status === "DEG") {
        ab = (ab * 180) / Math.PI;
    } else if (status === "GRAD") {
        ab = (ab * 200) / Math.PI;
    }
   
    
    var res = ab;
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function CotInverse() {
    console.log("wdf");
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    console.log(angle);
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = TangentInverse(1 / angle, status);
    console.log(res);
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function SecInverse() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = SineInverse(1 / angle, status);
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function CosecInverse() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = CosineInverse(1 / angle, status);
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function SineHyp() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = Math.sinh(angle);

    
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function CosineHyp() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = Math.cosh(angle);
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function TangentHyp() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = Math.tanh(angle);
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function CotHyp() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = 1 / TangentHyp(angle, status);
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function SecHyp() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = 1 / SineHyp(angle, status);
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function CosecHyp() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = 1 / CosineHyp(angle, status);
    if (isNaN(res)) { // Check if res is not a number
        res = "Invalid input";
    }
    display.value = res;
    display2.value = res;
}

function AbsoluteFunction() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var angle = lastOperand;
    var degElement = document.getElementById("deg");
    var status = degElement.value;
    var res = Math.abs(lastOperand);
    display.value = res;
    display2.value = res;
}

function FloorFunction() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];
    var res = Math.floor(lastOperand);
    display.value = res;
    display2.value = res;
}

function CeilingFunction() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];
    var res = Math.ceil(lastOperand);
    display.value = res;
    display2.value = res;
}

function RandomFunction() {

    var res = Math.random();
    display.value = res;
    display2.value = res;
}

function reciprocal() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];
    if (lastOperand === 0) {
        var res = "Infinity";
        display.value = res;
        display2.value = res;
    } else {
        var res = 1 / lastOperand;
        display.value = res;
        display2.value = res;
    }
}


function ConvertToDMS() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    var degrees = Math.floor(lastOperand);
    var minutes = (lastOperand - degrees) * 60;
    var minutesInt = Math.floor(minutes);
    var seconds = (minutes - minutesInt) * 60;

    var res = degrees + minutesInt / 100.0 + seconds / 10000.0;

    display.value = res;
    display2.value = res;
}


let notation = "F-E"; // Default angle unit

function toggleNotation() {
    var notationElement = document.getElementById("notation");
    if (notation === "F-E") {
        notation = "!F-E";
        notationElement.value = "!F-E";
    } else {
        notation = "F-E";
        notationElement.value = "F-E";
        ConvertToScientificNotation(); // Assuming this function exists and does what's expected
    }
}

function ConvertToScientificNotation() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    let lastOperand = operands[operands.length - 1];

    var res = parseFloat(lastOperand).toExponential(5);
    document.getElementById("display").value = res;
    document.getElementById("display2").value = res;
}


function DMSToDegree() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];
    var degrees = Math.floor(lastOperand);
    var minutes = (lastOperand - degrees);
    var res = degrees + (minutes / 60);
    display.value = res;
    display2.value = res;
}

function Exponentiation() {
    if ($('#7').html() === 'x<sup>3</sup>') {

        var displayValue = $('#display').val();
        var operands = displayValue.split(/[+\-*\/]/);
        var lastOperand = operands[operands.length - 1];
        var res = Math.pow(lastOperand, 3);
        $('#display').val(res);
        $('#display2').val(res);

    } else {
        console.log(9);
        var displayValue = $('#display').val();
        var operands = displayValue.split(/[+\-*\/]/);
        var lastOperand = operands[operands.length - 1];
        var res = Math.pow(lastOperand, 2);
        $('#display').val(res);
       //expression=res;
        $('#display2').val(res);
    }
}
function power() {
    console.log("yyy");
    if ($('#10').html() === '2<sup>x</sup>') {

        console.log(99);
        var displayValue = $('#display').val();
        var operands = displayValue.split(/[+\-*\/]/);
        var lastOperand = operands[operands.length - 1];
        var res = Math.pow(2, lastOperand);
        $('#display').val(res);
        $('#display2').val(res);
    }
    else {
        console.log(9);
        var displayValue = $('#display').val();
        var operands = displayValue.split(/[+\-*\/]/);
        var lastOperand = operands[operands.length - 1];
        var res = Math.pow(10, lastOperand);
        $('#display').val(res);
        $('#display2').val(res);
    }
}


function Cube() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];
    var res = lastOperand * lastOperand * lastOperand;
    display.value = res;
    display2.value = res;
}



function Root(baseValue, rootValue) {
    var res = Math.pow(baseValue, 1.0 / rootValue);
    display.value = res;
    display2.value = res;
}

function SquareRoot(lastOperand) {
    if ($('#8').html() === '<sup>3</sup>√x') {

        CubeRoot();
    }
    else {

        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];

        if (lastOperand < 0) {
            throw new Error("Invalid input");
        }
        var res = Math.sqrt(lastOperand);
        display.value = res;
        display2.value = res;
    }
}

function CubeRoot() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*\/]/);
    lastOperand = operands[operands.length - 1];

    if (lastOperand < 0) {
        lastOperand = Math.abs(lastOperand);
        var temp = Math.pow(lastOperand, 1.0 / 3.0);
        var res = -temp;
        display.value = res;
        display2.value = res;
    }
    var res = Math.pow(lastOperand, 1.0 / 3.0);
    display.value = res;
    display2.value = res;
}


function base10Log() {
    console.log("guhgyuhg");
    if ($('#11').html() === 'log<sub>y</sub>') {
        console.log("gdg");
       
    }
    else {
        console.log("vhjvhdfjvhefjvhej");
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];
        var res = Math.log(lastOperand) / Math.log(10);
        console.log(res);
        $('#display').val(res);
        $('#display2').val(res);
    }
}

function ln() {
    if ($('#12').html() === 'ln') {
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];
        var res = Math.log(lastOperand) / Math.log(Math.E);
        $('#display').val(res);
        $('#display2').val(res);
    }
    else {
        let displayValue = document.getElementById("display").value;
        let operands = displayValue.split(/[+\-*\/]/);
        lastOperand = operands[operands.length - 1];
        var res = Math.exp(lastOperand);
        $('#display').val(res);
        $('#display2').val(res);
    }
}





