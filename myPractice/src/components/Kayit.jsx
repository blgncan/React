import React from 'react'

function Kayit() {
  return (
    <div>  
      <hr></hr>      
        <h1>Kayıt Formu</h1>
      <div className="card">
       <input type="text" placeholder='Kullanıcı Adı'></input><br></br>
       <input type="text" placeholder='Şifre'></input>
      </div>
      <div>
        <button type="button">Giriş Yap</button>
      </div>
    </div>
  )
}

export default Kayit