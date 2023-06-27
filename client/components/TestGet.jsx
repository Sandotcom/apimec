'use client'
import { getEjemplos } from '@/utils'
import React from 'react'
import { useQuery } from 'react-query'

const TestGet = () => {
  const { data, error, isLoading, isError } = useQuery(['test'], getEjemplos)

  console.log(data)
  if(isLoading){
    return (
      <>
        <h1>Cargando...</h1>
      </>
    )
  }

  if(isError){
    return (
      <>
        <h1>Error... {error.message}</h1>
      </>
    )
  }

  return (
    
    <div>
      <h1>Test</h1>  
    </div>
  )
}

export default TestGet