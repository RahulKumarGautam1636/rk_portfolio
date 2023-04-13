// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import './css/timeline.style.min.css';


const Experience = () => {

    return (
      <>
      <section id='experience' className='section-padding'>
          <div className="container">
              <div className="row">
                  <h3 className='heading-secondary'>WHAT I HAVE DONE SO FAR</h3>
                  <h1 className='heading-primary'>WORK EXPERIENCE</h1>
                  {/* <p className='text-1 mw-75'>
                      I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React,
                      Node.js and ThreeJS. I'm a quick learner and collaborate closely with clients to create efficient, scaleble and user-friendly solutions that solve real-world problems.
                      Let work together to bring ideas to life.
                  </p> */}
              </div>
          </div>
    
          <div className='mt-20 flex flex-col'>

          <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
    <div id="" className="timeline-card-1 vertical-timeline-element"><span className="vertical-timeline-element-icon bounce-in"
            style={{background: 'rgb(56, 62, 86)'}}>
            <div className="flex justify-center items-center w-full h-full"><img src="assets/company/starbucks.png"
                    alt="Versicle Institute of Technology" className="img-fluid"/></div>
        </span>
        <div className="vertical-timeline-element-content bounce-in">
            <div className="vertical-timeline-element-content-arrow"></div>
            <div>
                <div>
                    <h4 className="heading-tertiary">React.js Developer</h4>
                    <h3 className="sub-heading-1" style={{"--clr": "var(--color-6)"}}>Versicle Institute of Technology</h3>
                </div>
                <div>
                    <ul>
                        <li>Collaborating with cross-functional teams including designers, product managers, and other
                            developers to create high-quality products.</li>
                        <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                        <li>Participating in code reviews and providing constructive feedback to other developers.</li>
                    </ul>
                </div>
            </div><span className="vertical-timeline-element-date">March 2020 - April 2021</span>
        </div>
    </div>
    <div id="" className="timeline-card-2 vertical-timeline-element"><span className="vertical-timeline-element-icon is-hidden"
            style={{background: 'rgb(230, 222, 221)'}}>
            <div className="flex justify-center items-center w-full h-full"><img src="assets/company/tesla.png"
                    alt="Gbooks Infotech Private Limited" className="img-fluid"/></div>
        </span>
        <div className="vertical-timeline-element-content is-hidden">
            <div className="vertical-timeline-element-content-arrow"></div>
            <div>
                <div>
                    <h4 className="heading-tertiary">React Native Developer</h4>
                    <h3 className="sub-heading-1" style={{"--clr": "var(--color-7)"}}>Gbooks Infotech Private Limited</h3>
                </div>
                <div>
                    <ul>
                        <li>Developing and maintaining web applications using React.js and other related technologies.
                        </li>
                        <li>Collaborating with cross-functional teams including designers, product managers, and other
                            developers to create high-quality products.</li>
                        <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                    </ul>
                </div>
            </div><span className="vertical-timeline-element-date">Jan 2021 - Feb 2022</span>
        </div>
    </div>
    <div id="" className="timeline-card-3 vertical-timeline-element"><span className="vertical-timeline-element-icon is-hidden"
            style={{background: 'rgb(56, 62, 86)'}}>
            <div className="flex justify-center items-center w-full h-full"><img src="assets/company/shopify.png"
                    alt="Shopify" className="img-fluid"/></div>
        </span>
        <div className="vertical-timeline-element-content is-hidden">
            <div className="vertical-timeline-element-content-arrow"></div>
            <div>
                <div>
                    <h4 className="heading-tertiary">Web Developer</h4>
                    <h3 className="sub-heading-1" style={{"--clr": "var(--color-8)"}}>Shopify</h3>
                </div>
                <div>
                    <ul>
                        <li>Developing and maintaining web applications using React.js and other related technologies.
                        </li>
                        <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                        <li>Participating in code reviews and providing constructive feedback to other developers.</li>
                    </ul>
                </div>
            </div><span className="vertical-timeline-element-date">Jan 2022 - Jan 2023</span>
        </div>
    </div>
    <div id="" className="timeline-card-4 vertical-timeline-element"><span className="vertical-timeline-element-icon is-hidden"
            style={{background: 'rgb(230, 222, 221)'}}>
            <div className="flex justify-center items-center w-full h-full"><img src="assets/company/meta.png" alt="Meta"
                    className="img-fluid"/></div>
        </span>
        <div className="vertical-timeline-element-content is-hidden">
            <div className="vertical-timeline-element-content-arrow"></div>
            <div>
                <div>
                    <h4 className="heading-tertiary">Full stack Developer</h4>
                    <h3 className="sub-heading-1" style={{"--clr": "var(--color-9)"}}>Meta</h3>
                </div>
                <div>
                    <ul>
                        <li>Developing and maintaining web applications using React.js and other related technologies.
                        </li>
                        <li>Collaborating with cross-functional teams including designers, product managers, and other
                            developers to create high-quality products.</li>
                        <li>Participating in code reviews and providing constructive feedback to other developers.</li>
                    </ul>
                </div>
            </div><span className="vertical-timeline-element-date">Jan 2023 - Present</span>
        </div>
    </div>
</div>










            {/* <VisibilitySensor visibilitySensorProps={ { partialVisibility: false, offset: { bottom: 800 } } }>
            <VerticalTimeline>
              {experiences.map((experience, index) => {
                return (
                    <ExperienceCard key={index} index={index} experience={experience}/>
                )
              })}
            </VerticalTimeline>
            </VisibilitySensor> */}
          </div>
        </section>
      </>
    )
  }
  
  export default Experience;
  
  
  
  // const ExperienceCard = ({ experience, index }) => {
  //   return (
  //     <VisibilitySensor visibilitySensorProps={ { partialVisibility: false, offset: { bottom: 800 } } }>
  //     <VerticalTimelineElement 
  //       className={`timeline-card-${index+1}`} 
  //       date={experience.date}
  //       iconStyle={{ background: experience.iconBg }}
  //       icon={
  //         <div className='flex justify-center items-center w-full h-full'>
  //           <img
  //             src={`assets/company/${experience.icon}.png`}
  //             alt={experience.company_name}
  //             className='img-fluid'
  //           />
  //         </div>
  //       }
        
  //     >
  //         <div>
  //           <div>
  //             <h4 className='heading-tertiary'>{experience.title}</h4>
  //             <h3 className='sub-heading-1' style={{'--clr': `var(--color-${index+6})`}}>{experience.company_name}</h3>
  //           </div>
  //           <div>
  //             <ul>
  //               {experience.points.map((item, index) => (
  //                 <li key={index}>{item}</li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //     </VerticalTimelineElement>
  //     </VisibilitySensor>
  //   )
  // }



//   const experiences = [
//     {
//       title: "React.js Developer",
//       company_name: "Versicle Institute of Technology",
//       icon: "starbucks",
//       iconBg: "#383E56",
//       date: "March 2020 - April 2021",
//       points: [
//         // "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "React Native Developer",
//       company_name: "Gbooks Infotech Private Limited",
//       icon: "tesla",
//       iconBg: "#E6DEDD",
//       date: "Jan 2021 - Feb 2022",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         // "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "Web Developer",
//       company_name: "Shopify",
//       icon: "shopify",
//       iconBg: "#383E56",
//       date: "Jan 2022 - Jan 2023",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "Full stack Developer",
//       company_name: "Meta",
//       icon: "meta",
//       iconBg: "#E6DEDD",
//       date: "Jan 2023 - Present",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         // "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//   ];