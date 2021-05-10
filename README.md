# Github's Contribution Calendar (NPM) by StkngEsk

This project returns a calendar of contributions de Github in SVG format depending on the user and year chosen.

Here frontend project developed with Angular [Demo](https://github-contrib-calendar.web.app/)


### Installation

``` 
npm i @christianesk/github-calendar  
```

### Example
``` javascript
const githubCalendar = require("@christianesk/github-calendar");

const getCalendar = async () => {
   
    return await githubCalendar("christianesk", "2020");
} 
```

### Authors
* Christian - [christianesk](https://github.com/Christianesk)
* Jean - [jeanstkng](https://github.com/jeanstkng)

## License

[MIT][license] © [Stkngesk][website]

[license]: /LICENSE
[website]: https://stkngesk.tech
