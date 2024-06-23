document.addEventListener('DOMContentLoaded', function () {
    const $btnSignIn = document.querySelector('.sign-in-btn'),
        $btnSignUp = document.querySelector('.sign-up-btn'),
        $signUp = document.querySelector('.sign-up'),
        $signIn = document.querySelector('.sign-in'),
        $signUpButton = document.querySelector('.sign-up form input[type="button"]'),
        $signInButton = document.querySelector('.sign-in form input[type="button"]');

    document.addEventListener('click', e => {
        if (e.target === $btnSignIn) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active');
        }
        if (e.target === $btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active');
        }
    });

    $signUpButton.addEventListener('click', function() {
        const email = document.querySelector('.sign-up form input[type="email"]').value;
        const password = document.querySelector('.sign-up form input[type="password"]').value;
        if (email && password) {
            Swal.fire({
                title: 'Registro exitoso',
                text: '¡Tu registro se ha completado correctamente!',
                icon: 'success'
            }).then((result) => {
                if (result.value) {
                    window.location.href = 'index.html';
                }
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'error'
            });
        }
    });

    $signInButton.addEventListener('click', function() {
        const email = document.querySelector('.sign-in form input[type="email"]').value;
        const password = document.querySelector('.sign-in form input[type="password"]').value;
        if (email && password) {
            Swal.fire({
                title: 'Inicio de sesión exitoso',
                text: 'Has iniciado sesión correctamente',
                icon: 'success'
            }).then((result) => {
                if (result.value) {
                    window.location.href = 'index.html';
                }
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, ingresa tu correo y contraseña.',
                icon: 'error'
            });
        }
    });
});
