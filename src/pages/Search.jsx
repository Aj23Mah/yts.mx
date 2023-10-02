

import React from 'react'
import { useParams } from 'react-router'

const Search = () => {
    const {keyword} = useParams()
  return (
    <div>Search {keyword}</div>
  )
}

export default Search