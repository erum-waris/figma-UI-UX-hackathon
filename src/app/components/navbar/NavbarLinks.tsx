import React from 'react'

import Link from 'next/link'
import { linksProps } from '../../../../types/Types'

function NavbarLinks(props:linksProps) {
  return (
    <div>
        <Link className='border-b border-transparent py-1 hover:border-black' href={props.href}>{props.title}</Link>
    </div>
  )
}

export default NavbarLinks