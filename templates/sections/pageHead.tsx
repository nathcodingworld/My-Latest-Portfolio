
import style from '@styles/layout.module.scss' 
import Image from 'next/image'
import photo from '@assets/nath.png' 
import HeadTitle from '../components/headTitle'
import Navigation from '../components/navigation'
import { classes } from '@scripts/utility'
import {ParallaxLayer } from '@react-spring/parallax'


export default function PageHead ( ) {  
    return(  
        <header className={style.Header} > 
            <div className={classes([style.Head, style.container])}>
                <Navigation />
                <HeadTitle />
            </div>
            <Image src={photo} alt='nathaniel' className={style.HeaderPhoto} />
        </header> 
    )
}