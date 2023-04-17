import useSWR from 'swr'
import Nav from '@/components/nav'
import Footer from '@/components/footer'


export default function User({ query }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR(`/api/getUser?${query.id}`, fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  return (
    <>
      <Nav />
      <p> {JSON.stringify(data)} </p>
      <Footer />
    </>
  )
}


User.getInitialProps = ({ query }) => {
  // console.log(query)
  return { query }
}