import style from '@styles/Body.module.scss'

export default function ContactDetail() {
    return (
        <div className={style.ContactDetail}>
            <h1>Contact Me</h1>
            <p>Norem ipsum dolor sit amet, consectetur adipis cing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
            <ul>
                <li>Email:  Nathaniel.1stacc@gmail.com</li>
                <li>Phone:  09770291126</li>
            </ul>
            <button>Dowload CV</button>
        </div>
    )
}