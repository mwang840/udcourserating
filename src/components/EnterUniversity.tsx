import React from "react";
import {Form} from "react-bootstrap";
export function EnterUniversity(){
    return(
        <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>University Name Goes here</Form.Label>
        <Form.Control type="email" placeholder="Enter University" />
        <Form.Text className="text-muted">
            We'll find that University for You!
        </Form.Text>
          </Form.Group>
        </Form>
        </>
    )
}