
import style from '@styles/Body.module.scss'
import photo from '@assets/nath.png' 
import Image from 'next/image'

export default function FullBody() {
    return (
        <div className={style.picture}>
            <div className={style.pictureBackground}>
                <Image src={photo} alt='' />
                <div></div>
            </div>
        </div>
    )
}