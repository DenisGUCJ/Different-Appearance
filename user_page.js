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


function statusChangeCallback(response) {
    console.log(response.status)
    if (response.status === 'connected') {
        console.log('connected')
        //window.location = "user_page.html"
    } else {
        console.log('does not')
    }
}

functio

function logout(){
    console.log(FB)
    FB.logout(()=>{
        //window.location = "index.html"
        console.log('logout')
    })
}