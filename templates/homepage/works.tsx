import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax' 
import mainpatriot from '@assets/mainpatriot.png' 
import styleit from '@assets/styleit.png'  
import neaxtimg from '@assets/neaxtimg.png' 
import mainprimitive from '@assets/mainprimitive.png' 
import nathport from '@assets/nathport.png' 
import Image from "next/image";
import style from '@styles/Body.module.scss' 

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
  children?: React.ReactNode
  image: any
}

const Page = ({ offset, gradient, onClick, children, image }: PageProps) => (
  <>  

    <ParallaxLayer offset={offset} speed={0.2} >
      <div className={style.WorksPrev} >
        <Image src={image} alt="bgimage"  /> 
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} style={{zIndex:"10", pointerEvents: 'none'}}>
      <div className={`${style.WorksNext} ${style[gradient]}`} onClick={onClick} style={{pointerEvents: 'auto'}} >
        <Image src={neaxtimg} alt="next"  />  
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3} >
        {children}
    </ParallaxLayer>
  </>
)

export default function Works() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return ( 
      <Parallax className={style.parcon} ref={parallax} pages={4} horizontal>
        <Page offset={0} gradient="patriot" onClick={() => scroll(1)} image={mainpatriot} >
            <div className={style.Works}> 
                <div className={style.WorksMain}> 
                    <div className={style.WorksDetail}>
                         
                        <div className={style.WorksContent}>  
                            <h3><a href="https://patriothitches.com">Patriot Hitches</a></h3>
                            <p>The rebuild of the Patriot Hitches website was a challenging project that I undertook without any prior experience using the Shopify technology. However, by reading and following the Shopify documentation and with the help of my coworker developer, I was able to complete the project correctly within two months.</p>
                            <ul>
                                <li><span>Method: &nbsp;</span><span> Responsive Website Rebuild</span></li>
                                <li><span>Design and Develop by: &nbsp;</span><span> <a href="https://appigators.com/">APPIgators LLC.</a></span></li>   
                                <li><span>Technology: &nbsp;</span><span> Shopify Theme</span></li>
                                <li><span>Launch Date: &nbsp;</span><span> March 2023</span></li>
                                <li><span>Status: &nbsp;</span><span> Publish</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
        <Page offset={1} gradient="primitive" onClick={() => scroll(2)} image={mainprimitive} >
        <div className={style.Works}> 
                <div className={style.WorksMain}> 
                    <div className={style.WorksDetail}> 
                        <div className={style.WorksContent}>  
                            <h3><a href="https://primitivelife.com">Primitive Life</a></h3>
                            <p>The Primitive Life website is also being built using Shopify technology. I am creating this website from start to finish simultaneously with PatriotHitch.</p>
                            <ul>
                                <li><span>Method: &nbsp;</span><span> Responsive Website</span></li>
                                <li><span>Designed and Developed by: &nbsp;</span><span> <a href="https://appigators.com/">APPIgators LLC.</a></span></li>  
                                <li><span>Technology: &nbsp;</span><span> Shopify Theme</span></li>
                                <li><span>Launch Date: &nbsp;</span><span> July 2023</span></li>
                                <li><span>Status: &nbsp;</span><span> Development</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </Page>
        <Page offset={2} gradient="nath" onClick={() => scroll(3)} image={nathport}>
          <div className={style.Works}> 
            <div className={style.WorksMain}> 
                <div className={style.WorksDetail}> 
                    <div className={style.WorksContent}>  
                        <h3>My Portfolio</h3>
                        <p>This will be my personal website. I am planning to have blogs and a gallery, and if possible, in the future, I will add a lessons page to share my knowledge in technical skills with other developers. Currently, it is in the designing stage, and my goal for this website is to showcase all of my skills by using them in this website.</p>
                        <ul>
                            <li><span>Method: &nbsp;</span><span> Responsive Website</span></li>
                            <li><span>Design and Develop by: &nbsp;</span><span> Nathaniel Morales</span></li>  
                            <li><span>Technology: &nbsp;</span><span> NextJS, React Spring, React Splide, Formik</span></li>
                            <li><span>Launch Date: &nbsp;</span><span> June 2023</span></li>
                            <li><span>Status: &nbsp;</span><span> Developing</span></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </Page>
        <Page offset={3} gradient="styleit" onClick={() => scroll(0)} image={styleit} >
          <div className={style.Works}> 
            <div className={style.WorksMain}>  
                <div className={style.WorksDetail}> 
                    <div className={style.WorksContent}>  
                        <h3><a href='https://styleitdaily.vercel.app'>StyleItDaily</a></h3>
                        <p>This is my first e-commerce project using Next.js. It's meant for my friend's dog clothing online store, but she has been too busy to check it out. Nevertheless, I still want to finish this website just to showcase that I can create an e-commerce website using Next.js.</p>
                        <ul>
                            <li><span>Method: &nbsp;</span><span> Responsive Website</span></li>
                            <li><span>Design and Develop by: &nbsp;</span><span> Nathaniel Morales</span></li>  
                            <li><span>Technology: &nbsp;</span><span> NextJS, Material UI, Framer Motion </span></li>
                            <li><span>Launch Date: &nbsp;</span><span> June 2023</span></li>
                            <li><span>Status: &nbsp;</span><span> Developing</span></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </Page> 
      </Parallax> 
  )
}
