import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  console.log(process.env.MONGODB_URI);

  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href='/properties'>Show Properties</Link>
    </div>
  )
}

export default HomePage