import "./Sidebar.css";
export default function Navbar(props) {
  return (
    <>
      <div className="btn">
        <span className="fas fa-bars"></span>
      </div>
      <nav className="sidebar">
        <div className="text"> BBBootstrap.com </div>
        <ul className="main_side">
          <li className="active">
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#" id="1">
              Pages <span className="fas fa-caret-down"></span>
            </a>
            <ul className="item-show-1">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" id="2">
              Services <span className="fas fa-caret-down"></span>
            </a>
            <ul className="item-show-2">
              <li>
                <a href="#">App Design</a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Message</a>
          </li>
          <li>
            <a href="#">Bookmark</a>
          </li>
          <li>
            <a href="#">Files</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
