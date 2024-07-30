import style from './Botao.module.css'

function Botoes(props) {

    return (
        <button className={style.botao}>
            {props.text}
        </button>
    )
}

export default Botoes