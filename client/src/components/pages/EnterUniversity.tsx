import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";


import uniDomain from "node-university-domains";
export function EnterUniversity(){
    const [university, setUniversity] = useState<string>("");

    const updateUniversity = React.useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
      const { target } = event;
      if (target !== undefined) {
        const { value } = target;
        console.log(uniDomain);
        const foundUniversity = uniDomain.find(value);
        if(foundUniversity.length === 0){
          setUniversity("");
        }
        else{
          setUniversity(foundUniversity[0].name);
          console.log(foundUniversity[0]);
        }
      }
    }, []);

    return(
        <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{display: "flex", fontSize: "20px", color: "red", textAlign: "center"}}>University Name Goes here</Form.Label>
        <Form.Control 
          style={{alignContent: "center"}}
          size="lg"
          name="Enter University"
          value={university}
          onChange={updateUniversity}
        />
        <Form.Text className="text-muted" style={{fontSize: "20px", color: "red"}}>
            <br/>
            We'll find that University for You!
            <br/>
        </Form.Text>
          </Form.Group>
          <Button type="submit" style={{color: "green", backgroundColor: "yellow", alignContent: "center"}}>Find My University</Button>
        </Form>
        </>
    )
}