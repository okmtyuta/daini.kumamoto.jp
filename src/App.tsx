import './reset.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import {
  Frame,
  Typography,
  Link,
  Paragraph,
  Space
} from '@okmtyuta/amatelas/server'
import '@okmtyuta/amatelas/server/index.css'

import styles from './app.module.css'

export const App = () => {
  return (
    <div className={styles['app']}>
      <Header className={styles['header']} />
      <Frame className={styles['frame']}>
        <Paragraph>
          <Typography fontSize="heading2">
            Welcome!! This page is managed by
            <Space />
            <Link href="https://mirror.me.okmtyuta.jp" underlined>
              okmtyuta
            </Link>
            .
          </Typography>
        </Paragraph>
        <Paragraph>
          <Typography fontSize="heading2">
            Repository is:
            <Space />
            <Link underlined href="https://github.com/okmtyuta/daini.kumamoto.jp">
              daini.kumamoto.jp
            </Link>
          </Typography>
        </Paragraph>
      </Frame>
      <Footer className={styles['footer']} />
    </div>
  )
}
