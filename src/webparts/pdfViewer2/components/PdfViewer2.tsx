import * as React from 'react';
import styles from './PdfViewer2.module.scss';
import type { IPdfViewer2Props } from './IPdfViewer2Props';
import '@progress/kendo-theme-default/dist/all.css';

import { PDFViewer } from '@progress/kendo-react-pdf-viewer';

export default class PdfViewer2 extends React.Component<IPdfViewer2Props, {}> {
  public render(): React.ReactElement<IPdfViewer2Props> {
    return (
      <div className={styles.pdfViewer2}>
        <PDFViewer />
      </div>
    );
  }
}
