const menubar = document.querySelector('.btn-sidebar');
const sidebar = document.querySelector('.sidebar');

menubar.addEventListener('click', function(){
    sidebar.classList.toggle('active');
});
