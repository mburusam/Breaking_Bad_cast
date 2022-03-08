import React, { useState } from 'react'

const Search = ({getQuery}) => {
    const [text, setText] =useState('')


    const OnChanged =(q)=> {
        setText(q)
        getQuery(q)
    }

  return (
  <section className='search'>
      <form>
          <input type='text'
          className='form-control'
          placeholder='search characters'
          value={text}
          onChange ={(e)=> OnChanged(e.target.value)}
          autoFocus
          />
      </form>

  </section>
  )
}

export default Search