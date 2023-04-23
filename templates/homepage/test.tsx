import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax' 
import mainpatriot from '@assets/mainpatriot.png' 
import mainprimitive from '@assets/mainprimitive.png' 
import Image from "next/image";
import style from '@styles/Body.module.scss'

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
  children?: React.ReactNode
}

const Page = ({ offset, gradient, onClick, children }: PageProps) => (
  <>  

    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={style.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick} style={{zIndex:"10"}}>
      <div className={`${style.slopeEnd} ${style[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3}>
        {children}
    </ParallaxLayer>
  </>
)

export default function Tests() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return ( 
      <Parallax className={style.parcon} ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="patriot" onClick={() => scroll(1)} >
            <div className={style.Works}> 
                <div className={style.WorksMain}>
                    <Image src={mainpatriot} alt="patriot"/>
                    <div className={style.WorksDetail}>
                        <div></div>
                        <div className={style.WorksContent}>  
                            <h3><a href="https://patriothitches.com">Patriot Hitches</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
                            <ul>
                                <li><span>Technology: &nbsp; Shopify Theme</span></li>
                                <li><span>Launch Date: &nbsp; Feb 2023</span></li>
                                <li><span>Design and Develop by: &nbsp; APPIgators LLC.</span></li>
                                <li><span>Company Website: &nbsp; <a href="https://appigators.com/">appigators.com</a></span></li>
                                <li><span>Developed By: &nbsp; Nathaniel Morales</span></li>
                                <li><span>Designed By: &nbsp;Limuel Castro</span></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
        <Page offset={1} gradient="primitive" onClick={() => scroll(2)} >
        <div className={style.Works}> 
                <div className={style.WorksMain}>
                    <Image src={mainprimitive} alt="patriot"/>
                    <div className={style.WorksDetail}>
                        <div></div>
                        <div className={style.WorksContent}>  
                            <h3><a href="https://primitivelife.com">Primitive Life</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, consectetur iure sint mollitia deserunt est hic velit, officiis aspernatur assumenda consequuntur exercitationem voluptatum perspiciatis deleniti fuga explicabo. Quod, cum?</p>
                            <ul>
                                <li><span>Technology: &nbsp; Shopify Theme</span></li>
                                <li><span>Launch Date: &nbsp; April 2023</span></li>
                                <li><span>Design and Develop by: &nbsp; APPIgators LLC.</span></li>
                                <li><span>Company Website: &nbsp; <a href="https://appigators.com/">appigators.com</a></span></li>
                                <li><span>Developed By: &nbsp; Nathaniel Morales</span></li>
                                <li><span>Designed By: &nbsp;Limuel Castro</span></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </Page>
        <Page offset={2} gradient="nath" onClick={() => scroll(0)} />
      </Parallax> 
  )
}
