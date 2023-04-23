import { Splide, SplideSlide } from "@splidejs/react-splide";
import style from '@styles/Body.module.scss'
import { useEffect, useRef } from "react";
import patriot from '@assets/phthumb.png' 
import primitive from '@assets/pllthumb.png' 
import mainpatriot from '@assets/mainpatriot.png' 
import mainprimitive from '@assets/mainprimitive.png' 
import Image from "next/image";
import React from "react";

export default class Worksbck extends React.Component<{}> {
    mainsplide =  React.createRef<Splide>()
    thumbnailsplide = React.createRef<Splide>() 
    componentDidMount(): void  {
        if(this.mainsplide.current && this.thumbnailsplide.current && this.thumbnailsplide.current.splide) {
            this.mainsplide.current.sync(this.thumbnailsplide.current.splide)  
        }
    }
    render() {
        return (
            <div className={style.Works}>
                <h1>My Works</h1>
                <div className={style.WorksMain}>
                    <Splide 
                    ref={this.mainsplide}
                    options={{
                        type: 'fade',
                        height: 550,
                        pagination: false,
                        arrows: false,
                        cover: true,
                    }}>
                        <SplideSlide>
                            <Image src={mainpatriot} alt="patriot"/>
                            <div className={style.WorksDetail}>
                                <div>
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
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={mainprimitive} alt="patriot"/>
                            <div className={style.WorksDetail}>
                                <div>
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
                        </SplideSlide>
                    </Splide>
                </div>
                <div className={style.WorksThumbnail}>
                    <Splide 
                    ref={this.thumbnailsplide} 
                    options={{
                        rewind: true,
                        fixedWidth: 288,
                        fixedHeight: 105,
                        isNavigation: true,
                        gap: 10,
                        focus: 'center',
                        pagination: false,
                        cover: true,
                        dragMinThreshold: {
                            mouse: 4,
                            touch: 10,
                        },
                        breakpoints : {
                            640: {
                            fixedWidth  : 66,
                            fixedHeight : 38,
                            },
                        },
                    }}>
                        <SplideSlide >
                            <Image src={patriot} alt="patriot"/>
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={primitive} alt="patriot"/>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        ) 
    }
}