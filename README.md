# simple-react-animations
[![npm version](https://badge.fury.io/js/react-animations.svg)](https://badge.fury.io/js/react-animations)

> Easiest way to use animation in your React projects.

## Demo

https://haha54carol.github.io/react-animations/

![image](https://github.com/haha54carol/react-animations/blob/master/simple-react-animations.gif)

## How to Use?

### Installation

```javascript

# npm 
npm install simple-react-animations

# yarn
yarn add simple-react-animtaions

```


### Import
```javascript

import Animation from 'simple-react-animations'

```

### Wrap your component

``` javascript

<Animation act="topIn" in={true} >
    {children}
</Animation>

```

#### Arguments
```1. act ( string | required )```
Support 7 types of animation right now!
    * topIn
    * bottomIn
    * leftIn
    * rightIn
    * topInBottomOut
    * zoomIn
    * fade
    
```2. in ( boolean | optional | default = true)```
When the **in** prop is toggled to **true** the Component will get the **example-enter** CSS class and the **example-enter-active** CSS class added in the next tick. 


### Example 

``` javascript
import React, { Component } from 'react'
import Animation from 'simple-react-animations'

class Example extends Component {

  render() {
    return (
        <Animation act='topIn' in={true}>
            <div>your component</div>
        </Animation>      
    )
  }
}

export default Example

```

