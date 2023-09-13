import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Education() {
  return (
    <div className="Education">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Adhiparasakthi.Matric.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Hr.Sec.School
          </h4>
          <p style={{color:"#21325e"}}>Secondary Education</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Adhiparasakthi.Matric.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Hr.Sec.School
          </h4>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4> */}

          <p style={{color:"#21325e"}}> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University Of Madras
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai
          </h4>
          <p style={{color:"#21325e"}}> Bachelor of Computer Application</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Course Inn Academy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai
          </h4>
          <p style={{color:"#21325e"}}>
          Front-End Development
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
