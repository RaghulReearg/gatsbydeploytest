import React from 'react'
import { graphql } from "gatsby"
const blog = ({ data }) => {
    return (
        <div>
            <h2>{data.site.siteMetadata.title}</h2>
            <h1>BLog page</h1>
            <h3>{(() => {
                return <h1>Hellow</h1>
            })()}</h3>
        </div>
    )
}

export default blog

export const query = graphql`query{
    site{
        siteMetadata{
            title
        }
    }
}`