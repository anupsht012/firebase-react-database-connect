const signUpButton=document.getElementById('signUp');
const signInButton=document.getElementById('signIn');
const container=document.getElementById('container');

signUpButton.addEventListener('click',()=>
container.classNameList.add('right-panel-active')
);
signInButton.addEventListener('click',()=>
container.classNameList.remove('right-panel-active')
);