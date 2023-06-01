import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

const Main = ({alumno}) => {
  return (
    
    <div className= "cardzz">
        
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={alumno.foto} />
            <Card.Body>
            <Card.Title>{alumno.nombre}</Card.Title>
            <Card.Text>
            Hola, soy {alumno.nombre}, tengo {alumno.edad} años, estudio programacion en UTN, mi legajo es {alumno.legajo}, mi deporte favorito es {alumno.Deporte}.
            Mis celular es: {alumno.Tel} 
            </Card.Text>
            <a href={alumno.instagram} target='blank'><Button variant="primary" >Instagram</Button></a>
            
            </Card.Body>
            </Card>
    
    </div>
  )
}

export default Main