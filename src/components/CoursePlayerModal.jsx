import React from "react";
import CourseLearningWorkspace from "./learning/CourseLearningWorkspace";
export { OFFICIAL_COURSE_STUDY_MATERIALS } from "../data/verifiedLearningResources";

export default function CoursePlayerModal(props) {
  return <CourseLearningWorkspace {...props} />;
}
