import { Noto_Serif_Hebrew } from "next/font/google"
import style from "@styles/header.module.scss"

const font = Noto_Serif_Hebrew({ subsets: ['hebrew'], weight:"400" })

export default function HeadTitle() {
    return (
        <div className={style.headTitle}>
            <h4 style={font.style}>Full Stack Developer</h4>
            <h1 style={font.style}>Hi, I'am <span>Nathaniel</span></h1>
            <h3 style={font.style}>From The Philippines</h3>
        </div>
    )
}