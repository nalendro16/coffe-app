import imgSrc from '../../Assets/logo technopartner.png'
import imgQR from '../../Assets/qr_code.png'
import style from './Home.module.css'

export default function Home() {
  return (
    <div className={style.home}>
      <header>
        <img src={imgSrc} alt="logo header" />
      </header>
      <div className={style.card}>
        <div className={style.sapa}>
          <p>Good Afternon,</p>
          <p>Guntur saputro</p>
        </div>
        <div className={style.cardBottom}>
          <div className={style.img}>
            <img src={imgQR} alt="example qr code" />
          </div>
          <div className={style.tulisan}>
            <p>Saldo</p> <p>Points</p>
          </div>
          <div className={style.poin}>
            <p>Rp.270.000</p>
            <p>200</p>
          </div>
        </div>
      </div>
    </div>
  )
}
