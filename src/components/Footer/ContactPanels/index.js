import React, { useState, useEffect } from 'react'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import {
  ContactPanelContainer,
  ContactPanelColumn,
  ContactPanelRow,
  FooterButtons,
  WebChatIcon,
  WhatsAppIcon,
  PhoneIcon,
} from './StyledContactPanels'

import { Heading } from '../../Heading'
import { Paragraph } from '../../Paragraph'

const ContactPanels = () => {
  
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState()

  // manage opening hours
  useEffect(() => {
    const day = date.getDay()
    const hour = date.getHours()

    if (day == 0) {
      // sunday
      setOpen(false)
    } else if (day == 6) {
      // saturday
      hour >= 8 && hour < 15 ? setOpen(true) : setOpen(false)
    } else if (hour >= 8 && hour < 18) {
      //  weekdays between 8am and 6pm
      setOpen(true)
    } else {
      // weekdays outside opening hours
      setOpen(false)
    }
  })
  
  return (
    <ContactPanelRow align="stretch">
      <ContactPanelContainer
        sizes={{ xs: 12, md: 4 }}
        align={{ xs: 'center', md: 'flex-start' }}
      >
        <ContactPanelColumn grow={false}>
          <Heading level={2}>
            <WebChatIcon />
            Web Chat
          </Heading>
          <Paragraph textSize="16px">
            Got a question? Our advisers will point you in the right direction.
          </Paragraph>
          <Paragraph margin="0px" textSize="16px">
            Monday to Friday, 8am to 6pm Saturday, 8am to 3pm
          </Paragraph>
          <Paragraph textSize="16px">
            Sunday and Bank Holidays, closed
          </Paragraph>
          <Paragraph textSize="16px">
            We are currently experiencing high volumes across our service, wait
            times may be longer than normal.
          </Paragraph>
          <FooterButtons
            text="Launch Chat"
            alignSelf="center"
            weight={400}
            disabled={!open}
          />
        </ContactPanelColumn>
      </ContactPanelContainer>

      <ContactPanelContainer
        sizes={{ xs: 12, md: 4 }}
        align={{ xs: 'center', md: 'flex-start' }}
      >
        <ContactPanelColumn grow={false}>
          <Heading level={2}>
            <WhatsAppIcon />
            WhatsApp
          </Heading>
          <Paragraph margin="0px" textSize="16px">
            Need help sorting out your debts, have credit questions or want
            pensions guidance?
          </Paragraph>
          <Paragraph textSize="16px">
            Add +44 7701 342744 to your Whatsapp and send us a message.
          </Paragraph>
          <Paragraph textSize="16px">
            For everything else please contact us via Webchat or Telephone.
          </Paragraph>
          <FooterButtons
            alignSelf="center"
            weight={400}
            text="Launch Chat"
            href="https://wa.me/447701342744"
            target="_blank"
            disabled={!open}
          />
        </ContactPanelColumn>
      </ContactPanelContainer>

      <ContactPanelContainer
        sizes={{ xs: 12, md: 4 }}
        align={{ xs: 'center', md: 'flex-start' }}
      >
        <ContactPanelColumn grow={false}>
          <Heading level={2}>
            <PhoneIcon />
            Contact us
          </Heading>
          <Paragraph textSize="16px">
            Give us a call for free and impartial money advice.
          </Paragraph>
          <Paragraph textSize={{ xs: '24px', sm: '30px' }} weight={700}>
            0800 138 7777
          </Paragraph>
          <Paragraph margin="0px" textSize="16px">
            Monday to Friday, 8am to 6pm Saturday, Sunday and Bank Holidays,
            closed
          </Paragraph>
          <Paragraph textSize="16px">
            Our general email address is enquiries@maps.org.uk.
          </Paragraph>
          <FooterButtons
            text="Send Email"
            alignSelf="center"
            weight={400}
            href="mailto:enquiries@maps.org.uk"
          />
          <Paragraph margin="12px 0" textSize="16px">
            We will normally respond to your enquiry within 48 hours of receipt.
          </Paragraph>
        </ContactPanelColumn>
      </ContactPanelContainer>
    </ContactPanelRow>
  )
}

ContactPanels.prototypes = {
  ...genericPropTypes,
}
ContactPanels.defaultProps = {
  ...genericPropsDefaults(),
}

export default ContactPanels
