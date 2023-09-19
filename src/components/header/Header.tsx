import { StickyBar, Typography } from '@okmtyuta/amatelas/server'
import styles from './header.module.css'

export const Header = ({ className }: { className?: string }) => {
  return (
    <StickyBar position="top" className={styles['header']}>
      <div className={`${styles['header-content']} ${className}`}>
        <Typography color="primary" fontFamily="anton">
          okmtyuta
        </Typography>
      </div>
    </StickyBar>
  )
}
