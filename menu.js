function change(){
    var page_btn=document.getElementById('page-btn')
    if(page_btn.style.backgroundColor=="orange"){
        page_btn.classList.add('active')
    }
    else{
        page_btn.classList.remove('active')
    }
}