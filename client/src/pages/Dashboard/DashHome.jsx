import React from 'react'
import AdminDash from './AdminDash'
import secureLocalStorage from 'react-secure-storage'
import TrainerDash from './TrainerDash'
import MemberDash from './MemberDash'

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
            else if(RoleUser === "member"){
              return (
                <MemberDash />
              )
            }
          })()
        }
    </div>
  )
}

export default DashHome