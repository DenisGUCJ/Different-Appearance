
/*
document.addEventListener('mouseover', (e) => {

    const centerX = mainElement.offsetLeft + mainElement.offsetWidth / 2;
    const centerY = mainElement.offsetTop + mainElement.offsetHeight / 2;

    const clientX = e.clientX
    const clientY = e.clientY

    let diffX = (clientX - centerX) / 10;
    let diffY = (clientY - centerY) / 10;

    console.log({diffX,diffY})
    mainElement.style.setProperty('transform',`skew(${diffX}deg,${diffY}deg)`)

    //mainElement.styles.setProperty()
})
*/
window.fbAsyncInit = function () {
    FB.init({
        appId: '1240750322929318',
        cookie: true,
        xfbml: true,
        version: 'v8.0'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
    //FB.AppEvents.logPageView();

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
    console.log(response.status)
    if (response.status === 'connected') {
        console.log('connected')
        window.location = "user_page.html"
    } else {
        console.log('does not')
    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });

}

function onFBLogin(){
    window.location = "user_page.html"
}





