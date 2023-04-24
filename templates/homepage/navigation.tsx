
import Image from 'next/image' 
import Logo from '@assets/nathlogo.png' 
import NavigationLinks from './components/navigationLinks'
import style from '@styles/components.module.scss'
import { RefObject } from 'react'
import { IParallax } from '@react-spring/parallax'


interface NavigationType {
    paralax: RefObject<IParallax>
}

export default function Navigation({paralax}: NavigationType) {
    return (
        <div className={style.navigation}>
            <Image src={Logo} alt="nath logo" />
            <NavigationLinks paralax={paralax} />
        </div>
    )
}