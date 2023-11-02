import Image from 'next/image'
import Footer from './components/Main/Footer'


export default function Home() {
  return (
    <main className="flex min-h-screen dark:bg-black/90 w-full flex-col items-center justify-between p-24">
    <div>
      <h1 className='text-2xl font-bold dark:text-white'>Hello World</h1>
    </div>
    </main>
  )
}
