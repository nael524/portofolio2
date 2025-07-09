import "../assets/css/AboutPages.css";
import senja1 from "../assets/images/senja1.jpg"
  const AboutPages = () => {
  return (
    <div id="about"  >
      <div className="aboutme">
        Hello <span className="aboutme1">Who am i</span>
        <p className="texabout">
          Halo! Nama saya senja aprilla handrina setia ,saya seorang mahasiswa universitas satya terra bhinneka dan jurusan yang saya pilih adalah informatika ,saya memiliki hobi membaca novel dan menonton filim 
        </p>
        <div>
          <img className="senja1" src={senja1} />
        </div>
      </div>
    </div>
  );
};
export default AboutPages;
