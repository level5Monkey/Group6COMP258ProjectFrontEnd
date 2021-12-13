import {useState} from 'react'
import styles from '../styles/Home.module.css'


export default function Home({  }) {
  
  // const handleSubmit = ((event) => {
  //   event.preventDefault()
  //   alert(`So your name is ${event.target."Intake College Experience".value}?`);
  // })

  const [INTAKE_COLLEGE_EXPERIENCE, setINTAKE_COLLEGE_EXPERIENCE] = useState('New to College')
  const [SCHOOL_CODE, setSCHOOL_CODE] = useState('AS')
  const [STUDENT_LEVEL_NAME, setSTUDENT_LEVEL_NAME] = useState('Post Secondary')
  const [TIME_STATUS_NAME, setTIME_STATUS_NAME] = useState('Full-Time')
  const [RESIDENCY_STATUS_NAME, setRESIDENCY_STATUS_NAME] = useState('Resident')
  const [FUNDING_SOURCE_NAME, setFUNDING_SOURCE_NAME] = useState('GPOG - FT')
  const [GENDER, setGENDER] = useState('M')
  const [DISABILITY_IND, setDISABILITY_IND] = useState('Y')
  const [ACADEMIC_PERFORMANCE, setACADEMIC_PERFORMANCE] = useState('AB - Good')
  const [FIRST_YEAR_PERSISTENCE_COUNT, setFIRST_YEAR_PERSISTENCE_COUNT] = useState('0')
  const [ENGLISH_TEST_SCORE, setENGLISH_TEST_SCORE] = useState('Good')
  const [AGE_GROUP_LONG_NAME, setAGE_GROUP_LONG_NAME] = useState('0 to 18')
  const [APPL_FIRST_LANGUAGE_DESC, setAPPL_FIRST_LANGUAGE_DESC] = useState('English')
  const [APPLICANT_CATEGORY_NAME, setAPPLICANT_CATEGORY_NAME] = useState('High School')
  const [APPLICANT_TARGET_SEGMENT_NAME, setAPPLICANT_TARGET_SEGMENT_NAME] = useState('Direct Entry')
  const [LOCATION, setLOCATION] = useState('M')
  const [PROGRAM_LENGTH, setPROGRAM_LENGTH] = useState('0')
  const [REST_SEMESTERS, setREST_SEMESTERS] = useState('0')

  const handleParam = setValue => e => setValue(e.target.value)

  const submit = (event) => {
    event.preventDefault();
    const res = fetch('http://localhost:5000/predict', {
      method: 'post',
      body: JSON.stringify({
        "INTAKE COLLEGE EXPERIENCE":             INTAKE_COLLEGE_EXPERIENCE      ,
        "SCHOOL CODE":                           SCHOOL_CODE                    ,
        "STUDENT LEVEL NAME":                    STUDENT_LEVEL_NAME             ,
        "TIME STATUS NAME":                      TIME_STATUS_NAME               ,
        "RESIDENCY STATUS NAME":                 RESIDENCY_STATUS_NAME          ,
        "FUNDING SOURCE NAME":                   FUNDING_SOURCE_NAME            ,
        "GENDER":                                GENDER                         ,
        "DISABILITY IND":                        DISABILITY_IND                 ,
        "ACADEMIC PERFORMANCE":                  ACADEMIC_PERFORMANCE           ,
        "FIRST YEAR PERSISTENCE COUNT":          FIRST_YEAR_PERSISTENCE_COUNT   ,
        "ENGLISH TEST SCORE":                    ENGLISH_TEST_SCORE             ,
        "AGE GROUP LONG NAME":                   AGE_GROUP_LONG_NAME            ,
        "APPL FIRST LANGUAGE DESC":              APPL_FIRST_LANGUAGE_DESC       ,
        "APPLICANT CATEGORY NAME":               APPLICANT_CATEGORY_NAME        ,
        "APPLICANT TARGET SEGMENT NAME":         APPLICANT_TARGET_SEGMENT_NAME  ,
        "LOCATION":                              LOCATION                       ,
        "PROGRAM LENGTH":                        PROGRAM_LENGTH                 ,
        "REST SEMESTERS":                        REST_SEMESTERS                 ,
      })
    }).then(response => response.json()).then(data => alert(`Your program completion probability is ${data.result * 100}%`));
    //alert(`${res.result}`);
  }

  // const submitInfo = async (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const res = await ;
  //   const result = await res.json();
  //   alert(`${result.result}`);
  // };

  return (
    <div>
      <form onSubmit={submit}>
          <label>Intake College Experience:</label>
          <br/>
          <select name="Intake College Experience" id="Intake College Experience" onChange={(e) => {setINTAKE_COLLEGE_EXPERIENCE(e.target.value)}}>
            <option value="New to College">New to College</option>
            <option value="Enrolled">Enrolled</option>
            <option value="CE Enrolled">CE Enrolled</option>
            <option value="Prep Program Enrolled">Prep Program Enrolled</option>
            <option value="Prep Program Graduate">Prep Program Graduate</option>
            <option value="Graduate">Graduate</option>
          </select>
          <br/>
          <label>School Code:</label>
          <br/>
          <select name="School Code" id="School Code" onChange={(e) => {setSCHOOL_CODE(e.target.value)}}>
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
          <select name="STUDENT LEVEL NAME" id="STUDENT LEVEL NAME" onChange={(e) => {setSTUDENT_LEVEL_NAME(e.target.value)}}>
            <option value="Post Secondary">Post Secondary</option>
            <option value="Post Diploma">Post Diploma</option>
          </select>
          <br/>
          <label>Program Type:</label>
          <br/>
          <select name="TIME STATUS NAME" id="TIME STATUS NAME" onChange={(e) => {setTIME_STATUS_NAME(e.target.value)}}>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
          </select>
          <br/>
          <label>Residency Status:</label>
          <br/>
          <select name="RESIDENCY STATUS NAME" id="RESIDENCY STATUS NAME" onChange={(e) => {setRESIDENCY_STATUS_NAME(e.target.value)}}>
            <option value="Resident">Resident</option>
            <option value="Non-Resident">Non-Resident</option>
          </select>
          <br/>
          <label>FUNDING SOURCE:</label>
          <br/>
          <select name="FUNDING SOURCE NAME" id="FUNDING SOURCE NAME" onChange={(e) => {setFUNDING_SOURCE_NAME(e.target.value)}}>
            <option value="GPOG - FT">GPOG - FT</option>
            <option value="GPOG - PT">GPOG - PT</option>
            <option value="Second Career Program">Second Career Program</option>
            <option value="Apprentice - PS">Apprentice - PS</option>
            <option value="Intl - Regular">Intl - Regular</option>
          </select>
          <br/>
          <label>Gender:</label>
          <br/>
          <select name="GENDER" id="GENDER" onChange={(e) => {setGENDER(e.target.value)}}>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="N">N</option>
          </select>
          <br/>
          <label>Disability:</label>
          <br/>
          <select name="DISABILITY IND" id="DISABILITY IND" onChange={(e) => {setDISABILITY_IND(e.target.value)}}>
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
          <br/>
          <label>Academic Performance:</label>
          <br/>
          <select name="ACADEMIC PERFORMANCE" id="ACADEMIC PERFORMANCE" onChange={(e) => {setACADEMIC_PERFORMANCE(e.target.value)}}>
            <option value="AB - Good">AB - Good</option>
            <option value="C - Satisfactory">C - Satisfactory</option>
            <option value="DF - Poor">DF - Poor</option>
            <option value="ZZ - Unknown">ZZ - Unknown</option>
          </select>
          <br/>
          <label>FIRST YEAR PERSISTENCE COUNT:</label>
          <br/>
          <select name="FIRST YEAR PERSISTENCE COUNT" id="FIRST YEAR PERSISTENCE COUNT" onChange={(e) => {setFIRST_YEAR_PERSISTENCE_COUNT(e.target.value)}}>
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
          <br/>
          <label>English Test Score:</label>
          <br/>
          <select name="English Test Score" id="English Test Score" onChange={(e) => {setENGLISH_TEST_SCORE(e.target.value)}}>
            <option value="Good">170-171</option>
            <option value="Average">160-161</option>
            <option value="Below Average">below 160</option>
          </select>
          <br/>
          <label>Age Group:</label>
          <br/>
          <select name="AGE GROUP LONG NAME" id="AGE GROUP LONG NAME" onChange={(e) => {setAGE_GROUP_LONG_NAME(e.target.value)}}>
            <option value="0 to 18">0 to 18</option>
            <option value="19 to 20">19 to 20</option>
            <option value="21 to 25">21 to 25</option>
            <option value="26 to 30">26 to 30</option>
            <option value="31 to 35">31 to 35</option>
            <option value="36 to 40">36 to 40</option>
            <option value="41 to 50">41 to 50</option>
          </select>
          <br/>
          <label>First Language:</label>
          <br/>
          <select name="APPL FIRST LANGUAGE DESC" id="APPL FIRST LANGUAGE DESC" onChange={(e) => {setAPPL_FIRST_LANGUAGE_DESC(e.target.value)}}>
            <option value="English">English</option>
            <option value="Other">Other</option>
          </select>
          <br/>
          <label>Applicant Category:</label>
          <br/>
          <select name="APPLICANT CATEGORY NAME" id="APPLICANT CATEGORY NAME" onChange={(e) => {setAPPLICANT_CATEGORY_NAME(e.target.value)}}>
            <option value="High School">High School</option>
            <option value="Post Secondary">Post Secondary</option>
            <option value="No Academic History">No Academic History</option>
          </select>
          <br/>
          <label>Applicant Target Segment:</label>
          <br/>
          <select name="APPLICANT TARGET SEGMENT NAME" id="APPLICANT TARGET SEGMENT NAME" onChange={(e) => {setAPPLICANT_TARGET_SEGMENT_NAME(e.target.value)}}>
            <option value="Direct Entry">Direct Entry</option>
            <option value="Non-Direct Entry">Non-Direct Entry</option>
            <option value="International">International</option>
            <option value="Unknown">Other</option>
          </select>
          <br/>
          <label>Location:</label>
          <br/>
          <select name="LOCATION" id="LOCATION" onChange={(e) => {setLOCATION(e.target.value)}}>
            <option value="M">Metropolitan Toronto</option>
            <option value="L">Central Ontario</option>
            <option value="N">Southwestern Ontario</option>
            <option value="J">Western Quebec</option>
            <option value="K">Eastern Ontario</option>
            <option value="V">British Columbia</option>
          </select>
          <br/>
          <label className={styles.inputLabel}>Program Length(months):</label><br/>
          <input type="text" id="PROGRAM LENGTH" name="PROGRAM LENGTH" onChange={(e) => {setPROGRAM_LENGTH(e.target.value)}}></input><br/>
          <br/>
          <label className={styles.inputLabel}>REST SEMESTERS:</label><br/>
          <input type="text" id="REST SEMESTERS" name="REST SEMESTERS" onChange={(e) => {setREST_SEMESTERS(e.target.value)}}></input><br/>
          <br/>
          <input type='submit'></input>
      </form>
    </div>
  )
}


