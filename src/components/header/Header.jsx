import { Link } from "react-router-dom";
import YoutubeSvg from "../../assets/svg/youtube-svgrepo-com.svg";
import UserProfile from "../../assets/svg/user-profile-person-svgrepo-com.png";
export default function Header() {
  return (
    <>
      <div className="header">
        <nav className="nav" aria-label="main">
          <div
            className="nav-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: ".5rem",
            }}
          >
            <div className="logo" aria-label="youtube">
              <Link to="/">
                <img
                  src={YoutubeSvg}
                  alt="youtube"
                  style={{
                    width: "3rem",
                  }}
                />
              </Link>
            </div>
            <div> search bar</div>
            <div>
              <div className="login-container">
                <Link
                  className="button-shape"
                  style={{
                    borderRadius: "5px",
                    border: "1px solid #317ec0",
                    padding: ".5rem",
                  }}
                >
                  <img
                    src={UserProfile}
                    alt="userProfile"
                    style={{
                      margin: "0 auto",
                      width: "1rem",
                    }}
                  />
                  <p
                    style={{
                      color: "#317ec0",
                      padding: "0 0.5rem",
                      display: "inline-block",
                      lineHeight: "1",
                    }}
                  >
                    Login
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
