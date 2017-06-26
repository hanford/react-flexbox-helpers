## react-flexbox-helpers

> Premade flexbox components built for react

## Install

```
$ npm install react-flexbox-helpers --save
```


## Usage

```js
import { Flex, Row, Column } from 'react-flexbox-helpers'

..

render () {
  return (
    <Row>
      <Column>
        <Flex>Hey!</Flex>
      </Column>
      <Column>
        <Flex>Im a column</Flex>
        <Flex>Im a column too</Flex>
      </Column>
    </Row>
  )
}
```

## API
| Param          | Type    | required |
|----------------|---------|----------|
| className      | String  | false |
| componentStyle | Object  | false |
| top            | String  | false |
| bottom         | String  | false |
| left           | String  | false |
| right          | String  | false |
| align          | String  | false |
| justify        | String  | false |
| full           | Boolean | false |

MIT © [Jack Hanford](http://jackhanford.com)
