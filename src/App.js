import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BasicReport } from './Pdf'
import data from './Example/example'
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render() {
    const createTableBody = (tabledata) => {
      let body = []
      const rows = tabledata
      let count = 1
      for (let key in rows) {
        if (rows.hasOwnProperty(key)) {
          let data = rows[key]
          let row = []
          row.push({ text: count, alignment: 'center', fontSize: 11 })
          row.push({ text: data.name.toString(), alignment: 'left', fontSize: 11 })
          row.push({ text: data.created.toLocaleString(['ban', 'id'], { minimumFractionDigits: 2, maximumFractionDigits: 2 }), alignment: 'left', fontSize: 11 })
          row.push({ text: data.code.toLocaleString(['ban', 'id'], { minimumFractionDigits: 2, maximumFractionDigits: 2 }), alignment: 'right', fontSize: 11 })
          row.push({ text: data.server, alignment: 'right', fontSize: 11 })
          row.push({ text: (data.session).toLocaleString(['ban', 'id'], { minimumFractionDigits: 2, maximumFractionDigits: 2 }), alignment: 'right', fontSize: 11 })
          row.push({ text: (data.bandwidth).toLocaleString(['ban', 'id'], { minimumFractionDigits: 2, maximumFractionDigits: 2 }), alignment: 'right', fontSize: 11 })
          body.push(row)
        }
        count += 1
      }
      return body
    }
    const styles = {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    }

    const tableHeader = [
      [
        { fontSize: 12, text: 'NO', style: 'tableHeader', alignment: 'center' },
        { fontSize: 12, text: 'NAME', style: 'tableHeader', alignment: 'center' },
        { fontSize: 12, text: 'DATE', style: 'tableHeader', alignment: 'center' },
        { fontSize: 12, text: 'CODE', style: 'tableHeader', alignment: 'center' },
        { fontSize: 12, text: 'SERVER', style: 'tableHeader', alignment: 'center' },
        { fontSize: 12, text: 'SESSION', style: 'tableHeader', alignment: 'center' },
        { fontSize: 12, text: 'BANDWIDTH', style: 'tableHeader', alignment: 'center' }
      ]
    ]
    const tableBody = createTableBody(data)
    const tableFooter = [
      [
        { fontSize: 12, text: 'This is table footer', colSpan: 4, alignment: 'center' },
        {},
        {},
        {},
        {},
        {},
        {},
      ]
    ]
    const pdfProps = {
      width: ['6%', '17%', '16%', '16%', '15%', '15%', '15%'],
      pageMargins: [50, 130, 50, 60],
      tableStyle: styles,
      layout: "noBorder",
      header: [],
      tableHeader: tableHeader,
      tableBody: tableBody,
      tableFooter: tableFooter,
      data: data
    }

    return (
      <div className="App">
        <BasicReport name=" Test" className="fa fa-file-pdf-o text-size-11px fa-lg button-extra-large" {...pdfProps} />
      </div>
    );
  }
}

export default App;
