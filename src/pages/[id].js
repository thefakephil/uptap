import useSWR from 'swr'


export default function User ({query}) {
   const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, error } = useSWR(`/api/getUser?${query.id}`, fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    console.log('data from fetch', data)

    return (
        <p> {JSON.stringify(data)} </p> 
    )
  }


  User.getInitialProps = ({query}) => {
    console.log(query)
    return {query}
  }