describe('CS First Step', () => {
  beforeEach(() => {

    cy.visit('https://app.bluealert.pl/ba/form/formularz-testowy')

  })

    it('finds the content "text/html"', () => {
  
      cy.wait(2000)
      cy.get('#id_first_name').type('Jan')
      cy.get('#id_last_name').type('Kowalski')
      cy.get('#id_email').type('test@test.fake')
      cy.get('#id_phone').type('123456789')
      cy.get('#id_pesel').type('26081224605')
      cy.get('#id_date').type('2021-07-01')
      cy.get('#id_id_numer').type('AVD683625')
      cy.get('#form_button_next').click()
      cy.contains('Zgody')

    })
  })