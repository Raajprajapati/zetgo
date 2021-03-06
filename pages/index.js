import Head from 'next/head'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Booking from '../components/Booking';
export default function Home() {
  return (
    <div >
      <Head>
        <title>Zetgo - Suraj Prajapati</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Navbar/>
      <About/>
      <Booking/>     
    </div>
  )
}
