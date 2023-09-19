import './reset.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Frame, Typography, Link } from '@okmtyuta/amatelas/server'
import '@okmtyuta/amatelas/server/index.css'

import styles from './app.module.css'

export const App = () => {
  return (
    <div className={styles['app']}>
      <Header className={styles['header']} />
      <Frame className={styles["frame"]}>
        <Typography color='info' fontSize="heading2">
          Welcome!! This page is managed by{' '}
          <Link href="https://mirror.me.okmtyuta.jp" underlined>
            okmtyuta
          </Link>
          .
        </Typography>
      </Frame>
      <Footer className={styles['footer']} />
    </div>
  )
}
