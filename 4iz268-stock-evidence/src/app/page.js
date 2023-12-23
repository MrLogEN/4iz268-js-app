
import PrimaryLinkButton from "@/app/ui/PrimaryLinkButton";

export default function Home() {
  return (
      <>
          <h1 className='text-4xl'>Stocks Evidence</h1>
          <p className='text-2xl text-gray-500'>Welcome to the stocks evidence app</p>
          <main className="pt-4 bg-white">
              <article className='text-gray-500 text-justify py-2'>
                  <h2 className='font-bold text-black'>Purpose of this app?</h2>
                  <p>Welcome to Fictional company&apos;s Material Stocks Evidence Web App! This platform is exclusively
                      designed
                      for our employees to seamlessly manage and monitor our material stocks.
                      Our app offers a&nbsp;centralized hub to oversee inventory levels, track item histories,
                      and ensure efficient stock management. Whether you&apos;re involved in production,
                      logistics, or procurement, this tool aims to simplify and optimize the process,
                      providing you with real-time insights and control over our material resources.</p>
              </article>
              <article className='text-gray-500 text-justify py-2'>
                  <h2 className='font-bold text-black'>Dashboard</h2>
                  <p>Everything operation regarding material such as adding, updating or deleting can do through the <em>dashboard</em></p>
                  <div className='flex flex-row pt-2 justify-start'>
                      <PrimaryLinkButton text={'Dashboard'} url={'/dashboard'} rightIcon={'/images/linkIcon.svg'}></PrimaryLinkButton>
                  </div>
              </article>
          </main>
      </>
  )
}
