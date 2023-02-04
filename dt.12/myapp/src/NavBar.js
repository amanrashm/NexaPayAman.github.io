
export default function Navbar (props) {
    return (
        <>
        <nav className="navbar bg-dark" data-bs-theme="dark">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NexaPay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.nexapay.net/">{props.AboutNexaPay}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="HTTPS://TEAMHYDTEAM.MY.CANVA.SITE/">MyProfile</a></li>
            <li><a className="dropdown-item" href="https://github.com/amanrashm">MyGithub</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="https://teamhydteam.my.canva.site/dark-purple-bold-tech-tech-personal-website">MyPersonalSite</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">NexaPay</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
</nav>
<nav>
      <div style={{ height: '62px', backgroundColor: '#FFFFFF', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #FFFFFF', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', blockSize: '62px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', padding: '1px', margin: '0px', width: '100%' }}>
      <div style={{ height: '40px', padding: '0px', margin: '0px', width: '100%' }}>
        <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=" width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameBorder="0" border="0" style={{ border: '0', margin: '0', padding: '0' }} />
      </div>
      <div style={{ color: '#FFFFFF', lineHeight: '14px', fontWeight: '400', fontSize: '11px', boxSizing: 'border-box', padding: '2px 6px', width: '100%', fontFamily: 'Verdana, Tahoma, Arial, sans-serif' }} />
    </div>
    </nav>
    

        </>
    )
}