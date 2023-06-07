import {Link} from "react-router-dom"
import "../CSS/Error.css"


const Error404 = () => {
  return (
    <div className="todoE">
    <img src= "https://www.hostingplus.pe/wp-content/uploads/2020/12/error404quees.jpg" alt="" className="foto" />
    <br />
    <br /><br />

    <h3 className="texto">ESTA PAGINA NO EXISTE </h3><br />
    <p className="texto">VUELVA A LA PAGINA PRINCIPAL <Link to="/">HOME</Link></p>
    <br />
    <br />
    <br />
    <br />
    
</div>
  )
}

export default Error404