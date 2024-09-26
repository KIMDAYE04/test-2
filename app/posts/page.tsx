import React from 'react'

export default function Postspage() {
  const title = '울랄라'
  const content = '뭐 쓰지....'
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-800">포스트 페이지</h1>
      <p>Title: {title}</p>
      <p>content: {content}</p>
    </div>
  )
}
