import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax' 
import mainpatriot from '@assets/mainpatriot.png' 
import styleit from '@assets/styleit.png'  
import neaxtimg from '@assets/neaxtimg.png' 
import mainprimitive from '@assets/mainprimitive.png' 
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
                            <ul>
                                <li><span>Method: &nbsp; Responsive Website Rebuild</span></li>
                                <li><span>Technology: &nbsp; Shopify Theme</span></li>
                                <li><span>Launch Date: &nbsp; March 2023</span></li>
                                <li><span>Status: &nbsp; Publish</span></li>
                                <li><span>Design and Develop by: &nbsp; <a href="https://appigators.com/">APPIgators LLC.</a></span></li>  
                                <li><span>Assigned Developer: &nbsp; Nathaniel Morales</span></li>  
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
                            <ul>
                                <li><span>Method: &nbsp; Responsive Website</span></li>
                                <li><span>Technology: &nbsp; Shopify Theme</span></li>
                                <li><span>Launch Date: &nbsp; July 2023</span></li>
                                <li><span>Status: &nbsp; Development</span></li>
                                <li><span>Designed and Developed by: &nbsp; <a href="https://appigators.com/">APPIgators LLC.</a></span></li> 
                                <li><span>Assigned Developer: &nbsp; Nathaniel Morales</span></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </Page>
        <Page offset={2} gradient="nath" onClick={() => scroll(3)} image=''>
          <div className={style.Works}> 
            <div className={style.WorksMain}> 
                <div className={style.WorksDetail}> 
                    <div className={style.WorksContent}>  
                        <h3>My Portfolio</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
                        <ul>
                            <li><span>Method: &nbsp; Responsive Website</span></li>
                            <li><span>Technology: &nbsp; NextJS, React Spring, React Splide, Formik, React Fiber</span></li>
                            <li><span>Launch Date: &nbsp; June 2023</span></li>
                            <li><span>Status: &nbsp; Developing</span></li>
                            <li><span>Design and Develop by: &nbsp; Nathaniel Morales</span></li>  
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
                        <ul>
                            <li><span>Method: &nbsp; Responsive Website</span></li>
                            <li><span>Technology: &nbsp; NextJS, Material UI, Framer Motion </span></li>
                            <li><span>Launch Date: &nbsp; June 2023</span></li>
                            <li><span>Status: &nbsp; Developing</span></li>
                            <li><span>Design and Develop by: &nbsp; Nathaniel Morales</span></li>  
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
