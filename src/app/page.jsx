'use client'

import { Divider } from "@nextui-org/react"

import IntroButons from "./components/IntroButons"
import MainButton from "./components/MainButton"
import OSite3 from "./components/OSite3"
import Relembrando from "./components/Relembrando"
import HeroBento from "./components/HeroBento"



export default function Home() {
  return (
    <>
      
      <HeroBento />
      <OSite3 />
      <Divider className="max-w-3xl mx-auto mb-12" />  
      <Relembrando />
      <IntroButons />
      <Divider className="max-w-3xl mx-auto mt-8" />
      <MainButton />
      
    </>
  )
}
