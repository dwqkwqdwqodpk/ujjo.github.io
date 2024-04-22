const test = document.querySelector('body')
const btnOpen = document.querySelector('.mobile__btn')
const mob = document.getElementById('mob-nav')
const btnClose = document.querySelector('.btn__close')

btnOpen.addEventListener('click', function(){
    test.classList.toggle('idk');
    mob.classList.add('mobile__wrapper--open');
})

btnClose.addEventListener('click', function() {
    test.classList.toggle('idk');
    mob.classList.remove('mobile__wrapper--open');
})