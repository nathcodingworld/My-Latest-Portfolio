
import style from '@styles/header.module.scss' 
import Image from 'next/image'
import photo from '@assets/nath.png' 
import HeadTitle from '../homepage/headTitle'
import Navigation from '../homepage/navigation' 
import { RefObject } from 'react'
import { IParallax } from '@react-spring/parallax'

interface PageHeadType {
    paralax: RefObject<IParallax>
}

export default function PageHead ( {paralax}: PageHeadType) {  
    return(  
        <header className={style.Header} > 
            <div className={style.Head}>
                <Navigation paralax={paralax}/>
                <HeadTitle />
            </div>
            <div>
                <Image src={photo} alt='nathaniel' className={style.HeaderPhoto} />
                <div className={style.overlay}></div>
            </div>
        </header> 
    )
}