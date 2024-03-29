const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/bookSearch',
);

const bookSeed = [
  {
    
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    description:
      'The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.',
    image: 'Seed Data',
    link: 'Seed Data',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description:
      'The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world\'s major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel\'s protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.',
    image: 'Seed Data',
    link: 'Seed Data',
  },
  {
    title: 'The Punch Escrow',
    author: 'Tal M. Klein',
    description:
      'It\'s the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.',
    image: 'Seed Data',
    link: 'Seed Data',
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    description:
      'Harry Potter has no idea how famous he is. That\'s because he\'s being raised by his miserable aunt and uncle who are terrified Harry will learn that he\'s really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.',
    image: 'Seed Data',
    link: 'Seed Data',
  },

  {
    title: 'The Everything Store: Jeff Bezos and the Age of Amazon',
    author: 'Brad Stone',
    description:
      'The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn\'t content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that\'s never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech\'s other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.',
    image: 'Seed Data',
    link: 'Seed Data',
  },
  {
    title: 'Total Recall: My Unbelievably True Life Story',
    author: 'Arnold Schwarzenegger',
    description:
      'In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall.',
    image: 'Seed Data',
    link: 'Seed Data',
  },
  {
    title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
    author: 'Ashlee Vance',
    description:
      'In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley\'s most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius\' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk\'s story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes,and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy.',
    image: 'Seed Data',
    link: 'Seed Data',
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    description:
      'Based on more than 40 interviews with Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. At a time when America is seeking ways to sustain its innovative edge, and when societies around the world are trying to build digital-age economies, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the 21st century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering. Although Jobs cooperated with this book, he asked for no control over what was written. He put nothing off-limits. He encouraged the people he knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes,and colleagues provide an unvarnished view of the passions, perfectionism, obsessions, artistry, devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted. Driven by demons, Jobs could drive those around him to fury and despair. But his personality and products were interrelated, just as Apple\'s hardware and software tended to be, as if part of an integrated system. His tale is instructive and cautionary, filled with lessons about innovation, character, leadership, and values.',
    image: 'Seed Data',
    link: 'Seed Data',
  },
  
  
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });