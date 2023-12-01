import { getGithubCalendar } from "../src/index";
import { GetGithubCalendarResponse } from "../src/interfaces/GetGithubCalendarResponse";

describe("GetGithubCalendar", () => {

    let html: string = "";
    let url: string = "";
    let data: GetGithubCalendarResponse;
    let get_spy: jest.SpyInstance;

    beforeEach(() => {
        html = `
        <div>
            <h2 class="f4 text-normal mb-2">578 contributions in 2020</h2>
            <div class="graph-canvas"><div>Github content calendar.....</div></div>
        </div>
    `;
        url = 'https://github.com/users/christianesk/contributions?from=2020-01-01&to=2020-12-31';

        data = {
            textContributions: "578 contributions in 2020",
            calendar: "<div>Github content calendar.....</div>"
        };

        get_spy = jest.spyOn(global, "fetch").mockImplementation(async () =>
            Promise.resolve(new Response(html))
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return a github calendar', async () => {
        const actual = await getGithubCalendar("christianesk", "2020");
        expect(actual).toEqual(data);
        expect(get_spy).toHaveBeenCalledWith(url);
    });

    it('should return data empty when user and year are empty', async () => {
        const actual = await getGithubCalendar("", "");
        data.calendar = "";
        data.textContributions = "";
        expect(actual).toEqual(data);
        expect(get_spy).toHaveBeenCalledTimes(0);
    });
});