import React from 'react'

import { CodeInt } from '../model';

interface Props {
  code: CodeInt;
}

const CodeListItem = (props: Props) => {

  const { code } = props

  return (
    <>
    <div>
      {code.name}
    </div>
    
    
    
    </>
  )
}

export default CodeListItem