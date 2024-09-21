import Link from 'next/link'
import React from 'react'

const LargeSidebar = () => {
  return (
    <div className='flex gap-12 text-lg'>
      <Link href="/admin/addblog"><div className='font-mono '>Add Blog</div></Link>
      <Link href="/admin/bloglist"><div className='font-mono'> Blog</div></Link>
      <Link href="/admin/subscriptions"><div className='font-mono'>Subscription</div></Link>
    </div>
  )
}

export default LargeSidebar
