import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Register(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [schoolName, setSchoolName] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigateTo = useNavigate();

    const handleSignUp = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(
            "Register the user ",
            { userName },
            " with the email ",
            { email },
            " and is a ",
            { year },
            " at ",
            { schoolName },
            " who's password is ",
            { password },
        );
        setEmail("");
        setUserName("");
        setSchoolName("");
        setYear("");
        setPassword("");
    };
    const toLogin = () => navigateTo("/");

    return (
        <div className="signup_container">
            <h3>Register</h3>
            <form className="signup_form" onSubmit={handleSignUp}>
                <label htmlFor="email">Enter Email Address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
                <br />
                <label htmlFor="username">Create Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={userName}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserName(e.target.value)
                    }
                />
                <br />
                <label htmlFor="schoolname">Set School Name</label>
                <input
                    type="text"
                    name="schoolname"
                    id="schoolname"
                    value={schoolName}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSchoolName(e.target.value)
                    }
                />
                <br />
                <label htmlFor="schoolyear">Set School Year</label>
                <input
                    type="text"
                    name="schoolyear"
                    id="schoolyear"
                    value={year}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setYear(e.target.value)
                    }
                />
                <br />
                <label htmlFor="password">Create Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                />
                <br />
                <Button className="signupBtn">Register</Button>
                <p>
                    Already have an account?{" "}
                    <span className="link" onClick={toLogin}>
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
}
