describe('empty spec', () => {
  it('passes', () => 
  {    
    cy.request('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=58827694a0dc80e5066727fd61fffb02&hash=45cb8c7525225d14fd664aae514bc7f9')
    .then((response)=>{
      expect(response.body).to.have.property('code',200)
      
      expect(response.body).to.haveOwnProperty("data")
      expect(response.body.data).to.haveOwnProperty("results")
      var length=response.body.data.results[1].urls.length  
      var comicLen= response.body.data.results[1].comics.available
      for(var i=0;i<length;i++){
        var res=response.body.data.results[1].urls[i]
        if(res["type"]=="comiclink") 
        {
          cy.visit(res["url"])
          cy.get('.comic-item').should('have.length',comicLen)
          // var count = cy.get('.comic-item').length
          // cy.log('comicLen'+comicLen)
          // cy.log('count'+count)
          // if(count==comicLen)
          //  cy.log('pass')
          // else
          // cy.log('Fail')
        }
      }
      })
  })
})