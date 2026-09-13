import { Suspense } from "react";
import Bannar from "./components/bannar";
import Footer from "./components/footer";
import Nav from "./components/nav";
import TechnologiesCard from "./components/technologiescard";
import type { ItechnologiesCardType } from "./types/technologiescardtype";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const technologiesCardFetch = async (): Promise<ItechnologiesCardType[]> => {
  const response = await fetch('/data.json')
  const data = await response.json()
  return data;
}

function App() {
  const technologiesCardPromise = technologiesCardFetch();

  return (
    <>

      <Nav />
      <Bannar />
      <Suspense fallback={
        <div className="flex justify-center items-center ">
          <p className="text-xl font-semibold">Loading...</p>

        </div>}>
        <TechnologiesCard technologiesCardPromise={technologiesCardPromise} />
      </Suspense>

      <Footer />
      <ToastContainer />

    </>
  )
}

export default App
