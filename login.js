const form = document.getElementById('signupForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // पेज रीलोड होने से रोकता है

    // आपका बाकी का कोड (username, email, password लेने और axios.post का)
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('http://localhost:3000/signup', {
            username,
            email,
            password
        });

        if (response.status === 200 || response.status === 201) {
            alert('Sign up successful!');
            window.location.href = 'home.html';
        }
    } catch (error) {
        console.error(error);
        alert(error.response?.data?.message || 'Sign up failed, please try again.');
    }
});

