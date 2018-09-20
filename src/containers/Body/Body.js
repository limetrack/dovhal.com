import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './Body.style'
import data from '../../data/data'
import CardsSection from './CardsSection'
import ImgList from './ImgList'

const services = data.services
const uniqueness = data.uniqueness
const technology = data.technology
const partners = data.partners
const imgPath = data.imgPath

const Body = () => {
  return (
    <div>
      <ImgList images={technology} imgPath={imgPath}></ImgList>
      <CardsSection cards={services} imgPath={imgPath}></CardsSection>
      <ImgList images={partners} imgPath={imgPath}></ImgList>
      <CardsSection cards={uniqueness} imgPath={imgPath}></CardsSection>
    </div>
  )
}

export default withStyles(styles)(Body)