// Fungsi untuk validasi formulir pada halaman Register
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah formulir dari pengiriman otomatis
  
    const password = document.querySelector('input[type="password"]:nth-of-type(1)');
    const confirmPassword = document.querySelector('input[type="password"]:nth-of-type(2)');
    
    // Periksa apakah kedua kata sandi cocok
    if (password.value !== confirmPassword.value) {
      alert("Kata sandi tidak cocok!");
      return; // Jika tidak cocok, berhenti dan beri tahu pengguna
    }
  
    alert("Pendaftaran berhasil!");
    // Di sini Anda bisa menambahkan logika untuk mengirim data ke server atau API
  });
  