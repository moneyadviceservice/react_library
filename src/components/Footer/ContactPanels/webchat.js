import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../Button'

const WebchatButton = ({ locale, open }) => {
  const [busy, setBusy] = useState(true)

  let timestamp = new Date().getTime()

  // prettier-ignore
  const requestUrl = `https://cors-anywhere.herokuapp.com/https://webchat.moneyadviceservice.org.uk/stat.gif?u=${parseInt(Math.random() * 1000)}-${timestamp}&d=www.moneyadviceservice.org.uk&timestamp=${timestamp}`

  const webchatUrl = `https://webchat.moneyadviceservice.org.uk/newchat/chat.aspx?domain=www.moneyadviceservice.org.uk&timestamp=${timestamp}`

  useEffect(() => {
    axios({
      method: 'get',
      url: requestUrl,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      responseType: 'arraybuffer',
      timeout: 10000,
    })
      .then(({ data }) => {
        // create base64 image from arraybuffer response
        let b64encoded = btoa(
          [].reduce.call(
            new Uint8Array(data),
            function(p, c) {
              return p + String.fromCharCode(c)
            },
            ''
          )
        )
        return `data:image/png;base64,${b64encoded}`
      })
      .then(imageData => {
        // get image width from response and set busy state
        const i = new Image()
        i.onload = function() {
          console.log(i.width + ', ' + i.height)
          // 170, 46
          setBusy(false)
        }
        i.src = imageData
      })
      .catch(error => {
        console.warn(error)
      })
  }, [])

  return (
    <Button
      href={open && !busy ? webchatUrl : undefined}
      target="_blank"
      alignSelf="center"
      weight={400}
      disabled={!open || busy}
      text={
        open && !busy
          ? locale.button_text.available
          : locale.button_text.unavailable
      }
    />
  )
}

export default WebchatButton
