WEBSITE SEDERHANA UNTUK LOGIN & REGISTER

Data pengguna disimpan di localstorage browser jadi tidak membutuhkan data base dan data hanya tersimpan di browser

Struktur halaman
Website terdiri dari 3 file utama:
-index.html → tampilan halaman
-style.css → desain / tampilan visual
-script.js → logika (fungsi register & login)

A. Registrasi (Daftar)
Saat pertama kali membuka web, form Register akan tampil
Isi data berikut:
Nama Lengkap
Umur
Email
Password
Konfirmasi Password
Klik tombol Daftar
-Validasi yang terjadi:
Email harus mengandung @
Password & konfirmasi harus sama
Email tidak boleh sudah terdaftar
 Jika berhasil:
Muncul alert: "Pendaftaran berhasil!"
Data tersimpan di browser

 B. Login
Klik teks "Login di sini" untuk pindah ke form login
Masukkan:
Email
Password
Klik tombol Masuk
Jika berhasil:

Muncul pesan:
Login berhasil!
Halo, [Nama]

Jika gagal:
Muncul alert: "Email atau password salah!"
