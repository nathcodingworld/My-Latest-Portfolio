import { Noto_Serif_Hebrew } from "next/font/google"
import style from "@styles/components.module.scss"

const font = Noto_Serif_Hebrew({ subsets: ['hebrew'], weight:"400" })

export default function HeadTitle() {
    return (
        <div className={style.headTitle}>
            <h4 style={font.style}>Shopify Theme Developer</h4>
            <h1 style={font.style}>Hi, I'am <span>Nathaniel</span></h1>
            <h3 style={font.style}>From Philippines</h3>
        </div>
    )
}