let theme_img = document.getElementById('theme').querySelector('img');

// console.log(theme_img.id);

if (window.matchMedia('(prefers-color-scheme)').media !== 'dark') {
    theme_img.id = 'theme-dark';
    theme_img.src='/Pictures/'+ theme_img.id+'.PNG';
  }


function changeTheme(){

    document.body.classList.toggle('body-theme-dark');

    if (theme_img.id=="theme-light"){
        theme_img.id = 'theme-dark';
        theme_img.src='/Pictures/'+ theme_img.id+'.PNG';
        
    }
    else {
        theme_img.id = 'theme-light';
        theme_img.src='/Pictures/'+ theme_img.id+'.PNG';
    }
}

// document.getElementById('theme').onclick = changeTheme;