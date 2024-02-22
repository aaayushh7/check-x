"use client"
import { HoverEffect } from '@/components/attendance'
import { Attendance } from '@/server/data/attendance'

export default function Home() {

  return (
    <div className='pt-[10%] pl-5 pr-5'>

      <HoverEffect items={Attendance
        .filter(item => item.key !== '') // Filter out items with empty keys
        .map((item, idx) => ({
          title: item.code,
          description: item.subject,
          marks: item.attendance,
          link: '',
          key: item.index,
        }))} />

    </div>
  );
}