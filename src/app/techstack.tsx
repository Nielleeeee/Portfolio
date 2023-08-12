import React from 'react'
import { MainContainer } from '@/components/containers'
import CardTechStack from '@/components/cardTechStack'

export default function TechStack() {
  return (
    <section className='bg-white h-auto'>
      <MainContainer>
        <CardTechStack>
          Front
        </CardTechStack>

        <CardTechStack>
          Back
        </CardTechStack>

        <CardTechStack>
          Database
        </CardTechStack>
      </MainContainer>
    </section>
  )
}
