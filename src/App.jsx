import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Form from './components/Form'
import Login from './components/Login'
import Navbar from './components/Navbar'
import SideBarNav from './components/SideBarNav'
import Table from './components/Table'

function App() {

  return (
    <>
      <header>
        <Navbar />
        <Login />
        <SideBarNav />
      </header>
      <main className='flex flex-col items-center justify-center my-10 gap-12'>
        <section>
          <h1 className='text-3xl'>Form</h1>
          <article>
            <Form />
          </article>
        </section>
        <section>
          <h1 className='text-3xl'>Card</h1>
          <Card />
        </section>
          <h1 className='text-3xl'>Table</h1>
        <Table/>
      </main>
      <Footer />
    </>
  )
}

export default App
