import menuHeader from './icons/menu-header.svg';
import fotoUsuario from './icons/foto-usuario.svg';
import styles from './MenuSuperior.module.css'

function MenuSuperior() {

    return (<div className={styles.HeaderEndAlign}>
        <ul className={styles.headerFont + ' ' + styles.headerListStyle}>
            <li>Gmail</li>
            <li>Imagens</li>
            <li><img src={menuHeader}></img></li>
            <li><img src={fotoUsuario}></img></li>
        </ul>
    </div>)
}

export default MenuSuperior