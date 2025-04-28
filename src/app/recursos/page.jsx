'use client'

import { Divider } from '@nextui-org/react'
import RecHero from '../components/Recursos/RecHero'
import RecCriando from '../components/Recursos/RecCriando'
import RecLembre from '../components/Recursos/RecLembre'
import RecCards from '../components/Recursos/RecCards'
import RecPodcast from '../components/Recursos/RecPodcast'
import RecPodcastSug from '../components/Recursos/RecPodcastSug'



function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecCriando />
        <Divider className='max-w-5xl mx-auto'/>
        <RecLembre />
        
        <RecCards />
        
        
    </>
    
  )
}

export default Recursos