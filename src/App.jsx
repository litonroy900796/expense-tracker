
import './App.css'
import Header from './components/layouts/Header'
import RightSection from './components/rightSection/Right-Section'
import SubmissionForm from './components/submissionForm/Submission-form'


function App() {

  return (
   <>
   <Header />
   <main className="relative mx-auto mt-10 w-full max-w-7xl">
   <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
   <SubmissionForm />
   <RightSection />
   </section>
   </main>
   </>
  )
}

export default App
