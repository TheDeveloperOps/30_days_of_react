import { useNavigate} from "react-router-dom"


export const User = () => {
    const navigate  = useNavigate()
  return (
    <div>User 
        <button onClick={()=> navigate('/')}> to home</button>
    </div>
    
  )
}
