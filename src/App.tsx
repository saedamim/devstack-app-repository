import { Suspense } from "react";
import Bannar from "./components/bannar";
import Footer from "./components/footer";
import Nav from "./components/nav";
import TechnologiesCard from "./components/technologiescard";
import type { ItechnologiesCardType } from "./types/technologiescardtype";


const technologiesCardFetch =async(): Promise <ItechnologiesCardType[]>=>{
  const response = await fetch ('/data.json')
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
    </>
  )
}

export default App
