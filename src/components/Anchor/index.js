import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import { StyledLink } from './StyledAnchor'

const Anchor = ({ href, target, color, onClick, children }) => (
  <Link href={href}>
    <StyledLink debug>{name}</StyledLink>
  </Link>
)

export { Anchor }
