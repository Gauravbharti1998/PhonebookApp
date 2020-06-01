function changeTheme(url){
    document.getElementsByTagName('body')[0].style.backgroundImage= "url('" + url + "')"; //we gotta break into strings as it is not CSS
} 