"use client";

function NavbarSimple() {
  return (
    <div className="sticky">
      <div className="max-w-7xl mx-auto top-0 bg-white z-100">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="normal-case" href="/">
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                className="w-52 ml-3 md:ml-0"
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl font-light">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Hot Spots</a>
              </li>

              <li>
                <a>Community</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarSimple;
