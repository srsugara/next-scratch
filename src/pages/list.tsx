import Link from 'next/link'
import { VehiclePerson } from './interface/VehiclePerson'

// ========== Server Side Rendering (SSR)

export async function getServerSideProps() {
    // Fetch data from external API
    const response = await fetch(`http://localhost:3000/api/owners`)
    const ownerList:VehiclePerson[] | undefined = await response.json()
  
    // Pass data to the page via props
    return { props: { ownerList } }
}

export interface ListProps {
    ownerList: VehiclePerson[] | undefined
}

export default function List({ ownerList } : ListProps) {
    return (
        <div>
            {ownerList?.map((value,index) => (
                <div key={index}>
                    <Link href={`/${value.vehicle}/${value.name}`}>
                        <a>Navigate to {value.name}'s {value.vehicle}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

// ======= Client Side Rendering (CSR)

// import { useEffect, useState } from 'react'

// export default function Details() {
//     const [owners, setOwners] = useState([])

//     useEffect(() => {
//         async function loadData() {
//             const response = await fetch(`http://localhost:3000/api/owners`)
//             const ownerList = await response.json()
//             setOwners(ownerList)
//         }
//         loadData()
//     }, [])

//     return (
//         <div>
//             {owners.map((value,index) => (
//                 <div key={index}>
//                     <Link href={`/${value.vehicle}/${value.name}`}>
//                         <a>Navigate to {value.name}'s {value.vehicle}</a>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     )
// }
