import "../assets/css/AboutPages.css";
import senja1 from "../assets/images/senja1.jpg";

const AboutPages = () => {
  return (
    <div id="about" className="about-wrapper">
      <div className="about-left">
        <img className="senja1" src={senja1} alt="Foto Senja" />
      </div>

      <div className="about-right">
        <p className="about-who" style={{fontWeight:"bold"}}>Who am I</p>
        <h1 className="aboutme">
          HELLO <span className="aboutme1"></span>
        </h1>
        <p className="texabout">
          Halo! Nama saya Senja Aprilla Handrina Setia. Saya seorang mahasiswa di Universitas Satya Terra Bhinneka jurusan Informatika. Saya memiliki hobi membaca novel dan menonton film.
        </p>
        <p className="texabout">
          Saya tertarik pada dunia teknologi dan ingin memperdalam kemampuan saya di bidang pemrograman serta UI/UX. Saya percaya bahwa desain yang baik akan meningkatkan kenyamanan pengguna.
        </p>
      </div>
    </div>
  );
};

export default AboutPages;
