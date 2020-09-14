import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import styled from "styled-components";

export default class DocumentViewer extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>



      <button onClick={this.goToPrevPage}>הקודם</button>
      <button onClick={this.goToNextPage}>הבא</button>

      <p>
          עמוד {pageNumber} מתוך {numPages}
        </p>
      <StyledDiv>

    
        <Document
        externalLinkTarget="_parent"
          options={{
            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
            disableFontFace: true,
          }}
          file="/example.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page

          renderTextLayer={true}
          pageNumber={pageNumber}  />
        </Document>

      </StyledDiv>
      </div>
    );
  }
}

const StyledDiv = styled.div`
position: relative;
pointer-events: none;

`;
