
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
        setElements(true)
        useApi();
        //window.location = "user_page.html"
    } else {
        console.log('does not')
        setElements(false)
    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });

}

function setElements(isLogedIn) {
    if (!isLogedIn) {
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
        document.querySelector('.main-object').style.display = 'flex'
        document.querySelector('.user-info-container').style.display = 'none'
    } else {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
        document.querySelector('.main-object').style.display = 'none'
        document.querySelector('.user-info-container').style.display = 'block'
    }
}

function onFBLogin() {
    console.log('login')
    setElements(true)
    useApi();
}

function FBLogout() {
    FB.logout(() => {
        setElements(false)
    })
}

function setUserInformation(responce){
    document.getElementById('name').textContent += responce.name
    document.getElementById('email').textContent += responce.email
}

function useApi() {
    FB.api('/me?fields=name,email', (responce) => {
        if(responce && !responce.error){
            console.log(responce)
            setUserInformation(responce)
        }
    })
}





