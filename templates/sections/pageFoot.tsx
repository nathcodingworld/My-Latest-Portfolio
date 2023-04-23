import style from '@styles/layout.module.scss'  

export default function PageFoot() {
    return (
        <footer className={style.Footer}>
            <div className={style.FooterNavs}>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={style.FooterShoe}>
                <p>© Nathaniel 2023</p>
            </div>
        </footer>
    )
}