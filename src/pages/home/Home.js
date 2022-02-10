import imgSrc from '../../Assets/logo technopartner.png'
import imgQR from '../../Assets/qr_code.png'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import style from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'

export default function Home() {
  const navigate = useNavigate()

  const { pending, error, data } = useFetch('https://soal.staging.id/api/home')

  console.log(data && data.result)

  useEffect(() => {
    async function check() {
      if (error) {
        await navigate('/login')
      }
    }
    check()
  }, [navigate, error])

  return (
    <div className={style.home}>
      <header>
        <img src={imgSrc} alt="logo header" />
      </header>
      {pending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div className={style.card}>
          <div className={style.sapa}>
            <p>{data.result.greeting},</p>
            <p>{data.result.name}</p>
          </div>
          <div className={style.cardBottom}>
            <div className={style.img}>
              <img src={imgQR} alt="example qr code" />
            </div>
            <div className={style.tulisan}>
              <p>Saldo</p> <p>Points</p>
            </div>
            <div className={style.poin}>
              <p>Rp.{data.result.saldo}</p>
              <p>{data.result.point}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
