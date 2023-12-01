import { load } from 'cheerio';
import { GetGithubCalendarResponse } from 'interfaces/GetGithubCalendarResponse';

export async function getGithubCalendar(user: string, year: string): Promise<GetGithubCalendarResponse> {
    let calendar: string | null = "";
    let textContributions: string = "";
    let url: string;

    if (Boolean(user) && Boolean(year)) {
        url = `https://github.com/users/${user}/contributions?from=${year}-01-01&to=${year}-12-31`;

        const response = await fetch(url);

        const data = await response.text();
        const $ = load(data);
        $('div .graph-canvas').each(function () {
            calendar = $(this).html();
        });

        $('h2.f4').each(function () {
            textContributions = $(this).text();
        });
    }

    return { textContributions, calendar }
}