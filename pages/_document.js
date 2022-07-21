import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/animate.min.css" />
          <link rel="stylesheet" href="assets/css/fontawesome-all.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets/css/colors/switch.css"
          />
          {/* Color Alternatives */}
          <link
            href="assets/css/colors/color-2.css"
            rel="alternate stylesheet"
            type="text/css"
            title="color-2"
          />
          <link
            href="assets/css/colors/color-3.css"
            rel="alternate stylesheet"
            type="text/css"
            title="color-3"
          />
          <link
            href="assets/css/colors/color-4.css"
            rel="alternate stylesheet"
            type="text/css"
            title="color-4"
          />
          <link
            href="assets/css/colors/color-5.css"
            rel="alternate stylesheet"
            type="text/css"
            title="color-5"
          />
          </Head>
          
        <body>
          <Main />
          <NextScript />

          <script src="assets/js/jquery-3.3.1.min.js"></script>
          <script src="assets/js/popper.min.js"></script>
          <script src="assets/js/bootstrap.min.js"></script>
          <script src="assets/js/switch.js"></script>
          {/* <script src="assets/js/main.js"></script> */}
          {/* <script>
		$("#files").change(function() {
			filename = this.files[0].name
			console.log(filename);
		});
	</script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
