import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'utils/styles'

const ImgContainer = styled.div`
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  z-index: 2;

  > img.Regular,
  > object.Regular {
    width: 100%;
    height: 100%;
  }
`

export function Image({ img }) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { ne: null } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const imgLocalFind = allFile.edges.find(({ node: { name } }) =>
    img.match(name),
  )
  const isSvg =
    !imgLocalFind.node.fluid && imgLocalFind.node.publicURL.match(/.svg/g) ? (
      <object
        id={imgLocalFind.node.name}
        aria-label={`${imgLocalFind.node.name}_svg-object`}
        type="image/svg+xml"
        data={imgLocalFind.node.publicURL}
        className="Regular"
      />
    ) : (
      <img
        src={imgLocalFind.node.publicURL}
        alt={imgLocalFind.node.name}
        className="Regular"
      />
    )

  return imgLocalFind ? (
    <ImgContainer>
      {imgLocalFind.node.fluid ? (
        <Img fluid={imgLocalFind.node.fluid} />
      ) : (
        isSvg
      )}
    </ImgContainer>
  ) : (
    <></>
  )
}
