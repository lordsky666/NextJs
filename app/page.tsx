import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <div className={montserrat.className}>
      <div className="Top">
        <Image
          src="/Foto/image_1.png"
          alt="Logo Federației"
          width={100}
          height={100}
        />

        <div className="Top-menu">
          <a href="#home">Acasă</a>
          <a href="#champions">Campionate</a>
          <a href="#news">Noutăți</a>
        </div>
      </div>

      <div className="Main_Content">
      <Image
      src="/Foto/wea.jpg"
      alt="Poza de background"  
      layout="responsive"
      width={16}
      height={9}
      />
      </div>
    </div>
  );
}