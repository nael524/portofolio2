import React from "react";
import "../assets/css/Skills.css";
import figma from "../assets/images/figma.webp";
import canva from "../assets/images/canva.webp";
import reactLogo from "../assets/images/React.webp";

const Skills = () => {
  return (
    <div id="skills" className="skills-paper-wrapper">
      <div className="skills-paper education-paper">
        <h2 className="paper-title">education</h2>
        <div className="paper-content">
          <p><strong>SD Negeri 107405</strong> <br /> 2012</p>
          <p><strong>SMP Negeri 2 Medan</strong> <br /> 2015</p>
          <p><strong>SMK Tritech Informatika Medan</strong> <br /> 2018</p>
          <p><strong>Universitas Satya Terra Bhinneka - Informatika</strong> <br /> 2022</p>

          <h4>Certifikat:</h4>
          <ul>
            <li>Typography</li>
            <li>Photo Manipulation</li>
            <li>Layout & Composition</li>
            <li>Video Editing</li>
          </ul>
        </div>
      </div>

      <div className="skills-paper experience-paper">
        <h2 className="paper-title">experience</h2>
        <div className="paper-content">
          <p><strong>Freelancer</strong> <br />2023 - Now<br />Desainer UI/UX & Frontend Developer</p>
          <p><strong>Radio Sonora 90.4 FM</strong><br />PKL sebagai penyiar dan pengelola konten siaran</p>
          <p><strong>Restoran Medan</strong><br />Waiters</p>
          <p><strong>Organisasi OSIS</strong><br />Aktif dalam organisasi sekolah</p>
          <p><strong>Satya Council</strong> <br /> 2023<br />Koordinasi acara kampus</p>

          <h4>Software:</h4>
          <div className="software-icons">
            <div className="icon-box">
              <img src={figma} alt="Figma" />
              <p>Figma</p>
            </div>
            <div className="icon-box">
              <img src={canva} alt="Canva" />
              <p>Canva</p>
            </div>
            <div className="icon-box">
              <img src={reactLogo} alt="React" />
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
