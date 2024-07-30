import logoGoogle from './imgs/logo-google.svg'
import style from './Content.module.css'

function LogoGoogle() {
    return (
        <img src={logoGoogle} className={style.alignCenter + ' ' + style.logoGogle + ' ' + style.gapInferior} ></img>
    )
}

export default LogoGoogle