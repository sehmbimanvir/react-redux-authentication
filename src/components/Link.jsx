import React from 'react'
import { A, usePath } from 'hookrouter'

const Link = ({ to, children }) => (
  <A className={to === usePath() ? 'active' : null} href={to}>{children}</A>
)

export default Link