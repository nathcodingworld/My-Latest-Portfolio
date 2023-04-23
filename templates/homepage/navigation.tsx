
import Image from 'next/image' 
import Logo from '@assets/nathlogo.png' 
import NavigationLinks from './components/navigationLinks'
import style from '@styles/components.module.scss'

export default function Navigation() {
    return (
        <div className={style.navigation}>
            <Image src={Logo} alt="nath logo" />
            <NavigationLinks />
        </div>
    )
}