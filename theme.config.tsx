import React from 'react'

export default {
  logo: <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Ming Lau</span>,
  project: {
    link: 'https://github.com/homing1923',
  },
  search:{
    component: (
      <></>
    ),
    emptyResult: (
      <span>Nothing Found!</span>
    ),
    error: "Loading Err....",
    placeholder: "Search In here",
    
  },
  chat: {
    link: 'https://www.linkedin.com/in/homing-lau-43210510b/',
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" width="24" height="24"/>
    )
  },
  docsRepositoryBase: 'https://github.com/homing1923/next-profo',
  footer: {
    text: 'Ming Lau @ 2023',
  },
  feedback: {
    content: (
      <span>Question? Reach me on github</span>
    )
  },
  navigation:{
    prev: false,
    next: false
  }
}
