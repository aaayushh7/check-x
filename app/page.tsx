import {FloatingNav} from '../components/navbar';
import {TextGenerateEffect} from '../components/heroText';

export default function Home() {
  return (
    <>
    <FloatingNav navItems={[
      { name: "Home", link: "/" },
      { name: "Attendance", link: "/attendance" },
      { name: "TimeTable", link: "/timetable" },
    ]}/>
    <TextGenerateEffect words="And here is your app, sleek, fast and trusted. Attendance, reminder, Day order and marks password protected" className='text-center pt-[57px]'/>

    </>
  );
}
