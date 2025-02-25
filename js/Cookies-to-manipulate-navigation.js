
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    //document.cookie = "initials=";
    let cookie_initials = getCookie("initials");
    let cookie_items_in_bag = getCookie("items_in_bag");
    let cookie_my_requests = getCookie("ac_request_to_approve");
    let cookie_request_approvals = getCookie("ac_approve_requests");
    let cookie_notifications = getCookie("notification_count");
    let cookie_order_history = getCookie("ac_view_order_history");
    const initialText = document.getElementById('initials-text');
    const profileInfo = document.getElementById('profile-info');
    const loginButton = document.getElementById('log-in-btn');
    const myRequests = document.getElementById('myRequests');
    const requestApprovals = document.getElementById('requestApprovals');
    const itemsInBagContainer = document.getElementById('itemsInBag-container');
    const itemsInBag = document.getElementById('itemsInBag');
    const notificationsProfile = document.getElementById('notificationsProfile-container');
    const notificationsInDropdown = document.getElementById('notificationsDropdown');
    const oderHistory = document.getElementById('oderHistory');



    if (cookie_initials == "" || cookie_initials == " " || cookie_initials == null) {
        console.log("initials empty...... ");
        loginButton.style.display = "block";
        profileInfo.style.display = "none";
    } else {
        console.log("initials filled with: " + cookie_initials);
        loginButton.style.display = "none";
        profileInfo.style.display = "block";
        initialText.innerHTML = cookie_initials;
    }

    if (cookie_items_in_bag > 0) {
        itemsInBagContainer.style.display = "block";
        itemsInBag.innerHTML = cookie_items_in_bag;
    } else {
        itemsInBagContainer.style.display = "none";
    }

    if (cookie_notifications > 0) {
        notificationsProfile.style.display = "block";
        notificationsInDropdown.innerHTML = notificationsInDropdown.innerHTML + " (" + cookie_notifications + ")";
        notificationsProfile.firstChild.innerHTML = cookie_notifications;
    } else {
        notificationsProfile.style.display = "none";
        notificationsInDropdown.innerHTML = notificationsInDropdown.innerHTML;
    }

    if (cookie_my_requests == "" || cookie_my_requests == " " || cookie_my_requests == null) {
        myRequests.style.display = "none";
    } else {
        myRequests.style.display = "block";
    }

    if (cookie_request_approvals == "" || cookie_request_approvals == " " || cookie_request_approvals == null) {
        requestApprovals.style.display = "none";
    } else {
        requestApprovals.style.display = "block";
    }

    if (cookie_order_history == "" || cookie_order_history == " " || cookie_order_history == null) {
        oderHistory.style.display = "none";
    } else {
        oderHistory.style.display = "block";
    }
