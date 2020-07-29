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
// translations
import LocaleEn from './locale_en.json'
import LocaleCy from './locale_cy.json'

const CompanyCard = ({
  a11yTitle,
  children,
  currentLng,
  data,
  i18nLng,
  ...rest
}) => {
  // locale
  const lng = i18nLng || (currentLng === 'cy' ? LocaleCy : LocaleEn)

  // destructure firm data from prop
  const { firmName, getInTouch, moreInfo } = data
  // get in touch data
  const { phone, website, email } = getInTouch
  // more info data
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
          <SubHeading level={3}>{lng.getInTouch.title}</SubHeading>
          {phone && (
            <CardButton href={`tel:${phone}`}>
              <PhoneIcon />
              {phone}
            </CardButton>
          )}
          {website && (
            <CardButton href={website} target="_blank">
              <ExternalLinkIcon />
              {lng.getInTouch.website}
            </CardButton>
          )}
          {email && (
            <CardButton href={`mailto:${email}`}>
              <EnvelopeIcon />
              {lng.getInTouch.email}
            </CardButton>
          )}
        </CardCol>
        <CardCol sizes={{ xs: 12, sm: 8 }}>
          <SubHeading level={3}>{lng.moreInfo.title}</SubHeading>
          {medicalCondition && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.medicalCondition} - `}</InfoTitle>
              {medicalCondition}
            </Info>
          )}
          {ageLimit && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.ageLimit} - `}</InfoTitle>
              {ageLimit}
            </Info>
          )}
          {destination && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.destination} - `}</InfoTitle>
              {destination}
            </Info>
          )}
          {durationLimit && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.durationLimit} - `}</InfoTitle>
              {durationLimit}
            </Info>
          )}
          {treatmentStage && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.treatmentStage} - `}</InfoTitle>
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
  /** Current Language Value */
  currentLng: PropTypes.oneOf(['en', 'cy']),
  /** Company data to be displayed inside the card. */
  data: PropTypes.object,
  /** Alternate translations for header. */
  i18nLng: PropTypes.object,
  ...genericPropTypes,
}

CompanyCard.defaultProps = {
  currentLng: 'en',
  ...genericPropsDefaults(),
}

/** @component */
export { CompanyCard }
