import {render, screen, fireEvent} from '@testing-library/react';
import SpecificBook from './specific-book';
import Counter from '../counter/counter';
import { MemoryRouter } from 'react-router-dom';

describe('Testing Specific-book page',  () => {
    it('should ', () => {
        render(<SpecificBook/>);
        screen.debug();
        screen.getByRole('')
        expect(screen.getByText(/Book tags:/i)).toBeInTheDocument()
    });
    
});