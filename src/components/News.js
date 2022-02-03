import React, { Component } from 'react';
import NewsItems from './NewsItems';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ben Morse, CNN",
            "title": "Accidental Belichick text at center of coach's NFL discrimination lawsuit - CNN",
            "description": "An accidental congratulatory text message from New England head coach Bill Belichick to Brian Flores is at the center of a lawsuit that has rocked the NFL.",
            "url": "https://www.cnn.com/2022/02/02/sport/brian-flores-lawsuit-interview-nfl-spt-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220202064705-01-brian-flores-file-01092022-restricted-super-tease.jpg",
            "publishedAt": "2022-02-03T05:58:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Brian Stelter and Oliver Darcy, CNN Business",
            "title": "CNN reporters grill WarnerMedia CEO on Jeff Zucker's departure - CNN",
            "description": "Jeff Zucker is a singular figure in American media. That's why his sudden undoing is a seismic moment.",
            "url": "https://www.cnn.com/2022/02/03/media/jeff-zucker-cnn-reliable-sources/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220203001435-jeff-zucker-file-04262021-restricted-super-tease.jpg",
            "publishedAt": "2022-02-03T05:25:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Ukraine tensions: Russia condemns 'destructive' US troops boost in Europe - BBC News",
            "description": "Extra US troops will go to Poland, Romania and Germany amid fears of a Russian invasion of Ukraine.",
            "url": "https://www.bbc.com/news/world-europe-60238869",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/418C/production/_123108761_gettyimages-1238097313.jpg",
            "publishedAt": "2022-02-03T05:02:29Z",
            "content": "Media caption, Watch: Understand the Ukraine crisis with Ros Atkins in less than six minutes\r\nRussia has condemned a US decision to send extra troops to Europe to support its Nato allies amid continu… [+4464 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Mychael Schnell",
            "title": "Former Navy captain pleads guilty to taking nearly $68,000 in bribes | TheHill - The Hill",
            "description": "A former Navy captain pleaded guilty on Wednesday to accepting ne...",
            "url": "https://thehill.com/policy/defense/592603-former-navy-captain-pleads-guilty-to-taking-nearly-68000-in-bribes",
            "urlToImage": "https://thehill.com/sites/default/files/article_images/navylogo_081007apmichaelsohn.jpg",
            "publishedAt": "2022-02-03T03:38:26Z",
            "content": "A former Navy captain pleaded guilty on Wednesday to accepting nearly $68,000 in bribes from a foreign defense contractor to benefit his ship husbanding company.\r\nDonald Hornbeck, 61, admitted to rec… [+1975 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Monique Beals",
            "title": "Conservative leader O'Toole ousted in Canada | TheHill - The Hill",
            "description": "Erin O'Toole, the leader of Canada's opposition Conservative Part...",
            "url": "https://thehill.com/policy/international/592604-conservative-leader-otoole-ousted-in-canada",
            "urlToImage": "https://thehill.com/sites/default/files/article_images/otooleerin_020315_ap_susan_walsh.jpeg",
            "publishedAt": "2022-02-03T03:33:47Z",
            "content": "Erin O'Toole, the leader of Canada's opposition Conservative Party, was ousted after a vote among his party's lawmakers on Wednesday.\r\nO'Toole, who has led the party since August 2020, was voted out … [+1683 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Lindsay Weinberg",
            "title": "Rihanna Breaks Silence on Pregnancy With A$AP Rocky and Shares New Photo of Baby Bump - E! NEWS",
            "description": "Rihanna, who is expecting her first child with A$AP Rocky, shared a new photo of her baby bump on Instagram on Feb. 2, along side the perfect caption that paid tribute to her growing \"gang.\"",
            "url": "https://www.eonline.com/news/1318470/rihanna-breaks-silence-on-pregnancy-with-asap-rocky",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022021/rs_1200x1200-220121060128-1200-ECOMM-Rihanna-Yellow.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2022-02-03T03:16:20Z",
            "content": "Rihanna is ready to start sharing her journey to motherhood.\r\nEarlier this week, the R&amp;B icon revealed her pregnancy by posing for a glamorous NYC photo shoot with partner A$AP Rocky. Now, RiRi h… [+929 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Daniel Canova",
            "title": "Bill Belichick calls Tom Brady 'the best player in NFL history' - Fox News",
            "description": "New England Patriots head coach Bill Belichick released a statement on Wednesday, a day after future Hall of Fame quarterback Tom Brady announced his retirement from the NFL.",
            "url": "https://www.foxnews.com/sports/bill-belichick-calls-tom-brady-best-player-nfl-history",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/Tom-Brady-Bill-Belichick2.jpg",
            "publishedAt": "2022-02-03T03:00:50Z",
            "content": "New England Patriots head coach Bill Belichick released a statement on Wednesday, a day after future Hall of Fame quarterback Tom Brady announced his retirement from the NFL.\r\nCLICK HERE FOR MORE SPO… [+2237 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Tom Tapp",
            "title": "Four Omicron Sub-Variants Now Being Tracked Worldwide By WHO; BA.2 Dubbed “Variant Of Concern” - Deadline",
            "description": "“It’s premature for any country either to surrender, or to declare victory,” said World Health Organization Director-General Tedros Ghebreyesus about the fight against Covid yesterday. “This virus is dangerous, and it continues to evolve before our very eyes,…",
            "url": "https://deadline.com/2022/02/four-omicron-variants-variant-of-concern-1234925304/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-24-at-2.20.45-PM.png?w=1024",
            "publishedAt": "2022-02-03T02:46:00Z",
            "content": "“It’s premature for any country either to surrender, or to declare victory,” said World Health Organization Director-General Tedros Ghebreyesus about the fight against Covid yesterday.\r\n“This virus i… [+3912 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Lois Beckett",
            "title": "International Space Station will plummet to a watery grave in 2030 - The Guardian",
            "description": "Nasa confirmed the ISS will plunge into Point Nemo to join other decommissioned space stations, satellites and space debris",
            "url": "https://amp.theguardian.com/science/2022/feb/02/international-space-station-will-plummet-to-a-watery-grave-in-2030",
            "urlToImage": null,
            "publishedAt": "2022-02-03T02:43:00Z",
            "content": "International Space StationNasa confirmed the ISS will plunge into the Pacific ocean to join other decommissioned space stations, satellites and space debris\r\nThe International Space Station (ISS) wi… [+3781 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Jim Harbaugh will return as Michigan coach, committing to Wolverines while spurning NFL interest - CBS Sports",
            "description": "Harbaugh seriously entertained the opportunity to go after a long-sought Lombardi Trophy",
            "url": "https://www.cbssports.com/college-football/news/jim-harbaugh-will-return-as-michigan-coach-committing-to-wolverines-while-spurning-nfl-interest/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/05/e645aebb-db13-4990-9cfb-05d8ebc57a9f/thumbnail/1200x675/be7208ce50235688fb7c6badfc3c5667/jim-harbaugh-michigan-getty.jpg",
            "publishedAt": "2022-02-03T01:20:00Z",
            "content": "Despite leaving Michigan on National Signing Day to interview for an opening with the Minnesota Vikings, Jim Harbaugh has decided to spurn NFL opportunities to remain the coach of his alma mater, CBS… [+3442 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Gabrielle Canon",
            "title": "Dry January: Reno goes a month with no rain for the first time in nearly 130 years - The Guardian",
            "description": "After experiencing its wettest October on record when close to 3in of rain fell in two days, the area is now facing the other extreme",
            "url": "https://amp.theguardian.com/us-news/2022/feb/02/reno-nevada-rain-january-drought",
            "urlToImage": null,
            "publishedAt": "2022-02-03T00:51:00Z",
            "content": "Climate crisis in the American westAfter experiencing its wettest October on record when close to 3in of rain fell in two days, the area is now facing the other extreme\r\nReno, Nevada, hasnt recorded … [+5512 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Maureen Mackey",
            "title": "Touching toddler tribute for deceased NYPD Det. Wilbert Mora - Fox News",
            "description": "During the funeral in midtown Manhattan on Feb. 2, 2022 for fallen NYPD Det. Wilbert Mora, two youngsters found a way to pay their respects to a slain officer.",
            "url": "https://www.foxnews.com/lifestyle/touching-toddler-tribute-deceased-nypd-det-william-mora",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/02/Toddlers-Pay-Respect-to-Det-Mora.jpg",
            "publishedAt": "2022-02-03T00:39:13Z",
            "content": "Some pictures capture a story in ways that words can't always accomplish.\r\nOne of the sweetest and most poignant photos to emerge from the funeral on Wednesday in Manhattan held for deceased NYPD Det… [+2552 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Mike Fleming Jr",
            "title": "Unmasking Of Rudy Giuliani On Fox’s ‘The Masked Singer’ Prompts Judges Ken Jeong & Robin Thicke To Walk Off In Protest - Deadline",
            "description": "EXCLUSIVE, SPOILER ALERT: Rudy Giuliani was unmasked as an exiting costumed contestant in last week’s taping of the first Season 7 episode of Fox’s popular primetime series The Masked Singer. Deadline hears that as soon as they saw Giuliani, judges Ken Jeong …",
            "url": "https://deadline.com/2022/02/rudy-giuliani-the-masked-singer-contestant-judge-ken-jeong-robin-thicke-walk-off-in-protest-1234925291/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/02/Rudy-Giuliani-Masked-Singer-Fox.jpg?w=1000",
            "publishedAt": "2022-02-03T00:04:00Z",
            "content": "EXCLUSIVE, SPOILER ALERT: Rudy Giuliani was unmasked as an exiting costumed contestant in last week’s taping of the first Season 7 episode of Fox’s popular primetime series The Masked Singer. Deadlin… [+1099 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Kevin Stankiewicz",
            "title": "Waste Management CEO touts 'pretty darned robust' 2022 outlook and dividend increase - CNBC",
            "description": "\"Our guidance that we just gave for 2022 is pretty darned robust,\" Waste Management CEO and President Jim Fish said in an interview on \"Mad Money.\"",
            "url": "https://www.cnbc.com/2022/02/02/waste-management-ceo-jim-fish-touts-pretty-darned-robust-2022-outlook.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/105394096-1534191158437gettyimages-996523156.jpeg?v=1543421150",
            "publishedAt": "2022-02-03T00:02:00Z",
            "content": "Waste Management CEO and President Jim Fish on Wednesday expressed confidence in the company's 2022 prospects, despite the continued presence of inflationary pressures. \r\n\"Our guidance that we just g… [+1363 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Kevin Stankiewicz",
            "title": "Cramer's lightning round: We're being harsh on companies that went public via SPAC - CNBC",
            "description": "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
            "url": "https://www.cnbc.com/2022/02/02/cramers-lightning-round-were-being-harsh-on-companies-that-went-public-via-spac.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/102086255-mad-money-lightning.jpg?v=1510939612",
            "publishedAt": "2022-02-03T00:01:00Z",
            "content": "Boxed: \"We are being very harsh on companies that came public via SPAC, even ones we like, so I'm just going to have to say I'm withholding.\" \r\nGraphic Packaging: \"I happen to like the packaging busi… [+182 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Andrew Miller",
            "title": "George W. Bush donated thousands to Trump impeachment supporters Cheney, Murkowski - Fox News",
            "description": "Former Republican President George W. Bush donated to two prominent critics of former President Trump who both voted to impeach him toward the end of his term.",
            "url": "https://www.foxnews.com/politics/george-w-bush-donated-thousands-trump-impeachment-supporters-cheney-murkowski",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/51eab73a-georgewbush.jpg",
            "publishedAt": "2022-02-02T23:53:28Z",
            "content": "Former Republican President George W. Bush donated to two prominent critics of former President Trump who both voted to impeach him toward the end of his term.\r\nCampaign finance reports, first report… [+3287 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Michael Ruiz",
            "title": "Murdered officer's lieutenant says 'enough is enough,' slams California's 'woke narrative' in eulogy - Fox News",
            "description": "A Los Angeles police lieutenant ripped into the “woke narrative” fueling an “anti-police climate” in California and prosecutors’ reluctance to hold criminals accountable Wednesday while eulogizing an officer under his command who died last month when attacked…",
            "url": "https://www.foxnews.com/us/california-fernando-arroyos-lieutenant-rex-ingram",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/02/LAPD-officer-funeral-thumb-1.jpg",
            "publishedAt": "2022-02-02T23:40:14Z",
            "content": "A Los Angelespolice lieutenant ripped into the \"woke narrative\" fueling an \"anti-police climate\" in California and prosecutors reluctance to hold criminals accountable Wednesday while eulogizing an o… [+3769 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Why the COVID death rate in the U.S. is so much higher than other wealthy nations - PBS NewsHour",
            "description": "More than two years into this pandemic, the United States death toll is the highest in the world. The country is closing in on 900,000 deaths, and its death ...",
            "url": "https://www.youtube.com/watch?v=o8r9NM9tGOE",
            "urlToImage": "https://i.ytimg.com/vi/o8r9NM9tGOE/hqdefault.jpg",
            "publishedAt": "2022-02-02T23:19:28Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Ken Belson",
            "title": "The Washington Football Team Has Rebranded as the Commanders - The New York Times",
            "description": "After a two-year search, the team announced a new name and mascot to replace the generic moniker it adopted to replace the longtime name, which was considered a racial slur of Native Americans.",
            "url": "https://www.nytimes.com/2022/02/02/sports/washington-football-team-commanders.html",
            "urlToImage": "https://static01.nyt.com/images/2022/02/02/sports/02washington-name-new/merlin_201215877_99828ad3-4628-42bd-89ce-58bad4441645-facebookJumbo.jpg",
            "publishedAt": "2022-02-02T23:06:29Z",
            "content": "Color is a powerful measure of loyalty and indicator of a brand, OHara said. The teams colors are unique, and its who they are, he said.\r\nHe said the name Commanders dovetails with the significant mi… [+1665 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Mansur Shaheen U.S.",
            "title": "Expert warns that shoveling snow can be a deadly way to discover underlying heart conditions - Daily Mail",
            "description": "Dr John Bisognano, head of preventive cardiology at the University of Michigan, warns that shoveling snow could be a riskier activity than one may think, especially if a person has a heart condition.",
            "url": "https://www.dailymail.co.uk/health/article-10469799/Expert-warns-shoveling-snow-deadly-way-discover-underlying-heart-conditions.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/02/02/22/53704595-0-image-a-75_1643840663516.jpg",
            "publishedAt": "2022-02-02T22:33:34Z",
            "content": "Dr John Bisognano (pictured), head of preventive cardiology at the University of Michigan Cardiovascular Center, warns that people suffering from underlying heart conditions may be at risk of sudden … [+4008 chars]"
        }
    ]
    constructor() {
        super()
        console.log('hello i am constructor');
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return <div className='container my-3'>
            <h1 className='my-3'>Top Headlines</h1>
            <div className="row ">
                {this.state.articles.map((element) => {
                    {
                        if (element.urlToImage)
                            return <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 my-3' key={element.urlToImage}>
                                <NewsItems title={element.title.slice(0, 18)} desc={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                    }
                })}

            </div>
        </div>;
    }
}

export default News;
