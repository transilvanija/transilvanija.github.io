

const chsidebar = document.getElementById(`chsidebar`)
chsidebar.onclick = onchangeSidebar

function onchangeSidebar(){
    ch(this || chsidebar)
}

function ch(zis){
    sidebar.className = (sidebar.className === ``) ? `hidden` : ``
    const main = document.getElementsByTagName("main")[0]
    const banner = document.getElementById("banner")
    const footer = document.getElementsByTagName("footer")[0]
    main.className = (main.className === ``) ? `brightless` : ``
    banner.className = (banner.className === ``) ? `brightless` : ``
    zis.className = (zis.className === ``) ? `sidebarsh` : ``
    footer.className = (footer.className === ``) ? `brightless` : ``
}