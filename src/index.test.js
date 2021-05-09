import githubCalendar from ".";
const axios = require('axios');

describe("index test ", () => {

    let html = "";
    let url = "";
    let data = {};

    beforeEach(() => {
        html = `
        <div>
            <h2 class="f4 text-normal mb-2">Titulo</h2>
            <div class="graph-canvas">test html</div>
        </div>
    `;
        url = 'https://github.com/users/christianesk/contributions?from=2020-01-01&to=2020-12-31';

        data = {
            calendar: "test html",
            textContributions: "Titulo"
        };
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should get github calendar', async () => {
        const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: html });
        const actual = await githubCalendar("christianesk", "2020");
        expect(actual).toEqual(data);
        expect(getSpy).toBeCalledWith(url);
    });

    it('should get github calendar with data empty', async () => {
        const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: html });
        const actual = await githubCalendar("", "");
        data.calendar = "";
        data.textContributions="";
        expect(actual).toEqual(data);
        expect(getSpy).toBeCalledTimes(0);
    });

});