import {FloatingNav} from '../components/navbar';

export default function Home() {
  return (
    <>
    <FloatingNav navItems={[
      { name: "Home", link: "/" },
      { name: "Attendance", link: "/about" },
      { name: "TimeTable", link: "/contact" },
    ]}/>
    <div className="container mx-auto px-4 mt-[340px] lg:px-0 h-150vh">
      <h1>HI</h1>
    </div>
    <div className="container mx-auto px-4  mt-[600px] lg:px-0 h-150vh">
      <h1>HI</h1>
    </div>

    </>
  );
}
