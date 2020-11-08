/* eslint-disable react-hooks/exhaustive-deps */
import president_list from '../assets/1976-2016-president.json';
import mapped_states from '../assets/mapped_states.json';

function DataParser() {
  let loading = true;

  (() => {
    loading = true;
    const us_states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ]
    const years = ["1976", "1980", "1984", "1988", "1992", "1996", "2000", "2004", "2008", "2012", "2016"];
    for (let i = 0; i < us_states.length; ++i) {
      for (let j = 0; j < years.length; ++j) {
        const indexOfwinnerObject =  president_list.findIndex(entry => 
          entry.state === us_states[i] && parseInt(entry.year) === parseInt(years[j])
        );
        mapped_states[us_states[i]][years[j]].winCount = president_list[indexOfwinnerObject].candidatevotes;
        mapped_states[us_states[i]][years[j]].winner = president_list[indexOfwinnerObject].candidate;
        mapped_states[us_states[i]][years[j]].winnerParty = president_list[indexOfwinnerObject].party;
        mapped_states[us_states[i]][years[j]].loser = president_list[indexOfwinnerObject+1].candidate;
        mapped_states[us_states[i]][years[j]].loserParty = president_list[indexOfwinnerObject+1].party;
        mapped_states[us_states[i]][years[j]].loserCount = president_list[indexOfwinnerObject+1].candidatevotes;
        mapped_states[us_states[i]][years[j]].totalVotes = president_list[indexOfwinnerObject].totalvotes;
      }
    }
    loading = false;
  })();

  return {
    mapped_states,
    loading
  }
};

export default DataParser;
