import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { VehiclePerson } from '../../interface/VehiclePerson'

// =========== CSR and SSR combination

interface MyNextPageContext extends NextPageContext {
    query: {
        person: string,
        vehicle: string
    }
}

export async function getServerSideProps({query, req}: MyNextPageContext) {
    if (!req) {
        return { props: { ownerDetail: [] } }
    }
    // Fetch data from external API
    const response = await fetch(`http://localhost:3000/api/owners?name=${query.person}&vehicle=${query.vehicle}`)
    let ownerDetail = await response.json()
    if (ownerDetail.length < 1) {
        ownerDetail = [{
            detail: "Data not found"
        }]
    }
    // Pass data to the page via props
    return { props: { ownerDetail } }
}

export interface PersonProps {
    ownerDetail?: VehiclePerson[]
}

export default function Person({ ownerDetail }: PersonProps) {
    const { query } = useRouter()
    const [owner, setOwner] = useState(ownerDetail)

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`http://localhost:3000/api/owners?name=${query.person}&vehicle=${query.vehicle}`)
            const ownerDetail: VehiclePerson[] | undefined  = await response.json()
            setOwner(ownerDetail)
        }
        if (ownerDetail?.length === 0) {
            loadData()
        }
    }, [])

    if (!owner?.[0]) {
        return <pre>Loading...</pre>
    }
        
    return <pre>{owner[0].detail}</pre>
}