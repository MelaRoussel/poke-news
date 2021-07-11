import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { func, shape } from 'prop-types';

import styles from './styles';
import NewsItem from '../../components/NewsItem';

const data = {
  status: 'ok',
  totalResults: 1419,
  articles: [
    {
      source: {
        id: 'wired',
        name: 'Wired',
      },
      author: "Cecilia D'Anastasio",
      title: 'Nintendo Has Been Stuck in a Creative Rut',
      description:
        'The company is still publishing big games for the Switch, but recently its titles have an uncharacteristic dullness.',
      url: 'https://www.wired.com/story/nintendo-stuck-creative-rut-switch-games/',
      urlToImage:
        'https://media.wired.com/photos/60ca300be0265e00c03a3fac/191:100/w_1280,c_limit/games_nintendo_GH13Y0.jpg',
      publishedAt: '2021-06-16T17:20:02Z',
      content:
        'The Nintendo Switch had a powerful start. Right out of the gate, the company released banger after banger after banger of a game, each delivering that trademark Nintendo feeling of recess time on a w… [+3636 chars]',
    },
    {
      source: {
        id: null,
        name: 'Kotaku',
      },
      author: 'Zack Zwiezen',
      title: "Bidoof Just Doesn't Give A Damn",
      description:
        'Every Pokemon is interesting and worth talking about. I don’t play a ton of Pokemon, but I do enjoy the universe and I love learning more about the creatures in it. So, Here’s Another Pokemon! It’s Swampert!Read more...',
      url: 'https://kotaku.com/bidoof-just-doesnt-give-a-shit-1847223479',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1e3250e0991e74b6450511cf6f546f95.jpg',
      publishedAt: '2021-07-03T14:30:00Z',
      content:
        'Every Pokemon is interesting and worth talking about. I dont play a ton of Pokemon, but I do enjoy the universe and I love learning more about the creatures in it. So, Heres Another Pokemon! Its Swam… [+2315 chars]',
    },
    {
      source: {
        id: null,
        name: 'CNET',
      },
      author: 'Sean Keane',
      title: 'Pokemon Unite hits Nintendo Switch next month, gets new trailer - CNET',
      description: "It'll land on mobile devices in September.",
      url: 'https://www.cnet.com/news/pokemon-unite-hits-nintendo-switch-next-month-gets-new-trailer/',
      urlToImage:
        'https://www.cnet.com/a/img/kc_boZnfSVBsxpaINdkca6eCYsk=/1200x630/2021/06/17/09c2f329-3082-4062-bcd0-f98020d51af2/key-visual-unite.jpg',
      publishedAt: '2021-06-17T15:45:00Z',
      content:
        'Pokemon Unite is landing on Nintendo Switch in July.\r\nThe Pokemon Company\r\nPokemon Unite is coming to Nintendo Switch in July, the Pokemon Company said Thursday. The co-op team-based battling game, w… [+584 chars]',
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'https://www.engadget.com/about/editors/jessica-conditt',
      title: "Missing: Three games we didn't see during Nintendo's E3 stream",
      description: 'Seriously, has anyone heard from Bayonetta?.',
      url: 'https://www.engadget.com/nintendo-e-3-2021-bayonetta-metroid-splatoon-192534946.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2021-06/0450ac10-ce0b-11eb-9f1b-dfd2ba8efc30',
      publishedAt: '2021-06-15T19:25:34Z',
      content:
        "Nintendo is the proud proprietor of dozens of legendary franchises, so it's easy for the company to impress its fans and let them down. Today's Nintendo Direct live stream, held on the final day of E… [+4086 chars]",
    },
    {
      source: {
        id: null,
        name: 'Android Central',
      },
      author: 'Zackery Cuevas',
      title: 'Pokémon Unite comes to Android this September',
      description:
        "The long-awaited Pokémon Unite comes to Android this summer.\n\nWhat you need to know\n\n\nPokémon Unite is a strategic team battle game being developed jointly by The Pokémon Company and Tencent Games' TiMi Studios.\nPokémon Unite releases in July for Nintendo Swi…",
      url: 'https://www.androidcentral.com/pokemon-unite-comes-android-september',
      urlToImage:
        'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/06/hero-pokemon-unite.jpg',
      publishedAt: '2021-06-17T14:06:35Z',
      content:
        "Pokémon Trainers rejoice! Pokémon's first strategic team battle game, Pokémon Unite is arriving this summer.\r\nPokémon Unite is a strategic team battle game being developed jointly by The Pokémon Comp… [+1407 chars]",
    },
    {
      source: {
        id: null,
        name: 'Kotaku',
      },
      author: 'Zack Zwiezen',
      title: "'Shop Contest: Giant Stuffed Leek",
      description:
        'For some reason, The Pokemon Company has decided to sell people a nearly 40-inch long giant, stuffed Farfetch’d leek. Why? I don’t know, but the reviews for it are great. Read more...',
      url: 'https://kotaku.com/shop-contest-giant-stuffed-leek-1847182078',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b4af106eec85b6c90c7a9e93863db75e.jpg',
      publishedAt: '2021-06-27T16:35:00Z',
      content:
        'For some reason, The Pokemon Company has decided to sell people a nearly 40-inch long giant, stuffed Farfetchd leek. Why? I dont know, but the reviews for it are great. \r\nYour challenge this week: Fi… [+1533 chars]',
    },
    {
      source: {
        id: null,
        name: 'AppleInsider',
      },
      author: 'news@appleinsider.com (Wesley Hilliard)',
      title: "'Pokemon Unite' coming to iPhone in September",
      description:
        '"Pokemon Unite" is the first strategic battle game for the series and is launching on iPhone and iPad in September.\'Pokemon Unite\' coming to mobile in SeptemberThe Pokemon franchise has spawned several popular titles for mobile, most namely "Pokemon Go." The …',
      url: 'https://appleinsider.com/articles/21/06/17/pokemon-unite-coming-to-iphone-in-september',
      urlToImage:
        'https://photos5.appleinsider.com/gallery/42679-82847-9A285502-BE7D-4219-A86A-CA994BE07B11-xl.jpg',
      publishedAt: '2021-06-17T15:06:13Z',
      content:
        '"Pokemon Unite" is the first strategic battle game for the series and is launching on iPhone and iPad in September.\r\nThe Pokemon franchise has spawned several popular titles for mobile, most namely "… [+1295 chars]',
    },
    {
      source: {
        id: null,
        name: 'Digital Trends',
      },
      author: 'Emily Morrow',
      title: 'Pokemon Unite brings MOBA-style battles to Switch in July, mobile in September',
      description:
        'A new trailer for Pokemon Unite shows off a cinematic take on the game and revealed its upcoming release date.',
      url: 'https://www.digitaltrends.com/gaming/pokemon-unite-release-date/',
      urlToImage: 'https://icdn.digitaltrends.com/image/digitaltrends/pokemon-unite-2.jpg',
      publishedAt: '2021-06-17T15:15:18Z',
      content:
        'Pokémon Unite, the upcoming multiplayer online battle arena-style game from The Pokémon Company and Tencent, has received a new trailer and a release date. The new clip shows a cinematic take on the … [+1489 chars]',
    },
    {
      source: {
        id: null,
        name: 'Stars and Stripes',
      },
      author: null,
      title: 'Soldiers watch the US withdrawal from Bagram through the lens of Pokemon Go',
      description:
        'Digital rodents and abandoned Pokemon presided over the streets of Bagram Airfield on the day news broke that U.S. troops had left the base.',
      url: 'https://www.stripes.com/theaters/middle_east/2021-07-02/pokemon-go-bagram-troop-withdrawal-2027917.html',
      urlToImage:
        'https://www.stripes.com/incoming/9mnoyc-030721POKEMONGOphoto03.jpg/alternates/LANDSCAPE_480/030721POKEMONGOphoto03.jpg',
      publishedAt: '2021-07-02T23:28:54Z',
      content:
        'KABUL, Afghanistan Digital rodents and abandoned Pokemon presided over the streets of Bagram Airfield on the day news broke that U.S. troops had left the base.  \r\nAll U.S. forces have left Bagram, wh… [+3765 chars]',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Kevin Knezevic',
      title: 'Free Pokemon Now Available For Pokemon Sword And Shield',
      description:
        "Pokemon Home's previously announced June update is now live, and The Pokemon Company is giving away a free Bulbasaur and Squirtle to all users to commemorate it. What makes these Pokemon special is that they both have the Gigantamax factor, which means they'l…",
      url: 'https://www.gamespot.com/articles/free-pokemon-now-available-for-pokemon-sword-and-shield/1100-6493044/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1578/15787979/3835403-0724217614-pokem.jpg',
      publishedAt: '2021-06-17T16:45:00Z',
      content:
        "Pokemon Home's previously announced June update is now live, and The Pokemon Company is giving away a free Bulbasaur and Squirtle to all users to commemorate it. What makes these Pokemon special is t… [+2122 chars]",
    },
    {
      source: {
        id: null,
        name: 'AppleInsider',
      },
      author: 'news@appleinsider.com (Amber Neely)',
      title: 'Pokemon Go celebrates 5 years with new anniversary event',
      description:
        'Pokemon Go launches a nine-day-long event for their fifth anniversary, including event-exclusive Pokemon, new research tasks, and a new real-time sky mechanic.Pokemon Go launched on July 6, 2016, and quickly established itself as one of the most popular mobil…',
      url: 'https://appleinsider.com/articles/21/07/05/pokemon-go-celebrates-5-years-with-new-anniversary-event',
      urlToImage: 'https://photos5.appleinsider.com/gallery/42991-83566-header-xl.jpg',
      publishedAt: '2021-07-05T19:35:29Z',
      content:
        'Pokemon Go launches a nine-day-long event for their fifth anniversary, including event-exclusive Pokemon, new research tasks, and a new real-time sky mechanic.\r\nPokemon Go launched on July 6, 2016, a… [+2070 chars]',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Erick Tay',
      title: 'Pokemon Go Together We Raid With Pro Jessica',
      description: 'We raid together in Pokemon Go!',
      url: 'https://www.gamespot.com/videos/pokemon-go-together-we-raid-with-pro-jessica/2300-6455744/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1352/13527689/3851188-togetherweraid_jessica%E2%80%99sstory.00_00_30_16.still003.jpg',
      publishedAt: '2021-07-02T15:36:00Z',
      content: 'We raid together in Pokemon Go!\r\nBy \r\n Erick Tay\r\n on July 2, 2021 at 8:44AM PDT',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Kevin Knezevic',
      title: 'Meloetta Teased For Pokemon Go Fest 2021',
      description:
        'It appears Meloetta is coming to Pokemon Go very soon. Developer Niantic shared a silhouette of the Mythical Gen 5 Pokemon on Twitter with the hashtag #PokemonGoFest2021, essentially confirming that Meloetta will debut as part of the two-day event next month.…',
      url: 'https://www.gamespot.com/articles/meloetta-teased-for-pokemon-go-fest-2021/1100-6492644/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1578/15787979/3835947-6431437635-xIPpO0EusnCkWJpP_2ghj9EiWvDZlEybBvjWc2u4zLR6XwMKKEYz4ASZZTGDGwyJWIRNXM7fjMRBlFTUreH9xRF9OQhAT15tRK4YLLIYm29xHSI%3Ds0.jpg',
      publishedAt: '2021-06-10T16:40:00Z',
      content:
        'It appears Meloetta is coming to Pokemon Go very soon. Developer Niantic shared a silhouette of the Mythical Gen 5 Pokemon on Twitter with the hashtag #PokemonGoFest2021, essentially confirming that … [+1578 chars]',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Erick Tay',
      title: 'Pokemon Go 5 Year Anniversary Trailer',
      description: 'Reminiscence about Pokemon Go over the last 5 years.',
      url: 'https://www.gamespot.com/videos/pokemon-go-5-year-anniversary-trailer/2300-6455764/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/original/1352/13527689/3852285-pok%C3%A9mongo5yearanniversarycelebration%21.mp4.00_00_49_05.still001.jpg',
      publishedAt: '2021-07-06T19:59:00Z',
      content:
        'Reminiscence about Pokemon Go over the last 5 years.\r\nBy \r\n Erick Tay\r\n on July 6, 2021 at 1:07PM PDT',
    },
    {
      source: {
        id: null,
        name: 'MarketWatch',
      },
      author: 'Nicole Lyn Pesce',
      title: 'The Margin: Pokemon Go maker Niantic slammed for pushing players to go back outside',
      description: "Some pandemic stay-at-home bonuses are being removed, to many users' dismay",
      url: 'https://www.marketwatch.com/story/pokemon-go-maker-niantic-slammed-for-pushing-players-to-go-back-outside-11624378426',
      urlToImage: 'https://images.mktw.net/im-357847/social',
      publishedAt: '2021-06-22T16:13:00Z',
      content:
        'Pokemon fans play by the mantra Gotta catch em all but they want to catch imaginary pocket monsters, not COVID. So during the coronavirus pandemic, Pokemon Go developer Niantic modified some features… [+3749 chars]',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Kevin Knezevic',
      title: 'Pokemon Sword And Shield Shiny Grapploct Event Now Live Until June 27',
      description:
        "A new Max Raid event has begun in Pokemon Sword and Shield. This time, tentacled Pokemon are appearing more frequently in Max Raid dens in both games, including Shiny Grapploct. You'll need to act quickly if you want to catch one, however, as the event only r…",
      url: 'https://www.gamespot.com/articles/pokemon-sword-and-shield-shiny-grapploct-event-now-live-until-june-27/1100-6493278/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1578/15787979/3848788-pokemonswshseaevent.jpg',
      publishedAt: '2021-06-25T16:25:00Z',
      content:
        "A new Max Raid event has begun in Pokemon Sword and Shield. This time, tentacled Pokemon are appearing more frequently in Max Raid dens in both games, including Shiny Grapploct. You'll need to act qu… [+1743 chars]",
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Kevin Knezevic',
      title: 'Pokemon Go Fest 2021 Will Have In-Person Events In More Than 20 Cities',
      description:
        "Pokemon Go Fest 2021 takes place on July 17 and 18. This year's event will once again be virtual, meaning players around the world will be able to purchase a ticket and participate, but Niantic is also holding some in-person celebrations in select cities acro…",
      url: 'https://www.gamespot.com/articles/pokemon-go-fest-2021-will-have-in-person-events-in-more-than-20-cities/1100-6493427/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1578/15787979/3835947-6431437635-xIPpO0EusnCkWJpP_2ghj9EiWvDZlEybBvjWc2u4zLR6XwMKKEYz4ASZZTGDGwyJWIRNXM7fjMRBlFTUreH9xRF9OQhAT15tRK4YLLIYm29xHSI%3Ds0.jpg',
      publishedAt: '2021-07-01T18:00:00Z',
      content:
        "Pokemon Go Fest 2021 takes place on July 17 and 18. This year's event will once again be virtual, meaning players around the world will be able to purchase a ticket and participate, but Niantic is al… [+2138 chars]",
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Kevin Knezevic',
      title: 'New Pokemon Sword And Shield Max Raid Event Now Live, Features Shiny Gigantamax Copperajah',
      description:
        "A new Max Raid event is underway in Pokemon Sword and Shield. Until July 11, Pokemon associated with Galar's curry medals will appear more frequently in Max Raid dens across both games, and you'll even receive some version-exclusive food items to help you com…",
      url: 'https://www.gamespot.com/articles/new-pokemon-sword-and-shield-max-raid-event-now-live-features-shiny-gigantamax-copperajah/1100-6493765/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1578/15787979/3853768-pokemonswshcurryevent.jpg',
      publishedAt: '2021-07-09T15:46:00Z',
      content:
        "A new Max Raid event is underway in Pokemon Sword and Shield. Until July 11, Pokemon associated with Galar's curry medals will appear more frequently in Max Raid dens across both games, and you'll ev… [+1636 chars]",
    },
    {
      source: {
        id: null,
        name: 'Android Community',
      },
      author: 'Rei Padla',
      title: 'Pokemon UNITE launching on Nintendo Switch, here’s when',
      description:
        'Our last Pokemon update back in February had something to do with Pokemon UNITE. We mentioned then the game was ready for Android beta testers in Canada. Now we’re learning Pokémon UNITE will soon be available on Nintendo Switch and other mobile devices. This…',
      url: 'https://androidcommunity.com/pokemon-unite-launching-on-nintendo-switch-heres-when-20210618/',
      urlToImage: 'https://cdn.androidcommunity.com/wp-content/uploads/2021/06/Pokemon-UNITE.jpg',
      publishedAt: '2021-06-18T13:00:26Z',
      content:
        'Our last Pokemon update back in February had something to do with Pokemon UNITE. We mentioned then the game was ready for Android beta testers in Canada. Now we’re learning Pokémon UNITE will soon be… [+977 chars]',
    },
    {
      source: {
        id: null,
        name: 'Android Community',
      },
      author: 'Rei Padla',
      title: 'Pokemon GO to get new exploration bonus updates',
      description:
        'Pokemon UNITE is launching on Nintendo Switch very soon. Some of you may have probably tried the game as the beta version has been ready for a while now. The latest update on Pokemon GO is for those still into the game even after five years. The augmented rea…',
      url: 'https://androidcommunity.com/pokemon-go-to-get-new-exploration-bonus-updates-20210622/',
      urlToImage: 'https://cdn.androidcommunity.com/wp-content/uploads/2021/06/Pokemon-GO.jpeg',
      publishedAt: '2021-06-22T10:15:51Z',
      content:
        'Pokemon UNITE is launching on Nintendo Switch very soon. Some of you may have probably tried the game as the beta version has been ready for a while now. The latest update on Pokemon GO is for those … [+1961 chars]',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Kevin Knezevic',
      title: 'Pokemon Go Raid Battles Are Getting An Update',
      description:
        'Pokemon Go developer Niantic has outlined a slate of changes it will be making to Raid Battles. Beginning this summer, the studio will introduce a new feature called Trainer Achievements, and it will also implement various other quality-of-life improvements.A…',
      url: 'https://www.gamespot.com/articles/pokemon-go-raid-battles-are-getting-an-update/1100-6493237/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1578/15787979/3848272-4077092640-gErQLKdVYb35MFGRY4CvjcRjg_sP2pZgZHeliLRp6BSldoAyD1uXSzmKyiB8seTehdW5Z7Ixras6y-QlDzWUqd7nISUOb5ub7fenmomKbmKNYw%3Ds0.jpg',
      publishedAt: '2021-06-24T15:40:00Z',
      content:
        'Pokemon Go developer Niantic has outlined a slate of changes it will be making to Raid Battles. Beginning this summer, the studio will introduce a new feature called Trainer Achievements, and it will… [+1872 chars]',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Kevin Knezevic',
      title: 'Pokemon Go Adding Shadow Ho-Oh Next Week',
      description:
        'A new Shadow Legendary is arriving in Pokemon Go next week. Beginning June 17, Team Go Rocket leader Giovanni will have Shadow Ho-Oh in his possession, making this your first chance to catch the Shadow form of the Legendary Rainbow Pokemon.To encounter Shadow…',
      url: 'https://www.gamespot.com/articles/pokemon-go-adding-shadow-ho-oh-next-week/1100-6492690/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1578/15787979/3563912-pokemon-go-team-rocket-02.jpg',
      publishedAt: '2021-06-10T21:26:00Z',
      content:
        'A new Shadow Legendary is arriving in Pokemon Go next week. Beginning June 17, Team Go Rocket leader Giovanni will have Shadow Ho-Oh in his possession, making this your first chance to catch the Shad… [+1197 chars]',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Cameron Koch',
      title: 'Nintendo\'s Shigeru Miyamoto Says Playing Pokemon Go "Is A Dream Come True"',
      description:
        "Nintendo's recent 81st annual general meeting of shareholders offered an opportunity for those present to ask questions of some of Nintendo's top leadership, including the most important question of all--what are your favorite games?For legendary Nintendo gam…",
      url: 'https://www.gamespot.com/articles/nintendos-shigeru-miyamoto-says-playing-pokemon-go-is-a-dream-come-true/1100-6493590/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1647/16470614/3852050-miyamotohookedonpokemongo.jpg',
      publishedAt: '2021-07-06T15:42:00Z',
      content:
        "Nintendo's recent 81st annual general meeting of shareholders offered an opportunity for those present to ask questions of some of Nintendo's top leadership, including the most important question of … [+2154 chars]",
    },
    {
      source: {
        id: null,
        name: 'Android Central',
      },
      author: 'Carli Velocci',
      title: 'Report: The West is getting more into complex mobile games',
      description:
        'What you need to know\n\n\nThe West is has gotten more into mobile gaming over the past four years, and it shows no signs of stopping.\nA key improvement has been in our interest in more complex mobile titles like Call of Duty Mobile or Pokémon Go.\nThe move is pa…',
      url: 'https://www.androidcentral.com/report-us-getting-more-complex-mobile-games-no-signs-slowing-down',
      urlToImage:
        'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2019/10/call-of-duty-mobile-shooter-action-games-hero.jpg',
      publishedAt: '2021-06-24T15:00:02Z',
      content:
        "When most people in the U.S. think about mobile games, they likely picture casual games like Candy Crush Saga or Homescapes. They're easy to play, idle, puzzle games that are good for passing the tim… [+2854 chars]",
    },
    {
      source: {
        id: null,
        name: 'Gamasutra',
      },
      author: 'Chris Kerr',
      title: 'Pokemon leakers told to pay $150,000 each in damages to The Pokemon Company',
      description:
        'Two leakers have been told to pay The Pokemon Company a sizableÂ $150,000 each in damages after taking and uploading photographs of an unreleased Pokemon Sword and Shield strategy guide. ...',
      url: 'https://www.gamasutra.com/view/news/383988/Pokemon_leakers_told_to_pay_150000_each_in_damages_to_The_Pokemon_Company.php?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+GamasutraFeatureArticles+%28Gamasutra+Feature+Articles%29',
      urlToImage: 'http://www.gamasutra.com/db_area/images/news/2021/Jun/383988/pokemon thumb.jpg',
      publishedAt: '2021-06-23T12:11:00Z',
      content:
        "Two leakers have been told to pay The Pokemon Company a sizable $150,000 each in damages along with attorneys' fees after taking and uploading photographs of an unreleased Pokemon Sword and Shield st… [+1182 chars]",
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Ittousai',
      title: 'ポケモンGO、送ってアメ2倍のスポットライトアワー開催。ヤドン大量発生',
      description:
        'ポケモンGOのミニイベント「スポットライトアワー」、6月15日(火)18時～19時はヤドンが大量発生します。\n\nボーナスは貴重な「ポケモンを博士に送った際のアメが2倍」。先日のコミュニティ・デイで大量発生したフカマルなど、ボックスに残しておいたポケモンを一気に送ってアメを稼ぐ機会です。',
      url: 'https://japanese.engadget.com/pokemon-go-slowpoke-084727340.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2021-06/2d258d10-c7f6-11eb-bfba-b9b813fc152c',
      publishedAt: '2021-06-15T08:47:27Z',
      content:
        'GO615()1819\r\n2\r\n GO( Slowpoke)\r\n21\r\nPokemon GO Fest 7171825GO 51/3610\r\n72GO Fest \r\nGO Fest 2021610',
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Ittousai',
      title: 'ポケモンGO Fest、二日目は全ての伝説レイドボスが再登場。チケットなしでも参戦可能',
      description:
        'ポケモンGOが夏の大型イベント Pokemon GO Fest 2021二日目の詳細を発表しました。7月18日(日)のテーマは「レイド・デー」。過去に登場したすべての伝説レイドボスがローテーションで再登場します。',
      url: 'https://japanese.engadget.com/pokemon-go-fest-2021-day-two-raid-legendary-225417547.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2021-06/3e3c8d60-d539-11eb-aed7-67d70eb8f51b',
      publishedAt: '2021-06-24T22:54:17Z',
      content:
        'GO Pokemon GO Fest 2021718()\r\n1018412\r\nGO Fest 2021\r\n (10111415)\r\n (11121516)\r\n (12131617)\r\n (13141718)\r\nGO Fest()\r\nGO Fest 2021\r\n25GO561018401/3\r\nGO Fest 2021610',
    },
    {
      source: {
        id: null,
        name: 'GameSpot',
      },
      author: 'Darryn Bonthuys',
      title: 'Pokemon Go Developer Niantic Is Working On A New Transformers AR Game',
      description:
        "Pokemon Go developer Niantic became a household name after its pocket monster mobile game took off a few years ago, and for its next project, the company is looking to adapt Transformers into an augmented reality game.As reported by Bloomberg, Niantic's next …",
      url: 'https://www.gamespot.com/articles/pokemon-go-developer-niantic-is-working-on-a-new-transformers-ar-game/1100-6492851/',
      urlToImage:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/3843676-transformers-devastation.jpg',
      publishedAt: '2021-06-14T12:28:00Z',
      content:
        'Pokemon Go developer Niantic became a household name after its pocket monster mobile game took off a few years ago, and for its next project, the company is looking to adapt Transformers into an augm… [+1801 chars]',
    },
    {
      source: {
        id: null,
        name: 'Destructoid',
      },
      author: 'Chris Carter',
      title: 'PSA: Grab a free Squirtle and Bulbasaur through Pokemon Sword and Shield and Pokemon Home',
      description:
        'It takes a few seconds and stacks All has been quiet on the Pokemon front as we wait for the new...\nThe post PSA: Grab a free Squirtle and Bulbasaur through Pokemon Sword and Shield and Pokemon Home appeared first on Destructoid.',
      url: 'https://www.destructoid.com/pokemon-sword-shield-home-free-pokemon-promo-how-to/',
      urlToImage: 'https://www.destructoid.com/wp-content/uploads/2021/06/Pokemon-Home-promo.jpg',
      publishedAt: '2021-06-22T15:30:47Z',
      content:
        'All has been quiet on the Pokemon front as we wait for the new set of remakes and Legends, but for now, you can snag some classic generation one creatures through a very easy to navigate Pokemon Home… [+866 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Engadget Japanese',
      title:
        'ポケモンとテンセント傘下TiMi共同開発の基本無料ゲーム「ポケモンユナイト」が配信時期決定、Switch版7月・スマホ版9月',
      description:
        '株式会社ポケモンが、Nintendo Switch / スマートフォン向け基本無料ゲーム『ポケモンユナイト』の配信時期を発表しました。\r\n\r\nスイッチ版は先行して7月、スマートフォン版は9月より配信予定。6月24日から26日には、誰でも参加できるスイッチ版ネットワークテストも実施します。\r\n\r\n\r\n\r\n『ポケモンユナイト』(Pokemon UNITE)は、株式会社ポケモンと中国のTiMiが共同開発する基本無料の「チーム戦略バトルゲーム」。\r\n\r\nプレーヤー5人対5人でそれぞれ自分の操作するポケモンを選び、マップ上…',
      url: 'https://jp.techcrunch.com/2021/06/18/pokemon-timi-studios-pokemon-unite-nintendo-switch/',
      urlToImage: 'https://jp.techcrunch.com/wp-content/uploads/2021/06/2021-06-18-002-index.jpg?w=1024',
      publishedAt: '2021-06-18T00:44:34Z',
      content:
        'Pokemon UNITE\r\nNintendo Switch / \r\n7962426\r\nPokemon UNITE\r\n(Pokemon UNITE)TiMi\r\n55MOBA ()\r\nPokemon UNITE\r\n20206\r\nUnite5on5\r\n62426Nintendo SwitchePokémon UNITE \r\n Nintendo Switch Online \r\nPokemon UNIT… [+232 chars]',
    },
    {
      source: {
        id: null,
        name: 'Destructoid',
      },
      author: 'Chris Carter',
      title: 'You can try Pokemon Unite now if you have a Japanese eShop account',
      description:
        'Sheriff Woody voice: ‘If you don’t have one, get one!’ So Pokemon Unite is out next month on Switch, but...\nThe post You can try Pokemon Unite now if you have a Japanese eShop account appeared first on Destructoid.',
      url: 'https://www.destructoid.com/you-can-try-pokemon-unite-now-if-you-have-a-japanese-eshop-account/',
      urlToImage: 'https://www.destructoid.com/wp-content/uploads/2021/06/Pokemon-Unite-Demo.jpeg',
      publishedAt: '2021-06-25T14:00:46Z',
      content:
        'So Pokemon Unite is out next month on Switch, but for now, you can try out online play via the official stress test with a free download. A caveat, though: you need a Japanese eShop account.\r\nJust he… [+636 chars]',
    },
    {
      source: {
        id: null,
        name: 'Destructoid',
      },
      author: 'Chris Moyse',
      title: 'Pokemon GO developer Niantic announces new Transformers mobile title',
      description:
        'More than meets the WiFi Niantic, the studio behind mobile phenomenon Pokemon GO, has revealed that it is working alongside...\nThe post Pokemon GO developer Niantic announces new Transformers mobile title appeared first on Destructoid.',
      url: 'https://www.destructoid.com/niantic-transformers-game-mobile-reveal/',
      urlToImage: 'https://www.destructoid.com/wp-content/uploads/2021/06/transformers-game-niantic.jpg',
      publishedAt: '2021-06-14T14:00:12Z',
      content:
        'Niantic, the studio behind mobile phenomenon Pokemon GO, has revealed that it is working alongside developer Very Very Spaceship to produce a brand new augmented reality game, this time set in the Tr… [+1120 chars]',
    },
    {
      source: {
        id: null,
        name: 'Destructoid',
      },
      author: 'Chris Moyse',
      title: 'Pokemon GO has raked in over $5 billion in revenue since launch',
      description:
        'Gotta cash ’em all This week sees mobile phenomenon Pokemon GO celebrate its fifth birthday. Yep, it’s been five long...\nThe post Pokemon GO has raked in over $5 billion in revenue since launch appeared first on Destructoid.',
      url: 'https://www.destructoid.com/pokemon-go-fest-2021-5-billion-revenue-anniversary/',
      urlToImage: 'https://www.destructoid.com/wp-content/uploads/2021/07/pokemon-go-fest-2021.jpg',
      publishedAt: '2021-07-09T18:00:05Z',
      content:
        'This week sees mobile phenomenon Pokemon GO celebrate its fifth birthday. Yep, it’s been five long years since Niantic’s AR app came into our lives, bringing with it tales of crazy community rushes, … [+1136 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gamasutra',
      },
      author: 'Chris Kerr',
      title: 'Pokemon Go maker Niantic is working on a real-world Transformers mobile game',
      description:
        'Pokemon Go creator Niantic is working on a real-worldÂ Transformers mobile game called Transformers: Heavy Metal. ...',
      url: 'https://www.gamasutra.com/view/news/383349/Pokemon_Go_maker_Niantic_is_working_on_a_realworld_Transformers_mobile_game.php?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+GamasutraFeatureArticles+%28Gamasutra+Feature+Articles%29',
      urlToImage: 'http://www.gamasutra.com/db_area/images/news/2021/Jun/383349/heavy metal.jpg',
      publishedAt: '2021-06-14T13:07:00Z',
      content:
        'Pokemon Go creator Niantic is working on a real-world Transformers mobile game called Transformers: Heavy Metal. \r\nThe developer has partnered with Hasbro and TOMY on the project, and said the game w… [+677 chars]',
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Ittousai',
      title: 'ポケモンGO Fest 2021、世界22都市にリアル会場を設置。日本含まず',
      description:
        '7月17日(土)・18日(日)に開催を控えるポケモンGOの夏イベント Pokemon GO Fest 2021 について。\n\n昨年に引き続き、どこにいても参加できる有料バーチャルイベントとなった今年の GO Fest ですが、運営元ナイアンティックは世界の20都市にリアルイベント会場を設置することを明らかにしました。',
      url: 'https://japanese.engadget.com/pokemon-go-fest-2021-061028180.html',
      urlToImage: 'https://s.yimg.com/os/creatr-uploaded-images/2021-05/3eac3c90-bee7-11eb-bfbd-65c8ebabe3c5',
      publishedAt: '2021-07-02T06:10:28Z',
      content:
        '717()18()GO Pokemon GO Fest 2021 \r\n GO Fest 22\r\nGO Fest 2021 Go Fest \r\nGO Fest 2021\r\nLinz, AT\r\nDresden, DE\r\nEssen, DE\r\nHamburg, DE\r\nSevilla, ES\r\nParis, FR\r\nWarsaw, PL\r\nBristol, UK\r\nEdinburgh, UK\r\nLiv… [+280 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gamasutra',
      },
      author: 'Chris Kerr',
      title: "Niantic adding 'exploration bonuses' to Pokemon Go to get players moving again",
      description:
        'Niantic is trying to ease Pokemon Go players into post-pandemic life by adding exploration bonuses to the popular AR title. ...',
      url: 'https://www.gamasutra.com/view/news/383902/Niantic_adding_exploration_bonuses_to_Pokemon_Go_to_get_players_moving_again.php?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+GamasutraFeatureArticles+%28Gamasutra+Feature+Articles%29',
      urlToImage: 'http://www.gamasutra.com/db_area/images/news/2021/Jun/383902/pokemon thumb.jpg',
      publishedAt: '2021-06-22T09:31:00Z',
      content:
        'Niantic is trying to ease Pokemon Go players into post-pandemic life by adding exploration bonuses to the popular augmented reality title.\r\nAlthough many regions are still grappling with COVID-19 due… [+2532 chars]',
    },
    {
      source: {
        id: null,
        name: 'Pokebeach.com',
      },
      author: 'Water Pokémon Master',
      title: 'PokeBeach Hacked, Next Steps for the Site',
      description: 'Comments',
      url: 'https://www.pokebeach.com/2021/07/pokebeach-hacked-next-steps-for-the-site',
      urlToImage: null,
      publishedAt: '2021-07-02T16:23:37Z',
      content:
        'PokeBeach was hacked on Monday. All files were deleted. We have been assessing the situation for the last 72 hours. I have barely slept.\r\nNo user data was stolen or compromised.\r\nThe hacking was a pr… [+2923 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gamasutra',
      },
      author: 'Chris Kerr',
      title: 'Bemused Pokemon Go players are petitioning Niantic to make pandemic tweaks permanent',
      description:
        "Pokemon Go players are imploring developer Niantic to make some of the title's pandemic-enforced features permanent fixtures to ensure the title remains accessible and safe. ...",
      url: 'https://www.gamasutra.com/view/news/384148/Bemused_Pokemon_Go_players_are_petitioning_Niantic_to_make_pandemic_tweaks_permanent.php?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+GamasutraFeatureArticles+%28Gamasutra+Feature+Articles%29',
      urlToImage: 'http://www.gamasutra.com/db_area/images/news/2021/Jun/384148/pokemon go.jpg',
      publishedAt: '2021-06-25T11:07:00Z',
      content:
        "Pokemon Go players are imploring developer Niantic to make some of the title's pandemic-enforced features permanent fixtures to ensure the title remains accessible and safe in the long-term.\r\nA Chang… [+3528 chars]",
    },
    {
      source: {
        id: null,
        name: 'Gamasutra',
      },
      author: 'Chris Kerr',
      title: 'Bemused Pokemon Go players petition Niantic to make pandemic tweaks permanent',
      description:
        "Pokemon Go players are imploring developer Niantic to make some of the title's pandemic-enforced features permanent fixtures to ensure the title remains accessible and safe. ...",
      url: 'https://www.gamasutra.com/view/news/384148/Bemused_Pokemon_Go_players_petition_Niantic_to_make_pandemic_tweaks_permanent.php?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+GamasutraFeatureArticles+%28Gamasutra+Feature+Articles%29',
      urlToImage: 'http://www.gamasutra.com/db_area/images/news/2021/Jun/384148/pokemon go.jpg',
      publishedAt: '2021-06-25T11:07:00Z',
      content:
        "Pokemon Go players are imploring developer Niantic to make some of the title's pandemic-enforced features permanent fixtures to ensure it remains accessible and safe in the long-term.\r\nA Change.org p… [+3553 chars]",
    },
    {
      source: {
        id: null,
        name: 'Destructoid',
      },
      author: 'Eric Van Allen',
      title: 'July 1 has been declared Bidoof Day',
      description:
        'A day for general Bidoofery Clear your schedule, because Thursday is no longer just a normal Thursday. The Pokemon Company...\nThe post July 1 has been declared Bidoof Day appeared first on Destructoid.',
      url: 'https://www.destructoid.com/bidoof-day-pokemon-july-1-news/',
      urlToImage: 'https://www.destructoid.com/wp-content/uploads/2021/06/BidoofDay.jpg',
      publishedAt: '2021-06-28T20:00:29Z',
      content:
        'Clear your schedule, because Thursday is no longer just a normal Thursday. The Pokemon Company announced today that July 1 has been declared Bidoof Day, a full day of celebrating the Pokemon Bidoof.\r… [+1078 chars]',
    },
    {
      source: {
        id: 'mashable',
        name: 'Mashable',
      },
      author: 'Adam Rosenberg',
      title: 'The best video games of 2021, so far',
      description:
        "It's been a good year for games.\nThere are lots of extremely obvious reasons why 2021 is already a vastly better year than 2020, of course. But while many of us are still stuck inside — or just feeling unsure about venturing back outside — there's been plenty…",
      url: 'https://mashable.com/article/best-video-games-2021/',
      urlToImage:
        'https://mondrian.mashable.com/2021%252F06%252F22%252Fd1%252F63722c7774204452abdaf1236274a381.fceef.jpg%252F1200x630.jpg?signature=LGfuRv__L75u1dp3R8YymAWx-Vs=',
      publishedAt: '2021-06-22T13:45:01Z',
      content:
        "It's been a good year for games.\r\nThere are lots of extremely obvious reasons why 2021 is already a vastly better year than 2020, of course. But while many of us are still stuck inside or just feelin… [+8890 chars]",
    },
    {
      source: {
        id: null,
        name: 'Destructoid',
      },
      author: 'Eric Van Allen',
      title: 'An update on Pokemon Unite, the pocket monster MOBA, is set for tomorrow',
      description:
        'No need to call missing E3 2021 may have come to a close yesterday, but there’s still some news on...\nThe post An update on Pokemon Unite, the pocket monster MOBA, is set for tomorrow appeared first on Destructoid.',
      url: 'https://www.destructoid.com/pokemon-unite-june-2021-update-news/',
      urlToImage: 'https://www.destructoid.com/wp-content/uploads/2021/06/PokemonUniteLogo_061621.jpg',
      publishedAt: '2021-06-16T22:00:09Z',
      content:
        'E3 2021 may have come to a close yesterday, but there’s still some news on the horizon. The Pokemon Company, for example, has an update on the way about its Pokemon MOBA, Unite.\r\nThe Pokemon Company … [+922 chars]',
    },
    {
      source: {
        id: null,
        name: 'Touch Arcade',
      },
      author: 'Mikhail Madnani',
      title:
        '‘Pokemon Unite’ Releases Next Month on Nintendo Switch and September on iOS and Android for Free with Cross Platform Play',
      description:
        'Following the initial announcement from The Pokemon Company and Tencent, the 5v5 free to start MOBA for iOS, Android, and Nintendo Switch, Pokemon Unite has slowly seen more information and gameplay showcased alongside a regional beta test for Android. Pokemo…',
      url: 'https://toucharcade.com/2021/06/17/pokemon-unite-release-date-nintendo-switch-july-ios-android-september-free-tencent-nintendo-cross-play/',
      urlToImage:
        'https://toucharcade.com/wp-content/uploads/2021/06/9C966536-D506-4F9D-93E4-D4DE1F9BAD84.jpeg',
      publishedAt: '2021-06-17T13:38:25Z',
      content:
        'Following the initial announcement from The Pokemon Company and Tencent, the 5v5 free to start MOBA for iOS, Android, and Nintendo Switch, Pokemon Unite has slowly seen more information and gameplay … [+1099 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gizmodo.com',
      },
      author: 'Valerie Complex',
      title: 'The Addams Family Character Posters Are Here!',
      description:
        'Addams Family Character Poster\r\nImage: United Artist Releasing\r\nThe Addams Family 2 character posters are here! From the looks of it, the entire family is on vacation.In addition to the characters, the voice actors are on display as well. The cast is super st…',
      url: 'https://gizmodo.com/the-addams-family-character-posters-are-here-1847228156',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/97035ed0c4f03eea7abf49b8a9debc12.jpg',
      publishedAt: '2021-07-04T21:00:00Z',
      content:
        'The Addams Family 2 character posters are here! From the looks of it, the entire family is on vacation.\r\nIn addition to the characters, the voice actors are on display as well. The cast is super stac… [+1679 chars]',
    },
    {
      source: {
        id: null,
        name: 'Digital Trends',
      },
      author: 'Emily Morrow',
      title: 'Wholesome Direct showcases over 75 cozy indie games, cute animals',
      description:
        'This year’s Wholesome Direct livestream featured cute, cozy, and calm games from a variety of indie developers and publishers. While several titles and updates, like Ooblets, were anticipated, the livestream also revealed a considerable amount of brand-new ti…',
      url: 'https://www.digitaltrends.com/gaming/wholesome-games-showcase-2021/',
      urlToImage: 'https://icdn.digitaltrends.com/image/digitaltrends/beasts-of-maravilla-island.jpg',
      publishedAt: '2021-06-12T19:02:53Z',
      content:
        'This year’s Wholesome Direct livestream featured cute, cozy, and calm games from a variety of indie developers and publishers. While several titles and updates, like Ooblets, were anticipated, the li… [+1741 chars]',
    },
    {
      source: {
        id: null,
        name: 'Vida Extra',
      },
      author: 'Frankie MB',
      title: 'Pokémon UNITE llegará en julio a Nintendo Switch y se jugará en móviles a partir de septiembre',
      description:
        'Cada en verano se desata la fiebre amarilla de Pokémon a través de un nuevo juego, y lo que Nintendo ha preparado para celebrar el 25 aniversario es excepcional: Pokemon UNITE, el MOBA protagonizado por los archiconocidos monstruos de bolsillo, llegará en jul…',
      url: 'https://www.vidaextra.com/rpg/pokemon-unite-llegara-julio-a-nintendo-switch-se-jugara-moviles-a-partir-septiembre',
      urlToImage: 'https://i.blogs.es/5a70f9/e4fgwo5xoaux6ju/840_560.jpeg',
      publishedAt: '2021-06-17T13:30:49Z',
      content:
        'Cada en verano se desata la fiebre amarilla de Pokémon a través de un nuevo juego, y lo que Nintendo ha preparado para celebrar el 25 aniversario es excepcional: Pokemon UNITE, el MOBA protagonizado … [+1791 chars]',
    },
    {
      source: {
        id: null,
        name: 'HYPEBEAST',
      },
      author: 'info@hypebeast.com (HYPEBEAST), HYPEBEAST',
      title: 'Abandoned Digital Pokémon Found In Afghanistan Following U.S. Troop Pullout',
      description:
        'A surprising slew of abandoned creatures in the Pokémon GO smartphone game have been found roaming the streets of the Bagram Airfield military base following the pullout of U.S. troops from Afghanistan.The game established a whole Pokémon GO community of troo…',
      url: 'https://hypebeast.com/2021/7/pokemon-go-digital-remains-us-troop-withdrawal-afghanistan',
      urlToImage:
        'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F07%2Fpokemon-go-digital-remains-us-troop-withdrawal-afghanistan-tw.jpg?w=960&cbr=1&q=90&fit=max',
      publishedAt: '2021-07-06T09:56:20Z',
      content:
        'A surprising slew of abandoned creatures in the Pokémon GO smartphone game have been found roaming the streets of the Bagram Airfield military base following the pullout of U.S. troops from Afghanist… [+1123 chars]',
    },
    {
      source: {
        id: null,
        name: 'Entrepreneur',
      },
      author: 'R. Paulo Delgado',
      title: 'Avoid This Common Mistake When Writing Your First Business Book',
      description:
        "New authors are often full of ideas for their first book. That's not always a good thing.",
      url: 'https://www.entrepreneur.com/article/373825',
      urlToImage: 'https://assets.entrepreneur.com/content/3x2/2000/1623097027-GettyImages-1153428658.jpg',
      publishedAt: '2021-06-10T16:00:00Z',
      content:
        'Opinions expressed by Entrepreneur contributors are their own.\r\nI had an interesting project come across my desk the other day. The author had worked out a solid marketing strategy for the business b… [+5270 chars]',
    },
    {
      source: {
        id: null,
        name: 'SlashGear',
      },
      author: 'Chris Burns',
      title: 'Pokemon company gets weird with it for Bidoof Day 2021',
      description:
        'Today is a Pokemon Company-invented special holiday called Bidoof Day. This is the first year where The Pokemon Company has suggested that it is a holiday, and it won’t likely be the last. Given the seemingly-endless array of Pokemon that now exist in the Pok…',
      url: 'https://www.slashgear.com/pokemon-company-gets-weird-with-it-for-bidoof-day-2021-01680746/',
      urlToImage: 'https://cdn.slashgear.com/wp-content/uploads/2021/07/bidoofday23.jpg',
      publishedAt: '2021-07-01T18:10:47Z',
      content:
        'Today is a Pokemon Company-invented special holiday called Bidoof Day. This is the first year where The Pokemon Company has suggested that it is a holiday, and it won’t likely be the last. Given the … [+1634 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: null,
      title: 'Ellie and Gary Brazil: The footballing father and daughter',
      description:
        "Tapings of Pokemon episodes, an eventful round of golf and family competitiveness - what it is like for Brighton's Ellie Brazil growing up in a football family.",
      url: 'https://www.bbc.co.uk/sport/football/57426388',
      urlToImage:
        'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1589E/production/_118922288_1.png',
      publishedAt: '2021-06-20T05:17:50Z',
      content:
        'Ellie and Gary Brazil: Growing up in a footballing family\r\nGetting into trouble because of Pikachu, being overly competitive in table tennis and refusing to play a round of golf together again - this… [+4599 chars]',
    },
  ],
};

export default function News({ /* getAllNews,*/ navigation, userName }) {
  /* useEffect(() => {
    getAllNews();
  }, [data]);*/

  const renderItem = ({ item }) => <NewsItem navigation={navigation} item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <View>
          <Text style={styles.user}>Hi {userName}</Text>
        </View>
        <View style={styles.resultsWrapper}>
          <Text style={styles.results}>Results : </Text>
          <Text>{data.totalResults}</Text>
        </View>
      </View>
      <View style={styles.list}>
        <FlatList data={data.articles} renderItem={renderItem} initialNumToRender={10} />
      </View>
    </View>
  );
}

News.propTypes = {
  navigation: shape({
    navigate: func,
  }).isRequired,
};

News.defaultProps = {
  navigation: shape({
    navigate: Function.prototype,
  }),
};
