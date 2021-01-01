import { NextPageContext } from "next"

export async function myGet (url: string, ctx: NextPageContext) {
    const cookie = ctx.req?.headers.cookie
    // Fetch data from external API
    const response = await fetch(url, {
        headers: {
            cookie: cookie!
        }
    })

    if (response.status === 401) {
        ctx.res?.writeHead(302, {
            Location: 'http://localhost:3000/login'
        })
        ctx.res?.end()
        return
    }
    const json = await response.json()

    return json
}