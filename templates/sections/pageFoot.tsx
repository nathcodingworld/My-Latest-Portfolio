import style from '@styles/footer.module.scss'  
import Image from 'next/image'
import photo from '@assets/nathlogo.png' 
import facebook from '@assets/facebook.png' 
import upwork from '@assets/upwork.png' 
import linkin from '@assets/linkin.png' 
import github from '@assets/github.png' 
import { IParallax } from '@react-spring/parallax'
import { RefObject } from 'react'

interface NavLinkType {
    paralax: RefObject<IParallax>
}

export default function PageFoot({paralax}:NavLinkType) {
    const ScrollTo = (to:number) => () => {
        paralax.current?.scrollTo(to)
    }
    return (
        <footer className={style.Footer}>
            <div className={style.FooterNavs}>
                <div>
                    <div>
                        <Image src={photo} alt='logo' />
                        <div className={style.FooterSocial}>
                            <a href="https://github.com/nathcodingworld/">
                                <Image src={github} alt='github'/>
                            </a>
                            <a href="https://web.facebook.com/nathmath07pesos/">
                                <Image src={facebook} alt='facebook'/> 
                            </a>
                            <a href="https://www.linkedin.com/in/nathaniel-morales-73265424a/">
                                <Image src={linkin} alt='linkedIn'/> 
                            </a>
                            <a href="https://upwork.com">
                                <Image src={upwork} alt='upwork'/> 
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className={style.FooterLinks}>
                            <a href="#home" onClick={ScrollTo(0)}>Home</a>
                            <a href="#about" onClick={ScrollTo(1)}>About</a>
                            <a href="#philosophy" onClick={ScrollTo(1.35)}>Philosophy</a>
                        </div>
                        <div className={style.FooterLinks}>
                            <a href="#service" onClick={ScrollTo(2.9)}>Service</a>
                            <a href="#works" onClick={ScrollTo(2.9)}>Works</a>
                            <a href="#contact" onClick={ScrollTo(5.2)}>Contact</a>
                        </div>
                        <div className={style.FooterLinks}>
                            <a href="#blogs">Blogs</a>
                            <a href="#refference" onClick={ScrollTo(4.2)}>Refferences</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.FooterShoe}>
                <p>© Nathaniel 2023</p>
            </div>
        </footer>
    )
}