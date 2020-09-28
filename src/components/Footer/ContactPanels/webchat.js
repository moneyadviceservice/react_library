import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../Button'

// https://webchat.moneyadviceservice.org.uk/stat.gif?u=541-1571918368140&d=www.moneyadviceservice.org.uk&p=%27https%3A//www.moneyadviceservice.org.uk/en%27&r=%27%27&response=g&timestamp=1601280051414

const WebchatButton = ({ text, open }) => {
  const [busy, setBusy] = useState(true)

  const url = `https://webchat.moneyadviceservice.org.uk/newchat/chat.aspx?domain=www.moneyadviceservice.org.uk`

  useEffect(() => {
    const imgUrl = `https://webchat.moneyadviceservice.org.uk/stat.gif?d=www.moneyadviceservice.org.uk`

    axios({
      method: 'get',
      url: imgUrl,
    }).then(response => console.log(response))
  }, [])

  return (
    <Button
      href={open && !busy ? url : undefined}
      target="_blank"
      text={text}
      alignSelf="center"
      weight={400}
      disabled={!open || busy}
    />
  )
}

export default WebchatButton
