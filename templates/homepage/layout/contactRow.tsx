

import style from '@styles/section.module.scss'

interface contactRowType {
    children: React.ReactNode; 
}

export default function ContactRow({children}: contactRowType) { 
    return (
    <div className={style.ContactRow}> 
        {children}
    </div>
    )
}