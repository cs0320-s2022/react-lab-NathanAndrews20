import React from 'react'

interface ResultListProps {
  items: string[]
}

const ResultList = (props: ResultListProps) => {
  return (
    <ul>
      {props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}

export default ResultList

