import * as React from 'react'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'
import { useNarrowScreen } from '../../hooks/document'

const containerStyle: React.CSSProperties = {
  width: '80%',
  display: 'flex',
  margin: '0 auto',
  paddingTop: '40px',
  paddingBottom: '40px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid #dbdbdb',
}

const containerStyleNarrow: React.CSSProperties = {
  ...containerStyle,
  width: '90%',
  flexDirection: 'column',
}

const subscriptionHintStyle: React.CSSProperties = {
  fontWeight: 'bold',
  marginBottom: '0.5em',
}

const emailInputStyle: React.CSSProperties = {
  fontSize: '1em',
  margin: '0.5em 0',
}

const fakeInputStyle: React.CSSProperties = {
  position: 'absolute',
  left: '-5000px',
}

const subscribeButtonStyle: React.CSSProperties = {
  fontSize: '1em',
  margin: '0.5em',
}

function EmailSubscription() {
  const intl = useIntl()
  const [emailInput, onChangeEmail] = React.useState('')
  const [fakeInput, onChangeFakeInput] = React.useState('')
  const narrow = useNarrowScreen()

  const style = narrow ? containerStyle : containerStyleNarrow

  const target =
    'https://immux.us20.list-manage.com/subscribe/post?u=702321742cfdeaf02554d6975&amp;id=233892abef'

  return (
    <div style={style}>
      <div id="mc_embed_signup">
          <div style={subscriptionHintStyle}>
            <FormattedMessage id="subscription.subscribeToUs" />
          </div>
        <form
          action={target}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate form-inline"
          target="_blank"
          noValidate={true}
        >
          <div id="mc_embed_signup_scroll">
            <input
              className="form-control"
              aria-describedby="emailHelp"
              type="email"
              name="EMAIL"
              // className="email"
              id="mce-EMAIL"
              placeholder="email address"
              onChange={(evt) => onChangeEmail(evt.target.value)}
              value={emailInput}
              required={true}
              style={emailInputStyle}
            />
            <div style={fakeInputStyle} aria-hidden="true">
              <input
                type="text"
                name="b_702321742cfdeaf02554d6975_233892abef"
                tabIndex={-1}
                value={fakeInput}
                onChange={(evt) => onChangeFakeInput(evt.target.value)}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              name="subscribe"
              id="mc-embedded-subscribe"
              value={intl.formatMessage({ id: 'subscription.subscribeBtn' })}
              style={subscribeButtonStyle}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmailSubscription
