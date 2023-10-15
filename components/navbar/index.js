"use client";

function NavbarSimple() {
  return (
    <div className="block md:flex my-2 max-w-7xl mx-auto">
      <div className="w-[100%] md:w-[30%]">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-48 mx-auto md:mx-0"
        />
      </div>
      <div className="hidden md:block md:w-[70%] my-auto space-x-5 text-right mx-5">
        <span>Discover</span>
        <span>Trips</span>
        <span>Community</span>
        <span>Socials</span>
      </div>
    </div>
  );
}

export default NavbarSimple;
