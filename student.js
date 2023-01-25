// the code below filters all the data in local storage and shows the user the ones that they are applicable to depending on the values 
// they selected on the student announcement page


function displayAnnouncements() {
    var announcementsJson = getAnnouncements();

    
    var search = JSON.parse(sessionStorage.getItem('search'));
    
    if(search == null) return;
  
    
    for (var i = 0; i < announcementsJson.length; i++) {
        
        if(search['club'] != "" && search['club'] != announcementsJson[i]['club']){
            continue;
        }
        
        if(search['grade9'] == true && announcementsJson[i]['grade9'] == false){
            continue;
        }
        if(search['grade10'] == true && announcementsJson[i]['grade10'] == false){
            continue;
        }
        if(search['grade11'] == true && announcementsJson[i]['grade11'] == false){
            continue;
        }
        if(search['grade12'] == true && announcementsJson[i]['grade12'] == false){
            continue;
        }
        if(search['member'] == true && announcementsJson[i]['member'] == false){
            continue;
        }
        if(search['amember'] == true && announcementsJson[i]['amember'] == false){
            continue;
        }
        if(search['exec'] == true && announcementsJson[i]['exec'] == false){
            continue;
        }
        if(search['pres'] == true && announcementsJson[i]['pres'] == false){
            continue;
        }
        
        var div = document.createElement("div");
        
        div.innerHTML = `
            <p>${announcementsJson[i].message}</p>
            <p>${announcementsJson[i].date}</p>
            <hr/>
            `;

        // the above code is used to generate a div where the announcement would be loaded from the values in local storage if the 
        // student matches the teacher's selected values. The announcement would also show along with the date when the 
        // announcement was generated
        
        document.getElementById("announcements").appendChild(div);
    }
    
}

function getAnnouncements() {
    return JSON.parse(localStorage.getItem("announcements"));
}




window.onload = displayAnnouncements();