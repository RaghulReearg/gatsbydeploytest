import React from 'react'
import Container from './Container'
import * as styles from "./userstyles.module.css"
const User = (props) => {
    return (
        <div className={styles.user}>
            <img src={props.avatar} className={styles.imgstyles}></img>
            <div className={styles.details}>
                <h4>{props.username}</h4>
                <p>{props.excerpt}</p>
            </div>
        </div>
    )
}
function AllUsers() {
    return (
        <Container>
            <h3>All Users Page</h3>
            <User
                username="Maria Randall"
                avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
                excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <User
                username="Daniela Dewitt"
                avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
                excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
    )
}

export default AllUsers
