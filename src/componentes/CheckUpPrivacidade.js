import safe from './icons/safe.svg'
import style from './CheckUpPrivacidade.module.css'

function CheckUpPrivacidade() {

    return (
        <div className={style.container}>
            <img src={safe} />
            <p className={style.text}>Faça o Check-up de Privacidade</p>
        </div>
    )
}

export default CheckUpPrivacidade