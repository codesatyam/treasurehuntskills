import React from 'react';
import Button from '@mui/material/Button';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaHome, FaPhone, FaMailBulk ,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';
import "./Footer.css"

export default function Footer() {
  return (
    <>
       <div className="topfoot d-flex text-white justify-content-around "  style={{ backgroundColor: '#1b242f' }}>
          <div className="left ">
            <div className="location">
            <h5> <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
                <span>Gorakhpur, </span>
                <span>India-272173</span>
              </h5>
              
            </div>
            <div className="phone">
              <h5>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />{" "}
                +91 7905-562-832
              </h5>
              </div>
                <div className="email">
                  <h5>
                    <FaMailBulk
                      size={20}
                      style={{ color: "#fff", marginRight: "2rem" }}
                    />{" "}
                    satyamchaurasiya136@gmail.com
                  </h5>
                </div>
              </div>
              <div className="fo-right">
              <div>
              <h4><b>About me</b>  </h4>
                <p>Myself Satyam Chaurasiya Web developer. <br />  I enjoy learning new things and working on project.</p>
                 
              </div>
              </div>
               
        </div>
        <footer className='d-flex flex-column '>
     <MDBFooter className=' text-center text-white  ' style={{ backgroundColor: '#1b242f' }}>
       <MDBContainer className='p-4 pb-0 '>
         <section className='mb-4 mt-4'>
           <a href="https://github.com/codesatyam" target="_blank">
         <Button title='Github' className='m-2 p-3 bckcolor' variant="contained">
         <FaGithubAlt />
         </Button>
         </a>
         <a href="https://www.linkedin.com/in/satyam-chaurasiya-903039213/" target="_blank">
         <Button title='Linkedin' className='m-2 p-3 bckcolor' variant="contained" >
         <FaLinkedinIn />
         </Button>
         </a>
         <a href="https://leetcode.com/satyam58/" target="_blank">
         <Button title='Leetocde' className='m-2 p-3 bckcolor' variant="contained" >
         <svg xmlns="http://www.w3.org/2000/svg" width={15} viewBox="0 0 24 24" id="leetcode"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path><path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path><path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path></svg>
         </Button>
         </a>
         {/* <a href="https://instagram.com/prateekyadav0212?igshid=YmMyMTA2M2Y=" target="_blank">
         <Button className='m-2 p-3 bckcolor' variant="contained">
         <FaInstagram />
         </Button>
         </a> */}
         </section>
       </MDBContainer>
 
       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
         All Right Reserved 2023 © 
         <a className='text-white' href='#'>
            Webtantra, India
         </a>
       </div>
     </MDBFooter>
     </footer>
    </>
    
  );
}
