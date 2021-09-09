import React, { useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      
    <Container>
      <Row>
        <Col id='searchBar'>
        <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
        </Col>
        <Col>
        <Button type='submit' variant='outline-success' id='searchButton' className='p-1.5'>
        Search
      </Button> 
        </Col>
     </Row>
    </Container>
    </Form>
  )
}

export default SearchBox