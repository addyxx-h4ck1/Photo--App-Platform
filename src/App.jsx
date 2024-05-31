import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
const App = () => {
  const [showSideBar, setShowSideBar] = React.useState(false)
  const sidebarAction = () => {
    setShowSideBar(!showSideBar)
  }
  return (
    <main className="main-wrapper w-full flex justify-center items-center flex-col">
      <section className="max-w-[1500px] w-full relative">
        <Navbar sidebarActions={sidebarAction} />
        {showSideBar ? <Sidebar sidebarActions={sidebarAction} /> : null}
        <div id="detail">
          <Outlet />
        </div>
        <Footer />
      </section>
    </main>
  )
}

export default App
