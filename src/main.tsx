import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// function showName(name:string):string {
//   return `xin chào ${name}`
// };
// function ShowAge(){
//   return <h1>Xin chào bạn đã</h1>
// }
// const name:string='Minh Tuấn';
// const myAge:number=20;
ReactDOM.createRoot(document.getElementById('root')!).render(<App/>

  // <div className='logo'>
  //     <div>Tên: {name}</div>
  //     <div>Tuổi: {myAge}</div>
  //     <div>Chúng tôi {showName(name)}</div>
  //     <h1><ShowAge/></h1>
  //   </div>
)
