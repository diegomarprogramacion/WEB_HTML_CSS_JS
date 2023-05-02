function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    let exp = document.form.textview.value;

    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

const switchButton = document.getElementById('switch_dark');
 
switchButton.addEventListener('input', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    if(localStorage.getItem('dark-mode')=='true'){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        if(document.querySelector('h1').classList.item != null){
            document.querySelector('h1').classList.remove('dark');
            document.querySelector('h1').classList.add('light');
        }
        localStorage.setItem('dark-mode', 'false');
    }
    else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        if(document.querySelector('h1').classList.item != null){
            document.querySelector('h1').classList.remove('light');
            document.querySelector('h1').classList.add('dark');
        }
        localStorage.setItem('dark-mode', 'true');
    }
    console.log("Dark Mode = "+localStorage.getItem('dark-mode'));
});

// Aplicar el estilo apropiado basado en el estado del switch guardado en el almacenamiento local
const input_dark = document.querySelector('.switch_dark input');
const darkMode = localStorage.getItem('dark-mode');
if (darkMode == 'true') {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    if(document.querySelector('h1').classList.item != null){
        document.querySelector('h1').classList.remove('light');
        document.querySelector('h1').classList.add('dark');
    }
    input_dark.checked = true;
} else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    if(document.querySelector('h1').classList.item != null){
        document.querySelector('h1').classList.remove('dark');
        document.querySelector('h1').classList.add('light');
    }
    input_dark.checked = false;
}