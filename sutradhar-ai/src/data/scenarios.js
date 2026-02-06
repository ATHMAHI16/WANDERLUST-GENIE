export const scenarios = [
  {
    id: 'sports',
    category: 'Sports',
    title: 'The Championship Game',
    originalLanguage: 'English (US)',
    targetLanguage: 'English (Indian Context)',
    originalText: "The quarterback threw a Hail Mary pass in the final seconds to score a touchdown, winning the Super Bowl for his team.",
    transcreatedText: "The captain hit a sixer on the last ball to win the match, bringing the World Cup home for his team.",
    adaptations: [
      {
        original: "quarterback",
        new: "captain",
        reason: "Cultural Equivalence: In Cricket, the captain is the key decision maker similar to a QB.",
        type: "Role"
      },
      {
        original: "Hail Mary pass",
        new: "sixer on the last ball",
        reason: "High Stakes Action: A desperate, high-reward move in the final moments.",
        type: "Idiom"
      },
      {
        original: "score a touchdown",
        new: "win the match",
        reason: "Scoring: Cricket doesn't have a direct equivalent to a touchdown winning a game instantly, but 'winning run/sixer' captures the impact.",
        type: "Action"
      },
      {
        original: "Super Bowl",
        new: "World Cup",
        reason: "Event: The pinnacle of the sport in the respective regions.",
        type: "Entity"
      }
    ]
  },
  {
    id: 'finance',
    category: 'Finance',
    title: 'Market Trends',
    originalLanguage: 'English (US)',
    targetLanguage: 'English (Indian Context)',
    originalText: "Wall Street is bullish today as tech stocks rally. Investors are hunting for the next unicorn in the valley.",
    transcreatedText: "Dalal Street is bullish today as tech stocks rally. Investors are hunting for the next multi-bagger in Bengaluru.",
    adaptations: [
      {
        original: "Wall Street",
        new: "Dalal Street",
        reason: "Location: The financial hub of India (Mumbai Stock Exchange).",
        type: "Location"
      },
      {
        original: "unicorn",
        new: "multi-bagger",
        reason: "Terminology: While 'unicorn' is used, 'multi-bagger' is the quintessentially Indian term for a high-growth stock/investment.",
        type: "Jargon"
      },
      {
        original: "the valley",
        new: "Bengaluru",
        reason: "Location: Silicon Valley of India.",
        type: "Location"
      }
    ]
  },
  {
    id: 'pop-culture',
    category: 'Pop Culture',
    title: 'Award Night',
    originalLanguage: 'English (US)',
    targetLanguage: 'English (Indian Context)',
    originalText: "The film won an Oscar. It was a Cinderella story for the indie director, overcoming all odds.",
    transcreatedText: "The film won a National Award. It was a 'Super 30' story for the indie director, overcoming all odds.",
    adaptations: [
      {
        original: "Oscar",
        new: "National Award",
        reason: "Award: India's most prestigious film award.",
        type: "Entity"
      },
      {
        original: "Cinderella story",
        new: "'Super 30' story",
        reason: "Narrative: Refers to a popular Indian movie about underdog success against odds.",
        type: "Metaphor"
      }
    ]
  }
];
