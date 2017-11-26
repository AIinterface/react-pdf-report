import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake.js'
import pdfFonts from 'pdfmake/build/vfs_fonts.js'
pdfMake.vfs = pdfFonts.pdfMake.vfs

const BasicReport = ({
  name,
  className,
  width = [],
  pageMargins = [0, 0, 0, 0],
  tableStyle,
  style,
  layout = "",
  tableHeader = [],
  tableBody = [],
  tableFooter = [],
  data,
  header = [],
  footer = []
}) => {
  const createPdfLineItems = (tableBody) => {
    let body = []
    if (tableHeader.length > 0) {
      for (let c in tableHeader) {
        body.push(tableHeader[c])
      }
    }
    if (tableBody.length > 0) {
      for (let c in tableBody) {
        body.push(tableBody[c])
      }
    }
    if (tableFooter.length > 0) {
      for (let c in tableFooter) {
        body.push(tableFooter[c])
      }
    }
    return body
  }

  const printPdf = (data) => {
    const content = createPdfLineItems(data)
    let docDefinition = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      pageMargins: pageMargins,
      content: [
        {
          writable: true,
          table: {
            widths: width,
            body: content,
          },
          layout: layout,
        },
      ],
      styles: tableStyle
    }
    try {
      pdfMake.createPdf(docDefinition).open()
    } catch (e) {
      pdfMake.createPdf(docDefinition).download()
    }
  }

  return (
    <div>
      <button onClick={() => printPdf(tableBody)} style={style} className={className}>{name}</button>
    </div>
  )
}

export default BasicReport;
