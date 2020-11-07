/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import president_list from '../assets/1976-2016-president.json';
import mapped_states from '../assets/mapped_states.json';
import createPersistedState from 'use-persisted-state';

function DataParser() {
  const useSetMapValues = createPersistedState('mapValues');
  const [, setMapValues] = useSetMapValues({});
  const newMap = mapped_states;

  React.useEffect(() => {
    parseData();
  }, []);

  const parseData = () => {
    Object.entries(mapped_states).forEach(([state, entry]) => {
      Object.entries(entry).forEach(([year, ]) => {
        let winningIndex = 0;
        let winCount = 0;
        Object.values(president_list).forEach((entry, index) => {
          if (entry.state === state && parseInt(entry.year) === parseInt(year)) {
            if (entry.candidatevotes > winCount) {
              winCount = entry.candidatevotes;
              winningIndex = index;
            }
          }
        });
        newMap[state][year].winCount = winCount;
        newMap[state][year].winner = president_list[winningIndex].candidate;
        newMap[state][year].winnerParty = president_list[winningIndex].party;
        newMap[state][year].loser = president_list[winningIndex + 1].candidate;
        newMap[state][year].loserParty = president_list[winningIndex + 1].party;
        newMap[state][year].loserCount = president_list[winningIndex + 1].candidatevotes;
        newMap[state][year].totalVotes = president_list[winningIndex].totalvotes;
      })
  })
  setMapValues(newMap);
  }

  return newMap;
};

export default DataParser;
