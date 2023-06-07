import Header from "./Header";
import Footer from "./Footer";
import "../CSS/MainAbout.css";
import { useState } from "react";
import "../CSS/Foto.css" 

const MainAbout = () => {

  const [Foto,setFoto] = useState (1)



 const handleCambiar = () =>{

      if (Foto === 4)
        setFoto(1)
      else 
          setFoto(Foto+1)

}



  return (
   
    <div className="todoA">
      <Header />

      <section className="pantallaDividida">
        <div className="izq">
            <img src={`${Foto}.jpg`} alt="" className="Foto"/>
            <br />
            <br />
            <button onClick={handleCambiar} className="botonC" >Cambiar Foto</button>
         
           
        </div> 
       
       
       
        <div className="derecha">
          <p> <strong>Mi nombre es Argañaraz Agustin , TUP de la UTN-FRT,
              actualmente cuento con conocimientos como C#, SQL, HTML 5, JavaScript, Css, React.</strong>
          </p>
        </div>
      
      </section>
      <br />
      <Footer />
      
   
    </div>
  );
};

export default MainAbout;



