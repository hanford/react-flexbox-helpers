import React from 'react'

const styleGenerator = ({ top = 0, left = 0, bottom = 0, right = 0, align, justify, full }, componentStyle) => {
  let style = {}

  // margin generator
  style = Object.assign({}, {
    marginTop: `${top}rem` || 0,
    marginLeft: `${left}rem` || 0,
    marginBottom: `${bottom}rem` || 0,
    marginRight: `${right}rem` || 0
  })

  // align generator
  style = Object.assign(style, {
    justifyContent: justify || '',
    alignItems: align || '',
    ...componentStyle
  })

  if (full) {
    style.flex = 1
  }

  return style
}

export const Row = ({ children, className = '', componentStyle = {}, ...props }) => (
  <div className={`row ${className}`} style={styleGenerator(props, componentStyle)}>{children}
  <style jsx>{`
    .row {
      display: flex;
      flex-direction: row;
    }
  `}</style>
  </div>
)

export const Column = ({ children, className = '', componentStyle = {}, ...props }) => (
  <div className={`column ${className}`} style={styleGenerator(props, componentStyle)}>
    {children}
    <style jsx>{`
      .column {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
)

export const Flex = ({ children, className = '', componentStyle = {}, ...props }) => (
  <div className={`flex ${className}`} style={styleGenerator(props, componentStyle)}>
    {children}
    <style jsx>{`
      .flex {
        display: flex;
      }
    `}</style>
  </div>
)

export default Flex
