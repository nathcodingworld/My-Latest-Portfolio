

import style from '@styles/layout.module.scss'

interface aboutRowType {
    children: React.ReactNode;
    content: boolean;
}

export default function AboutRow({children, content}: aboutRowType) { 
    return (
    <div className={style.AboutRow}>
        <div>{!content && children}</div>
        <div>{content && children}</div>
    </div>
    )
}