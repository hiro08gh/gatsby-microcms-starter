import React from "react"

const Author = (name, description, image) => (
  <div>
    {name}
    {description}
    <img src={image} alt="ユーザーイメージ" />
  </div>
)

export default Author
