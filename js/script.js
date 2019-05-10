function time() {
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = [4];

    var hour = d.getHours();
    var minute = d.getMinutes();
    var z = "am"

    if (hour >= 12) {
        z = "pm";
    }

    if (hour > 12) {
        hour -= 12;
    }

    minute = checkTime(minute);

    date[0] = weekday[d.getDay()]
    date[1] = month[d.getMonth()] + " " + d.getDate();
    date[2] = d.getFullYear();
    date[3] = hour + ":" + minute + " " + z;

    return date;

    function checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }
}

$(function () {
    $(".date").html(time().join(", "));
});

function send() {
    var input = document.getElementById("input").value;
    var div = document.createElement("DIV");
    div.setAttribute("id", "message");

    var text = document.createTextNode("You: " + input);
    div.appendChild(text);

    var messages = document.getElementById("messages");

    if (input !== "") {
        messages.insertBefore(div, messages.children[0]);
    }

    document.getElementById("input").value = "";
}

function openOverlay() {
    document.getElementById("overlay").style.display = "block";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function addContact() {
    var contacts = document.getElementById("contacts");
    var div = document.createElement("DIV");
    div.setAttribute("id", "contact");

    var br = document.createElement("BR");
    var text1 = document.createTextNode(document.getElementById("Name").value);
    var text2 = document.createTextNode(document.getElementById("Address").value);
    
    if (document.getElementById("Name").value !== "" && document.getElementById("Address").value !== "") {
        div.appendChild(text1);
        div.appendChild(br);
        div.appendChild(text2);

        contacts.appendChild(div);

        document.getElementById("Name").value = "";
        document.getElementById("Address").value = "";
    
        document.getElementById("overlay").style.display = "none";
    }
}
