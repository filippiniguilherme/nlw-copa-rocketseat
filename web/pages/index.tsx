interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Number of pools: {props.count}</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  console.log(data.count)
  return {
    props: {
      count: data.count
    }
  }
}
