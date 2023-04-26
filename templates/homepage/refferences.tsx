import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import style from '@styles/Body.module.scss'
import ql from '@assets/ql.png' 
import qr from '@assets/qr.png' 
import ArrowLeft from '@assets/ArrowLeft.png'  
import ArrowRight from '@assets/ArrowRight.png' 
import robert  from '@assets/robert.png' 
import limuel  from '@assets/limuel.png' 
import Image from 'next/image'
import React from 'react'
export default class Refference extends React.Component<{}> {
    mainsplide =  React.createRef<Splide>()
    thumbnailsplide = React.createRef<Splide>() 
    componentDidMount(): void  {
        if(this.mainsplide.current && this.thumbnailsplide.current && this.thumbnailsplide.current.splide) {
            this.mainsplide.current.sync(this.thumbnailsplide.current.splide)  
        }
    }
    render() {
        return(
            <div className={style.Refference}>
                <h1>Refferences</h1>
                <div>
                    <Splide 
                        aria-label="My refferences" 
                        ref={this.mainsplide}
                        hasTrack={false}
                        options={{
                            pagination : false,  
                            cover      : true,
                        }}>
                            <SplideTrack>
                                <SplideSlide>
                                    <div className={style.RefferenceMsg}>
                                        <Image src={ql} alt="quote"/>
                                        <p>Nathaniel is one of those talented web developers that really learns a language easily without even trying. He's a master of Javascript, and he really loves working on very complicated projects.</p>
                                        <Image src={qr} alt="quote"/>
                                    </div> 
                                </SplideSlide>
                                <SplideSlide>
                                    <div className={style.RefferenceMsg}>
                                        <Image src={ql} alt="quote"/>
                                        <p>I have had the pleasure of working with Nathaniel on several projects and I have been continually impressed by his talent, dedication, and ability to learn new technologies quickly. Nathaniel's technical expertise is exceptional. He possesses a deep understanding of web development and has a keen eye for detail. He is able to deliver high-quality work under tight deadlines and is always willing to go the extra mile to ensure client satisfaction. One of Nathaniel's greatest strengths is his ability to learn new technologies quickly. He is always eager to expand his knowledge and skills, and he has a natural aptitude for picking up new concepts and tools. This makes him a valuable asset to any team and ensures that he is always up-to-date with the latest industry trends and best practices. Overall, I can confidently say that Nathaniel is an excellent web developer and a pleasure to work with. I highly recommend him for any web development projects or roles that require a talented, dedicated, and fast-learning individual.</p>
                                        <Image src={qr} alt="quote"/>
                                    </div> 
                                </SplideSlide>
                            </SplideTrack>
                            <div className={`splide__arrows ${style.SplideArrows}`}>
                                <button className="splide__arrow--prev">
                                    <Image src={ArrowLeft} alt='prev'></Image>
                                </button>
                                <button className="splide__arrow--next">
                                    <Image src={ArrowRight} alt='next'></Image> 
                                </button>
                            </div>
                    </Splide>
                    <Splide
                    aria-label="My refferences" 
                    ref={this.thumbnailsplide} 
                    options={{
                        pagination : false, 
                        arrows     : false, 
                        width: 450,
                        height: 400,
                        breakpoints : {
                            780: {
                            width  : '100%', 
                            height: '90%',
                            },
                        },
                        perPage: 1,
                        type: 'fade',
                    }}> 
                        <SplideSlide>
                            <div className={style.RefferenceDetail}> 
                                <Image src={limuel} alt='robert'/>
                            </div>
                        </SplideSlide> 
                        <SplideSlide >
                            <div className={style.RefferenceDetail}> 
                                <Image src={robert} alt='robert'/>
                            </div>
                        </SplideSlide>  
                    </Splide> 
                </div>
            </div>
        )
    }
}