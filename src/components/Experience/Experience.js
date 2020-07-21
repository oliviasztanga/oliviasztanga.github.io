import React, { useState } from 'react'
import classnames from 'classnames'
import { Tabs, Tab, makeStyles } from '@material-ui/core'
import { generateHeading, generateScrollBtn } from '../../utilities/misc'
import experience from '../../assets/content/experience'
import styles from './styles.module.scss'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'transparent',
      display: 'flex',
      flexGrow: 1,
      height: '50%',
      justifyContent: 'center'
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    wrapper: {
        alignItems: 'flex-start',
        fontFamily: 'Karla, sans-serif',
        fontSize: 10,
        fontWeight: '700'
    }
  }))

const Experience = () => {
    const overrides = useStyles()
    const [tab, setTab] = useState(0)

    const changeTab = (event, newValue) => setTab(newValue)

    return (
        <section id="experience" className={styles.experience}>
            
            { generateHeading('02', 'Experience') }

            <div className={overrides.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={tab}
                    onChange={changeTab}
                    className={overrides.tabs}
                >
                    {experience.map((item) => {
                        const { organization } = item
                        return <Tab 
                            key={organization}
                            label={organization}
                            disableRipple={true}
                            classes={{ wrapper: overrides.wrapper }}
                        />
                    })}
                </Tabs>

                {experience.map((item, idx) => {
                    const { organization, positions } = item
                    return  <TabPanel tab={tab} index={idx} key={idx} >
                        <>
                            {positions.map((item, idx) => {
                                const { title, start, end, bullets } = item
                                return <div key={idx} >
                                    <h5 className="h--5">
                                        {title}
                                        {idx === 0 && ` @ ${organization}`}
                                    </h5>
                                    <p className="type--accent mb-xs">{start} - {end}</p>
                                    <ul className={classnames(styles.bullets, "mb-sm")}>
                                        {bullets.map((bullet, idx) => <li className={styles.bullet} key={idx}>{bullet}</li>)}
                                    </ul>
                                </div>
                            })}
                        </>
                    </TabPanel>
                })}

            </div>

            { generateScrollBtn('projects') }

        </section>
    )
}

export default Experience

const TabPanel = (props) => {
    const { children, tab, index, ...other } = props
  
    return (
      <div
        role="tabpanel"
        hidden={tab !== index}
        id={`vertical-tabpanel-${index}`}
        {...other}
        className={styles.tabPanel}
      >
        {tab === index && (
          <>
            {children}
          </>
        )}
      </div>
    )
  }