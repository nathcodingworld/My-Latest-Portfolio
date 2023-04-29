import style from '@styles/Body.module.scss'

export default function ContactDetail() {
    return (
        <div className={style.ContactDetail}>
            <h1>Contact Me</h1>
            <p>Thank you for taking the time to visit my website. If you have any questions or would like to discuss a project, please feel free to contact me.</p>
            <ul>
                <li>Email:  Nathaniel.1stacc@gmail.com</li>
                <li>Phone:  09770291126</li>
            </ul>
            <button>Dowload CV</button>
        </div>
    )
}