import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-light: #f0f2f5;
        --background-dark: #2c3e50;

        --red: #e52e4d;
        --green: #2ecc71;
        --yellow: #f1c40f;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
        --background: #f0f2f5;

        --primary: #ff5c5c;
        --secondary: #ffc107;
        --tertiary: #2ecc71;
        --quaternary: #3498db;
        --quinary: #9b59b6;
        --senary: #34495e;

        --text-light: #ecf0f1;
        --text-dark: #2c3e50;
        --text-primary: #2c3e50;
        --text-secondary: #ecf0f1;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    // font-size: 16px (desktop)
    // 1rem = tamanho do font-size do body
    // usando porcentagem você permite que o zoom do usuário impacte no tamanho do font-size, já sem a fonte fica fixa
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background-light);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
