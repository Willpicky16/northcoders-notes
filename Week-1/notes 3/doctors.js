return _.reduce(docsWho, function (acc, doc) {
    if (doc.begin >= 2000) {
      acc.push({
        doctorNumber: '#' + doc.number,
        playedBy: doc.actor,
        yearsPlayed: doc.end - doc.begin || 1
      });
    }
    return acc;
  }, []);

  return _.chain(docsWho)
    .filter(function(doc) {
      return doc.begin >= 2000;
    })
    .map(function (doc) {
      return {
        doctorNumber: '#' + doc.number,
        playedBy: doc.actor,
        yearsPlayed: doc.end - doc.begin || 1
      };
    })
    .value();