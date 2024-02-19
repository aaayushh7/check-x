import {TextGenerateEffect} from '../components/heroText';
import {HoverEffect} from '../components/attendance';
import { title } from 'process';
import {FloatingNav} from '../components/navbar';


export default function Home() {
  return (
    <>
    <FloatingNav navItems={[
        { name: "Home", link: "/" },
        { name: "Attendance", link: "/attendance" },
        { name: "TimeTable", link: "/timetable" },
      ]}/>
    <div className='h-[45vh] flex items-end'>
    <TextGenerateEffect words="And here is your app, sleek, fast and trusted. Attendance, reminder, Day order and marks password protected" className='text-center pl-5 pr-5'/>
    </div>
    <div className='p-5'>
    <HoverEffect items={[
      {
        title:"Mathematics",
        description:'Mat padho, number to vaise bhi ni ane!',
        marks: '75%',
        link:'Nhi milega',
      }
    ]}/>
    </div>

    </>
  );
}
