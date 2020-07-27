import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
import {
  CardContainer,
  CardRow,
  CardCol,
  CompanyTitle,
  SubHeading,
  CardButton,
} from './StyledCompanyCard'
// svg icons
import PhoneIcon from '../../assets/Images/phone_volume.svg'
import ExternalLinkIcon from '../../assets/Images/external_link.svg'
import EnvelopeIcon from '../../assets/Images/envelope.svg'

const CompanyCard = ({ a11yTitle, children, data, ...rest }) => {
  const { firmName, getInTouch, moreInfo } = data

  const { phone, website, email } = getInTouch

  const {
    medicalCondiditon,
    ageLimit,
    destination,
    durationLimit,
    treatmentStage,
  } = moreInfo

  return (
    <CardContainer aria-label={a11yTitle || firmName} {...rest}>
      <CardRow>
        <CardCol>
          <CompanyTitle level={2} margin="0">
            {firmName}
          </CompanyTitle>
        </CardCol>
      </CardRow>
      <CardRow>
        <CardCol sizes={{ xs: 12, sm: 4 }}>
          <SubHeading level={4}>Get in touch</SubHeading>
          <CardButton href={`tel:${phone}`}>
            <PhoneIcon />
            {phone}
          </CardButton>
          <CardButton href={website} target="_blank">
            <ExternalLinkIcon />
            Website
          </CardButton>
          <CardButton href={`mailto:${email}`}>
            <EnvelopeIcon />
            Email
          </CardButton>
        </CardCol>
        <CardCol sizes={{ xs: 12, sm: 8 }}>
          <SubHeading level={4}>More info</SubHeading>
        </CardCol>
      </CardRow>
    </CardContainer>
  )
}

// Documentation
CompanyCard.propTypes = {
  /** Company data to be displayed inside the card. */
  data: PropTypes.object,
  ...genericPropTypes,
}

CompanyCard.defaultProps = {
  ...genericPropsDefaults(),
}

/** @component */
export { CompanyCard }
