import React, { useState, useEffect, useContext } from 'react'
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
  Email,
  PhoneNumber,
} from './StyledContactPanels'
// components
import { Heading } from '../../Heading'
import { Paragraph } from '../../Paragraph'
// context
import LocaleContext from '../LocaleContext'

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

  // manage translations
  let { webchat, whatsapp, contact } = useContext(LocaleContext).ContactPanels

  return (
    <ContactPanelRow align="stretch">
      <ContactPanelContainer
        sizes={{ xs: 12, md: 4 }}
        align={{ xs: 'center', md: 'flex-start' }}
      >
        <ContactPanelColumn grow={false}>
          <Heading level={2}>
            <WebChatIcon />
            {webchat.title}
          </Heading>
          {open && (
            <Paragraph textSize="16px">{webchat.available_cto}</Paragraph>
          )}
          <Paragraph margin="0" textSize="16px">
            {webchat.text_1}
          </Paragraph>
          <Paragraph margin="0" textSize="16px">
            {webchat.text_2}
          </Paragraph>
          <Paragraph textSize="16px">{webchat.text_3}</Paragraph>
          <FooterButtons
            text={
              open
                ? webchat.button_text.available
                : webchat.button_text.unavailable
            }
            alignSelf="center"
            weight={400}
            disabled={!open}
          />
          <Paragraph margin="12px 0" textSize="16px">
            {webchat.long_wait}
          </Paragraph>
        </ContactPanelColumn>
      </ContactPanelContainer>

      <ContactPanelContainer
        sizes={{ xs: 12, md: 4 }}
        align={{ xs: 'center', md: 'flex-start' }}
      >
        <ContactPanelColumn grow={false}>
          <Heading level={2}>
            <WhatsAppIcon />
            {whatsapp.title}
          </Heading>
          <Paragraph textSize="16px">{whatsapp.text_1}</Paragraph>
          <Paragraph textSize="16px">{whatsapp.text_2}</Paragraph>
          <Paragraph textSize="16px">{whatsapp.text_3}</Paragraph>
          <FooterButtons
            text={
              open
                ? whatsapp.button_text.available
                : whatsapp.button_text.unavailable
            }
            alignSelf="center"
            weight={400}
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
            {contact.title}
          </Heading>
          <Paragraph textSize="16px">{contact.text_1}</Paragraph>
          <PhoneNumber href={contact.phone_url} target="_blank">
            {contact.phone_number}
          </PhoneNumber>
          <Paragraph margin="0px" textSize="16px">
            {contact.text_2}
          </Paragraph>
          <Paragraph textSize="16px">{contact.text_3}</Paragraph>
          <Paragraph textSize="16px">
            {contact.email_text}
            <Email textSize="16px" href={`mailto:${contact.email_address}`}>
              {contact.email_address}
            </Email>
          </Paragraph>
          <FooterButtons
            text={contact.button_text}
            alignSelf="center"
            weight={400}
            href="mailto:enquiries@maps.org.uk"
          />
          <Paragraph margin="12px 0" textSize="16px">
            {contact.text_4}
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
