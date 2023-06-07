import {MDBFooter,MDBContainer,MDBIcon,MDBBtn} 
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../CSS/Footer.css";
import {Link} from "react-router-dom";
  
  
  const Footer = () => {
    return (
  
      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#444333' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            href='https://www.facebook.com/Agustin.arg.1994/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>
          
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            href='https://twitter.com/1994_ARG'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>
  
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"          
            href='https://www.instagram.com/Agustin.arganarz/?theme=dark'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>
  
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"  
            href='https://github.com/Agustinarganarazz'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>
  
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: 
        <Link className='text-dark' to='https://www.instagram.com/agustin.arganaraz/?theme=dark'>
          AgustinArg
        </Link>
      </div>
    </MDBFooter>
  
    )
  }
  
  export default Footer