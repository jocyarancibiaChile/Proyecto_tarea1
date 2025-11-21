let usuarioValido='jocelyne2025'
let contrasenaValida='123456'

$(document).ready(function(){

    $('#loginForm').on('submit', function(e){
        e.preventDefault();
        const user=$('#username').val();
        const pwd=$('#clave').val();
        console.log('usr:', user)
        console.log('pwd:', pwd)
        
        if(user==usarioValido && pwd==contrasenaValida){
            console.log('ok login')
            localStorage.setItem('currentUser',user);
            window.location.href='inicio-sesión';
        }
        else{
            $('#errorMsg').removeClass('d-one')
        }
    })
});