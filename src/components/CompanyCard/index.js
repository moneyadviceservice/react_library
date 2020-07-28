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
  Info,
  InfoTitle,
} from './StyledCompanyCard'
// svg icons
import PhoneIcon from '../../assets/Images/phone_volume.svg'
import ExternalLinkIcon from '../../assets/Images/external_link.svg'
import EnvelopeIcon from '../../assets/Images/envelope.svg'

const CompanyCard = ({ a11yTitle, children, data, locale, ...rest }) => {
  // destructure firm data from prop
  const { firmName, getInTouch, moreInfo } = data

  const { phone, website, email } = getInTouch

  const {
    medicalCondition,
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
          <SubHeading level={3}>Get in touch</SubHeading>
          {phone && (
            <CardButton href={`tel:${phone}`}>
              <PhoneIcon />
              {phone}
            </CardButton>
          )}
          {website && (
            <CardButton href={website} target="_blank">
              <ExternalLinkIcon />
              Website
            </CardButton>
          )}
          {email && (
            <CardButton href={`mailto:${email}`}>
              <EnvelopeIcon />
              Email
            </CardButton>
          )}
        </CardCol>
        <CardCol sizes={{ xs: 12, sm: 8 }}>
          <SubHeading level={3}>More info</SubHeading>
          {medicalCondition && (
            <Info>
              <InfoTitle>Medical conditions - </InfoTitle>
              {medicalCondition}
            </Info>
          )}
          {ageLimit && (
            <Info>
              <InfoTitle>Age limits - </InfoTitle>
              {ageLimit}
            </Info>
          )}
          {destination && (
            <Info>
              <InfoTitle>Destinations - </InfoTitle>
              {destination}
            </Info>
          )}
          {durationLimit && (
            <Info>
              <InfoTitle>Duration limits - </InfoTitle>
              {durationLimit}
            </Info>
          )}
          {treatmentStage && (
            <Info>
              <InfoTitle>Treatment stages - </InfoTitle>
              {treatmentStage}
            </Info>
          )}
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
