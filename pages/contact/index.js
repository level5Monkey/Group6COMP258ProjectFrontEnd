import {useRouter} from 'next/router'
import styles from '../../styles/Contact.module.css'


export default function Home({  }) {
  
  return (
    <div>
      <form>
          <label className={styles.inputLabel}>First Name:</label><br/>
          <input type="text" id="fname" name="fname"></input><br/>
          <label className={styles.inputLabel}>Last Name:</label><br/>
          <input type="text" id="lname" name="lname"></input><br/>
          <label className={styles.inputLabel}>Email:</label><br/>
          <input type="email" id="email" name="email"></input><br/>
          <label className={styles.inputLabel}>Comment:</label><br/>
          <textarea id="comment" name="comment" className={styles.inputComment}></textarea><br/>
          <br/>
          <input type='submit'></input>
      </form>
    </div>
  )
}


