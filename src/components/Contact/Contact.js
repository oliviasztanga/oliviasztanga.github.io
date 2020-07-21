import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { generateHeading } from '../../utilities/misc'
import { TextField, Button, makeStyles } from '@material-ui/core'
import styles from './styles.module.scss'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '450px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
    },
    button: {
      fontFamily: 'Inconsolate, monospace',
      fontSize: 13
    }
  }))

const Contact = () => {
    const overrides = useStyles()

    const [submitted, changeSubmitted] = useState(false)
    const toggleSubmitted = () => changeSubmitted(true)
    const [error, setError] = useState(null)

    const sendEmail = async (e) => {
      e.preventDefault()
      try {
        await emailjs.sendForm('gmail', 'portfolio_submission', e.target, 'user_352D43u7Rfc5UeCAd5SAV')
        toggleSubmitted()
      } catch (error) {
        setError(error.text)
      }
    }

    return (
        <section id="contact" className={styles.contact} >

            {generateHeading('04', 'Get In Touch')}

            <div className={styles.form}>

              {submitted
                ? <p className="h--3 daylight">Thanks! Talk to you soon!</p>
                : (
                  <>
                    { error
                      ? (
                        <>
                          <p className="h--3">Uh oh! Something went wrong.</p>
                          <p className="h--3 mb-lg">Why don't we try again?</p>
                        </>
                      ) : (
                        <>
                          <p className="h--3">Working on something exciting?</p>
                          <p className="h--3 mb-lg">I'd love to hear from you.</p>
                        </>
                      )
                    }

                    <form
                      className={overrides.root}
                      noValidate
                      autoComplete="off"
                      onSubmit={sendEmail}
                    >
                      <TextField 
                        label="name"
                        name="name" 
                        type="text"
                        variant="outlined" 
                        color="secondary"
                      />
                      <TextField 
                        label="email"
                        name="email"
                        type="email"
                        variant="outlined"
                        color="secondary"
                      />
                      <TextField
                        label="message"
                        name="message"
                        type="text"
                        variant="outlined"
                        color="secondary"
                        multiline rows={5} 
                      />
                      <Button 
                        variant="contained"
                        color="secondary"
                        classes={{ label: overrides.button  }}
                        type="submit"
                        value="Submit"
                      >Submit</Button>

                    </form>
                  </>
                )}

            </div>

        </section>
    )
}

export default Contact