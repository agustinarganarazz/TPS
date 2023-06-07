import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';





const Footer = () => {
  return (
    <div>
   <MDBFooter className='bg-primary text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/agustin.1994.arg'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>


          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/agustin.arganaraz'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/Agustinarganarazz'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        AÑO 2023 Copyright : 
        <a className='text-white' href='https://www.instagram.com/agustin.arganaraz/'>
           Agustin Argañaraz
        </a>
      </div>
    </MDBFooter>
       
        
        
    </div>
  )
}

export default Footer