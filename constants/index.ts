//Navigation
export const NAV_LINKS = [
  {href: '/Schedule', key: 'schedule', label: 'SCHEDULE'},
  {href: '/Leaderboard', key: 'leaderboard', label: 'LEADERBOARD'},
  {href: '/Players', key: 'players', label: 'PLAYERS'},
  {href: '/AboutUs', key: 'aboutus', label: 'ABOUT US'},
];

//Himpunan
export const Himpunan = [
  {href: 'hmif', key: 'hmif', label: 'HMIF'},
  {href: 'himastron', key: 'himastron', label: 'HIMASTRON'},
  {href: '#', key: 'himabio', label: 'HIMABIO "Nymphaea"'},
  {href: '#', key: 'hme', label: 'HME'},
  {href: '#', key: 'hmf', label: 'HMF "Ars Praeparandi"'},
  {href: '#', key: 'himafi', label: 'HIMAFI'},
  {href: '#', key: 'hmft', label: 'HMFT'},
  {href: '#', key: 'hmk', label: 'HMK "AMISCA"'},
  {href: '#', key: 'himatika', label: 'HIMATIKA'},
  {href: '#', key: 'hmm', label: 'HMM'},
  {href: '#', key: 'hmme', label: 'HMME "Atmosphaira"'},
  {href: '#', key: 'himamikro', label: 'HIMAMIKRO "Archaea"'},
  {href: '#', key: 'hmo', label: 'HMO'},
  {href: '#', key: 'hmrh', label: 'HMRH'},
  {href: '#', key: 'hmh', label: 'HMH "Selva"'},
  {href: '#', key: 'himarekta', label: 'HIMAREKTA "Agrapana"'},
  {href: '#', key: 'hms', label: 'HMS'},
  {href: '#', key: 'himasda', label: 'HIMASDA'},
  {href: '#', key: 'hmt', label: 'HMT'},
  {href: '#', key: 'hmtb', label: 'HMTB "RINUVA"'},
  {href: '#', key: 'himatg', label: 'HIMA TG "TERRA"'},
  {href: '#', key: 'hmtg', label: 'HMTG "GEA"'},
  {href: '#', key: 'himatek', label: 'HIMATEK'},
  {href: '#', key: 'hmtl', label: 'HMTL'},
  {href: '#', key: 'mtm', label: 'MTM'},
  {href: '#', key: 'hmpg', label: 'HMPG'},
  {href: '#', key: 'hmppl', label: 'HMP PL'},
  {href: '#', key: 'hmtm', label: 'HMTM "PATRA"'},
  {href: '#', key: 'hmpp', label: 'HMPP "VADRA"'},
  {href: '#', key: 'imag', label: 'IMA-G'},
  {href: '#', key: 'imdi', label: 'IMDI'},
  {href: '#', key: 'img', label: 'IMG'},
  {href: '#', key: 'immg', label: 'IMMG'},
  {href: '#', key: 'imt', label: 'IMT "SIGNUM"'},
  {href: '#', key: 'ippdig', label: 'IPPDIG'},
  {href: '#', key: 'inddes', label: 'INDDES'},
  {href: '#', key: 'kmil', label: 'KMIL'},
  {href: '#', key: 'kmm', label: 'KMM'},
  {href: '#', key: 'mti', label: 'MTI'},
  {href: '#', key: 'kmkl', label: 'KMKL'},
  {href: '#', key: 'kmpn', label: 'KMPN'},
  {href: '#', key: 'terikat', label: 'TERIKAT'},
  {href: '#', key: 'vasa', label: 'VASA'},
]

//Medals
export const Medals = [
  {key: 'hmif', label: 'HMIF', gold: '#', silver: '#', bronze: '#'},
  {key: 'hmt', label: 'HMT', gold: '#', silver: '#', bronze: '#'},
  {key: 'mti', label: 'MTI', gold: '#', silver: '#', bronze: '#'}
]

// src/data/index.ts

