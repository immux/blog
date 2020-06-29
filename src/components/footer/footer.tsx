import React from 'react'
import './style.scss'
import { FormattedMessage } from 'gatsby-plugin-intl'

const Footer: React.FC = () => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <div className="d-flex justify-content-center align-items-center py-1">
        <div className="mr-3">
          <a href="https://github.com/immux/team/issues/1" target="_blank">
            <FormattedMessage id="footer.joinUs" />
          </a>
        </div>
        <div>
          <a href="https://github.com/immux" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="text-center pb-3 copyright">©2019 Immux. All Rights Reserved</div>
    </div>
  </div>
)

export default Footer
