const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU1MDFiMDkwYzg4ZWUxZTk3MTMzNzQyNjczOGJjNyIsIm5iZiI6MTc3MDYwODQ2NS4zMzMsInN1YiI6IjY5ODk1NzUxMTNhMmRjZDNiNThmZDJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c04TTyCpa_mJ7K1FYuisT2OF3YfIM65zarF2__SUYlQOL";

// const token = process.env.TOKEN;
// console.log("Token ni:", token);

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
