import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
const Details = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>
                <h1>Details Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }) => {
                            return <tr>
                                <td>{node.birthTime}</td>
                                <td>{node.relativePath}</td>
                                <td>{node.extension}</td>
                                <td>{node.prettySize}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Details
export const query = graphql`query{
    allFile {
        edges {
          node {
            relativePath
            birthTime
            extension
            prettySize
          }
        }
      }
}`
