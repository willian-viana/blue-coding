import React from "react"
import PropTypes from "prop-types"

import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Image
} from "@chakra-ui/react"

export const GiphyList = ({ gifs = [] }) => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {gifs &&
        gifs.map((gif) => (
          <Card key={gif.id}>
            <CardHeader>
              <Heading as="h6" size="xs">
                {gif.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Image boxSize="150px" src={gif.images.preview_gif.url}></Image>
              <Text>URL: {gif.url}</Text>
            </CardBody>
          </Card>
        ))}
    </SimpleGrid>
  )
}

GiphyList.propTypes = {
  gifs: PropTypes.array
}
