import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { CssBaseline } from "@nextui-org/react";

export default class MyDocument extends Document<any> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // wraps the collectStyles provider around our <App />.
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      // extract the initial props that may be present.
      const initialProps = await Document.getInitialProps(ctx);

      // returning the original props together with our styled components.
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags /*rendering the actually stylesheet*/}
          {CssBaseline.flush()}
          <meta name="Home of VisionX" content="Home of VisionX" />
          <style>
            @import
            url(https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap);
          </style>
        </Head>
        <body>
          <div id="modal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
