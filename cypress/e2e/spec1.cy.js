describe('empty spec', () => {
  it('passes', () => {
    cy.request({
      method: 'GET',
      url: 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=58827694a0dc80e5066727fd61fffb02&hash=45cb8c7525225d14fd664aae514bc7f9',
    }).then((response)=>{
      expect(response.body).to.have.property('code',404)
    })
  })
})