import * as React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import "./style.scss"

export interface FeatureSpec {
  name: string
  icon: string
}

const FeatureSection: React.SFC<FeatureSpec> = ({ name, icon: Icon }) => {
  return(
    <div key={name} className="d-flex flex-sm-column align-items-md-center feature-item py-3 px-sm-4">
      <div className="w-25" style={{flexBasis: '50px'}}><Icon/></div>
      <div className="w-100 feature-desc">
        <div className="text-md-center subtitle mb-2">
          <FormattedMessage id={`whyImmux.features.${name}.title`} />
        </div>
        <div>
          <FormattedMessage id={`whyImmux.features.${name}.description`} />
        </div>
      </div>
    </div>    
  )
}

export default FeatureSection