
import style from "@styles/Home.module.scss"

export default function Container({children}:{children?: React.ReactNode}) { 
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}