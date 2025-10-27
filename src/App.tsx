import { css, Global } from '@emotion/react';

import { Form } from './components';
import * as S from './global-styles';

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        background: #f8fafc;
        color: #1f2937;
        line-height: 1.6;
    }

    button {
        font-family: inherit;
        cursor: pointer;
    }

    input, textarea, select {
        font-family: inherit;
    }
`;

function App() {
  return (
    <main>
      <Global styles={globalStyles} />
      <S.Container>
        <Form />
      </S.Container>
    </main>
  );
}

export default App;
