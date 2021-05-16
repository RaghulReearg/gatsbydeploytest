import React from 'react'
import Card from '../components/Card'
import Header from '../components/header'
import Layout from '../components/Layout'

const About = () => {
    return (
        <Layout>

            <div style={{ color: "teal" }}>
                <h2>About Page</h2>
            </div>
            <Card heading="This is a Heading" />
        </Layout>
    )
}
export default About