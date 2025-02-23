function menuShow() {
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "asset/menu_icon_mobile.png";

    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="asset/menu_fechado.png"
    }
}