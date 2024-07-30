import style from './Footer.module.css'

function Footer() {

    return (
        <div className={style.container + ' ' + style.footerFont}>
            <div className={style.borderbt}>
                <div className={style.bgCinza + ' ' + style.paddingFooter}>
                    <p className={style.textLeft}>Brasil</p>
                </div>
            </div>
            <div className={style.bgCinza + ' ' + style.footerInferior + ' ' + style.paddingFooter}>
                <ul>
                    <li>Sobre</li>
                    <li>Publicidade</li>
                    <li>Negócios</li>
                    <li>Como funciona a Pesquisa</li>
                </ul>
                <ul>
                    <li>Privacidade</li>
                    <li>Termos</li>
                    <li>Configurações</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer