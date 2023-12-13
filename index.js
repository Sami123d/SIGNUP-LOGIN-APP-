const isuserlogged = localStorage.getItem('loginusers') || false;
if(isuserlogged){
    window.location.href = '/home';
}else{
    window.location.href = '/login';
}