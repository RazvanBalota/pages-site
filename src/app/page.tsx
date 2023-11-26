import Image from 'next/image'

export default function Home() {
  return (
    <main  className='h-screen'>
      <div className="flex p-8 lg:w-6/12 w-full m-auto mt-10 lg:block hidden">
        <Image
              className="relative"
              src="/ai3-ro.png"
              alt="AI3 Logo"
              width={180}
              height={37}
              priority
            />
      </div>
      <div className="flex flex-col lg:w-8/12 w-full m-auto mt-10 items-center">
        <div className="lg:w-1/2 w-11/12 m-auto">
            <h1 className='text-2xl'>
                Clusterul IT al județului Alba
            </h1>
            <p className="mt-10">
                Pentru mai multe detalii scrieți-ne <a href="mailto:contact@ai3.ro">la contact@ai3.ro</a>.
            </p>
        </div>
      </div>
    </main>
  )
}
