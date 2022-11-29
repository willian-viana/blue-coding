import React from "react"
import PropTypes from "prop-types"

import { getGiphy } from "../../services/giphyAPI"

import { Input } from "@chakra-ui/react"

export const GiphySearch = (props) => {
  const handleUserTyping = ({ target: { value: searchParam } }) => {
    getGiphy(searchParam).then((data) => {
      props.setGifs(data)
    })
  }

  return <Input placeholder="Basic usage" onChange={handleUserTyping} />
}

GiphySearch.propTypes = {
  setGifs: PropTypes.func
}
