document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const showLogin = document.getElementById('showLogin');
  const showRegister = document.getElementById('showRegister');

  // Toggle form
  showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
  });

  showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
  });

  // === REGISTER ===
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const umur = document.getElementById('umur').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validasi email
    if (!email.includes('@')) {
      alert('Email Wajib Menggunakan @ !!');
      return;
    }

    // Validasi password match
    if (password !== confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    // Cek apakah email sudah terdaftar
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.some(user => user.email === email);
    if (exists) {
      alert('Email sudah terdaftar!');
      return;
    }

    // Simpan user
    users.push({ nama, umur, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Pendaftaran berhasil!');
    registerForm.reset();
  });

  // === LOGIN ===
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert(`Login berhasil!\nHalo, ${user.nama}!`);
      // Di sini biasanya redirect ke dashboard
    } else {
      alert('Email atau password salah!');
    }
  });
});