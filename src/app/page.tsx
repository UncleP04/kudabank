import Image from 'next/image'
import HomePage from '../Pages/home'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  )
}
