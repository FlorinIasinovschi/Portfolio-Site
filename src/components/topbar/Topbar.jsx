import './topbar.scss'

export default function Topbar() {
  return (
    <div className='topbar' id='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href="#intro" id='logo'>Florin</a>
        </div>
        <div className='right'>
          <div className='nav-menu'>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </div>

    </div>
  )
}
