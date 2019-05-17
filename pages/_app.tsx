import * as React from 'react';

import App, { Container } from 'next/app';

import GlobalStyle from '../components/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // this exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        );
    }
}

export default MyApp;
