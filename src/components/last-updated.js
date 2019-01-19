import React from 'react'

export const LastUpdated = ({ dateTime, lastUpdated }) => {
  return (
    <footer>
      <p>
        <small>
          Page last updated: <time datetime={dateTime}>{lastUpdated}</time>
        </small>
      </p>
    </footer>
  )
}
