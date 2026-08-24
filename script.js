 function toggleForm() {
      const form = document.querySelector('.auth-form');
      form.querySelector('h2').textContent = form.querySelector('h2').textContent.includes('Login') ? 'Create an Account' : 'Login to KikBak';
      const buttonText = form.querySelector('button');
      buttonText.textContent = buttonText.textContent.includes('Login') ? 'Register' : 'Login';
      
      const usernameInput = form.querySelector('input[name="username"]');
      usernameInput.placeholder = usernameInput.placeholder === 'Username' ? 'Email' : 'Username';
    }
