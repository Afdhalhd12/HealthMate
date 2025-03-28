import logo from "/public/Logo.png";

function Nav() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Health<span>Mate</span>
        </a>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#">MBI</a>
        </nav>
      </header>
    </>
  );
}

function Profile() {
  return(
  <>
    <section className="home" id="home">
    <img src={logo} className="profile" />
      <div className="home-text">
        <h1>
          Health<span>Mate</span>
        </h1>
        <p>
          HealthMate adalah platform yang membantu Anda menjaga kesehatan dan
          kebugaran Anda.
        </p>
      </div>
    </section>
  </>
  );
}


function About() {
  return (
    <>
      <div className="container" id="about">
        <img src={logo} alt="Gambar" className="image" />
        <div className="text">
          <h1 className="text">
            Health<span className="mate">Mate</span>
          </h1>
          <div className="text">
            <p>
              HealthMate adalah platform inovatif yang dirancang untuk membantu
              Anda memantau kesehatan tubuh melalui perhitungan Body Mass Index
              (BMI) atau Indeks Massa Tubuh (IMT). Dengan fitur BMI, HealthMate
              memungkinkan Anda mengetahui apakah berat badan Anda berada dalam
              kategori ideal, kurang, atau berlebih.
            </p>
            <p className="text">
              Selain sebagai alat pemantau berat badan, HealthMate juga
              berfungsi sebagai skrining awal untuk menilai potensi risiko
              kesehatan terkait berat badan. Dengan tampilan yang intuitif dan
              mudah digunakan, HealthMate membantu Anda mengambil langkah yang
              lebih baik dalam menjaga keseimbangan berat badan dan kesehatan
              secara keseluruhan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Profile />
      <About />
    </>
  );
}
