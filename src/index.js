
import axios from 'axios';
import cheerio from 'cheerio';


const githubCalendar = async (user = "", year = "") => {

    let calendar = "";
    let textContributions = "";
    let url = "";

    if (user != "" && year != "") {
        url = `https://github.com/users/${user}/contributions?from=${year}-01-01&to=${year}-12-31`;

        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        $('div .graph-canvas').each(function () {
            calendar = $(this).html();
        });

        $('h2.f4').each(function () {
            textContributions = $(this).text();
        });
    }

    return { textContributions, calendar };
};

export default githubCalendar;