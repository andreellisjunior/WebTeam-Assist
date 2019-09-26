const electron = require('electron')
const url = require('url')
const path = require('path')

const {app, BrowserWindow} = electron

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow(
    {
      minWidth: 800,
      minHeight: 600,
      webPreferences:
      {
        nodeIntegration: true
      }
    }
  )

  mainWindow.loadURL(url.format(
    {
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }
  ))

  mainWindow.on('closed', () => {
    app.quit()
  })

  


  // End of app.on
})




