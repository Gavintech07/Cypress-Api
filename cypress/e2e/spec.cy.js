describe('empty spec', () => {
  it('passes', () => {
    cy.request('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=58827694a0dc80e5066727fd61fffb02&hash=45cb8c7525225d14fd664aae514bc7f9')
    .then((response)=>{
      expect(response.body).to.have.property('code',200)
      
      expect(response.body).to.haveOwnProperty("data")
      expect(response.body.data).to.haveOwnProperty("results")
      var items=["id","name","description","modified","resourceURI","thumbnail","comics","stories","events","urls"]
      var length=response.body.data.results.length    
      console.log(length)
      for(var i=0;i<length;i++){
          for (var item in items)
              expect(response.body.data.results[i]).to.haveOwnProperty(items[item])
      }
    })
  })
})