import React from 'react'

import Link from 'next/link'
import { linksProps } from '../../../../types/Types'

function NavbarLinks(props:linksProps) {
  return (
    <div>
        <Link href={props.href}>{props.title}</Link>
    </div>
  )
}

export default NavbarLinks