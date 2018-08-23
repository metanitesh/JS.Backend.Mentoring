function getMatchPlayedPerYear(matchData){
    
    const result = {};

    matchData.forEach(function(match){

        if(result[match.season] !== undefined){
            result[match.season]++;
        }else{
            result[match.season] = 1;
        }
    })

    return result;

};

module.exports = {
    getMatchPlayedPerYear: getMatchPlayedPerYear
};