export const teams = [
  {
    key: 'hmif',
    name: 'HIMPUNAN MAHASISWA INFORMATIKA (HMIF)',
    image: '/LogoHMPS/HMIF.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Razi Rachman Widyadhana', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Aliya Husna Fayyaza', 'Angelica Aliwinata', 'Audy Alicia Renatha Tirayoh', 'Bevinda Vivian', 'Indah Novita Tangdililing', 'Lidya Marthadilla', 'Princessfa Azzahra Alvin', 'Egina Deva Carissa', 'Erdianti Wiga Putri Andini', 'Willhelmina Rachel Silalahi',
          'Ariel Jovananda', 'Christian Justin Hendrawan', 'Daffa Athalla Rajasa', 'Juan Sohuturon Arauna Siagian', 'Kenneth Ezekiel', 'Kenny Benaya Nathan', 'Matthew Sebastian Kurniawan', 'Michael Dimas Sarono', 'Ricky Wijaya'
        ],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Audy Alicia Renatha Tirayoh', 'Aliya harta Ary Utama', 'Aliya Husna Fayyaza', 'Princessfa Azzahra Alvin', 'Bevinda Vivian', 'Dita Maheswari', 'Indah Novita Tangdililing', 'Ni Made Sekar Jelita P', 'Lidya Marthadilla', 'Zheannetta Apple Haihando'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Aliya Husna', 'Muhammad Rafly', 'Vanson Kurnialim', 'Wan Aufa Aziz', 'Wilhelmina Rachel Silalahi', 'Zaki Yudhistira'],
      },
      {
        sportName: 'Voli',
        players: ['Mesach Hermasendro', 'Raden Francisco Trianto B', 'Ibrahim Ihsan Rasyid', 'Dama Dhananjaya Daliman', 'Suthasoma Mahardika Munthe', 'Juan Alfred Widjaya', 'William Glory Henderson', 'Muhammad Izzat Jundy', 'Alexander Jason', 'Yusuf Ardian Sandi', 'Faqih Muhammad Syuhada', 'Owen Tobias Sinurat'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA ASTRONOMI (HIMASTRON)',
    image: '/LogoHMPS/HIMASTRON.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Gita Nur Ajizah', 'Yonathan Firdian Saragih', 'Amalul Qorina', 'Syauqi Nawawi', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Fahmi Aziz Firmansyah', 'Rafli Laksamana', 'Hakim Al Ikhsan', 'Gladys Christabel Veliana', 'Kayla Augie Anandita', 'Daanish Ernesto Aquilla Kanza Monterosso', 'Elvia Arum'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Naila Natasya Akmalia', 'Aqilah Rizki Anjani Arafa', 'Nathanielle Jeanne Suoth', 'Ifa Riska', 'Venta Yuliantika Putri', 'Kayla Augie Anandita', 'Ken Tanaya Salmandjani', 'Laila Rofita Utami', 'Luthfiana Sutarjo', 'Amalul Qorina', 'Safina Rahma Hakim', 'Salma Putri Chairil Amalia'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['M. Khawariz Andaristiyan', 'Rafa Nanda Akilah', 'Kiki Citra Wati', 'Fatiha Izza Tunisa', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  }, 
  {
    name: 'HIMPUNAN MAHASISWA BIOLOGI (HIMABIO "Nymphaea")',
    image: '/LogoHMPS/HIMABIO.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Clarista Evelyn', 'Mutiara Safira', 'Gabriella Maria', 'Raden Ivan', 'Arya Faiza Sebastian', 'Ammardhika Dzaki P.', 'Niko Mevano', 'Rofifah Widad', 'Ignacio Sandiko'],
      },
      {
        sportName: 'Basket',
        players: ['Theodore Marvel S.', 'Radja Fahlevy', 'Muhammad Faadhilah', 'Diaz Sutan', 'Niko Mevano', 'Sultan Abigail Alexander', 'Mohammad Fadhil Ihsan', 'Adri Firmansyah', 'M. Rizki Akhniar', 'Alfath Rashif', 'Raidan Alviresia D.', 'Calvin Simanjuntak'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['M. Luqman Dzaky', 'Alvin Zuhri', 'Shiddiq Taufik', 'Milan Ardana', 'Raidan Alviresia D.', 'M. Alif Rizqa Kinadi', 'Arya Faiza Sebastian', 'M. Gerdi', 'M. Rizqi Aditya R', 'Niko Mevano', 'Viki Aji Saputra', 'Alfath Rashif'],
      },
      {
        sportName: 'Renang',
        players: ['M. Rafi Pradipta P.K.', 'Alnair Lapatiroi', 'Aida Fitri Kamila', 'Yuma Yumna Jauza M', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Alvin Zuhri', 'Arya Faiza Sebastian', 'Ershafa Nailah', 'Ransi Raihan', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  }, 
  {
    name: 'HIMPUNAN MAHASISWA ELEKTROTEKNIK (HME)',
    image: '/LogoHMPS/HME.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Gisela Aurora Gitapoetri', 'Bright Christian Kusuma', 'Samuel Irving Pudinaung', 'Maria Sophie Dewanto', 'Hans Forbes Kurniadi', ' Al Khairy Farisy', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Rayyi Rahmaid Adha', 'William Enrico Sembiring', 'Rafie Naufal Halimi', 'Muhammad Dhani Depardi', 'Fahrian Maulana Fazry Nuriady', 'Ryaas Ramdan Inugraha', 'Johanna Sekar Mumpuni', 'Zahra Faiza FIthriah', 'Fransiska Fernanda', 'Aliyah Vida Rahmah'],
      },
      {
        sportName: 'Basket',
        players: ['Abbel Jatmiko', 'Daffa Muhammad Rasyid', 'A.A.Radheya Seva Marthariyana', 'Nicholas Darren', 'Yohanes Ari Putra Pandapotan', 'Arif Firman Fadhilah', 'Muhammad Shafiyuddin Mihradi', 'Kiyo Lee Tiono', 'Achmad Fadhil', 'Fadhil Kusuma Wardhana', 'Denis Fathullah Pratama', 'Vallery Anthonio Raditya'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Jasmine Callista Auriellie I', 'Rumasiha Afiqah Taqiyya', 'Shadrina Syahla Vidyana', 'Sophie Maria Dewanto', 'Gisella Aurora Gitapoetri', 'Fransiska Fernanda', 'Amelia Dina Savitri', 'Nasywa Fadhilah Putri', 'Kaila Ermina Budiarto', 'Alifia Ghina Hanifah', 'Serena Kristin Hasiana', 'Raisya Nabila Thahari'],
      },
      {
        sportName: 'Renang',
        players: ['Andika Rama', 'Jasmine Callista', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Alvin Zuhri', 'Arya Faiza Sebastian', 'Ershafa Nailah', 'Ransi Raihan', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA FARMASI (HMF "Ars Praeparandi")',
    image: '/LogoHMPS/HMF.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Al Muqsith Aufa', 'Aisha Nadine', 'Rayhan Tri Putra', 'Made Ayu Aneira Widiana', 'Nadira Azzahrah', 'Sendy Ramadona', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Daffa Harsawardhana', 'Agness Meilinnda Sontani', 'Katya Deonika', 'Dinan Ghufrani Teddy', 'Kanaya Piscesea Hari Valent', 'Mikha Lady Yuria Marpaung', 'Starsha Estrella Sukardi', 'Gunadhammo Keanu Suryatenggara', 'Kent Evan Alfarisi', 'Sendy Ramadona'],
      },
      {
        sportName: 'Basket',
        players: ['Shafa Nabila', 'Cecilia', 'Raia Jingga A.', 'Janice Katya Ruth', 'Made Amanda Putri Nariswari', 'Daffa Aziizah Putri Setiady', 'Jeanne Belle Leo Fiona', 'Sellin Leony', 'Jessica Angelina', 'Raisha Dean Almira', 'Aisha Nadine', 'Daffa Harsawardhana', 'Dinan Ghufrani Teddy', 'Mazaya Auliya Fikra', 'Rayhan Tri Purta', 'M Farhan Rizqi', 'Denny Aditya', 'Zidan Rafliansyah', 'Gunadhammo Keanu Suryatenggara', 'Abdullah Fayzan Wargahadibrata', 'Al Muqsith Aufa', 'Ryumaga Ismail Akbarsyah', 'Renardi Hadisurya'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Nur Fauziah', 'Khalisa Aqeela Putri', 'Fannia Rusmawesti', 'Ilmi Nafis Azhari', 'Sekar Oktavia Rahmawanti', 'Jihan Nihal Salsabila', 'Catarina Jalindri Wijaya', 'Annisa Ainun Rahmawati', 'Nadira Azzahrah', 'Made Amanda Putri Nariswari', 'Syahda Umilatifah', 'Rauda Salma Isfahani', 'Dinan Ghufrani Teddy', 'Muhammad Andika Adhitama', 'Rayhan Tri Putra', 'Yogi Febriandi', 'Raphael Amadeaus', 'Zidan Rafliansyah', 'Sendy Ramadona', 'Gunadhammo Keanu Suryatenggara', 'Muhammad Nadherudin', 'Renardi Hadisurya', 'Muhammad Fajar Argenta Nurhadi', 'Al Muqsith Aufa'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  }, 
  {
    name: 'HIMPUNAN MAHASISWA FISIKA (HIMAFI)',
    image: '/LogoHMPS/HIMAFI.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Ario Nawangsidi', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Kansha Ghaffaru', 'Jonathan Sugijanto', 'Huwaida Badia A.', 'Ni Komang Linda Sopianti', 'Riwandi Novanto', 'Naufaldo Indra', 'Melinda Alberta', 'Fitri Desnita', 'Alyani Mazaya I.', 'Nindya Khoeroni'],
      },
      {
        sportName: 'Basket',
        players: ['Adriel Fadhlurrahman L.', 'Akhmad Zidane', 'Rafiq Althaf', 'M. Fatahillah', 'Muhammad Surya', 'Ardhika Maradana S.', 'Elang Aditya', 'Atra Ardiyanto A. P.', 'Fatthiyahdi At-Thariq', 'Meizar Gutama', 'Gerizim El Masih', 'Zharfan Aksa K.', 'Ridho Pratama M.', 'Naila Malika', 'Huwaida Badia', 'Magnalia Beatifica', 'Gea Imelda', 'Tasniem Asyifa', 'Najimicitta', 'Sekar A', 'Rizanty', 'Lidia Safira', 'Sherina Dwi A.', 'Shafrina Farhyan', 'Nindya Khoeroni'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Elang Aditya P.', 'Ahmad Alfian Tri S.', 'Aditya Aryashakti', 'Aufa Dirham H.', 'Fadhil Fatih S.', 'Fauzan Akbar', 'Alfatchurrahman', 'Matthew Pasoreh', 'Riwandi Novanto', 'Anzet D. P.', 'Petra Siahaan', 'Mateus Rolamro'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA FISIKA TEKNIK (HMFT)',
    image: '/LogoHMPS/HMFT.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Zalma Zahara Hanum', 'Azalea Jedidah Lambe', 'Clara Caroline Mariani', 'Alyssandra Destiny Gozali', 'Andrea Adeline Dewanto', 'Aliyah Shafira', 'Callesta Yaqueena Lysandra', 'Ghea Marissa Subiyantoro', 'Rosa Virginia Larasati', 'Miranda Asmi Nur F.', 'Sekar Diah Ayuningtyas', 'Sinta Rizkyani Mulyadi', 'Jocelyn Annabelle', 'Rafi Fadhlan Nazhif', 'Russell Christopher Yudhistira', 'Muhammad Mirza Adhiyarahman', 'Rayyan Cahya Rinaldi', 'Muhammad Farras', 'Zakhwanul Fikri Arif', 'Beno Agwija Setiawan', 'Fathy Abdurrahman', 'Ray William M Butarbutar', 'Gerard Alexander Sitompul', 'Timothy Taro Tarigan', 'Izzan Roidz Tramanti', 'Muhammad Kaisan K Ismail', 'M Guinnot Raid Nabihfalah', 'Baginda Muhammad Achtar Kahar'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Alif Muhammad Rizky ', 'Gontar Amin', 'Kornelius Anthoney E Naibaho', 'Muhammad Rizky Asqalani', 'Izma Alhazmi Herdian', 'Albert Ramosta Graetinus', 'Muhammad Syadid Makarimul M', 'Muhammad Azka Azzikra', 'Kevin Kristian Silaen', 'Muhammad Farras', 'Muhammad Nurbuana Alfatah', 'Hakim Adha Fayyadi Walneg', 'Baginda Muhammad Achtar Kahar', 'M. Iqnastiar Ramadhan', 'Faaiq Mastyaga'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Muhammad Rafif Fadillah', 'Mohammad Ilham Hazetra', 'Muhammad Nurbuana Alfatah', 'Alya Abshara Mahira Adhiputri', 'Zalma Zahara Hanum', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Nayaka Zahran Raeswara', 'Gontar Amin', 'Kornelius Anthoney E Naibaho', 'Taufik Syahputra', 'Fathy Abdurrahman', 'Izma Alhazmi Herdian', 'Nafi Mulyo Kusumo', 'Dandy Arif Rahmadi', 'Muhamad Arya Saputra', 'Daffa Aris Alhakim', 'Muhammad Reza Indarto', 'Ahmad Richard Naufal'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA KIMIA (HMK "AMISCA")',
    image: '/LogoHMPS/HMK.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Andre Kusdiana', 'Ahmad Lazuardi', 'Ryan Raditya Adhimas', 'M. Rafi Aulia', 'Rafi Mujahid Ayyad', 'Gibran Al Ramadhan', 'Immanuel Twomson D.', 'Hendrik Aziz Zulfikar', 'Algiera Zidan G.', 'Gideon Mazmur M.', 'M. Kamil  Nurrahman', 'M. Arrofy A'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA MATEMATIKA (HIMATIKA)',
    image: '/LogoHMPS/HIMATIKA.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Azarya Benhanan Isriyanto', 'Bryan Guok', 'Reihana Je Aminata', 'Alfia Suci Febriyanti', 'Ingrid Lenora Simanungkalit', 'Slamet Abidin', 'Indra Putra Lohanata', 'Pieter Valentino Wijaya'],
      },
      {
        sportName: 'Badminton',
        players: ['Bryant Kenneth H.', 'Valentinus Brian Johan', 'Alvan Justin', 'Brian Misael Susanto', 'Yongsen Leonardo', 'Tesalonika Permatasari H', 'Valencia Michelle Liu', 'Marvella', 'Patricia Ratnakanya A', 'Clairine Jovita'],
      },
      {
        sportName: 'Basket',
        players: ['Aditya Lukki', 'Irvan Hartawan', 'Marvin Wijaya', 'Nathanael Gilbert', 'Nicholas Lavendo Taneri', 'Darrell Lee Benevaldi', 'Muhammad Zidni Ilman', 'Eric Putra Maedha', 'Nathanael Marvin', 'Arya Bagas Satria', 'Juan Christian', 'Matheus Radityo', 'Fabian Ariasena Santoso', 'Albertus Alvin'],
      },
      {
        sportName: 'Catur',
        players: ['Azarya Benhanan Isriyanto', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Muhammad Arsya', 'Ridho Putra', 'Ahmad Khusairi', 'Muhammad Raihan Nupiyandi', 'Matheus Radityo', 'Al Fath Firdaus', 'Rafif Arsyan', 'Muhammad Zidni Ilman', 'Muhammad Farhan Rasyid', 'Irvan Hartawan', 'Valentinus Brian', 'Keita Kamil', 'Muhammad Fadhlan Nafis', 'Brian Misael Susanto', 'Fakhry Ikhsanul Zaki'],
      },
      {
        sportName: 'Renang',
        players: ['Alfia Suci Febriyanti', 'Aditya Lukki', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Amar Fatih SKA', 'Gulit Radian Wiyarno', 'Rendi Adinata', 'M. Raihan Nupiyandi', 'Devin Nathaniel', 'Haitsam Izzan W.S.', 'Muhammad Fikran Naufal', 'Muhammad Zidni Ilman Nafiah', 'Naufal Rafidien Khalwani', 'Aditya Lukki', 'Nathanael Gilbert'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA MESIN (HMM)',
    image: '/LogoHMPS/HMM.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Ryan Rivandi', 'Edric Geoffrey', 'Jabbar Alam', 'Muhammad Thoriq Rashin Praja', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Raihan Naufal Ramadhan', 'Bernard Nielsen', 'Adelia Trisna', 'Syira Aquila', 'Nataya Shafira', 'Avigo Asari', 'Juan Pisente', 'Kayla Tanaya'],
      },
      {
        sportName: 'Basket',
        players: ['Jasmine Nurul Haq', 'Edwina T.', 'Amira Soraya', 'Kenisha', 'Ratna Devinta Salsabila', 'Adria Luna' , 'Naia Fahira Al-Zahra', 'Kayla Tanaya', 'Adelia Trisna', 'Syira Aquila', 'M. Rizky Bagaskara', 'Hardianto Kodanta', 'Ruben Rabbani', 'Muhammad Hanif Raihan', 'Chiko Adividhya Mulyono', 'Alif A. Kurniawan', 'Raevan Schonezkiel Sangapta', 'David Truly Aristo Sitanggang', 'Marcel Jason Yaparto', 'Devasandro Tegar Arni', 'William Nathan Thomas', 'Kevin Reyhan', 'Aliriady Narendra Subroto'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Ryan Rivandi', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Muhammad Ridwan S.', 'Muhammad Abdunnafi A.', 'Muhammad Noval Tores', 'Fauzan Ahmad', 'Muhammad Hisyam Alkhawarizmi', 'Shalahuddin', 'Fitra Faza Maula', 'Hezron Hans M. Sraun', 'Muhammad Zykhra', 'Haikal Pasca Utama', 'Haroki Taqiyyudin Robbani', 'Samuel Tiono', 'Juan Frederick', 'Muhammad Darrel Keefa'],
      },
      {
        sportName: 'Renang',
        players: ['Ratna Devinta', 'Alief', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Juan Frederick ', 'Muhammad Farel Rahardian', 'Nataya Shafira', 'Ratna Devinta Salsabila', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Rakha Abdillah Firdaus', 'Rayyan Nusaly', 'Mikhail Arsyad Fadhila', 'Arta Aulia Affif', 'Muhammad Fikri Zidandaru', 'Adam Rushdain Putrayando', 'Reyhan Ubadillah', 'M. Naufal Dhiaulhaq', 'Taufa Indrawan', 'Muhammad Afdhal', 'Edric Geoffrey', 'Zykhra Rauf', 'M. Abdunnafi'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA METEOROLOGI (HMME "Atmosphaira")',
    image: '/LogoHMPS/HMME.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Ifzal Mausul Ramadhan Winarno', 'Kelly Marllon', 'Elna Kuraeni', 'Grace Fidelia Situmorang', 'Ahrish Firman Syah', 'Oryza Wardana', 'Abyaz Nawfaldhiyaa', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Mhd. Isfahan Fadyasha ', 'Axel Widjanarko Sibarani', 'Yusnavitha Rachmadani', 'Deva Desi Deria', 'Abyaz Nawfaldhiyaa', 'Febrianti Rahayu', 'Alivio Feyrizkia', 'Nurul Hidayati', 'M.Daffa Tsabat A.H.', 'Alya Rihadatul Aisyah'],
      },
      {
        sportName: 'Basket',
        players: ['Nuran Dhiya Annafi', 'Emelio Joshia', 'Muhammad Humam Nabeel', 'Dawwas RS', 'Rully Dwi Nugraha Dasyura', 'Alivio Feyrizkia Ramadhan', 'Muhamad Fariz Alvacena', 'Muhammad Airy Yulman', 'Jeremy Blessclay Muljana', 'Gery Naufal Risnandar', 'Fikri Zarfan', 'Muhamad Raka Perdana'],
      },
      {
        sportName: 'Catur',
        players: ['Ahrish Firman Syah', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Azna Chaniago', 'Grace Fidelia Situmorang', 'Allya Aulia', 'Xeniorita Herwindo', 'Febrianti Rahayu', 'Tassa Zikrillah Fitri', 'Rifda Amara Aulia', 'Putri Vioreta', ' Adinda Cahya', 'Rizma Prawira', 'Ratu Naia Ariefari', 'Nasyabila Putri', 'Elna Kuraeni', 'Nuran Dhiya A.', 'Mhd. Isfahan Fadyasha', 'Axel Widjanarko Sibarani', 'Nurrizki Fathami', 'Dawwas RS', 'Rully Dwi Nugraha Dasyura', 'Arya Nst', 'Muhammad Airy Yulman', 'Hafzulh Usmu Alfalah', 'Muhamad Fariz Alvacena', 'Auva Qaulan Sadiida', 'Hafiz Amin Sudril', 'Daffa Alvaro Athaila', 'Reza Wijaya', 'Fikri Zharfan Suganda'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Nuran Dhiya A.', 'Mhd. Isfahan Fadyasha', 'Axel Widjanarko', 'Dawwas RS', 'Rully Dwi Nugraha Dasyura', 'Nurrizki Fathami', 'Arya Nst', 'Muhammad Airy Yulman', 'Doddy Nbh', 'Jeremy Blessclay Muljana', 'Auva Qaulan Sadiida', 'Muhammad Naufal Iman', 'Emelio Joshia'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA MIKROBIOLOGI (HIMAMIKRO "ARCHAEA")',
    image: '/LogoHMPS/HIMAMIKRO.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Nicole Prodjomaroeto', 'Haiga Sophia', 'Muhammad Zhorif Robbaanii', 'Naufal Muhammad Alif', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Muhammad Regy Junando', 'Muhammmad Firdaus', 'Talitha Salma Tsabitha', 'Latifah Naila Roswendi', 'Celeste Widiastuti', 'Muhammad Regy Junando', 'Gregorius Belfry Soetanto'],
      },
      {
        sportName: 'Basket',
        players: ['Padmalya Nisala Supangkat', 'Bianca Aurellia Jasmine', 'Janice Eugenia Santoso', 'Faiqah Suci Vaneria', 'Brigitta Serafina Muliadi', 'Haniifah Chantas Aradhana', 'Rufaida Khairina', 'Malika Fatima Lawe'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA OSEANOGRAFI (HMO "TRITON")',
    image: '/LogoHMPS/HMO.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Fellycia Nathalie', 'Zahra Anggun Sefirani', 'Mochamad Nur Fajri', 'Vandikkar Silalahi', 'Tasya Nadya Putri', 'Yolivia Robong Langi', 'Dhiya Akmal Fauzan', 'Ivanogari Febrian Klaudio Simanjorang', 'Ali Akbar Rafsanjin', 'Arvind Vazza Pratama'],
      },
      {
        sportName: 'Badminton',
        players: ['Gara Ghalib Ramadhan', 'Ni Made Regina Prameswari', 'Muhammad Zeva Radityaputra', 'Syafrizal Hidayat', 'Inditha Roulina Silalahi', 'Sriyana', 'Moh. Adli Daffa Amrullah', 'Putri Ardianty Maulida', 'Mochamad Nur Fajri', 'Maidina Zevi Putri'],
      },
      {
        sportName: 'Basket',
        players: ['Niandri Tofani', 'Azka Putri Amandine', 'Ken Dedes', 'Alicia Zalfaa Jatnika', 'Anna Felicya', 'Fellycia Nathalie', 'Agnes Bernadatte Quinn', 'Amarra Azzahra Saleh', 'Sri Yanna', 'Putri Dara Jingga', 'Inditha Roulina Silalahi', 'Gania Jadida', 'Adrevi Delano Rizqi Santosa', 'Nicholas Halomoan Nabayo', 'Ahdan Musyaffa', 'Partogi Yosafat Hamonangan', 'Joshua Yosianto', '⁠⁠Darrell Simorangkir', 'Ivanogari Febrian Klaudio Simanjoran', 'Athalla Defin', 'Hanif Alghiffari Pohan', 'Timothy De Niro Junior Siahaan', 'Vadelino Dio Maulana', 'Muhammad A’bid Arsyad Majid', '⁠⁠Muhammad Insan Hanif', '⁠⁠Muhammad Zeva Radityaputra', 'Adrevi Chepa Muhammad'],
      },
      {
        sportName: 'Catur',
        players: ['Zaid Ahmad Shadiq', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Inditha Roulina Silalahi', 'Salima Fatimah Az-Zahra', 'Ayu Cahyani', 'Niandri Tofani', 'Fellycia Nathalie', 'Nikita Ruth Shan Fernanda', 'Elizah Yosita Naibaho', 'Ayasti Tiara N', 'Maidina Zevi', 'Alicia Zalfa', 'Anna Felicya', 'Sriyana', 'Yosefha Br Sebayang', 'Nayla Elma Apriwianda', 'Putri Diniaty', 'Daniel Simbolon', 'Vandikkar Silalahi', 'Arvind Vazza Pratama', 'Hanifian Dhabith Alifathaya', 'Ari Daniel Sitorus', 'M. Fairuz Al Haidar', 'Muhammad Iqbal Musthofa', 'Arham Namusul Kaab', 'Hanri porang kurniawan Nst', 'Gavra abrar Puterardya Tampubolon', 'Gara Ghalib Ramadhan', 'Muhammad Zeva Radityaputra', 'Vincentius Arya Prasada', 'Daniel Bonifasius Sipayung', 'Devid Frans Windesi'],
      },
      {
        sportName: 'Renang',
        players: ['Diva Maharani', 'Ken Dedes', '⁠Arvind Vazza Pratama', 'Athalla Defin', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Raihan Eko Sugiyanto', 'Anna Felicya', 'Arham Namusul Ka’ab', '⁠⁠Syafrizal Hidayat', 'Maidina Zevi', 'Ahmad Faishal Nurdzaky', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Mochamad Nur Fajri', 'Gara Ghalib Ramadhan', 'Partogi Yosafat Hamonangan', 'Syafrizal Hidayat', 'M. Azqar Zalvino', 'Ikhwan Tsuni Nusantara', 'Arham Namusul Ka’ab', 'Muhammad Fatih Putra Achsan', 'Arvind Vazza Pratama', 'Tabiin Ikhsan', 'Diky Dwi Anggara Permadi', 'Vincentius Arya Persada'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA REKAYASA HAYATI (HMRH)',
    image: '/LogoHMPS/HMRH.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA REKAYASA KEHUTANAN (HMH "Selva")',
    image: '/LogoHMPS/HMH.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Sarah', 'Athira Naifah Azmi', 'Fellicita Rahma Maritza', 'Asma Syahidah Wigati', 'Stella Mariska Hanako', 'Nuha Hanina Arkan', 'Almira Kinayya Kosasih', 'Ghaisani Fildzah Fathurrohman', 'Nur Sa’idah Agustine', 'Kanaya Verissa Rianti', 'Intan Santika Putri', 'Saffana Labiba Azka', 'Dea Ardaneswari'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA REKAYASA PERTANIAN (HIMAREKTA "Agrapana")',
    image: '/LogoHMPS/HIMAREKTA.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  { //Sampai sini sekarang
    name: 'HIMPUNAN MAHASISWA SIPIL (HMS)',
    image: '/LogoHMPS/HMS.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Kenrick Adli', 'Jovan Novianto Sumanta', 'Patricia Romahotasi Serepina Daviarosa', 'Kemalahayati Noor Malaya', 'Putra Kusuma', 'Jonathan Sunka', 'Patricia Romahotasi Serepina Daviarosa', 'Muhammad Rafi Haidar Setiawan'],
      },
      {
        sportName: 'Badminton',
        players: ['Ahmad Haziq Al Musyarrif', 'Wisesa Dananjaya Supriadi', 'Adhika Dharma Putra', 'Mirza Fazil Karimdi', 'Mohammad Fathan Islamika', 'Mahira Atika Basri', 'Kemalahayati Noor Malaya', 'Sandra Regina Tambun', 'Elisabeth Lumbantobing', 'Joanna Netania'],
      },
      {
        sportName: 'Basket',
        players: ['Shannon Gracella', 'Joanna Netania', 'Geraldine Natama', 'Adisti Dwihapsari', 'Maranatha Dewi Gabriella', 'Nafi`ah Rahni Nugrahanti', 'Rr Niken Prama Anindhita', 'Jesika Natalia Sirait', 'Syifa Rahmatika', 'Intan Maudika Putri', 'Monica Berliana', 'Kemalahayati Noormalaya', 'Gilbert Ferlin Yakin', 'Calvin Riandy', 'Mohammad Alrijalu', 'Stanislaus Heinrich Sie', 'Darwin Citrajaya', 'Adrian Nathan Pangaribuan', 'Syauqi Dwi Ryan Ardhani', 'Kevin Gavryel Marcellino', 'Para Wahyu Sovana', 'Jonathan Sunka Tanubrata', 'Daffa Oktaversa Rabbani', 'Ghazy Luthan Razan'],
      },
      {
        sportName: 'Catur',
        players: ['Jeffer Francisco', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Michell Amanda Fasya', 'Joanna Netania', 'Monica Berliana Putri Rinagi', 'Nafi`ah Rahni Nugrahanti', 'Maranatha Dewi Gabriella Simbolon', 'Annisa Aulia Diptilalitya', 'Kemalahayati Noor Malaya', 'Syifa Rahmatika A T', 'Rr Niken Prama Anindhita', 'Sheryll Taqiyya Ifada', 'Falisha Dianty', 'Naswa Munggarani Rahayu Putri', 'Fideline Callysta Theona', 'Salsabila Khalishtarisa', 'M. Addin Ihsan Pratama', 'Adyatma Bima Parikesit', 'Nathaniel Situmorang', 'Yoga Arvanda', 'Benedictus Gerry', 'Geraldus Emanuel', 'M. Ikhsan Izzul Haq', 'Raihan C. U.', 'M. Naufal Jabran', 'M. Elyas Aryo', 'Michael D. D. S.', 'M. Dwantara', 'Adrian Nathan', 'Putra Pasha', 'Kevin Maheswara'],
      },
      {
        sportName: 'Renang',
        players: ['Christophorus Gerard Marvin', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Mirza Fazil Karimdi', 'Muhammad Ikhsan Izzul Haq', 'Nafi`ah Rahni Nugrahanti', 'Fideline Callysta Theona', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['M. Elyas Aryo Saputro', 'Mohammad Fathan Islamika', 'Aditya Panji Moehammad', 'Frendi Adianata Putra', 'Geraldus Emanuel Gunawan', 'Barra Fatta Abdullah', 'Ronald Calvin Lo', 'Alwan Rafi`u Musyaffa`', 'Bangkit Krisna Satriadi', 'Khasan Matlubi', 'Fitrah Nur M.H.', 'Immanuel Ryandika O.'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA SUMBER DAYA AIR (HIMASDA)',
    image: '/LogoHMPS/HIMASDA.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TAMBANG (HMT)',
    image: '/LogoHMPS/HMT.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Bona Ventura D Taplo', 'Immanuel Satria A M N', 'Rizqi Andhika Satrya Putra', 'Kasih Paskah Avrilla Sinaga', 'Revina Elisabeth Permata Sari', 'Adil Satria Buana', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Mohammad Firdaus Nugroho', 'Christian Jordan Manihuruk', 'Abyan Fadhlurrahman', 'Galfin Gastiadirrijal', 'Muhammad Is Dzakwan P', 'Zefanya Putri Nawisa L Tobing', 'Jasmine Dwi Darma Putri', 'Revina Elisabeth Permata Sari', 'Manda Wiraatmaja', 'Dila Syahri'],
      },
      {
        sportName: 'Basket',
        players: ['Anindya Nada Arinal Haque', 'Irdina Filzah Auni', 'Febionetta Probowati', 'Imelda Kristia Yikwa', 'Nabila Rosalina Putri Cahyono', 'Nur`aini Fauziah Zahra', 'Evelyn Rosherina Cahyadi', 'Kila Kalyana', 'Aulia Karen Nugroho', 'Santa Rina Br Sembiring Milala', 'Widdy Wijaya', 'Zahra Putri Della Roza', 'damian winnata gain', 'm.farhan zulkarnain', 'budi gilbert stephan simbolon', 'axel christabel dalta', 'Liam Ferdinand Widjaja', 'Gana Aryanu Prabaswara', 'Revano Alfebian Kusdaryangga', 'Urwatul Wutsqaa Fijri', 'darma wangsa', 'pangerehan purwantorojati', 'arfa iman prasetyo', 'ahmad husaini firdaus', 'ilham mubarok', 'syauqi sanmoris sebayang', 'Alec Adrian'],
      },
      {
        sportName: 'Catur',
        players: ['Kamila Hildi Lavely', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Imelda Kristia Yikwa', 'Jasmine Dwi Darma Putri', 'Intan Nuraini', 'Signora Siva Laraswening', 'Rossa Hapsari Widya Nurkahfi', 'Nayla Hamidah', 'Eugenia Kesya Annindya Putri', 'Nur`aini Fauziah Zahra', 'Santa Rina Br Sembiring Milala', 'Luh Puniayogi Suaryani', 'Evelyn Rosherina Cahyadi', 'Kila Kalyana', 'Aulia Karen Nugroho', 'Nabila Keyla Nazline', 'Allya Meilani Efendi', 'Gabe Jumagar Simanjuntak', 'Muhamad Farhan Haryanto', 'Muhammad Hafidz Haqiki', 'Galfin Gastiadirrijal', 'Falih Magna Agali', 'Bona Ventura D Taplo', 'Andi Muhammad Rifky', 'Yosua Meku', 'Farand Adli Sadina', 'Muhammad Reza Gemilang', 'Kevin Aldin Nugraha', 'Sihar Arya Panjaitan', 'Rayyan Rizky Ardhya', 'Naufal Tsaqif Nayottama', 'Tegar Romadhon Poluan'],
      },
      {
        sportName: 'Renang',
        players: ['Nashaura Jilan Attayanissa Adityawarman', 'Marliana Margaretha Pardede', 'Parlindungan Marcelino', 'Karisma Yoga Firmansyah', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Fredy Allan Susanto', 'Axel Christabel Dalta', 'Naufal Nugroho Raharjo', 'Eugenia Kesya Annindya Putri', 'Evelyn Rosherina Cahyadi', 'Andika Rifqi Mulia', 'Tessa Johanna Sutrisno','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Abraham  Rivaldo Novelino Purba', 'Ahmad Husaini Firdaus', 'Pangerehan Purwantorojati', 'Nasra Yuda Sitorus', 'Arfa Iman Prasetyo', 'Muhammad Firdaus Nugroho', 'Hillal Az Zahri Sunata', 'Rafilino Fazza Kuncoro', 'Azar Alfi Dwi Bahtiar', 'Dody Muhammad Pasha', 'Akbar Ramadhani Rahayu', 'Rocky Expan Manik'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNIK BIOENERGI DAN KEMURGI (HMTB "RINUVA")',
    image: '/LogoHMPS/HMTB.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Ghefary', 'Sultan', 'Andhika', 'Fahrul', 'Roqi', 'Raju Imam Syahanafi', 'Ravsa Novian Ramdhani', 'Bintang Dwi Gustianto', 'M. Nabil Alfagani', 'Anggito Nugraha', 'Muhammad Daffa Pahlevi Hernowo', 'Gede Radheya  Alkantara', 'Jack', 'Handriza Riskha', 'Muhammad Aqeela Ihzra Ghazali'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNIK GEOFISIKA (HIMA TG "TERRA")',
    image: '/LogoHMPS/HIMA_TG.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Raihan Aqilla Naufaly Hendarsyah', 'Bonifasius Christian Wisetya', 'Sofie Samantha Joris Putri', 'Nazlia Zahra Wahdani', 'M. Raindra Faizza Adhitama', 'Zuhra Dzaki Pawenang', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Kharisma Dwi Anggraheni', 'Aisha Trihapsari', 'Muhammad Aufar Al Ghiffary', 'Muh. Zarkasih Nur', 'Meira Madya Kurnia Putri', 'Nafa Ramadhani Purnomo', 'Muh Hazyim Hamzady', 'Risyad Haekal Sudjana', 'Musrifah Mawar Maylani', 'Fadly Gibran Mustafa'],
      },
      {
        sportName: 'Basket',
        players: ['Dziand Dafi Ginandjar', 'Hezro Issybael Lixi Tobing', 'Doni Agustinus', 'Mikael Elgo', 'Mark Christian Martua Manurung', 'Thafanulhaq Rafidhan Arsyono', 'Muhammad Fauzan Ghiffario', 'Najwan Sahasika Garnadi', 'Muhammad Syahid Ataullah', 'Muhammad Fatkhurrohman', 'Revansyah Athar', 'Fakhrur Rozy', 'Berryl Bima Putra Diesny', 'Muhammad Calvin Pratama Gunawan', 'Hizmi Al Qudumi'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Muhammad Ahsan', 'Mohammad Arsyad', 'Beno Ismu Fadillah', 'Muhammad Bintang Nurcahyo Putra', 'Bonifasius Christian Wisetya', 'Muhammad Adika Jusuf', 'Muhamad Fahmi Idris', 'Edward Dwi Armanto Simangunsong', 'M. Raindra Faizza Adhitama', 'Hary Stefan Ginting', 'Muhammad Aufar Farizan', 'Rizki Febrian', 'Mohamad Hilman Hakim Al-Farizy', 'Raihan Aqilla Naufaly Hendarsyah', 'Fachri Alfarizi Nadjad'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Agung Imansyah', 'Luthfie Eka Surya Kelana', 'Meira Madya Kurnia Putri', 'Bagas Prakasa Akbar', 'Siti Asih Rahmahaya', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNIK GEOLOGI (HMTG "GEA")',
    image: '/LogoHMPS/HMTG.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNIK KIMIA (HIMATEK)',
    image: '/LogoHMPS/HIMATEK.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Mazaya Shafa Alisha', 'Menur Anindya Hanan Tandyo', 'Jeihan Anwar', 'Muhammad Riezky Daffaa Aqila', 'Faris Ardhi Duineri', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Raihan Fachri Muszagia', 'Matthew Javin Christian', 'Mia Nuramalia Aim', 'Astrid Lavianca Putri', 'Raihan Azizur Rachman', 'Kafhaya Annisa Ramadhani', 'Afnes Fisnanda', 'Neysa Sharla Nandita', 'Mitchell Sebastian Frederick Purba', 'Jacqueline Manoah Zerach'],
      },
      {
        sportName: 'Basket',
        players: ['Naja Kayla', 'Shofiyah Noviyanti', 'Neylan Rabbani', 'Neysa Sharla Nandita', 'Alma Larasati', 'Kirana Arundati', 'Dzikrazahira Nabilah', 'Astrid Lavianca Putri', 'Sakina Aisha Armand', 'Tasya Larasati R', 'Nora Aurora P.', 'Kezia Aisyah', 'Marvin Naditya Pratama', 'Stenly Saut Martua', 'Reizha Alifian Rudiarto', 'Leonard Kusnadi', 'Azka Anindya Aryasatya', 'Jovan Amalex Sander Manullang', 'Muhammad Firza Mahadeta', 'Pambudi Zaky Salim', 'Rafindra Andhika Permana', 'Feliciano Enrico Setiawan', 'Matthew Javin Christian', 'Samuel Putra Tondi Tambatua P', 'Faadhil Ahnaf Pandego', 'Raditya Ihsan Ananta', 'Muhammad Alghiffary Sulaeman'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Ahmad Muzayyin', 'Muhammad Prima Atmadja', 'Rury Kharisma Muzaqi', 'Muhammad Rakha Firdaus', 'Jason Anugrah Filifus Hutasoit', 'Gede Udiagiri Basudewa Adnyana', 'Faris Ardhi Duineri', 'Muhammad Sholihul Abid', 'Faza Adnandiya', 'Juan Reynaldy Pasaribu', 'Leonard Kusnadi', 'Hizkia Tyoga Pamatar Manurung', 'Muhammad Raif Darmawan', 'Faiza Aqila Lutfiansyah', 'Ilzam Firmansyah'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Azka Anindya Aryasatya', 'Gerald Xavier Widjaja', 'Christopher Reynard Jose', 'Nurfian Akbar Tyzaputra', 'Raihan Azizur Rachman', 'Aufa Rafiqi Disya', 'Jason Moelia Sapoetra', 'Afnes Fisnanda', 'Hizkia Tyoga Pamatar Manurung', 'Juan Reynaldy Pasaribu', 'Feliciano Enrico Setiawan', 'Akmal Rakha Firdaus', 'Arva Adwitya', 'Arya Ibrahim Marzuki', 'Gregorius Webbe Gigih Sadewa'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNIK LINGKUNGAN (HMTL)',
    image: '/LogoHMPS/HMTL.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Hanindityo Aiman Rachmansa', 'Naufal Aufa Rizky Romadhon', 'Nadine Pavlina Natasha Tambunan', 'Yohana Fransisca Nainggolan', 'Doviker Santira', 'Syakira Rukayah Pulukadang', 'Muhammad Haekal Fikri', 'Donna Aisha Hapsari', 'Adji Prayogo', 'Henard Niki Limbongan'],
      },
      {
        sportName: 'Badminton',
        players: ['Farhan Hazim', 'Nadhira Shafa Amira', 'Muhammad Haekal Fikri', 'Latief Priandiko', 'Putri Fatimah Azzahra', 'Khalisha Humaira Fernandy', 'Hafidz Ilham Wicaksono', 'Nikita Gabriela', 'Farisa Adilla Iskandar', 'Henard Niki Limbongan'],
      },
      {
        sportName: 'Basket',
        players: ['Nifangelyau, Maria Regina', 'Khayyira Shanindhita', 'Hana Nadia Iskandar', 'Sepia Wulandari', 'Jesica Oktavia Br. Ginting', 'Nadissa Regina Putri', 'Habiba Ardelia Istiqomah', 'Raisyifa Puteri Harninto', 'Marina Nugrahani Agyaputri', 'Syakira Rukayah Pulukadang', 'Edna Izzani', 'Khalisha Humaira Fernandy', 'Donna Aisha Hapsari', 'Farisa Adilla Iskandar', 'Aulia Nurhaliza', 'Adimas Narayana Radhitya', 'Andreas Morin Manurung', 'Fikry Aulia Tirta', 'Jonathan Friedrich Saragi', 'Yohanes Jeremy Jason Manurung', 'Verdy Bryanta Putra Barliansyah', 'Ignatius Fernando', 'Marcellino Antolin Surbakti', 'Rhaykal Razzan Giri', 'Farel Sultan Aulia', 'Teuku Muhammad Fauzi Ridwan', 'Muhammad Farell Faza Swivelly', 'Fanama Nasima', 'Birendra Suryo Bimantoro', 'Dzakwan Febriyanto'],
      },
      {
        sportName: 'Catur',
        players: ['Muhammad Vitorizki', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Habiba Ardelia Istiqomah', 'Jesica Oktavia Br. Ginting', 'Annisa Asma Fadhilah', 'Agventy Nuranis Edytya', 'Raisyifa Puteri Harninto', 'Marina Nugrahani Agyaputri', 'Eugenia Dahlia Evangelia Djami', 'Aulia Nurhaliza', 'Eugenia Dahlia Evangelia Djami', 'Khalisha Humaira Fernandy', 'ammara saskaradevi cahyadi', 'Chantyka Naranathadewi Sangcinitra', 'Syifa Nur Fitriani', 'Syakira Rukayah Pulukadang', 'Muhammad Rafly Zain Ishayuki', 'Hanindityo Aiman Rachmansa', 'Fikry Aulia Tirta', 'Adji Prayogo', 'Rayyan Maulana Suheimy', 'Mario Muhammad Daviza', 'Maha Yuyan Rafif', 'Mochammad Fadly Bhysmo Prayogi', 'Muhammad Haekal Fikri', 'Javier Rakha Mangunang Nasution', 'Naufal Aufa Rizky Romadhon', ' Muhammad Farell Faza Swivelly', 'Andreas Morin Manurung', 'Muhammad Farrel Adafi', 'Dian Wira Satya Sirait'],
      },
      {
        sportName: 'Renang',
        players: ['Syaffa Arini Kusuma', 'Rayyan Maulana Suheimy', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Muhammad Haekal Fikri', 'Joshua Verrell Tirtawidjaja', 'Latief Priandiko', 'Donna Aisha Hapsari', 'Khalisha Humaira Fernandy', 'Archerian D Hermawan', 'Aulia Nurhaliza','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Ignatius Fernando', 'Muhammad Haekal Fikri', 'Johan Hasudungan Simbolon', 'Henard Niki Limbongan', 'Muhammad Farell Faza Swivelly', 'Fanama Nasima', 'Adam Bryan Abyan', 'Vryzha Dutchka Devryan Putra', 'Steven Hosea Manurung', 'Ikhlasul Qolby Zacky  Nuravianto', 'Marcellino Antolin Surbakti', 'Hanindityo Aiman Rachmansa'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNIK MATERIAL (MTM)',
    image: '/LogoHMPS/MTM.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Rizky Nimpar Perangin-Angin', 'Rizqi Nur Fadhilah', 'A`rifaturrohmah', 'Fryni Rana Ikrima', 'Derrel Ichsanuddin', 'Ammar Nabhan Eljaad', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Rifantama Muhammad Ilman', 'Yulianti Hikmah Nur Aeni', 'Habib Haziqi Johan', 'Razi Delviar Farrukhi', 'Ibrahim Ghani Valerian', 'Maharani Awalia Gempita', 'Gabriella Amandari Putri', 'Andi Almirah Azaria', 'Habib Annaafi Syafrin'],
      },
      {
        sportName: 'Basket',
        players: ['Muhammad Farhan', 'Muhammad Hisyam Al-Aushaf', 'Gheza Raya Ghozali Winardi', 'Raden Mas Indra P Rasaditomo', 'Nicholas Ivan Azaria', 'Muhammad Gibran Fahrezzi', 'M. Raffi Putra Rahmansyah', 'Rizky Ramadhan Putra', 'Ammar Nabhan Eljaad', 'Muhammad Hediyono', 'Jhon Steven Simatupang', 'Radithya Pramana Daniswara', 'Rafa M.Naufal A', 'Maria Josef Amogkristi', 'Afari Rahman Sodikin'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Kania Khamelia Dianto', 'Maharani Awalia Gempita', 'Yulianti Hikmah Nur Aeni', 'Chaerani Supian', 'Rany Khannisa', 'Manggora Zerah Kristina S', 'Gabriella Amandari Putri', 'Aqilla Zati Bayani', 'Aliya Lathifa Putri', 'Margaretyasari Perdana', 'Sarah Zahira Trishaputri', 'Annisa Maulana Siregar', 'M. Gibran Rafif Ys', 'Rizky Ramadhan Putra', 'Rizqi Nur Fadhilah', 'Raden Muhammad Waffi Rizki Suyono', 'Nazhief Muhammad Dzaky A', 'Muhammad Andre Savero Rekaputra Wicaksono', 'Muhammad Rayyan Akhsan', 'Raihan Bagas Pramono', 'Muhammad Fahrizal Prasetya', 'Arlan Saputra', 'Rifqi Putra Maiyadi', 'Ammar Nabhan Eljaad', 'Fathan Razyadi Satria', 'Mochamad Favian Gani Widyatna', 'Radithya Pramana Daniswara'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Chaerani Supian', ' Yulianti Hikmah Nur Aeni', 'Aozora Amani Badruddin', 'Muhammad Ridhwan Azahir', 'Habib Haziqi Johan', 'Nayla Junnah Fathiyah', 'Arlan Saputra','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Prio Bahari Junior', 'Miftah Alfiqri', 'Fawzan Muhammad Rizqi', 'Muhammad Rafi', 'Hizkia Stefanus Julyanto', 'Abdirahman Pratama', 'Fikri Ahmad Hervian', 'Rifqi Putra Maiyadi', 'Rijal Mustamsik Zia`Ul Ha', 'Afari Rahman Sodikin', 'Iftikhar Ryo Ardhana', 'Daniz H J V Samosir'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNIK PANGAN (HMPG)',
    image: '/LogoHMPS/HMPG.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  { // Sampai sini
    name: 'HIMPUNAN MAHASISWA TEKNIK PERENCANAAN WILAYAH DAN KOTA PANGRIPTA LOKA (HMP PL)',
    image: '/LogoHMPS/HMP.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Luthfi Wavian', 'Ziham Hafidz Dwiseptano', 'Muhammad Aziz Zarkasya Ramdani ', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Deni Marsel Susanto', 'Marsha Sovia Ramadani', 'Moehammad Ghazali Athoriq', 'Darren Antolis', 'Raditya Praja Pamungkas', 'Saskia Keiko Denny Tabina', 'Ni Ketut Ayu Ratih Antari. S', 'Hans Phalosa Wirawan', 'Raudatul Hikmah', 'Hijriana Fatimah'],
      },
      {
        sportName: 'Basket',
        players: ['Naura Rafanissa Putri Budiman', 'Deniva Mulyati Neila Gunawan', 'Nisrina Syadza', 'Shevanna Aurelya Latisha', 'Aishabella Andisya', 'Jessica', 'Zahra Soraya Fatimah', 'Fahreza Nurkartika Hapsari', 'Saskia Keiko Denny Tabina', 'Khaylila Aisha Darmawan', 'Muhammad Authar Fionuzar', 'Roihan Ahmad Nur Ramadhan', 'Declan Gabriel Parningotan', 'Razky Aliviandi Fahlefi', 'Raden Mochamad Afzal Tantra Pratama', 'Samudra Naraputra', 'Muhammad Aziz Zarkasya Ramdani', 'Raditya Praja Pamungkas', 'Jeremy Lamhot', 'Muhamad Fahmi Saefulloh', 'Erza Muhammad Farabi', 'Ahmad Daffa Aldhiya', 'Paguh Randana Ginting', 'Austin Elwi', 'Deedat Hudal Akbar Helpiansyah'],
      },
      {
        sportName: 'Catur',
        players: ['Michael Tantra', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Aisha Indra Fathiamadhani', 'Tara Saria Jemima Manurung', 'Kinara Rafikansha Syahrindra', 'Naurah Sahhana Aprilia', 'Saskia Keiko Denny Tabina', 'Anggita Nisrina Srihartanti P', 'Meshi Rizka Nabila', 'Shevanna Aurelya Latisha', 'Aishabella Andisya', 'Azahra Aqilah Putri', 'Malika Zahra Syakira', 'Zahra Soraya Fatimah', 'Sulthan Yusuf Oetama', 'Ziham Hafidz Dwiseptano', 'Roihan Ahmad Nur Ramadhan', 'Muhammad Miqdad Multazim', 'Dimal Akram Pradana', 'Andi Faza Ananta Ghifari', 'Alaika Hayya', 'Declan Gabriel Parningotan', 'Luthfi Wavian', 'Arief Fadhillah', 'Christopher Maleakhi H.S.', 'Muhammad Ayyub Anshori', 'Rahmadhito Alfa Centaury', 'Muhammad Raka Praditya', 'Muhammad Anas Dzul Afkar Wal A'],
      },
      {
        sportName: 'Renang',
        players: ['Ammara Aqila Putri', 'Ardhana Pradipta Bambang Sarah ', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Muhammad Ayyub Anshori', 'Muhammad Febrian Akbar', 'Muhammad Miqdad Multazim', 'Andi Faza Ananta Ghifari', 'Sava Priharta', 'Tarisha Zamita Pratama', 'Roes Davina Syarla Anggana', 'Saskia Keiko Denny Tabina', 'Darren Antolis', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNIK PERMINYAKAN (HMTM "PATRA")',
    image: '/LogoHMPS/HMTM.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Adiib Fathoni Arfi', 'Puji Nurhidayah', 'Muhammad Rizqi Ash Shiddiq', 'Syahmi Dhiyaul Muttaqin', 'Jovita Vala Maritza Maharani', 'Alda Aulia', 'Puji Nurhidayah', 'Prima Aulia Azka', 'Savana Nazwa Putri Waloejo'],
      },
      {
        sportName: 'Basket',
        players: ['Reihan Mohammad Erizal', 'Jeraldo L. H. Manulang', 'Adam Adrian Novaldino', 'Immanuel saul M. S.', 'Ghifari Handzalah Suardini', 'Pascal Timotius Sianturi', 'Abiyyu Ramadhan', 'Muhammad Tegar Dewantara', 'Gabriel Chris Palanza Sihotang', 'Kenny Samuel Wattimena', 'Evan Timothy Narwastu', 'Jonathan Denen', 'Nafidz Rayyan', 'Raditya Pangestu', 'M. Misbachurridho Widhayaka', 'Puji Nurhidayah', 'Asri Permatasari Sirait', 'Ghayatrie Arienda Poetri Bharma', 'Audrey Hillary Tamba', 'Arini Taqiyyah', 'Felda Tsana', 'Rainy Larasati', 'Ireine Tri Agustin', 'Selisa Kristi Ardianti', 'Jovita Vala Maritza Maharani'],
      },
      {
        sportName: 'Catur',
        players: ['Devina Junus', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Muhammad Albima Prasetyo', 'Ahmad Zacky Dirgantara', 'Barran Rasyaddiva Maulana', 'M. Ravandra Nauvaldo', 'Farel Aryaputra Fadhilah', 'Dzaky Armizan', 'Darrel Immanuel Hermawan', 'Ibrahim Musa', 'Al Farrel Putra Ramadhani', 'Adit Ghazi Algafari', 'Adrian Benedik', 'I Gusti Ngurah Wira Buana', 'Maulida Rif’at Dini', 'Jovita Vala Maritza Maharani', 'Syakira Zahra Nuraisya', 'Ivy Josephine Tuati', 'Maura Salsabilla', 'Savana Nazwa Putri Waloejo', 'Ireine Tri Agustin', 'Puji Nurhidayah', 'Nasywa Afiqah Zahra', 'Leizahra Anggun', 'Dinda Amelia', 'Putri Natai Chiyadana'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['David Juan Saputra', 'I Nyoman Maximilian Bhuana Paksi', 'Naufal ‘Athallah Fahrezi', 'Ibrahim Musa', 'Rizqy Masdarul Haq', 'Akhtar Fikri Patria', 'Rido Marpaho Damanik', 'Rayhan Andrasakti Rahmatulloh', 'Muhamad Noufal Fawwaz Hakim', 'Jiro Adika Faruq'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA TEKNOLOGI PASCAPANEN (HMPP "VADRA")',
    image: '/LogoHMPS/HMPP.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'IKATAN MAHASISWA ARSITEKTUR-GUNADHARMA (IMA-G)',
    image: '/LogoHMPS/IMA_G.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Farhatan Fajri Soblia', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Michaelangelo Zennino Octova', 'Melinda Debora', 'Reynaldo Christofer', 'Galih Fatihah Ali', 'Anggi Mutiara Rosyada', 'Meisya Limartha', 'Mohammad Dikla Farreli', 'Fransisca Lyanfenita Hadiono', 'Reigi Nur Fadilah'],
      },
      {
        sportName: 'Basket',
        players: ['Dzulfaqar Abdul Malik', 'Darel Rabbani Hidayat', 'Bernardino Jason Suprapto', 'Alwi Husein', 'Lustansyah Arya Perdana', 'Muhammad Syarief Nur Hakim', 'Muhamad Arkan', 'Yanoah Eldad Arasi', 'Gerardy Greegorius', 'Reynara Evan Verdana Gultom', 'Aqil Arsyad Salim', 'Michaelangelo Zennino Octova', 'I Gusti Ayu Alyssa Widiamanda', 'Stacia Aurielia Teoh', 'Meliana Qurratuaini Afifi', 'Shiftaufa Faaizalthaf', 'Yusrina Izzati', 'Meisya Limartha', 'Kalyca Nathania Zahra', 'Alifiari Ihsania Darmawan', 'Shofwa Khairunnisa', 'Gaizka Cika M Sunartoputri', 'Nayla Rafa Fathinah'],
      },
      {
        sportName: 'Catur',
        players: ['Ignacio Kevin Alberiann', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Theodore Arnold Simarmata', 'Bayu Dirgantara', 'Alwi Husein', 'Rifqi Zuhdii Fayyadh', 'Mohammad Dikla Farreli', 'Adam Aqil', 'Lustansyah Arya Perdana', 'Muhammad Fathir Rokhan', 'Muhammad Dhafin Taufiqurrahman', 'Reynara Evan Verdana Gultom', 'Hizkia Rabani Yusuf', 'Michaelangelo'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'IKATAN MAHASISWA DESAIN INTERIOR (IMDI)',
    image: '/LogoHMPS/.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'IKATAN MAHASISWA GEODESI (IMG)',
    image: '/LogoHMPS/IMG.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Handriza Riskha', 'Rifa Ghania Ramadiani Rusyana', 'Nathaniel Rafael Hutabarat', 'Rasya Salsabila Putri Rahadian', 'Najwa Maharani', 'Ravsa Novian Ramdhani', 'Nur Fadilah Muktiningsih', 'Dipo Damarjati', 'M. Nabil Alfagani', 'Rafi Dwi Nugroho'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Muhammad Ghefary', 'Sulthan Azhar Irawan', 'Andhika Ariesta ', 'Fahrul Rozi Subakti', 'Roqi Abdulhaq ', 'Raju Imam Syahanafi', 'Ravsa Novian Ramdhani', 'Bintang Dwi Gustianto', 'M. Nabil Alfagani', 'Anggito Nugraha', 'Muhammad Daffa Pahlevi Hernowo', 'Gede Radheya  Alkantara', 'Jack', 'Handriza Riskha', 'Muhammad Aqeela Ihzra Ghazali'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'IKATAN MAHASISWA METALURGI (IMMG)',
    image: '/LogoHMPS/IMMG.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Muhammad Ilham Saripul Milah', 'Muhammad Hilmy Hawari', 'Gienna Oceani Prasetyo', 'Khairunnisa Dwi Hapsari', 'Rivka Medina Andari', 'Mia Nur Wijayanti', 'Muhammad Farrel Arista', 'Wirya Dewantoro Sihombing', 'Hamdan Syukran', 'Nelson Arthur'],
      },
      {
        sportName: 'Badminton',
        players: ['M. Faishal Syamsuddin', 'Nathanael Arga Wilona Samosir', 'Arif Jaya Rizal', 'I Nyoman Yudhi Pradnyana', 'Firza Alfarisi Nasution', 'Winda Amelia Putri', 'Hanna Humaira', 'Carolin Nata', 'Aisha Raudhatul Jannah', 'Nisrina Aliyah Sikarini'],
      },
      {
        sportName: 'Basket',
        players: ['Revio Seviano Sasmito', 'Raihan Filardi Malano', 'Alexander Bramastra Haryanto', 'Gideon Pambudi Laksono', 'Danan Muhammad Rasyid', 'Muhammad Hilmy Hawari', 'Arkan Khalis Boer', 'Nelson Arthur', 'Raka Gusti', 'Fairuz Aqila Sevemestyago', 'Muhamad Rakha Rahmatullah', 'Muhammad Daffa Adrian'],
      },
      {
        sportName: 'Catur',
        players: ['Muhammad Farrel Adivia Suryadi', 'Reno Rizkiadi', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Ardaya Maulana Farizka', 'Muhammad Farhan Akbari', 'Fraditya Balfis Abdilla', 'Panya Magasankappa Wongso', 'Abdurrahman Harits Abqary', 'Olivero Dylan Januarta', 'Arjuna Putra Prakoso', 'Rayhan Faiz Atmaja', 'Muhammad Naufal Musaddad', 'Muhammad Naufal Alfarisy', 'Afla Hadzani Ahmad', 'Wafiy Addin Rildova'],
      },
      {
        sportName: 'Renang',
        players: ['Gienna Oceani Prasetyo', 'Carissa Anindya Putri Irlandi', 'Julian Ikhlas Ikhtiar', 'Thaufik Widjaya', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Muhammad Hilmy Hawari', 'Kevin Ariya Mudita Sumarto', 'Muhammad Fathan Juniarta', 'Hanna Humaira', 'Atikah Salsabila Azzahra', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Argya Syachlendra', 'Fraditya Balfis Abdillah', 'Panya Magasankappa Wongso', 'Zaidan Ayyubi Biyan', 'Thubagus Ahmad Mahanata', 'Danan Muhammad Rasyid', 'Alexander Bramastra Haryanto', 'Nur Bintang Farhan', 'Daud Mustofa Munief', 'Julian Ikhlas Ikhtiar', 'Putra Sianipar', 'Muhammad Naufal Musaddad'],
      },
    ],
  },
  { 
    name: 'IKATAN MAHASISWA TELEKOMUNIKASI (IMT "SIGNUM")',
    image: '/LogoHMPS/IMT.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Kresna Harun Sanera', 'Florean Luthfita Maharani', 'Ikbar Alif Sofian', 'Fawwazti Rasendria', 'Wisnu Duoglide Wibowo', 'Muhammad Amiruddin Rasyid', 'Hirzy Fakhriadh Ardika Harnedi', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Helmi Mauludi', 'Faiq Fayyadil Rahman', 'Muhammad Rakha Saidina', 'Abdurrahman Yusuf', 'Naira Fadhilah Putri Dyanti', 'Naisya Sizzarra Rarasdewi', 'Yasinta Hutri Salamanang', 'Bellarmina Viasca', 'Hanan Ainayya Ramadina'],
      },
      {
        sportName: 'Basket',
        players: ['Muhammad Fazza Ihza', 'T. Kenzie Revano Azriel I', 'Komang Maesa Dithanugraha', 'Randy Xavier Haryanto', 'Muhammad Rayyan Daud', 'Muhammad Saka Rasendriya', 'Mohammad Thaqif Abyan', 'Nyoman Nayaka Arkana', 'Zhafar Umar', 'Muhammad Farras Razin', 'Syauqi Armand'],
      },
      {
        sportName: 'Catur',
        players: ['Yakobus Natanael P Sirait', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Abdurrahman Yusuf', 'Ali Ridho', 'Daffa Putra Setiawan', 'Muhammad Fadhil Rafah', 'Faiq Fayyadil Rahman', 'Muhammad Farras Razin', 'Haidar Rafli Octavio Ramadhan', 'Ibrahim Abdullah Azzam', 'Komang Maesa Dithanugraha', 'Sultham Miftahul Ulum', 'Yeremias Mangu', 'Jeremy Oscar H Tambunan', 'Ardell Nurahim', 'Syauqi Armand'],
      },
      {
        sportName: 'Renang',
        players: ['Yasinta Hutri Salamanang', 'Naisya Sizzarra Rarasdewi', 'Muhara Damarjati Isnawan', 'Teuku Kenzie Revano Azriel I', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'IKATAN PEMUDA PEMUDI DESAIN GRAFIS (IPPDIG)',
    image: '/LogoHMPS/.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'INDUSTRIAL DESIGN STUDENT SOCIETY (INDDES)',
    image: '/LogoHMPS/.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'KELUARGA MAHASISWA INFRASTRUKTUR LINGKUNGAN (KMIL)',
    image: '/LogoHMPS/KMIL.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  { 
    name: 'KELUARGA MAHASISWA MANAJEMEN (KMM)',
    image: '/LogoHMPS/KMM.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Bagas Arya Praptono', 'Grace Nainggolan', 'Candra Wijaya Rahman', 'Timotius Wiarda Santoso', 'Alya Fitria', 'Maximilian Yoga Ananta W', 'Reynard Abner', 'Ivana Theodora Purba S.', 'Asyifa Dinda'],
      },
      {
        sportName: 'Basket',
        players: ['Dinda Rafitri Dhua Aniva', 'Michelle Angelique Yogatama', 'Sabrina Anandini', 'Adira Rachma', 'Samantha Felicia Chandra', 'Putri Adiningtyas Baskoro', 'Miranda Ame', 'Alivia H', 'Noor Raisya', 'Ono Hitomi Aulia', 'Albert Christian Fo', 'Agatbe Thymoty', 'Christian Bernhardt', 'Muhammad Alfath Hakim', 'Bagas Arya Praptono', 'Jiro Attalah Bangsawan', 'Roofido Zahran H', 'Ahmad Wildan Aryana', 'Abdurrauf Mujahid Robbani', 'Sirkhan Davidson', 'Hakim Faizul Haq Syahnufi', 'Kaisar Althaf Emir'],
      },
      {
        sportName: 'Catur',
        players: ['Fatin Fareldi', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Putri Adiningtyas Baskoro', 'Gadara Amalia Shaula', 'Teofanny Santa Nauli Siahaan', 'Shafara Amanah Indrawan', 'Maheswari Waranggani Arkana', 'Alya Taqiyya Safi', 'Keisha Amalia Rahmadini', 'Nisrina Wulan Kusuma', 'Kezia Daviana Putri L. R.', 'Calista Rachel Nathania', 'Sabrina Anandini', 'Shavirra Excel Firmandya', 'Rafli Shiddiq Rabbani', 'Naufal Khairata Rizal', 'Leonardo Delvino', 'Candra Wijaya Rahman', 'Reynard Abner', 'Sirkhan Davidson', 'Timotius Wiarda', 'Rakha Perwira Dirgantara', 'Albert Christian Fo', 'Anatole Lopion', 'Ramijar Arakisani', 'Muhammad Attala Natanegara', 'Philip Lavian', 'Thomas Blok'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Dio Hari Syahputra', 'Candra Wijaya Rahman', 'Yogi Chegovara Pratama', 'Kendra Rasyidnaz Hadidharma', 'Victor Ringuedé', 'Agatbe Thymoty', 'Mario Keita Adika', 'Adi Ahmad Hidayat', 'Bogdan Maier', 'Naufal Khairata Rizal', 'Maximilian Yoga Ananta W', 'Muhammad Fadhil'],
      },
    ],
  },
  { 
    name: 'KELUARGA MAHASISWA TEKNIK INDUSTRI (MTI)',
    image: '/LogoHMPS/MTI.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Muhammad Rigel Alhuda', 'Theopillus M Christianto ', 'Annisa Putri', 'Joylina Metta', 'Rozan Maulana Amin', 'Abirizar Daud', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Btari Aivena', 'Tere', 'Finca', 'Annisa', 'Ixora', 'Nova', 'Jovin', 'Athar', 'Alfred', 'Elios'],
      },
      {
        sportName: 'Basket',
        players: ['Syaila Manda', 'Keisha Ayu Sudiro', 'Finjri Rasyika', 'Victori Natasya', 'Carrisa Raynadhira', 'Aalia Khairunnisa Primaputri', 'Annisa Sofianis', 'Alyda Chandra Khallisa', 'Raddien Amadia', 'Gracia Valentine', 'Muhammad Farras', 'Fadhlan Hilmi Shafiyyudin', 'Reyza Putra Prasetya', 'Owen Salomo', 'Moses Ivan Marteric Marpaung', 'Vincentius Vercellino T', 'Zidane Haikal Rezky', 'Muhammad Raqi Fadhillah', 'Jason Aji', 'Keith Aurelio Saragih', 'Arsyad Fathurrahman', 'Alif Rizqullah Zuhayr Hilmi', 'Chandramauli Isaac', 'Azriel Alfareza', 'Syaila Manda', 'Keisha Ayu Sudiro', 'Finjri Rasyika', 'Victori Natasya', 'Carrisa Raynadhira', 'Aalia Khairunnisa Primaputri', 'Annisa Sofianis', 'Alyda Chandra Khallisa', 'Raddien Amadia', 'Gracia Valentine'],
      },
      {
        sportName: 'Catur',
        players: ['Muhammad Abdul Ghaffar', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Farros Xavier Fayyadh', 'Abbie Massie Hutagalung', 'Jonathan Quesera Deva Leuweheq', 'M Kevin Sultantya Surya Jaya', 'M Abdul Ghaffar Baihaqi', 'Ohanprada Hebrizky Sitorus', 'Nathanael Putra Rahardja', 'Alexander Vito A N', 'Zachrin Afian', 'Farrel Rasyad Darmawan', 'Akmal Hakkm', 'Josh Immanuel Turey Purba', 'Fatih Rizqi Khairi', 'Akmal Ramadhan', 'Kenley Irawan'],
      },
      {
        sportName: 'Renang',
        players: ['Ghaffar', 'Rafly Akbar', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Muhammad Fatih Aydin', 'Aurek Kaisarama Patinovka', 'Fatih Rizqi', 'Wilfred  Ariel', 'Btari Aivena', 'Victory Natasha', 'Aalia Khairunnisa','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Febthree Shafrut Qindil Azka', 'Jamaludin Ahmad', 'Mahabbah Azzaky Naufal Toti', 'Muhammad Raditya Tri Atmaja', 'Muhammad Naufal Regga Reviadi', 'Ryan Rendi Agatha Silalahi', 'Rizqi khoirul Amilin', 'Farros Xavier Fayyadh', 'Hilarius Febrianto Sidabutar', 'Ohanprada Hebrizky Sitorus', 'Ghani Syahputra'],
      },
    ],
  },
  {
    name: 'KELUARGA MAHASISWA TEKNIK KELAUTAN (KMKL)',
    image: '/LogoHMPS/KMKL.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Alviandry Meirizky', 'Yurri Yurnalis Yusra', 'Muhammad Daffa Kadiman', 'Hafizh Abdillah B', 'Wildan Fandya Ar Rofii', 'Fillya Mayvita Alamsyah', 'Rifa Nahda Hawari', 'Rahina Ascafya Nur Aulia'],
      },
      {
        sportName: 'Basket',
        players: ['Dionysius B.P. Sihombing', 'Nabiel Putra S.', 'Dama Fauzan Azharya', 'Bryan Evan Tanautama', 'Yudha Anindya Naufalrauf Jatmika', 'Riko Firdaus', 'Audric Althaf Aldjais', 'M. Raeinner Khairan Shah', 'Raden Fachry Rukanda', 'Wildan Fandya Ar Rofii', 'Yurri Yurnalis Yusra', 'Luthfi Hibatullah Andri', 'Steven Sanjaya Setiadi', 'Gaberaja Samuel R.S', 'M. Raihan Insyan Shidqi Maalk'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Firhad Danu Winata', 'Dhafin Raziq Adnan', 'Aditya Rahman', 'Muhammad Ikhsan Fadillah', 'Aulia Zuhdi Makarim Pohan', 'Bima Seta Wicaksana', 'Dama Fauzan Azharya', 'Audric Samuel Wijaya Manik', 'Nugroho Wisnu Mukti', 'Bagus Irfan Faizin', 'Adida Siva Willyandi', 'Yudha Anindya Naufalrauf Jatmika', 'Tauvan Zayyan Al Wazdi', 'Hilmy Taqiyuddin', 'Firmansyah'],
      },
      {
        sportName: 'Renang',
        players: ['Anastasya Br. Barus', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Muhammad Rafly Putra Pratama', 'Muhammad Bramantya Azel M.', 'Fillya Mayvita Alamsyah', 'Florine Ardista Tirtana', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  { 
    name: 'KELUARGA MAHASISWA TEKNIK PENERBANGAN (KMPN)',
    image: '/LogoHMPS/KMPN.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Kennard', 'Farrel Kent Kuntadiharja', 'Brenda Sintia', 'Rachel Elga Elisabeth', 'Adam Rasendriya Dainswara', 'Kaysa', 'Muthia Azmi Lubis', 'Ahmad Zahid Taihitu', 'Edrick Brooklyn Pangestu', 'Dhafin Anshar Prisetya'],
      },
      {
        sportName: 'Badminton',
        players: ['Naufal Husna Risqulloh', 'Jovian Oliver Mallo Pasaribu', 'Pandya Indra Chayani', 'Farriq Nararia Ramadhan', 'Mereditha Wijaya', 'Hitado Managam Sitorus', 'Rachel Elga Elisabeth', 'Rizkya Tia Rachmandita', 'Andreas Djohan'],
      },
      {
        sportName: 'Basket',
        players: ['Afreen A Farouq', 'Bevan Bintang S', 'Zevincent Q', 'Andreas Djohan', 'Nigel Rafli A', 'Agnelio D Jason W', 'Edrick Brooklyn', 'Kevin A Djawa', 'Adrian Hafizh', 'Jeffrey Sirait', 'Fadly Afif', 'Genio Wahyu A S', 'Aldo Febriani', 'Aldrin Sean', 'Dhafa Aulia'],
      },
      {
        sportName: 'Catur',
        players: ['Azfa', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Pandya Indra Chayani', 'Ranisa Azmi Desnita', 'Wana Putri Nusantara', 'Syifa Myda Pramudita', 'Naftali Des Amarta', 'Adhifa Pramaswari', 'Aiska Vairana', 'Aisyah Dwi Karina', 'Diva Nur Ramadhani', 'Keneisha Rifqa Rahmania Lubis', 'Muhammad Soulthan Azfa Putra Radityo', 'Adrian Hafizh', 'Naufal Abiyyu Efendi', 'Joey Karisma Maneng Mangallo', 'Muhammad Aryasatya', 'Jonathan Abigail Sohahau Zebua', 'Ahmad Zahid Taihitu', 'Muhammad Iqbal Hafizhan', 'Joshua', 'Naufal Husna Risqulloh', 'Kevin Abednego Djawa', 'Muhammad Kemal Aulia Sutadian', 'Andhika Prayoga Tama', 'Muhammad Nafi Prasetya'],
      },
      {
        sportName: 'Renang',
        players: ['Qinthary Syifanabi’ilah Lovely Muakil', 'Christo Kinarta Purba', 'Caka Bagas Khairi', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Ahmad Dzakwaan Haniif Herefa', 'Rahmana Tri Lailafala', 'Hotman Jhonson Alexander Limbong', 'Adhifa Pramaswari', 'Ranisa Azmi Desnita', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Hitado Managam Sitorus', 'Aafreen Al Farouq', 'Dhani Putra Kurniawan', 'Jovian Oliver Mallo Pasaribu', 'Farid Abdul Aziz', 'Hotman Jhonson Alexander Limbong', 'Raden Mas Mufid Suryo Ardyanyo', 'Muhammad Nuril Akbar', 'Kevin Abednego Djawa', 'Jean Matthew Setiabekti', 'Joseph Amadeus G.L Tobing', 'Marchel Sahat Ganda Simangunsong'],
      },
    ],
  },
  { 
    name: 'KELUARGA MAHASISWA SENI RUPA (KMSR)',
    image: '/LogoHMPS/KMSR.png',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Anindita Putri', 'Richard Tjahjadi', 'Muhammad Isra Abyan Syah', 'Nafis Jauhar', 'Khaula Kanza', 'Amanda Zalfa', 'Bernadin Mascha Yuwono', 'Andhika Ramadhan'],
      },
      {
        sportName: 'Basket',
        players: ['Maria P. Michelle Nifanngelyau', '⁠Syaharani', 'Fatimah Inayah', 'Aura Zahra Ramadhina', 'Azza Maretha Nigandiva', 'Benedikta Kinansih Puteri Nugroho', 'Rosalinda Mourantes Saragih', 'Rezika Rayya', 'Khayira Anantya', 'Jasmin', '⁠Shazia Quamila', 'Aileen', 'Firsty Nandiati', 'Fakheera Zhillan Ainan', 'Ega Anargya', 'Devandra D. Adi', 'Adham Haekal R.', 'Delvin Nazzala R.', 'M. Raafiaska Aji', 'M. Andhika Bagaskara E.', 'Rakha Danendra R.', 'Faaris Muzhaffar', 'M. Azka Arkananta', 'Adil Muhammad', 'Aryaditya Yehuda P.', 'Darryl Sulthan', 'Musthafa Al Mukhri', 'Isra Abyan Syah'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['MAULANA VAJAR GEMILANG', 'DELVIN NAZZALA R', 'GUIDO OGILVY DWANDRA', 'DIMAS STEFANO', 'RAKHA DANENDRA ROFIQ', 'IKHLAS ADITYA', 'ADHAM HAEKAL RIZKI', 'FAZA MUHAMMAD DINAN', 'AHMAD SYAUQI FIRDAUS', 'FATRIAKHA VISNU DARMA NUSADU', 'AKSAL FIDIYAN RAMADHAN', 'MUHAMMAD ISRA ABYAN SYAH', 'MUHAMMAD RAIHAN ADZIKRI', 'MUHAMMAD IRFAN HAKIM', 'ARYA PUTRA PRADANA', 'ADIL MUHAMMAD', 'SAMUEL NAINGGOLAN', 'MOCHAMAD FACHRUDIN', 'DIO VITTO NAMORA', 'DAFFA BARIQ ALWAFI', 'MUHAMMAD SALMAN ALFATH', 'MUHAMMAD RAZAAN SYARIF'],
      },
      {
        sportName: 'Renang',
        players: ['Diandra Lamees', 'Delvin Nazzala R.', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Aryadipa Rizqi Yudhistira', 'Nicholas Yogaswara', 'Samuel Theodorus', 'Muhammad Ridho Kusworo', 'Delvin Nazzala Rozan', 'Mochamad Fachrudin', 'Maulana Vajar Gemilang', 'Adil Muhammad', 'Dimas Stefano', 'Samuel Ciaves'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA KRIYA TEKSTIL DAN KERAMIK (TERIKAT)',
    image: '.svg',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'VISUAL ART STUDENT AGGREGATE (VASA)',
    image: '.svg',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
];
