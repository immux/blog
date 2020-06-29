import * as React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import FeatureSection, { FeatureSpec } from './FeatureSection'


import iconImmutable from '../../assets/Immutable.inline.svg'
import iconCompatible from '../../assets/Compatible.inline.svg'
import iconAuditable from '../../assets/Auditable.inline.svg'
import iconDistributed from '../../assets/Distributed.inline.svg'

const features: FeatureSpec[] = [
  {
    name: "immutable",
    icon: iconImmutable,
  },
  {
    name: "usable",
    icon: iconCompatible,
  },
  {
    name: "auditable",
    icon: iconAuditable,
  },
  {
    name: "managed",
    icon: iconDistributed,
  }
]


function WhyImmux() {
  return (
    <div className="d-flex flex-sm-column flex-md-row flex-wrap">
      {
        features.map(feature => <FeatureSection key={feature.name} {...feature} />)
      }
    </div>
  )
}

export default WhyImmux