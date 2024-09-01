import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
const LogoutBtn = () => {
 const router = useRouter()
    const handleLogout = async () => {
        try {
            await signOut()
            router.push("/login")
        } catch (error) {
            
            console.log(error)
        }
   
}
  return (
      <div><Button  onClick={handleLogout}>
    Logout  </Button></div>
  )
}

export default LogoutBtn