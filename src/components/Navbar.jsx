import { useNavigate } from "react-router-dom"

const Navbar = () => {
  
  const naviga = useNavigate();

  const goHomepage = () => {
      naviga("/");
  }

  return (
    <header className="border bg-primary-subtle">
        <nav className="">
          <img src="/img/Logo.png" alt="logo" onClick={goHomepage}/>
        </nav>
    </header>
  )
}

export default Navbar