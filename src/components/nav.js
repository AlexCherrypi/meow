import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  navLinks,
  navLinkItem,
} from './layout.module.css'

const navelement = (to, _name) => {
  return(
    <li className={navLinkItem}>
    <Link to={to} >
      {_name}
    </Link>
  </li>
  )
}

const Navigation = ({pageTitle}) => {
  let navelements = [["/","Home"]]
  if (pageTitle === "Home Page") {
    navelements = []
  } 
  

  /* sort: {order: DESC, fields: name} */
  const query = useStaticQuery(graphql`
    query navelements{
      allFile (
        filter: {ext: {eq: ".js"}, extension: {}, name: {regex: "/^(?!404|index)[a-zA-Z0-9]+/"}, sourceInstanceName: {eq: "pages"}}
        
      ) 
      {
        nodes {
          name
        }
      }
    }
  `)

  query.allFile.nodes.map(val => (
    navelements.push(["/" + val.name, val.name.substring(0, 1).toUpperCase() + val.name.slice(1) ])
  ))

  return (
    <nav>
      <ul className={navLinks}>
        {
          navelements.map(val => (
            navelement( val[0], val[1] )
          ))
        }
      </ul>
    </nav>
  ) 
}


export default Navigation