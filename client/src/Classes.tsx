import React, { useState } from "react";
import classesExamples from "./components/courses/courses.json";
import { Course } from "./components/utils/course";
import { Form } from "react-bootstrap";

const UD_COURSES = classesExamples.map(
    (course): Course => ({
        id: course.id,
        name: course.name,
        credits: parseInt(course.credits),
        courseId: course.id,
        preReq: course.prereqs,
    }),
);

export function Classes({ course }: { course: Course }): JSX.Element {
    const [currentCourse, setCurrentCourse] = useState<string>(course.courseId);
    const [isEditing, setIsEditing] = useState<boolean>(false); //If editing course info or not
    const [credits, setCredits] = useState<number>(course.credits); //Credit editing
    const [name, setName] = useState<string>(course.name); //name editing
    const [preReqs, setPreReqs] = useState<string>(course.preReq); //PreReq editing

    function updateClass(event: React.ChangeEvent<HTMLInputElement>) {
        const newClass = UD_COURSES.findIndex(
            (course: Course) => course.id === event.target.value,
        );
        setCurrentCourse(event.target.value);
        setCredits(UD_COURSES[newClass].credits);
        setName(UD_COURSES[newClass].name);
        setPreReqs(UD_COURSES[newClass].preReq);
    }

    function cancelEditClass() {
        setIsEditing(false);
        setCurrentCourse(course.courseId);
        setCredits(course.credits);
        setName(course.name);
        setPreReqs(course.preReq);
    }

    function updateCourseName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(parseInt(event.target.value));
    }
    function updatePreReqs(event: React.ChangeEvent<HTMLInputElement>) {
        setPreReqs(event.target.value);
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <Form.Group className="mb-3"></Form.Group>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
