import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css'


export default function Home({  }) {
  
  return (
    <div>
      <form>
          <label className={styles.inputLabel}>First Name:</label><br/>
          <input type="text" id="fname" name="fname"></input><br/>
          <label className={styles.inputLabel}>Last Name:</label><br/>
          <input type="text" id="lname" name="lname"></input><br/>
          <label className={styles.inputLabel}>Student Number:</label><br/>
          <input type="text" id="snumber" name="snumber"></input><br/>
          <label>Intake College Experience:</label>
          <br/>
          <select name="experience" id="experience">
            <option value="new">New to College</option>
            <option value="enrolled">Enrolled</option>
          </select>
          <br/>
          <label>School Code:</label>
          <br/>
          <select name="code" id="code">
            <option value="AS">AS</option>
            <option value="CH">CH</option>
            <option value="BU">BU</option>
            <option value="ST">ST</option>
            <option value="HT">HT</option>
            <option value="CA">CA</option>
            <option value="TR">TR</option>
          </select>
          <br/>
          <label>Student Level:</label>
          <br/>
          <select name="level" id="level">
            <option value="post">Post Secondary</option>
            <option value="diploma">Post Diploma</option>
          </select>
          <br/>
          <label>Program Type:</label>
          <br/>
          <select name="program" id="program">
            <option value="fulltime">Full-Time</option>
            <option value="parttime">Part-Time</option>
          </select>
          <br/>
          <label>Residency Status:</label>
          <br/>
          <select name="residency" id="residency">
            <option value="resident">Resident</option>
            <option value="nonresident">Non-Resident</option>
          </select>
          <br/>
          <label>Gender:</label>
          <br/>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br/>
          <label>Disability:</label>
          <br/>
          <select name="disability" id="disability">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br/>
          <label>Academic Performance:</label>
          <br/>
          <select name="academic" id="academic">
            <option value="good">AB - Good</option>
            <option value="satisfactory">C - Satisfactory</option>
            <option value="poor">DF - Poor</option>
            <option value="other">Other</option>
          </select>
          <br/>
          <label>English Test Score:</label>
          <br/>
          <select name="english" id="english">
            <option value="high">171</option>
            <option value="medium">161</option>
            <option value="low">below 161</option>
          </select>
          <br/>
          <label>Age Group:</label>
          <br/>
          <select name="age" id="age">
            <option value="resident">0 to 18</option>
            <option value="resident">19 to 20</option>
            <option value="resident">21 to 25</option>
            <option value="resident">26 to 30</option>
            <option value="resident">31 to 35</option>
            <option value="resident">36 to 40</option>
            <option value="resident">41 to 50</option>
            <option value="resident">51 to 60</option>
          </select>
          <br/>
          <label>First Language:</label>
          <br/>
          <select name="firstLanguage" id="firstLanguage">
            <option value="english">English</option>
            <option value="other">Other</option>
          </select>
          <br/>
          <label>Applicant Target Segment:</label>
          <br/>
          <select name="level" id="level">
            <option value="resident">Direct Entry</option>
            <option value="resident">Non-Direct Entry</option>
            <option value="resident">International</option>
            <option value="resident">Other</option>
          </select>
          <br/>
          <label>Previous Education Level:</label>
          <br/>
          <select name="level" id="level">
            <option value="resident">High School</option>
            <option value="resident">Post Secondary</option>
            <option value="resident">Other</option>
          </select>
          <br/>
          <label>Rest Semesters:</label>
          <br/>
          <select name="level" id="level">
            <option value="resident">0</option>
            <option value="resident">1</option>
            <option value="resident">2</option>
            <option value="resident">3</option>
            <option value="resident">4</option>
            <option value="resident">5</option>
            <option value="resident">6</option>
          </select>
          <br/>
          <input type='submit'></input>
      </form>
    </div>
  )
}


