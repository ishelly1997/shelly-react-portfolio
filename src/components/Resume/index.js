import React from 'react'
import '../../assets/style.css'
import hhlogo from '../../assets/hhhs.png'
import genlogo from '../../assets/geneseo.png'
import culogo from '../../assets/culogo.png'
import soh from '../../assets/SOHHlogo2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Resume() {
  return (
    <div>
      <section>
        <div class="resume container">
          <div class="row">
            <div class="col sm-4" id="education">
              <h4>Education</h4>
              <li>
                <img id="hhlogo" src={hhlogo}></img>
                <h5>Hendrick Hudson Schools</h5>
              </li>
              <li>
                <img id='genlogo' src={genlogo}></img>
                <h5>SUNY Geneseo</h5>
              </li>
              <li>
                <img id='culogo' src={culogo}></img>
                <h5>Columbia University Coding Bootcamp</h5>
              </li>
            </div>
            <div class="col sm-4" id="work">
              <h4>Work Experience</h4>
              <div id="work-ex">
                <img id="soh" src={soh}></img>
                <h5>Summer on the Hill</h5>
                <p>Educational Non-Profit Organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  )
}
