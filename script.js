var deadline = new Date("mar 11, 2021 0:0:0").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("Days").textContent = days;
    document.getElementById("Hours").innerText = hours;
    document.getElementById("Minutes").textContent = minutes;
    document.getElementById("Seconds").textContent = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'pink', 'cyan', '#006666', 'darkcyan', 'darkturquoise'];

function add() {
    var node = document.createElement('div');
    node.classList.add('card');
    node.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    var s = prompt("Enter a wishes quotes");
    if (s != null && s != '') {
        node.innerHTML = '<i onclick="del()" class="far i fa-times-circle" style="float:right "></i><h3 id="wish">' + s + '</h3>';
        document.getElementById("myDiv").appendChild(node);
    }
}

function del() {
    var list = document.getElementById("myDiv");
    list.removeChild(list.firstChild);
}
