import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Naus from './Naus';

test('render nau',()=>{
    const nau = {
        name:"Star Wars Ship",
        model:"modelo 2000"
    }

    const naves =render(<Naus nau={nau}/>)

    expect(naves.container).toHaveTextContent(nau.name.toUpperCase());
})

