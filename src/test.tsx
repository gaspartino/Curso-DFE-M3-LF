import * as React from "react";
import { act } from "react-dom/test-utils";
import * as ReactDOM from "react-dom";
import Header from './containers/header/tittle'

describe('App', function () {
    it('Teste de renderização do título "Biblioteca" no componente Header', function(){
        let title = document.createElement('div');

        document.body.appendChild(title);
        act(() => {
            ReactDOM.render(<Header tittle= {"Biblioteca"}/>, title);
        })
        const titleContent = title.querySelector('h1');
        expect(titleContent?.textContent).toBe("Biblioteca");
    });
});