import {render, screen, cleanup} from '@testing-library/react'
import { Login } from '../Login';
//Unit tests using jest
//Run commands npm run test

 //We have logIn button in the document
test('LoginBtn exist', () =>{
    render(<Login />)
    const todoElement = screen.getByText('Log In')
    expect(todoElement).toBeInTheDocument();
})
//testing when we load our loginPage, then our google button should also render
test('GoogleBtn Renders', () =>{
    const component = render(<Login />)
    const GoogleBtn = component.getByTestId('googleBtn')
    expect(GoogleBtn).toBeInTheDocument();
})
