import lupa from './icons/lupa-search-google.svg'
import microfone from './icons/microfone.svg'
import teclado from './icons/teclado.svg'
import style from './Content.module.css'

function InputGoogle() {
    return (
        <div className={style.container + ' ' + style.gapInferior}>
            <div className={style.inputGoogle}>
                <img src={lupa} />
                <div className={style.inputGoogleIcons}>
                    <img src={teclado} />
                    <img src={microfone} />
                </div>
            </div>
            
        </div>
    )
}

export default InputGoogle