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
      <Parallax className={style.parcon} ref={parallax} pages={6} horizontal>
        <Page offset={0} gradient="patriot" onClick={() => scroll(1)} image={mainpatriot} >
            <div className={style.Works}> 
                <div className={style.WorksMain}> 
                    <div className={style.WorksDetail}>
                         
                        <div className={style.WorksContent}>  
                            <h3><a href="https://patriothitches.com">Patriot Hitches</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum,  ernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisic llitia deseru  exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
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
                        <p>Lorem ipsum dolor sit amet c  hic velit, officiis aspernatur assumenda conseq is deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
                        <ul>
                            <li><span>Method: &nbsp;</span><span> Responsive Website</span></li>
                            <li><span>Design and Develop by: &nbsp;</span><span> Nathaniel Morales</span></li>  
                            <li><span>Technology: &nbsp;</span><span> NextJS, React Spring, React Splide, Formik, React Fiber</span></li>
                            <li><span>Launch Date: &nbsp;</span><span> June 2023</span></li>
                            <li><span>Status: &nbsp;</span><span> Developing</span></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </Page>
        <Page offset={3} gradient="styleit" onClick={() => scroll(4)} image={styleit} >
          <div className={style.Works}> 
            <div className={style.WorksMain}>  
                <div className={style.WorksDetail}> 
                    <div className={style.WorksContent}>  
                        <h3><a href='https://styleitdaily.vercel.app'>StyleItDaily</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur  quuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
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
        <Page offset={4} gradient="estate" onClick={() => scroll(5)} image='' />
        <Page offset={5} gradient="karen" onClick={() => scroll(0)} image=''  />
      </Parallax> 
  )
}
