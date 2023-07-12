import { Routes , Route} from "react-router-dom"
import { Profile } from "./Profile"
import { Settings } from "./Settings"


export const User = () => {
  return (
    <div>
      <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
    
  )
}
