import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../zustand/Store'

import imgSrc from '../../Assets/logo technopartner.png'
import style from './Login.module.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [tanggapan, setTanggapan] = useState({})
  const navigate = useNavigate()
  const updateState = useStore((state) => state.updateRespond)

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({
      grant_type: 'password',
      client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
      client_id: 'e78869f77986684a',
      username,
      password,
    })
  }

  const postData = async ({
    url = 'https://soal.staging.id/oauth/token',
    ...data
  }) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
      body: JSON.stringify(data),
    })
    return response.json().then((res) => {
      updateState({
        token_type: res.token_type,
        access_token: res.access_token,
      })
      setTanggapan(res)
    })
  }
  useEffect(() => {
    async function check() {
      if (tanggapan.token_type) {
        await navigate('/')
      }
    }
    check()
  }, [navigate, tanggapan.token_type])

  return (
    <div className={style.login}>
      <img src={imgSrc} alt="technopartner indonesia" />
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}
