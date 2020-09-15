import React, { PureComponent, Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import throttle from "lodash.throttle";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: null };
    this.throttledSetDivSize = throttle(this.setDivSize, 500);
  }

  componentDidMount() {
    this.setDivSize();
    window.addEventListener("resize", this.throttledSetDivSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledSetDivSize);
  }

  setDivSize = () => {
    this.setState({ width: this.pdfWrapper.getBoundingClientRect().width });
  };

  render() {
    return (
      <div
        id="row"
        style={{
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div
          id="placeholderWrapper"
          style={{ width: "10vw", height: "100vh" }}
        />
        <div
          id="pdfWrapper"
          style={{ width: "90vw" }}
          ref={(ref) => (this.pdfWrapper = ref)}
        >
          <PdfComponent src={this.props.src} wrapperDivSize={this.state.width} />
        </div>
      </div>
    );
  }
}

class PdfComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { numPages: null, pageNumber: 1 };
    console.log(props.src)
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages: numPages });
  };

  goToPrevPage = () => {
    if (this.state.pageNumber > 0)
      this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  };
  goToNextPage = () => {
    console.log(this.state.pageNumber, this.state.numPages);
    if (this.state.pageNumber < this.state.numPages - 1)
      this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
  };

  render() {
    return (
      <div>
        <Document
          onLoadSuccess={this.onDocumentLoadSuccess}
          externalLinkTarget="_parent"
          options={{
            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
            disableFontFace: true,
          }}
          file={this.props.src}
        >
          {Array.from(Array(this.state.numPages).keys()).map((index) => (
            <Page pageIndex={index} width={this.props.wrapperDivSize} />
          ))}
        </Document>
      </div>
    );
  }
}

export default App;
