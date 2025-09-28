import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}


export default DefaultLayout
