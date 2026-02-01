
import HeaderTab from "./components/HeaderTabs/HeaderTab"
import PackageTabs from "./components/PackageTabs/PackageTabs"
import Sidebar from "./components/Sidebar"
import './App.css'
function App() {

  return (
    <div>
    
    <HeaderTab/>
    <div className="main-bg">
        <Sidebar/>
     <PackageTabs/>
    </div>
     
    </div>
  )
}

export default App
