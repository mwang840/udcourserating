import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {uniDomain} from "node-university-domains";
export function EnterUniversity(){
    const [university, setUniversity] = useState<string>("");

    const updateUniversity = React.useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
      const { target } = event;
      if (target !== undefined) {
        const { value } = target;
        const foundUniversity = uniDomain.find(value);
        setUniversity(foundUniversity);
      }
    }, []);

    return(
        <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>University Name Goes here</Form.Label>
          <Form.Text className="text-muted">
            <br/>
            We'll find that University for You!
            <br/>
        </Form.Text>
        <Form.Control 
          size="lg"
          name="Enter University"
          value={university}
          onChange={updateUniversity}
        
        />
          </Form.Group>
          <Button type="submit" style={{color: "green", backgroundColor: "yellow"}}>Find My University</Button>
        </Form>
        </>
    )
}