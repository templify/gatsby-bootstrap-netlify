import React from 'react'
import TopNav from '../components/TopNav'
import { Container } from 'react-bootstrap'
import "../global.css"
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {
  children: any,
  noContainer?: boolean
}

function DefaultLayout(props: Props) {
  const { children, noContainer } = props

  return (
    <>
      <TopNav />
      {noContainer ? (
        <div>
          { children }
        </div>
      ) : (
        <Container>
          { children }
        </Container>
      )}
    </>
  )
}

export default DefaultLayout
