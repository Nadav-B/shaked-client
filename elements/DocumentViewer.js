import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


import styled from 'styled-components'

export default class DocumentViewer extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <StyledDiv style={{ width: 600 }}>
      <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 1200 }}>
          <Document
      options={{
        cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
        cMapPacked: true,
        disableFontFace:true,
      }}
            file="/example.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`

.test {

  background: red;
  font-family: david;
  font-size: 24px;
}

  height: ${(p) => (p.height ? p.height : p.size)}px;
  width: ${(p) => (p.width ? p.width : p.size)}px;
`;

