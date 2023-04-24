
import { RefObject } from 'react'
import { IParallax } from '@react-spring/parallax'


interface NavLinkType {
    paralax: RefObject<IParallax>
}

export default function NavigationLinks({paralax}: NavLinkType) { 
    const ScrollTo = (to:number) => () => {
        paralax.current?.scrollTo(to)
    }
    return  (
        <div >
            <a href="#home" onClick={ScrollTo(0)}>Home <span></span></a>
            <a href="#about" onClick={ScrollTo(1)} >About <span></span></a>
            <a href="#works" onClick={ScrollTo(2.9)}>Works <span></span></a> 
            <a href="#contact" onClick={ScrollTo(5.2)}>Contact <span></span></a> 
        </div>
    )
}