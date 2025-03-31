import React from 'react'
import AdminDash from './AdminDash'
import secureLocalStorage from 'react-secure-storage'
import TrainerDash from './TrainerDash'

const DashHome = () => {
  const RoleUser = secureLocalStorage.getItem('loginR')
  const EmailUser = secureLocalStorage.getItem('loginE')
  const Username = secureLocalStorage.getItem('loginU')
  return (
    <div>
        {
          (() => {
            if(RoleUser === "admin"){
              return (
                <AdminDash />
              )
            }
            else if(RoleUser === "trainer"){
              return (
                <TrainerDash />
              )
            }
          })()
        }
    </div>
  )
}

export default DashHome