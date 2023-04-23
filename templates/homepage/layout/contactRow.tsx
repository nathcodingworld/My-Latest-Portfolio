

import style from '@styles/layout.module.scss'

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