import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
function Header({ title }) {
    const LinkStyles = {
        color: "white",
        textDecoration: "none"
    }
    const data = useStaticQuery(graphql`query{
        site{
            siteMetadata{
                title
            }
        }
    }`)
    return (
        <div>
            <nav style={{ margin: '0', boxSizing: 'border-box', padding: '10px 20px', display: 'flex', width: '100%', justifyContent: 'space-between', background: "tomato" }}>

                <h3>{data.site.siteMetadata.title}</h3>
                <div style={{ display: 'flex', width: "300px", justifyContent: "space-between" }}>
                    <Link to="/" style={LinkStyles} ><h3>Homes</h3></Link>
                    <Link to="/about" style={LinkStyles} ><h3>About</h3></Link>
                    <Link to="/contact" style={LinkStyles}><h3>Contacts</h3></Link>
                    <Link to="/allusers" style={LinkStyles}><h3>All Users</h3></Link>


                </div>

            </nav>
        </div>
    )
}

export default Header
