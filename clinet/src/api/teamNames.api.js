export const teamNameFetchApi = async () => {
  try {
    const response = await fetch({
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international",
      headers: {
        "X-RapidAPI-Key": "6b05ecea36msh09c96e711c866dep1b42b0jsn14d8613e7884",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    });
    console.log(await response.json());
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
