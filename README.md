<h1 align="center">Github's Contribution Calendar (NPM) <br> by StkngEsk</h1>

[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]

This project returns a calendar of contributions de Github in SVG format depending on the `user` and `year` chosen.

<br>

## Installation

`npm i @christianesk/github-calendar `

<br>

## Example

```js
const githubCalendar = require("@christianesk/github-calendar");

const getCalendar = async () => {
   
    return await githubCalendar("christianesk", "2020");
} 

/*Returns an Object with these parameters:
    //Example
    { 
        textContributions: "256 contributions in 2020"      
        calendar: "<svg>...</svg>",
    }
*/
```
<br>

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
