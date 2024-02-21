import { TextGenerateEffect } from '../components/heroText';

export default function home() {
  return (
    <>
      <div className='h-[45vh] flex items-end justify-center'>
        <TextGenerateEffect words="Presenting your sleek, lightning-fast, and trustworthy app. It effortlessly manages attendance, sends timely reminders, organizes your day seamlessly, and secures your marks with password protection." className='text-center pl-5 pr-5' />
      </div>
    </>
  );
}
