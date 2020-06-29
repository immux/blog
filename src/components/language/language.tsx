import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { useNarrowScreen } from '../../hooks/document'

const languageName: Record<string, string> = {
  "en": "English",
  "zh-cn": "中文",
}

const Language = () => {
  const isNarrow = useNarrowScreen()

  const getLanguageText = (languageKey: string)  => {
    const languageText = languageName[languageKey]
    return isNarrow ? languageText[0].toUpperCase() : languageText
  }

  return (
    <div
      className="navbar-text"
      style={{
        paddingLeft: '6px',
        paddingRight: '6px',
        background: '#eeeeee',
        borderRadius: '2px'
      }}
    >
      <IntlContextConsumer>
        {
          // @ts-ignore
          ({ language: currentLocale }) =>
            <a
              onClick={() => changeLocale(currentLocale === "en" ? "zh-cn" : "en")}
              style={{
                color: '#8e5821',
                margin: 10,
                fontWeight: 'bold',
                fontSize: '20px',
                cursor: `pointer`,
              }}
            >
              {getLanguageText(currentLocale)}
            </a>
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language