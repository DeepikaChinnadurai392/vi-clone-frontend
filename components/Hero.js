import { useEffect, useState } from "react";
import { FaGraduationCap, FaHandsHelping, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from "next/link";


export default function Hero() {
  const [mobile, setMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => {
    setMobile(window.innerWidth <= 768);
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);
  const buttonStyle = {
    padding: mobile ? "18px 20px" : "22px 60px", 
    fontSize: mobile ? "1rem" : "1.35rem", 
    fontWeight: '700',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    gap: '10px',
    minWidth: mobile ? "100%" : "220px" ,
    height: '60px'      
  };

  return (
    <section
  style={{
    width: "100%",
    maxWidth: "100vw",
    position: "relative",
    overflowX: "hidden",
    overflowY: "hidden",
  }}
>
     <div
  style={{
    display: "flex",
    flexDirection: mobile ? "column" : "row",
    minHeight: mobile ? "auto" : "100vh",
    width: "100%",
  }}
>
        
        <div style={{
          width: mobile ? "100%" : "65%",
          display: 'flex',
          justifyContent: mobile ? "center" : "flex-start",
          alignItems: 'center',
          padding: mobile ? "30px 20px" : "0 80px", 
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{textAlign: mobile ? "center" : "left", width: '100%', color: '#333', marginTop: mobile ? "20px" : "-50px" }}>
            
            
            <h1 style={{
              fontSize: mobile
  ? "2rem"
  : "clamp(2.8rem,5vw,4rem)",
              fontWeight: '900',
              marginBottom: '30px',
              lineHeight: '1.2',
              fontFamily: '"Poppins", sans-serif'
            }}>
              The only platform that
{!mobile && <br />}
<strong style={{ color: "#008B8B" }}>guarantees</strong>
real-world work
{!mobile && <br />}
experience across the globe
            </h1>

            
            <p style={{ fontSize: mobile ? "1.1rem" : "1.75rem", fontWeight: '500', marginBottom: '40px', color: '#666' }}>
              Shaping tomorrow’s workforce: one internship at a time
            </p>

           
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
  style={{
    display: "flex",
    flexDirection: mobile ? "column" : "row",
    gap: "20px",
  }}
>
                <Link href="https://www.virtualinternships.com/companies/" style={{ ...buttonStyle, backgroundColor: '#FF8C00', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaGraduationCap /> Company: Hire
                </Link>

                <Link href="https://www.virtualinternships.com/universities/" style={{ ...buttonStyle, backgroundColor: 'white', color: '#333', border: '2px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaHandsHelping /> Educators: Partner
                </Link>
              </div>
                <Link href="https://www.virtualinternships.com/interns/" style={{ ...buttonStyle, backgroundColor: '#008B8B', color: 'white', border: 'none', alignSelf: mobile ? "stretch" : "flex-start", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaCalendarAlt /> Interns: Apply
                </Link>
            </div>

          </div>
        </div>


        
        <div
  style={{
    width: mobile ? "100%" : "35%",
    height: mobile ? "340px" : "100vh",
    position: "relative",
    overflow: "visible",
  }}
>
          
        
          <div style={{
            position: 'absolute',
            bottom: mobile ? "60px" : "200px",
left: mobile ? "-120px" : "-110px",
width: mobile ? "320px" : "700px",
height: mobile ? "320px" : "700px",
            background: 'radial-gradient(circle at center, #008B8B 0%, #00CED1 100%)',
            borderRadius: '50%',
            zIndex: 0,
          }} />

          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 1200"
            preserveAspectRatio="xMidYMid slice"
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: mobile ? "100%" : "100%",
height: mobile ? "80%" : "100%",
              zIndex: 0,
            }}
          >
            <path
              d="M800 0 
                 C520 140 580 150 480 420 
                 C420 600 580 700 340 900 
                 C200 1020 150 1080 0 1100
                 L900 1100
                 L1000  Z"
              fill="#062b2eff"
            />
          </svg>
          
<div
  style={{
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
    zIndex: 0,
  }}
>

  <div
    style={{
      position: "absolute",
      bottom: "50px",
      width: mobile ? "180px" : "400px",
height: mobile ? "180px" : "400px",
right: mobile ? "-60px" : "-200px",
      border: "8px solid orange", 
      borderRadius: "50%",
    }}
  />

 
  <div
    style={{
      position: "absolute",
      bottom: mobile ? "220px" : "490px",
right: mobile ? "30px" : "160px",
width: mobile ? "180px" : "400px",
height: mobile ? "180px" : "400px",
      border: "8px solid orange",
      borderRadius: "50%",
    }}
  />

  
  <div
    style={{
      position: "absolute",
      bottom: mobile ? "360px" : "800px",
right: mobile ? "20px" : "-75px",
width: mobile ? "70px" : "110px",
height: mobile ? "70px" : "110px",
      border: "5px solid orange",
      borderRadius: "50%",
    }}
  />
</div>



         
          <div style={{ position: 'absolute', bottom: '0', right: '0', width: mobile ? "100%" : "88%",
height: mobile ? "90%" : "97%", zIndex: 1 }}>
            <Image
              src="/image.png"
              alt="Girl studying"
              fill
             style={{
  objectFit: "contain",
  objectPosition: mobile ? "center bottom" : "center",
}}
            />
          </div>
        </div>

      </div>
    </section>
  );
}