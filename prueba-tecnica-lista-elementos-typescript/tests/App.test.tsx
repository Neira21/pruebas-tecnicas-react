import React from 'react';
import userEvent from '@testing-library/user-event';

import {describe, test, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import App  from '../src/App';

describe('<App />', () => {
  // test('should be true', () => {
  //   const {getByText} = render(<App />);
  //   expect(
  //     getByText(/React/i)
  //   ).toBeDefined();
  // })

  test('should add items and remove them', async ()=>{
    const user = userEvent.setup()

    render(<App />)
    //Buscar el input
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    //Buscar el formulario
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

   const button = form.querySelector('button')
    expect(button).toBeDefined()
    
    const randomText = crypto.randomUUID()

    await user.type(input, randomText) 
    await user.click(button!)

    //Asegurar que el elemento esté agregado
    const list = screen.getByRole('list')
    expect(list).toBeDefined()
    expect(list.children.length).toBe(1)

    
    //Asegurar que el elemento se puede borrar
    const item = screen.getByText(randomText)
    const deleteButton = item.querySelector('button')
    expect(deleteButton).toBeDefined()

    await user.click(deleteButton!)
  
    const noResults = screen.getByText('No hay elementos')
    expect(noResults).toBeDefined()
    
  })
})