import { Splide, SplideSlide } from '@splidejs/react-splide'
import style from '@styles/About.module.scss'
import { Noto_Serif_Hebrew } from 'next/font/google'
import { useRef } from 'react'
import '@splidejs/react-splide/css';
const font = Noto_Serif_Hebrew({ subsets: ['hebrew'], weight:"400" })


export default function AboutDetail() {
    const skill = useRef<any>()
    const experience = useRef<any>()
    const education = useRef<any>()
    const splideref = useRef<any>()
    const clickHandler = (ref:any) => () => {
        skill.current.style.width = '0'
        experience.current.style.width = '0'
        education.current.style.width = '0'
        if(ref == 'skill') {
            skill.current.style.width = '35px'
            splideref.current.splide.go(0) 
        } else if(ref == 'exp') {
            experience.current.style.width = '35px' 
            splideref.current.splide.go(1)
        } else {
            education.current.style.width = '35px'
            splideref.current.splide.go(2)
        } 
    }
    return (
        <div className={style.About}>
            <div className={style.AboutDetail} >
                <h2 className={font.className}>About Me</h2>
                <p className={font.className}>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                </p>
            </div>
            <div className={style.AboutBtns}>
                <button  onClick={clickHandler('skill')}>Skills<span ref={skill}></span></button>
                <button  onClick={clickHandler('exp')}>Experience<span ref={experience}></span></button>
                <button  onClick={clickHandler('edu')}>Education<span ref={education}></span></button>
            </div>
            <div className={style.AboutAditional}>
            <Splide 
            ref={splideref}
            aria-label="My Favorite Images" 
            options={{
                pagination : false,
                arrows     : false,
                cover      : true,
            }}>
                <SplideSlide>
                    <div className={style.detul}>
                        <div className={style.detli}>
                            <p>Front End</p>
                            <p>HTML,  CSS, JavaScript, Next js, React Js, Remix</p>
                        </div>
                        <div className={style.detli}>
                            <p>Back End</p>
                            <p>Node js, GraphQL, Express js, Liquid</p>
                        </div>
                        <div className={style.detli}>
                            <p>Databases</p>
                            <p>MongoDB, FireStore, </p>
                        </div>
                        <div className={style.detli}>
                            <p>CMS, E-Commerse</p>
                            <p>Shopify Theme, Shopify App, Custom Store front</p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={style.detul}>
                    <div className={style.detli}>
                        <p>June 2022  to  December 2022</p>
                        <p>Web Developer  @  SearchWorks.Ph</p>
                    </div>
                    <div className={style.detli}>
                        <p>November 2022  to  Pressent</p>
                        <p>Shopify Theme Developer  @  APPIgators LLC</p>
                    </div> 
                </div>
                </SplideSlide>
                <SplideSlide>
                <div className={style.detul}>
                    <div className={style.detli}>
                        <p>June 2013  to  April 2018</p>
                        <p>BSCE @ Our Lady of Fatima University Pampanga</p>
                    </div> 
                </div>
                </SplideSlide>
            </Splide>
            </div>
        </div>
    )
}