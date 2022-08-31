import React from 'react'

const About = () => {
  return (
    <div className="container-fluid section my-5 py-5" id="about-me">
            <div className="accordion container" id="accordionExample">
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className="fa-solid fa-font-awesome fs-3 me-2 icon"></i> Leader
                  </button>
                </h3>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body content">
                    Throughout my time with Bitwise, a nationwide tech company, I have harnessed my leadership capabilities in and outside the classroom by participating in their student lead study groups. I have contributed to the success of other students by excelling in the material presented. I also problem-solve any issues others may encounter while going through unfamiliar material and being clear and concise with my explanations to my peers.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i className="fa-solid fa-person-running fs-3 me-2 icon"></i> Runner
                  </button>
                </h3>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body content">
                    What started my running journey was a book I read: "Can’t Hurt Me" by David Goggins. I have now been running for a little over a year. I have run as little as half a mile 
                    and as much as a marathon this time. Running is not stale; each run has its personality, and how we navigate its characteristics is what makes us our own. I will continue
                    to run with the next goal of qualifying for the Boston Marathon in my upcoming LA marathon race, with Ultramarathons over the horizon.  <br/>
                    <b>Past Accomplishment</b>: Running a marathon in 6 hours and 32mins. <br/>
                    <b>Upcoming Accomplishment</b>: Running the Boston Marathon.  
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default About