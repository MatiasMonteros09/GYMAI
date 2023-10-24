import Link from "next/link"


const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
    <Link href='/authview'> authview</Link>
    <Link href='/downloadview'> downloadview</Link>
    </>
  )
}

export default HomePage
