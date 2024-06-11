
// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://www.frierenmanga.in.net';


export const MANGA_DESCRIPTION = `<a href="${DOMAIN}"><u>Frieren: Beyond Journey’s End</u></a> is a fantasy manga about Frieren, an elf mage from a hero's party that defeated the Demon King. After the victory, Frieren, who lives much longer than her human companions, struggles with their mortality. She embarks on a new journey to understand humans and their fleeting lives, accompanied by new friends and descendants of her former comrades. The story explores themes of friendship, memory, and the meaning of life.`

export const MANGA_NAME = 'Frieren';
export const MANGA_AUTHOR = 'Kanehito Yamada';
export const MANGA_RELEASE = '2020';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Tsukasa Abe';
export const MANGA_STUDIO = 'Madhouse';
export const MANGA_GENRE = 'Action, Adventure, Drama, Fantasy';

export const CHAPTER_PREFIX = 'frieren-chapter';
export const IMAGE_PREFIX = 'images/frieren';
export const NEXT_PREVIOUS_PREFIX = 'manga/frieren-chapter';
export const URL_PREFIX = 'manga/frieren-chapter';

export const AUTHOR_PAGE = `${DOMAIN}/frieren-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "https://images.thedirect.com/media/article_full/beyond_6cDy9jt.jpg";



export const APP_DESCRIPTION = `Read "${MANGA_NAME}" manga online at "${DOMAIN}". Enjoy high-quality scans, latest chapters, and connect with fans in our vibrant community.`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "'Frieren: Beyond Journey’s End' is a captivating fantasy manga that delves into the life of Frieren, an elf mage who was once a member of a legendary hero's party. This party, composed of the hero Himmel, warrior Eisen, priest Heiter, and Frieren herself, successfully defeated the Demon King, bringing peace to their world. However, the story truly begins after their grand adventure has concluded."
    },
    {
        id: 2,
        content: "Elves in this world, including Frieren, have extraordinarily long lifespans, which gives them a unique perspective on time compared to humans. After the victory over the Demon King, the party members go their separate ways, and Frieren sets off on her own, promising to return and visit her companions."
    },
    {
        id: 3,
        content: "As decades pass, Frieren witnesses the aging and eventual deaths of her friends, a stark reminder of the fleeting nature of human life. She returns to find Himmel, the hero who was once full of life and dreams, now an old man. His death profoundly impacts Frieren, sparking a deep introspection about her own existence and the relationships she neglected to fully understand."
    },
    {
        id: 4,
        content: "Determined to honor Himmel's memory and gain a deeper appreciation for the human experience, Frieren embarks on a new journey. She is joined by new companions, including Fern, an orphaned girl who becomes her apprentice, and Stark, a warrior with ties to her past comrades. As they travel together, Frieren reflects on the past, learns about the lives and emotions of humans, and seeks to fulfill the dreams and promises left behind by her former party members."
    },
    {
        id: 5,
        content: "The manga beautifully portrays Frieren’s gradual transformation from a detached, immortal being to someone who cherishes and understands the transient moments of human life. Each encounter and adventure teaches her about friendship, love, and the value of memories. The narrative is poignant and introspective, exploring themes of mortality, the passage of time, and the lingering impact of our actions and relationships."
    },
    {
        id: 6,
        content: "'Frieren: Beyond Journey’s End' is not just a story about adventure but also a meditation on what it means to live a meaningful life. Through Frieren’s eyes, readers are invited to contemplate their own connections and the legacy they leave behind. The manga combines touching character development with a richly imagined world, making it a profound and thought-provoking read."
    }
];


// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[75px] w-[160px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = "Frieren: Beyond Journey’s End";
export const NavbarName = "Frieren: Beyond Journey’s End";

export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];


export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran',
        link: 'https://www.frierenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover',
        link: 'https://www.blackclovermanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei',
        link: 'https://www.mushokutenseimanga.in.net',
    },
];




export const chaptersData = [
    {
        "chapterNumber": "1",
        "numImages": 35
    },
    {
        "chapterNumber": "2",
        "numImages": 34
    },
    {
        "chapterNumber": "3",
        "numImages": 26
    },
    {
        "chapterNumber": "4",
        "numImages": 13
    },
    {
        "chapterNumber": "5",
        "numImages": 13
    },
    {
        "chapterNumber": "6",
        "numImages": 18
    },
    {
        "chapterNumber": "7",
        "numImages": 15
    },
    {
        "chapterNumber": "8",
        "numImages": 16
    },
    {
        "chapterNumber": "9",
        "numImages": 13
    },
    {
        "chapterNumber": "10",
        "numImages": 13
    },
    {
        "chapterNumber": "11",
        "numImages": 13
    },
    {
        "chapterNumber": "12",
        "numImages": 15
    },
    {
        "chapterNumber": "13",
        "numImages": 15
    },
    {
        "chapterNumber": "14",
        "numImages": 12
    },
    {
        "chapterNumber": "15",
        "numImages": 14
    },
    {
        "chapterNumber": "16",
        "numImages": 11
    },
    {
        "chapterNumber": "17",
        "numImages": 17
    },
    {
        "chapterNumber": "18",
        "numImages": 17
    },
    {
        "chapterNumber": "19",
        "numImages": 13
    },
    {
        "chapterNumber": "20",
        "numImages": 15
    },
    {
        "chapterNumber": "21",
        "numImages": 17
    },
    {
        "chapterNumber": "22",
        "numImages": 16
    },
    {
        "chapterNumber": "23",
        "numImages": 18
    },
    {
        "chapterNumber": "24",
        "numImages": 18
    },
    {
        "chapterNumber": "25",
        "numImages": 16
    },
    {
        "chapterNumber": "26",
        "numImages": 18
    },
    {
        "chapterNumber": "27",
        "numImages": 20
    },
    {
        "chapterNumber": "28",
        "numImages": 18
    },
    {
        "chapterNumber": "29",
        "numImages": 18
    },
    {
        "chapterNumber": "30",
        "numImages": 18
    },
    {
        "chapterNumber": "31",
        "numImages": 24
    },
    {
        "chapterNumber": "32",
        "numImages": 18
    },
    {
        "chapterNumber": "33",
        "numImages": 18
    },
    {
        "chapterNumber": "34",
        "numImages": 19
    },
    {
        "chapterNumber": "35",
        "numImages": 19
    },
    {
        "chapterNumber": "36",
        "numImages": 16
    },
    {
        "chapterNumber": "37",
        "numImages": 21
    },
    {
        "chapterNumber": "38",
        "numImages": 18
    },
    {
        "chapterNumber": "39",
        "numImages": 18
    },
    {
        "chapterNumber": "40",
        "numImages": 18
    },
    {
        "chapterNumber": "41",
        "numImages": 18
    },
    {
        "chapterNumber": "42",
        "numImages": 19
    },
    {
        "chapterNumber": "43",
        "numImages": 21
    },
    {
        "chapterNumber": "44",
        "numImages": 20
    },
    {
        "chapterNumber": "45",
        "numImages": 19
    },
    {
        "chapterNumber": "46",
        "numImages": 19
    },
    {
        "chapterNumber": "47",
        "numImages": 18
    },
    {
        "chapterNumber": "48",
        "numImages": 18
    },
    {
        "chapterNumber": "49",
        "numImages": 18
    },
    {
        "chapterNumber": "50",
        "numImages": 18
    },
    {
        "chapterNumber": "51",
        "numImages": 18
    },
    {
        "chapterNumber": "52",
        "numImages": 18
    },
    {
        "chapterNumber": "53",
        "numImages": 18
    },
    {
        "chapterNumber": "54",
        "numImages": 18
    },
    {
        "chapterNumber": "55",
        "numImages": 17
    },
    {
        "chapterNumber": "56",
        "numImages": 19
    },
    {
        "chapterNumber": "57",
        "numImages": 19
    },
    {
        "chapterNumber": "58",
        "numImages": 18
    },
    {
        "chapterNumber": "59",
        "numImages": 18
    },
    {
        "chapterNumber": "60",
        "numImages": 18
    },
    {
        "chapterNumber": "61",
        "numImages": 17
    },
    {
        "chapterNumber": "62",
        "numImages": 17
    },
    {
        "chapterNumber": "63",
        "numImages": 20
    },
    {
        "chapterNumber": "64",
        "numImages": 18
    },
    {
        "chapterNumber": "65",
        "numImages": 17
    },
    {
        "chapterNumber": "66",
        "numImages": 18
    },
    {
        "chapterNumber": "67",
        "numImages": 17
    },
    {
        "chapterNumber": "68",
        "numImages": 18
    },
    {
        "chapterNumber": "69",
        "numImages": 18
    },
    {
        "chapterNumber": "70",
        "numImages": 18
    },
    {
        "chapterNumber": "71",
        "numImages": 18
    },
    {
        "chapterNumber": "72",
        "numImages": 18
    },
    {
        "chapterNumber": "73",
        "numImages": 18
    },
    {
        "chapterNumber": "74",
        "numImages": 18
    },
    {
        "chapterNumber": "75",
        "numImages": 18
    },
    {
        "chapterNumber": "76",
        "numImages": 18
    },
    {
        "chapterNumber": "77",
        "numImages": 18
    },
    {
        "chapterNumber": "78",
        "numImages": 52
    },
    {
        "chapterNumber": "79",
        "numImages": 18
    },
    {
        "chapterNumber": "80",
        "numImages": 18
    },
    {
        "chapterNumber": "81",
        "numImages": 18
    },
    {
        "chapterNumber": "82",
        "numImages": 19
    },
    {
        "chapterNumber": "83",
        "numImages": 18
    },
    {
        "chapterNumber": "84",
        "numImages": 17
    },
    {
        "chapterNumber": "85",
        "numImages": 18
    },
    {
        "chapterNumber": "86",
        "numImages": 18
    },
    {
        "chapterNumber": "87",
        "numImages": 22
    },
    {
        "chapterNumber": "88",
        "numImages": 18
    },
    {
        "chapterNumber": "89",
        "numImages": 18
    },
    {
        "chapterNumber": "90",
        "numImages": 18
    },
    {
        "chapterNumber": "91",
        "numImages": 18
    },
    {
        "chapterNumber": "92",
        "numImages": 19
    },
    {
        "chapterNumber": "93",
        "numImages": 18
    },
    {
        "chapterNumber": "94",
        "numImages": 19
    },
    {
        "chapterNumber": "95",
        "numImages": 19
    },
    {
        "chapterNumber": "96",
        "numImages": 18
    },
    {
        "chapterNumber": "97",
        "numImages": 27
    },
    {
        "chapterNumber": "98",
        "numImages": 17
    },
    {
        "chapterNumber": "99",
        "numImages": 17
    },
    {
        "chapterNumber": "100",
        "numImages": 24
    },
    {
        "chapterNumber": "101",
        "numImages": 18
    },
    {
        "chapterNumber": "102",
        "numImages": 18
    },
    {
        "chapterNumber": "103",
        "numImages": 18
    },
    {
        "chapterNumber": "104",
        "numImages": 18
    },
    {
        "chapterNumber": "105",
        "numImages": 20
    },
    {
        "chapterNumber": "106",
        "numImages": 18
    },
    {
        "chapterNumber": "107",
        "numImages": 18
    },
    {
        "chapterNumber": "108",
        "numImages": 19
    },
    {
        "chapterNumber": "109",
        "numImages": 18
    },
    {
        "chapterNumber": "110",
        "numImages": 16
    },
    {
        "chapterNumber": "110a",
        "numImages": 19
    },
    {
        "chapterNumber": "110b",
        "numImages": 48
    },
    {
        "chapterNumber": "110c",
        "numImages": 19
    },
    {
        "chapterNumber": "110d",
        "numImages": 10
    },
    {
        "chapterNumber": "110e",
        "numImages": 20
    },
    {
        "chapterNumber": "111",
        "numImages": 28
    },
    {
        "chapterNumber": "112",
        "numImages": 18
    },
    {
        "chapterNumber": "113",
        "numImages": 26
    },
    {
        "chapterNumber": "114",
        "numImages": 20
    },
    {
        "chapterNumber": "114a",
        "numImages": 13
    },
    {
        "chapterNumber": "115",
        "numImages": 23
    },
    {
        "chapterNumber": "116",
        "numImages": 20
    },
    {
        "chapterNumber": "117",
        "numImages": 23
    },
    {
        "chapterNumber": "118",
        "numImages": 31
    },
    {
        "chapterNumber": "119",
        "numImages": 18
    },
    {
        "chapterNumber": "120",
        "numImages": 20
    },
    {
        "chapterNumber": "121",
        "numImages": 21
    },
    {
        "chapterNumber": "122",
        "numImages": 18
    },
    {
        "chapterNumber": "123",
        "numImages": 18
    },
    {
        "chapterNumber": "124",
        "numImages": 18
    },
    {
        "chapterNumber": "125",
        "numImages": 20
    },
    {
        "chapterNumber": "126",
        "numImages": 17
    },
    {
        "chapterNumber": "127",
        "numImages": 18
    },
    {
        "chapterNumber": "128",
        "numImages": 20
    },
    {
        "chapterNumber": "129",
        "numImages": 18
    },
    {
        "chapterNumber": "130",
        "numImages": 19
    }
];