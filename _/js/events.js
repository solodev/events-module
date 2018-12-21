
/** ===========================================
  # Excerpt Function for Blog & Resources
============================================ */
window.onload = function () {
    var postIntros = document.getElementsByClassName('post-intro');
    var newPostIntro;

    for (var i = 0; i < postIntros.length; i++) {
        if (postIntros[i].textContent.length > 244) {
            newPostIntro = document.createTextNode(postIntros[i].textContent.substring(0, 70) + "...");

            postIntros[i].textContent = "";
            postIntros[i].appendChild(newPostIntro);
        } else {
            newPostIntro = document.createTextNode(postIntros[i].textContent.substring(0, 50) + "...");

            postIntros[i].textContent = "";
            postIntros[i].appendChild(newPostIntro);
        }
    }

    var postIntrosSmall = document.getElementsByClassName('post-intro-small');
    var newPostIntroSmall;

    for (var i = 0; i < postIntrosSmall.length; i++) {
        if (postIntrosSmall[i].textContent.length > 22) {
            newPostIntroSmall = document.createTextNode(postIntrosSmall[i].textContent.substring(0, 18) + "...");

            postIntrosSmall[i].textContent = "";
            postIntrosSmall[i].appendChild(newPostIntroSmall);
        }
    }
};
