// Kalkulator Fungsi
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Validasi Formulir Pendaftaran
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Reset error messages
            const errorFields = document.querySelectorAll('[id$="Error"]');
            errorFields.forEach(field => field.textContent = '');
            
            // Validasi Nama
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim().length === 0 || nameInput.value.length > 40) {
                document.getElementById('nameError').textContent = 'Nama harus diisi dan maksimal 40 karakter';
                return;
            }
            
            // Validasi Nomor Telepon
            const phoneInput = document.getElementById('phone');
            const phoneRegex = /^\d{1,15}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                document.getElementById('phoneError').textContent = 'Nomor telepon harus numerik dan maksimal 15 digit';
                return;
            }
            
            // Validasi Email
            const emailInput = document.getElementById('email');
            const emailRegex = /^[a-zA-Z0-9.@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                document.getElementById('emailError').textContent = 'Format email tidak valid';
                return;
            }
            
            // Validasi Kata Sandi
            const passwordInput = document.getElementById('password');
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
            if (!passwordRegex.test(passwordInput.value)) {
                document.getElementById('passwordError').textContent = 'Kata sandi harus 8-16 karakter, mengandung huruf besar, kecil, dan angka';
                return;
            }
            
            // Jika semua validasi berhasil
            alert('Pendaftaran Berhasil!');
            form.reset();
        });
    }
});