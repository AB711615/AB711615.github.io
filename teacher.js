// the code below serves as a checklist for finding out which categories the announcement creator has selected
function addAnnouncement() {

    var message = document.getElementById("message").value;
    var grade9 = document.getElementById("9").checked;
    var grade10 = document.getElementById("10").checked;
    var grade11 = document.getElementById("11").checked;
    var grade12 = document.getElementById("12").checked;
    var club = document.getElementById('announce').value;
    var member = document.getElementById('member').checked;
    var amember = document.getElementById('amember').checked;
    var exec = document.getElementById('exec').checked;
    var pres = document.getElementById('pres').checked;
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');



    var announcement = {
        message: message,
        grade9: grade9,
        grade10: grade10,
        grade11: grade11,
        grade12: grade12,
        date: utc,
        club: club,
        member: member,
        amember: amember,
        exec: exec,
        pres: pres
    };
    var announcements = JSON.parse(localStorage.getItem("announcements"));
    if (announcements == null) {
        announcements = [];
    }
    announcements.push(announcement);
    localStorage.setItem("announcements", JSON.stringify(announcements));
    alert("Your announcement has been created and saved!");

    // the above code finalizes the values of the selected values and saves the announcement to local storage. Then, an alert is generated signfiying that the announcement has been created.

}