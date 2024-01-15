const cricketData = [
    { batsmanId: "B1", runsScored: 56 },
    { batsmanId: "B2", runsScored: 42 },
    { batsmanId: "B3", runsScored: 78 },
    { batsmanId: "B4", runsScored: 64 },
    // Add more data as needed
  ];
  
  function analyzeCricketMatch(data) {
    let totalRuns = 0;
    let highestScorer = { batsmanId: "", runsScored: -1 };
  
    for (const match of data) {
      totalRuns += match.runsScored;
  
      if (match.runsScored > highestScorer.runsScored) {
        highestScorer.batsmanId = match.batsmanId;
        highestScorer.runsScored = match.runsScored;
      }
    }
  
    return { totalRuns, highestScorer };
  }
  
  const analysisResult = analyzeCricketMatch(cricketData);
  
  console.log("Total Runs Scored by the Team:", analysisResult.totalRuns);
  console.log("Batsman with the Highest Runs:");
  console.log("Batsman ID:", analysisResult.highestScorer.batsmanId);
  console.log("Runs Scored:", analysisResult.highestScorer.runsScored);
  