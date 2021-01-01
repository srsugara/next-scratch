import { NextPageContext } from "next"
import { myGet } from "../utils/myGet"

export default function People({people}: any) {
    return <div>{JSON.stringify(people)}</div>
}

export async function getServerSideProps(ctx: NextPageContext) {
    const people = await myGet(`http://localhost:3000/api/people`, ctx)
  
    // Pass data to the page via props
    return { props: { people } }
}

// People.getInitialProps = async (ctx: NextPageContext) => {
//     // Fetch data from external API
//     const response = await fetch(`http://localhost:3000/api/people`)
//     const people = await response.json()
  
//     // Pass data to the page via props
//     return { people }
// }