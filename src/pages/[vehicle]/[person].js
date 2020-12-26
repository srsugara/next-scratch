import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// =========== CSR and SSR combination

export async function getServerSideProps(ctx) {
    if (!ctx.req) {
        return { props: { ownerDetail: [] } }
    }
    const { query } = ctx
    // Fetch data from external API
    const response = await fetch(`http://localhost:3000/api/owners?name=${query.person}&vehicle=${query.vehicle}`)
    const ownerDetail = await response.json()
    // Pass data to the page via props
    return { props: { ownerDetail } }
}

export default function Person({ ownerDetail }) {
    const { query } = useRouter()
    const [owner, setOwner] = useState(ownerDetail)

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`http://localhost:3000/api/owners?name=${query.person}&vehicle=${query.vehicle}`)
            const ownerDetail = await response.json()
            setOwner(ownerDetail)
        }
        if (ownerDetail.length === 0) {
            loadData()
        }
    }, [])

    if (!owner[0]) {
        return <pre>Loading...</pre>
    }
        
    return <pre>{owner[0].detail}</pre>
}