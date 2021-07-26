const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch("api/user/login", { //ADD API ROUTE HERE
        method: 'POST',
        body: { email, password },
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/Home');
      } else {
        alert('Invalid password or Email');
      }
    }
  };






document.querySelector('.login-form').addEventListener('submit', loginFormHandler);