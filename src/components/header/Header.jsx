import './header.css'

function Header() {
  return (
    <header>
      <div className='container'>
        <h1>V0 store</h1>
        <div className="text">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header