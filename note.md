<!--  -->
<!-- PROMP AI GEMINI PRO -->
<!--  -->

<!--  -->
<!-- Promp AI untuk membuat 'Action (creator)' dan 'Reduser -->

Oke sekarang kita lanjutkan, Saya sedang membuat Aplikasi Forum Diskusi dengan React menggunakan Redux.

Buatkan file baru untuk state leaderboard dengan nama file action.js dengan ketentuan berikut:

State name: leaderboard.
Action types menyesuaikan semua fungsi API yang tersedia di api.js terkait leaderboard, tolong sesuaikan dan lakukan dengan lengkap.
Structure data menyesuaikan hasil API dengan state leaderboard
Buat action creator untuk semua yang berhubungan dengan state leaderboard
Buat function thunk untuk semua yang berhubungan dengan state leaderboard
Gaya penulisan, urutan fungsi, dan cara error handling harus sama persis seperti contoh diatas.

Selanjutnya, juga buatkan file reducer.js untuk state leaderboard dengan ketentuan berikut:

State name: leaderboard.
Gunakan ActionType dari action.js yang berisi:
Gaya penulisan, error handling, dan struktur kode sama persis seperti contoh.
Pastikan reducer tetap pure function dan tidak mengubah state secara langsung.

Pastikan Output hanya ada dua file yaitu action.js (untuk Action Creator dari state leaderboard) dan reducer.js (untuk Reducer dari state leaderboard)

<!--  -->
<!-- Promp AI untuk memanfaatkan State ke Halaman Web -->

Saya sudah menginstall react-redux pada Project saya, dan sudah melakukan <Provider store={store}> pada Component <App /> yaitu Component paling atas.

Oke selanjutnya bantu saya untuk memanfaatkan state yang sesuai dari Redux Store yang sudah ada untuk dimanfaatkan pada React Component yang ada, ke seluruh Halaman Aplikasi Forum Diskusi, kita lanjut pada file LeaderboardsPage.jsx (<LeaderboardsPage />)

berikut file LeaderboardsPage.jsx nya:
code
