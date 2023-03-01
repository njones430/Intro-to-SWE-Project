import React from 'react'
import { Login } from './Login'
//type cypress open to launch

describe('<Login />', () => {
  it('register link should contain appropiate text ', () => {
    //cy.mount(<button>Log In</button>);
    cy.mount(<Login />)
    cy.get('.link-btn').should('contains.text', 'Don\'t have an account? Register here.')
  })
  it('Clicking on link-btn twice (alternate login/register)', () => {
    cy.mount(<Login />)
    cy.get('.link-btn').click() // Click on button
    cy.focused().click() // Click on el with focus
    cy.get('.link-btn').click() // Click on button
    cy.focused().click() // Click on el with focus
  })
  it('typing into the form', () => {
    cy.mount(<Login />)
    cy.get('.email').type('youremail.com')
    cy.get('.password').type('your password')
  })
})