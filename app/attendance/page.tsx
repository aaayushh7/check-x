// import {TextGenerateEffect} from '../components/heroText';
import {HoverEffect} from '@/components/attendance'
import { title } from 'process';
// import {FloatingNav} from '../components/navbar';


export default function Home() {
  return (
    <>
    
    <div className='pt-[15%] pr-5 pl-5'>
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
