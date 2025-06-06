test("GET to api/v1/status should return 200", async () => {
  const resoponse = await fetch("http://localhost:3000/api/v1/status");
  expect(resoponse.status).toBe(200);
});
