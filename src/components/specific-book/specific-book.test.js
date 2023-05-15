import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpecificBook from './specific-book';

afterEach(() => {
    cleanup();
})

describe('Testing Specific-book page', () => {
    const data = {
        "id": 21,
        "author": "Garann Means",
        "price": 41.89,
        "image": "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@node_for_front_end_developers.jpg",
        "title": "Node for Front-End Developers",
        "shortDescription": "If you know how to use JavaScript in the browser, you already have the skills you need to put JavaScript to work on back-end servers with Node.",
        "description": "If you know how to use JavaScript in the browser, you already have the skills you need to put JavaScript to work on back-end servers with Node. This hands-on book shows you how to use this popular JavaScript platform to create simple server applications, communicate with the client, build dynamic pages, work with data, and tackle other tasks. Although Node has a complete library of developer-contributed modules to automate server-side development, this book will show you how to program with Node on your own, so you truly understand the platform. Discover firsthand how well Node works as a web server, and how easy it is to learn and use."
    };
    
    render(<SpecificBook book={data} />);
        const buttonUp = screen.getByTestId("up");
        const buttonDown = screen.getByTestId("down");
        const count = screen.getByTestId("spinner");
        const price = screen.getByTestId("price"); 
    test("SpecificBook Rendering", () => {
        expect(buttonUp).toBeInTheDocument();
        expect(buttonDown).toBeInTheDocument();
        expect(count).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(price.textContent).toEqual('41.89');
        expect(count.value).toEqual('1');
        fireEvent.click(buttonUp); 
        expect(count.value).toEqual('2');
        expect(price.textContent).toEqual('83.78');
        fireEvent.click(buttonUp); 
        expect(count.value).toEqual('3');
        expect(price.textContent).toEqual('125.67');
        fireEvent.click(buttonDown); 
        expect(count.value).toEqual('2');
        expect(price.textContent).toEqual('83.78');
        fireEvent.click(buttonDown); 
        expect(count.value).toEqual('1');
        expect(price.textContent).toEqual('41.89');
    })

});
