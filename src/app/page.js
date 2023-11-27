import { redirect } from 'next/navigation'

function Home() {
  return (
    <>{redirect('/outstanding')}</>
  )
}
export default Home