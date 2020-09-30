import React from 'react'
import PropTypes from 'prop-types'
import { genericPropTypes, genericPropsDefaults } from '../../utils/prop-types'
// components
import {
  CardContainer,
  CardRow,
  CardCol,
  CompanyTitle,
  CardButton,
  Info,
  InfoTitle,
  TooltipAnchor,
} from './StyledCompanyCard'
import { Tooltip } from '../Tooltip'
import { Inline } from '../Inline'
import { Anchor } from '../Anchor'
// svg icons
import PhoneIcon from '../../assets/Images/phone_volume.svg'
import ExternalLinkIcon from '../../assets/Images/external_link.svg'
import EnvelopeIcon from '../../assets/Images/envelope.svg'
// translations
import LocaleEn from './locale_en.json'
import LocaleCy from './locale_cy.json'

// tooltip text
const openingHoursTooltip = ({ week_days, saturdays, sundays }, lng) => {
  return (
    <>
      {week_days.opens && (
        <>
          <Inline margin="0" textSize="0.875rem" lineHeight="1rem">
            {`${lng.openingTimes.weekdays}: ${week_days.open_time} ${lng.openingTimes.to} ${week_days.close_time}`}
          </Inline>
          {'\n'}
        </>
      )}
      {saturdays.opens && (
        <>
          <Inline margin="0" textSize="0.875rem" lineHeight="1rem">
            {`${lng.openingTimes.saturday}: ${saturdays.open_time} ${lng.openingTimes.to} ${saturdays.close_time}`}
          </Inline>
          {'\n'}
        </>
      )}
      {sundays.opens && (
        <Inline margin="0" textSize="0.875rem" lineHeight="1rem">
          {`${lng.openingTimes.sunday}: ${sundays.open_time} ${lng.openingTimes.to} ${sundays.close_time}`}
        </Inline>
      )}
    </>
  )
}

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
  const { company, online, opening_times, overview } = { ...data }
  // get in touch data
  const { phone, website, email } = { ...online }
  // opening times data
  const { week_days, saturdays, sundays } = { ...opening_times }
  // overview data
  const {
    coronavirus_cancellation_cover,
    coronavirus_medical_expense,
    cruise_cover,
    medical_conditions_cover,
    medical_equipment_cover,
    medical_screening_company,
  } = { ...overview }

  return company || online || overview ? (
    <CardContainer aria-label={a11yTitle || company} {...rest}>
      <CardRow>
        <CardCol margin={{ bottom: '20px' }}>
          {company ? (
            <CompanyTitle level={2} margin="0">
              {company}
            </CompanyTitle>
          ) : (
            <Info>{lng.company.noInfo}</Info>
          )}
        </CardCol>
      </CardRow>
      <CardRow>
        {/** Left Column */}
        <CardCol sizes={{ xs: 12, sm: 3 }}>
          {/** Buttons */}
          {!online && <Info>{lng.getInTouch.noInfo}</Info>}
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
          {/** Opening Times */}
          {opening_times &&
            (week_days.opens || saturdays.opens || sundays.opens) && (
              <Tooltip
                text={openingHoursTooltip(opening_times, lng)}
                minWidth={currentLng === 'cy' ? '240px' : '190px'}
                margin={{ left: '5px' }}
              >
                <Anchor width="auto" margin={{ top: '5px' }}>
                  {lng.openingTimes.title}
                </Anchor>
              </Tooltip>
            )}
        </CardCol>
        {/** Right Column */}
        <CardCol sizes={{ xs: 12, sm: 9 }}>
          {!overview && <Info>{lng.moreInfo.noInfo}</Info>}
          {/** Medical Conditions Cover */}
          {medical_conditions_cover && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.medicalCondition.title} - `}</InfoTitle>
              {medical_conditions_cover.most_conditions_covered
                ? lng.moreInfo.medicalCondition.covered
                : `${lng.moreInfo.medicalCondition.specialised} ${
                    lng.moreInfo.medicalCondition.options[
                      medical_conditions_cover.specialises_in
                    ]
                  }`}
            </Info>
          )}
          {/** Coronavirus Cover for Medical Expenses */}
          {coronavirus_medical_expense !== undefined && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.coronavirusMedicalExpense.title} - `}</InfoTitle>
              {coronavirus_medical_expense ? lng.moreInfo.yes : lng.moreInfo.no}
              <Tooltip
                text={lng.moreInfo.coronavirusMedicalExpense.tooltip}
                side={{ xs: 'bottom', md: 'left' }}
                minWidth="260px"
                margin={{ left: '5px' }}
              >
                <TooltipAnchor>{lng.moreInfo.info}</TooltipAnchor>
              </Tooltip>
            </Info>
          )}
          {/** Coronavirus Cover for Cancelations */}
          {coronavirus_cancellation_cover !== undefined && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.coronavirusCancellationCover.title} - `}</InfoTitle>
              {coronavirus_cancellation_cover
                ? lng.moreInfo.yes
                : lng.moreInfo.no}
              <Tooltip
                text={lng.moreInfo.coronavirusCancellationCover.tooltip}
                side={{ xs: 'bottom', md: 'left' }}
                minWidth="260px"
                margin={{ left: '5px' }}
              >
                <TooltipAnchor>{lng.moreInfo.info}</TooltipAnchor>
              </Tooltip>
            </Info>
          )}
          {/** Medical Equipment Cover */}
          {medical_equipment_cover && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.medicalEquipmentCover.title} - `}</InfoTitle>
              {medical_equipment_cover.offers_cover
                ? `${lng.moreInfo.medicalEquipmentCover.offered}${medical_equipment_cover.cover_amount}`
                : `${lng.moreInfo.medicalEquipmentCover.notOffered}`}
            </Info>
          )}
          {/** Cruise Cover */}
          {cruise_cover !== undefined && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.cruiseCover} - `}</InfoTitle>
              {cruise_cover ? lng.moreInfo.yes : lng.moreInfo.no}
            </Info>
          )}
          {/** Medical Screening */}
          {medical_screening_company && (
            <Info>
              <InfoTitle>{`${lng.moreInfo.medicalScreening.title} - `}</InfoTitle>
              {
                lng.moreInfo.medicalScreening.companies[
                  medical_screening_company
                ]
              }
              <Tooltip
                text={lng.moreInfo.medicalScreening.tooltip}
                side={{ xs: 'bottom', md: 'left' }}
                minWidth="260px"
                margin={{ left: '5px' }}
              >
                <TooltipAnchor>{lng.moreInfo.info}</TooltipAnchor>
              </Tooltip>
            </Info>
          )}
        </CardCol>
      </CardRow>
    </CardContainer>
  ) : null
}

// Documentation
CompanyCard.propTypes = {
  /** Current Language Value */
  currentLng: PropTypes.oneOf(['en', 'cy']),
  /** Company data to be displayed inside the card. */
  data: PropTypes.object,
  /** Alternate translations for the card. */
  i18nLng: PropTypes.object,
  ...genericPropTypes,
}

CompanyCard.defaultProps = {
  currentLng: 'en',
  ...genericPropsDefaults(),
}

/** @component */
export { CompanyCard }
