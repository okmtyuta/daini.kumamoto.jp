import { Space, Typography } from '@okmtyuta/amatelas/server'
import styles from './footer.module.css'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`${styles['footer']} ${className}`}>
      Designed by
      <Space />
      <Typography color="primary" fontFamily="anton">
        okmtyuta
      </Typography>
    </footer>
  )
}
