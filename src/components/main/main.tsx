import React, { useState } from 'react'
import Countries from '../countries/countries'
import SearchFilterCountry from '../searchFilterCountry/searchFilterCountry'

const Main = () => {

  const [searchText, setSearchText] = useState('')

  // const searchHandler = (e) =>{
  //   const textLower = e.target.value.toLowerCase();
  //   setSearchText(textLower)
  // }

  return (
    <>
    <SearchFilterCountry />
    <Countries />
    </>
  )
}

export default Main