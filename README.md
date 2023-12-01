<h1 align="center">Github's Contribution Calendar (NPM) <br> by StkngEsk</h1>

[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]

This project returns a calendar of contributions de Github in a `<div>...</div>` format depending on the `user` and `year` chosen.

## Content

- [Installation](#installation)
- [Implementation](#implementation-examples)

## Installation

`npm i @christianesk/github-calendar `

<br>

### TS Example

```ts
import { getGithubCalendar } from "@christianesk/github-calendar";

const getCalendar = async () => {
   
    return await getGithubCalendar("christianesk", "2020");
} 

/*Returns an Object with these parameters:
    //Example
    { 
        textContributions: "256 contributions in 2020"      
        calendar: "<div>...</div>",
    }
*/
```

### JS Example

```js
const getGithubCalendar = require("@christianesk/github-calendar");

const getCalendar = async () => {
   
    return await getGithubCalendar("christianesk", "2020");
} 

/*Returns an Object with these parameters:
    //Example
    { 
        textContributions: "256 contributions in 2020"      
        calendar: "<div>...</div>",
    }
*/
```

## Implementation examples

### [Using cloudflare workers](https://github.com/StkngEsk/github-contrib-calendar-workers)

### [Fetch cloudflare workers with Angular](https://github.com/StkngEsk/github-contrib-calendar-fe)

### [Styles CSS to github calendar](https://github.com/StkngEsk/github-contrib-calendar-fe/tree/master/src/assets/css)

### [Using Framework Astro](https://github.com/StkngEsk/github-calendar-astro-example)

## Authors
* Christian - [christianesk](https://github.com/Christianesk)
* Jean - [jeanstkng](https://github.com/jeanstkng)

<br>

## License

MIT © [Stkngesk][website]

[website]: https://stkngesk.tech
[NPM VERSION BADGE]: https://img.shields.io/npm/v/@christianesk/github-calendar?color=red&logo=npm
[NPM PAGE]: https://www.npmjs.com/package/@christianesk/github-calendar
[LICENSE BADGE]: https://img.shields.io/badge/license-MIT%20License-blue.svg?
[LICENSE PAGE]: https://github.com/StkngEsk/github-calendar-npm-stkngesk/blob/master/LICENSE
