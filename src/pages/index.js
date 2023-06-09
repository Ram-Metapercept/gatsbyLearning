import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import  '../styles/main.css'



export default function Home() {
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in India</p>
          <Link className="btn" to="/projects">My Portfolio Projects</Link>
        </div>
       <img src="/banner.png" alt="site banner"/>

      </section>
    </Layout>
  )
}