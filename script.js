// script.js
const texts = ["Mahasiswa","Programmer","Gamers","Dreamer",];
const typingText = document.getElementById('typing-text');
let textIndex = 0;
let charIndex = 0;

function type() {
  const currentText = texts[textIndex];

  // Menambah satu karakter dari teks saat ini
  if (charIndex < currentText.length) {
    typingText.innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 150); // Delay 150ms untuk tiap karakter
  } else {
    // Setelah selesai mengetik teks, tunggu beberapa detik sebelum mulai menghapus
    setTimeout(deleteText, 1000); // Delay 1 detik sebelum menghapus teks
  }
}

function deleteText() {
  const currentText = texts[textIndex];

  // Menghapus satu karakter dari teks saat ini
  if (charIndex > 0) {
    typingText.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 100); // Delay 100ms untuk tiap karakter
  } else {
    // Setelah selesai menghapus, lanjut ke teks berikutnya
    textIndex = (textIndex + 1) % texts.length; // Loop teks
    setTimeout(type, 500); // Delay 0.5 detik sebelum mulai mengetik teks berikutnya
  }
}

// Mulai efek mengetik
type();


